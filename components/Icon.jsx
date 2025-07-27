import styles from '../styles/Icon.module.css';

const Icon = ({ name, type, subtypes, clipboard: { copier } }) => {
    const copyIconTag = (type, subtype, name) => {
        copier(`<i class='${type === 'sharp' ? 'fa-sharp ' : ''}fa-${subtype} fa-${name}></i>`);
    };

    return subtypes.map((subtype, i) => {
        let typeCharacter = '';
        let subtypeCharacter = '';

        switch (type) {
            case 'classic':
                typeCharacter = 'C'
                break;
            case 'duotone':
                typeCharacter = 'D'
                break;
            case 'sharp-duotone':
                typeCharacter = 'DS'
                break;
            case 'sharp':
                typeCharacter = 'S'
                break;
            case 'brands':
                typeCharacter = 'B'
                break;
            default:
                typeCharacter = ''
                break;
        }

        switch (subtype) {
            case 'solid':
                subtypeCharacter = 'S'
                break;
            case 'regular':
                subtypeCharacter = 'R'
                break;
            case 'light':
                subtypeCharacter = 'L'
                break;
            case 'thin':
                subtypeCharacter = 'T'
                break;
            default:
                subtypeCharacter = ''
                break;
        }

        const typeClassPrefix = type === 'classic' ? '' : `fa-${type}`
        const subtypeClassPrefix = type === 'brands' ? '' : `fa-${subtype}`
        const classPrefix = `${typeClassPrefix} ${subtypeClassPrefix}`

        return (
            <div
                className={styles.icon}
                key={`${type}-${subtype}-${name}-${i}`}
                id='copy'
                onClick={() => copyIconTag(type, subtype, name)}
                title={`<i class='${classPrefix} fa-${name}'></i>`}>
                <span className='badge'>
                    <sup>{subtypeCharacter}</sup>
                    {typeCharacter}
                </span>
                <div className={styles.font_icon}>
                    <i className={`${classPrefix} fa-${name}`}></i>
                </div>
                <span className={styles.name}>{name}</span>
            </div>
        );
    });
};

export default Icon;
