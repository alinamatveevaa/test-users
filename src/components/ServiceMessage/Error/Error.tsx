import styles from './error.module.scss';

export default function Error() {
    return (
        <div className={styles.serviceMessage}>Request failed. Please, try again.</div>
    )
}
