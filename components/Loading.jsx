import styles from '../styles/Loading.module.css';

const Loading = () => (
    <section className={styles.loading}>
        <Spinner />
    </section>
);

export default Loading;

export const Spinner = () => (
    <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
