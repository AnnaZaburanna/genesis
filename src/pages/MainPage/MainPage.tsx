import {FC, useState} from "react";

import DefaultButton from "../../shared/DefaultButton/DefaultButton";
import CardModal from "../../components/CardModal/CardModal";

import icon from '../../assets/svg/icon.svg'

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const openModal = () => setIsOpenModal(!isOpenModal);

    const handleClose = () => {
        setIsOpenModal(false)
    }
    return (
        <>
            <div className={styles.container}>
                <DefaultButton
                    title={"New"}
                    buttonType={'create'}
                    handleClick={openModal}
                    img={icon}/>
            </div>
            {isOpenModal && <CardModal handleClose={() => handleClose()}/>}
        </>
    )
};

export default MainPage;
