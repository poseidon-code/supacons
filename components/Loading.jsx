import styles from '../styles/Loading.module.css';

const Loading = () => {
    return (
        <section className={styles.loading}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default Loading;
