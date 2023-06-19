import {FC, useState} from "react";

import TextInput from "../../shared/TextInput/TextInput";
import Select from "../../shared/Select/Select";
import RadioButton from "../../shared/RadioButton/RadioButton";
import DefaultButton from "../../shared/DefaultButton/DefaultButton";

import {businessDivisionOptions, currencyOptions, legalEntityOptions} from "../../constants/options";

import card from '../../assets/svg/card.svg';
import informIcon from '../../assets/svg/informIcon.svg'

import styles from './CardModalBody.module.scss'

const CardModalBody: FC = () => {
    const [isCheckedRadioButton, setIsCheckedRadioButton] = useState<string>('IBAN');
    const handleChange = (value: string) => {
        setIsCheckedRadioButton(value);
    }
    return (
        <div className={styles.main_container__scroller}>
            <div className={styles.container__top}>
                <div className={styles.title}>Please choose the Legal entity & Business Division</div>
                <div className={styles.select_container}>
                    <Select options={businessDivisionOptions} placeholder={"Search"} label={'Business Division*'}/>
                    <Select options={legalEntityOptions} placeholder={"Search"} label={'Legal entity*'}/>
                </div>
            </div>
            <div className={styles.container__center}>
                <div className={styles.title}>Card account</div>
                {
                    ['IBAN', 'Account Number'].map((value) => (
                        <RadioButton key={value} id={value} name={value} value={value}
                                     onChange={() => handleChange(value)}
                                     checked={isCheckedRadioButton === value} text={value}/>
                    ))
                }
                <div className={styles.account_container}>
                    <TextInput id="IBAN account" placeholder="IBAN account*" img={informIcon}/>
                    <Select options={currencyOptions} placeholder={"Currency*"}/>
                    <div className={styles.card_item_3}>
                        <Select options={legalEntityOptions} placeholder={"Choose bank*"}/>
                    </div>
                </div>
            </div>
            <div className={styles.container__bottom}>
                <div className={styles.title}>
                    Cards
                    <DefaultButton
                        title={"+ Add new"}
                        buttonType={'add_new'}
                        handleClick={() => console.log('clicked')}
                    />
                </div>
                <div className={styles.cards_wrapper}>
                    <div className={styles.cards_container}>
                        <div className={styles.title}>Card Status: None</div>
                        <div className={styles.cards_input}>
                            <TextInput id="card1" placeholder="Card Number*" img={card}/>
                            <TextInput id="holder1" placeholder="Card Holder*"/>
                        </div>
                    </div>
                    <div className={styles.cards_container}>
                        <div className={styles.title}>Card Status: None</div>
                        <div className={styles.cards_input}>
                            <TextInput id="card2" placeholder="Card Number*" error img={card}/>
                            <TextInput id="holder2" placeholder="Card Holder*"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardModalBody;
