import {FC} from "react";

import CardModalBody from "../CardModalBody/CardModalBody";
import CardHeader from "../CardHeader/CardHeader";
import CardFooter from "../CardFooter/CardFooter";

import styles from './CardModal.module.scss'

type CardModalProps = {
    handleClose: () => void
}
const CardModal: FC<CardModalProps> = ({handleClose}: CardModalProps) => {
    return (
        <>
            <div className={styles.container}>
                <CardHeader title="Create new Card" handleClose={handleClose}/>
                <CardModalBody/>
                <CardFooter handleSave={handleClose}/>
            </div>
        </>
    )
};

export default CardModal;