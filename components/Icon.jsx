import styles from '../styles/Icon.module.css';

const Icon = ({ name, type, subtypes, clipboard: { copier } }) => {
    const copyIconTag = (type, subtype, name) => {
        copier(`<i class='${type === 'sharp' ? 'fa-sharp ' : ''}fa-${subtype} fa-${name}></i>`);
    };

    return subtypes.map((subtype, i) => {
        return (
            <div
                className={styles.icon}
                key={`${type}-${subtype}-${name}-${i}`}
                id='copy'
                onClick={() => copyIconTag(type, subtype, name)}
                title={`<i class='${type === 'sharp' ? 'fa-sharp ' : ''}fa-${subtype} fa-${name}'></i>`}>
                <span className='badge'>
                    <sup>{type === 'brands' ? 'B' : type === 'classic' ? 'C' : type === 'sharp' ? 'S' : null}</sup>
                    {subtype === 'brands'
                        ? 'B'
                        : subtype === 'duotone'
                        ? 'D'
                        : subtype === 'solid'
                        ? 'S'
                        : subtype === 'regular'
                        ? 'R'
                        : subtype === 'light'
                        ? 'L'
                        : subtype === 'thin'
                        ? 'T'
                        : null}
                </span>
                <div className={styles.font_icon}>
                    <i className={`${type === 'sharp' ? 'fa-sharp ' : ''}fa-${subtype} fa-${name}`}></i>
                </div>
                <span className={styles.name}>{name}</span>
            </div>
        );
    });
};

export default Icon;
