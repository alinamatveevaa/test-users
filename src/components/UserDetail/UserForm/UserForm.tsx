import { ChangeEvent, FormEvent} from 'react';
import Label from './Label/Label';
import styles from './userForm.module.scss';

interface IUserForm {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    value: IValue;
    isError: boolean;
    isDisabled: boolean;
}

export interface IValue {
    name: string;
    username: string;
    email: string;
    street: string;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
    comment: string;
}

export function UserForm({onSubmit, isDisabled, onChange, isError, value}: IUserForm) {
    return (
        <form
            className={styles.form}
            onSubmit={onSubmit}
        >
            <fieldset
                disabled={isDisabled ? true : false}
                className={styles.fieldset}
            >
                <Label labelTitle='Name' labelName='name' onChange={onChange} isError={isError} value={value} />
                <Label labelTitle='User name' labelName='username' onChange={onChange} isError={isError} value={value} />
                <Label labelTitle='E-mail' labelName='email' onChange={onChange} isError={isError} value={value} />
                <Label labelTitle='Street' labelName='street' onChange={onChange} isError={isError} value={value} />
                <Label labelTitle='City' labelName='city' onChange={onChange} isError={isError} value={value} />
                <Label labelTitle='Zip code' labelName='zipcode' onChange={onChange} isError={isError} value={value} />
                <Label labelTitle='Phone' labelName='phone' onChange={onChange} isError={isError} value={value} />
                <Label labelTitle='Website' labelName='website' onChange={onChange} isError={isError} value={value} />
                <label className={styles.label}>
                    Comment
                    <textarea
                        name='comment'
                        onChange={onChange}
                        className={styles.textarea}
                        defaultValue={value.comment}
                    />
                </label>
            </fieldset>
            <button 
                disabled={isDisabled ? true : false}
                className={isDisabled ? styles.submitBtnDisabled : styles.submitBtn}
                type="submit"
            >
                Отправить
            </button>
        </form>
    )
}
