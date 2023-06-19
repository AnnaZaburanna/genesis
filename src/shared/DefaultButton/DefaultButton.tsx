import {FC} from "react";
import styles from './DefaultButton.module.scss'

type DefaultButtonProps = {
    title: string;
    buttonType: string;
    handleClick: () => void;
    img?: string;
}
const DefaultButton: FC<DefaultButtonProps> = ({title, buttonType, handleClick, img}: DefaultButtonProps) => {
    return (
        <button
            className={styles[buttonType]}
            onClick={handleClick}>
            <div className={styles.title_container}>
                {img && <img src={img} alt='icon'/>}
                {title}
            </div>
        </button>
    )
};

export default DefaultButton;
