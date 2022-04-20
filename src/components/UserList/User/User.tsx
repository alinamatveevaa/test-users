import { Link } from 'react-router-dom';
import { IUser } from '../../../interfaces/interface';
import styles from './user.module.scss';

interface IUserProps {
    key: number,
    item: IUser;
}

export function User({item}: IUserProps) {    
    return (
        <li className={styles.card}>
            <ul className={styles.list}>
                <li className={styles.listItems}>
                    <span className={styles.item}>ФИО:</span>
                    {item.name}
                </li>
                <li className={styles.listItems}>
                    <span className={styles.item}>город:</span>
                    {item.address.city}
                </li>
                <li className={styles.listItems}>
                    <span className={styles.item}>компания:</span>
                    {item.company.name}
                </li>
            </ul>
            <Link 
                to={`user/${item.id}`}
                className={styles.link}
            >Подробнее</Link>
        </li>
    )
}
