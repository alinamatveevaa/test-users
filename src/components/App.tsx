import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/slice';
import Main from './Main/Main';

function App() {	
	const dispatch = useDispatch<any>();

	useEffect(() => {
		dispatch(getUsers())
	}, [])
	
	return (
		<Main />
	);
}

export default App;
