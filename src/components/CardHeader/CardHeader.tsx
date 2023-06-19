import {FC} from "react";

import {ReactComponent as CardIcon} from '../../assets/svg/card.svg'
import {ReactComponent as CloseButton} from '../../assets/svg/closeButton.svg'

import styles from './CardHeader.module.scss'

type CardHeaderProps = {
    title: string,
    handleClose?: () => void
}

const CardHeader: FC<CardHeaderProps> = ({title, handleClose}: CardHeaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>{title}</p>
                <CardIcon/>
            </div>
            <div className={styles.closeButton} onClick={handleClose}>
                <CloseButton/>
            </div>
        </div>
    )
}

export default CardHeader;
