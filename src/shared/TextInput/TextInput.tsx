import {FC} from "react";
import styles from './TextInput.module.scss'

type TextInputProps = {
    id: string;
    placeholder: string;
    img?: string;
    error?: boolean;

};
const TextInput: FC<TextInputProps> = ({id, placeholder, error, img}: TextInputProps) => {
    return (
        <div className={error ? styles.error : styles.field}>
            {img && <img src={img} alt=""/>}
            <input id={id} type='text'/>
            <label htmlFor={id}>
                <span>{placeholder}</span>
            </label>
        </div>
    )
}

export default TextInput;
