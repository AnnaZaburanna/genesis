import {FC} from "react";
import DefaultButton from "../../shared/DefaultButton/DefaultButton";
import styles from './CardFooter.module.scss'

type CardFooterProps = {
    handleSave: () => void
}
const CardFooter: FC<CardFooterProps> = ({handleSave}: CardFooterProps) => {
    return (
        <div className={styles.footer}>
            <DefaultButton
                title={"Save"}
                buttonType={'save'}
                handleClick={handleSave}
            />
        </div>
    )
}

export default CardFooter;
