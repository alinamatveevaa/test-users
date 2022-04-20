import { useSelector } from "react-redux";
import { IState } from "../../interfaces/interface";
import { UserList } from "../UserList/UserList";
import styles from './userListBlock.module.scss';

export function UserListBlock() {
	const users = useSelector((state: IState) => state.users);
	const isLoading = useSelector((state: IState) => state.isLoading);
	const error = useSelector((state: IState) => state.error);

	return (
		<div className={styles.right}>
			{users && !isLoading && !error &&
				<>
					<h2 className={styles.title}>Список пользователей</h2>
					<UserList users={users} />
					<span className={styles.countUsers}>{`Найдено ${users.length} пользователей`}</span>
				</>
			}	
		</div>
	)
}
