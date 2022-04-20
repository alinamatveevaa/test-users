import { IUser } from "../../interfaces/interface";
import { User } from "./User/User";
import styles from './userList.module.scss';

interface IUserList {
    users: IUser[];
}

export function UserList({users}: IUserList) {
    return (
        <ul className={styles.list}>
            {users.map((item: IUser) => {
                return <User key={item.id} item={item} />
            })}
        </ul>
    )
}
