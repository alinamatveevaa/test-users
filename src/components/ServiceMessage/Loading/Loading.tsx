// import styles from '../serviceMessage.module.scss';

// export default function Loading() {
//     return (
//         <div className={styles.serviceMessage}>Loading...</div>
//     )
// }
import styles from './loading.module.scss';

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.loading}>
                <div className={styles.ldio}>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}