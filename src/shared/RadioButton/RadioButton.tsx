import {FC} from "react";
import styles from './RadioButton.module.scss'

type RadioButtonProps = {
    id: string,
    name: string,
    value: string,
    onChange: () => void,
    checked: boolean,
    text: string
}
const RadioButton: FC<RadioButtonProps> = ({id, name, value, onChange, checked, text}: RadioButtonProps) => {
    return (
        <label htmlFor={id} className={styles.radio_label}>
            <input
                className={styles.radio_input}
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={styles.custom_radio}/>
            <span className={checked ? styles.radio_label__checked : styles.radio_label}>{text}</span>
        </label>
    )
}

export default RadioButton;
