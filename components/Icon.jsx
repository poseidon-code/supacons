import Clipboard from 'clipboard';

import styles from '../styles/Icon.module.css';

const Icon = ({ name, type, copied }) => {
    const copy = icon => {
        new Clipboard('#copy', {
            text: () => {
                return icon;
            },
        });
    };

    const copyIconTag = () => {
        copy(`<i class='fa-${type} fa-${name}></i>`);
        copied();
    };

    return (
        <div className={styles.icon} id='copy' onClick={copyIconTag}>
            {type === 'brands' ? (
                <span className='badge'>B</span>
            ) : type === 'duotone' ? (
                <span className='badge'>D</span>
            ) : type === 'solid' ? (
                <span className='badge'>S</span>
            ) : type === 'regular' ? (
                <span className='badge'>R</span>
            ) : type === 'light' ? (
                <span className='badge'>L</span>
            ) : type === 'thin' ? (
                <span className='badge'>T</span>
            ) : null}
            <div className={styles.font_icon}>
                <i className={`fa-${type} fa-${name}`}></i>
            </div>
            <span className={styles.name}>{name}</span>
        </div>
    );
};

export default Icon;
