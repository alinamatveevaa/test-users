import styles from './userDetail.module.scss';
import { UserFormContainer } from "./UserForm/UserFormContainer";
import { IUser } from '../../interfaces/interface';

interface IUserDetail {
    user: IUser;
    handleClick: () => void;
    isDisabled: boolean;
}

export function UserDetail({user, handleClick, isDisabled}: IUserDetail) {
    return (
        <div>
            <div className={styles.up}>
                <h2 className={styles.title}>Профиль пользователя</h2>
                <button 
                    onClick={handleClick}
                    className={styles.editBtn}
                >
                    Редактировать
                </button>
            </div>
            <UserFormContainer isDisabled={isDisabled} data={user}/>
        </div>
    )
}
