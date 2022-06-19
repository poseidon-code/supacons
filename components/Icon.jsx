import styles from '../styles/Icon.module.css';

const Icon = ({ name, type, clipboard: { copier } }) => {
    const copyIconTag = () => {
        copier(`<i class='fa-${type} fa-${name}></i>`);
    };

    return (
        <div
            className={styles.icon}
            id='copy'
            onClick={copyIconTag}
            title={`<i className='fa-${type} fa-${name}'></i>`}>
            <span className='badge'>
                {type === 'brands'
                    ? 'B'
                    : type === 'duotone'
                    ? 'D'
                    : type === 'solid'
                    ? 'S'
                    : type === 'regular'
                    ? 'R'
                    : type === 'light'
                    ? 'L'
                    : type === 'thin'
                    ? 'T'
                    : null}
            </span>
            <div className={styles.font_icon}>
                <i className={`fa-${type} fa-${name}`}></i>
            </div>
            <span className={styles.name}>{name}</span>
        </div>
    );
};

export default Icon;
