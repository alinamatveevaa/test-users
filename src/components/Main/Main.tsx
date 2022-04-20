import { SortBlock } from '../../components/SortBlock/SortBlock';
import { UserListBlock } from '../UserListBlock/UserListBlock';
import styles from './main.module.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserDetailContainer } from '../../components/UserDetail/UserDetailContainer';
import { useSelector } from 'react-redux';
import { IState } from '../../interfaces/interface';
import Loading from '../ServiceMessage/Loading/Loading';
import Error from '../ServiceMessage/Error/Error';

export default function Main() {
	const isLoading = useSelector((state: IState) => state.isLoading);
	const error = useSelector((state: IState) => state.error);
	
	if (isLoading) return <Loading />
	if (error && !isLoading) return <Error />

    return (
        <Router>
			<main>
				<div className={styles.wrapper}>
					<SortBlock/>
					<Routes>
						<Route path="/" element={<UserListBlock/>} />
						<Route path="/user/:id" element={<UserDetailContainer />} />
						<Route path="*" element={<div>Page not found</div>} />
					</Routes>
				</div>
			</main>
		</Router>
    )
}
