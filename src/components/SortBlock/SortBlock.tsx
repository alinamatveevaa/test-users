import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IState } from '../../interfaces/interface';
import { setDisabled, sortByValue } from '../../redux/slice';
import styles from './sortBlock.module.scss';

export function SortBlock() {
    const dispatch = useDispatch();
	const location = useLocation();
    const disabled = useSelector((state: IState) => state.disabled);

    const handleClick = (value: string) => {
        dispatch(sortByValue(value))
    }

    useEffect(() => {
        if (location.pathname !== '/') { 
            dispatch(setDisabled(true));
        } else {
            dispatch(setDisabled(false));
        }
    }, [location])
    
    return (
        <div className={styles.block}>
            <h4 className={styles.title}>Сортировка</h4>
            <button
                onClick={() => {handleClick('address.city')}}
                className={styles.button}
                disabled={disabled ? true : false}
            >   
                по городу
            </button>
            <button
                onClick={() => {handleClick('company')}}
                className={styles.button}
                disabled={disabled ? true : false}
            >
                по компании
            </button>
        </div>
    )
}
