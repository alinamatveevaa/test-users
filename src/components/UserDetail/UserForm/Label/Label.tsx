import { ChangeEvent } from 'react';
import { IValue } from '../UserForm';
import styles from './label.module.scss';

interface ILabel {
    labelName: string;
    labelTitle: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: IValue;
    isError: boolean;
}

export default function Label({labelName, labelTitle, onChange, value, isError}: ILabel) {

    return (
        <label className={styles.label}>
            {labelTitle}
            <input
                name={labelName}
                onChange={onChange}
                //@ts-ignore
                className={(isError && (value[labelName].length < 1)) ? styles.inputError : styles.input}
                //@ts-ignore
                defaultValue={value[labelName]}
                type="text"
            />
        </label>
    )
}
