import {FC, MouseEventHandler, useEffect, useState} from "react";
import {ReactComponent as ArrowDown} from "../../assets/svg/arrowDown.svg";
import styles from './Select.module.scss';

type Option = {
    title: string;
    value: string;
};

type OptionProps = {
    option: Option;
    handleClick: (value: Option["value"]) => void;
};

const OptionElement: FC<OptionProps> = ({option, handleClick}: OptionProps) => {
    return (
        <li
            className={styles.option}
            value={option.value}
            onClick={() => handleClick(option.value)}
            tabIndex={0}
        >
            {option.title}
        </li>
    )
}

type SelectProps = {
    options: Option[];
    placeholder?: string;
    status?: "default" | "invalid";
    label?: string;
    onChange?: (selected: Option["value"]) => void;
}
const Select: FC<SelectProps> = ({
                                     options,
                                     placeholder,
                                     status,
                                     label,
                                     onChange,
                                 }: SelectProps) => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('')
    const [filteredOptions, changeFilteredOptions] = useState<Option[]>(options)

    useEffect(() => {
        const filteredVal = options.filter((item) => item.value.indexOf(value) >= 0
        );
        changeFilteredOptions(filteredVal || [])
    }, [value])

    const handleOptionClick = (value: Option["value"]) => {
        setIsSelectOpen(false);
        setValue(value);
        onChange?.(value);
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsSelectOpen((prev) => !prev);
    };

    return (
        <div
            className={isSelectOpen ? styles.selectWrapper__open : styles.selectWrapper}
            onClick={handlePlaceHolderClick}
        >
            <div className={styles.selectInner}>
                <div className={isSelectOpen ? styles.arrow__open : styles.arrow}>
                    <ArrowDown/>
                </div>
                {
                    label && <label>{label}</label>
                }
                <input
                    className={styles.placeholder}
                    data-status={status}
                    placeholder={placeholder}
                    value={value}
                    role="button"
                    tabIndex={0}
                    onChange={(event) => {
                        setIsSelectOpen(true);
                        setValue(event.target.value)
                    }}
                />
            </div>
            {isSelectOpen && (
                <ul className={styles.dropdown}>
                    {filteredOptions.map((option) => (
                        <OptionElement
                            key={option.value}
                            option={option}
                            handleClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Select;
