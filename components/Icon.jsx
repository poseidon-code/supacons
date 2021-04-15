import parse from 'html-react-parser';
import Clipboard from 'clipboard';

import { Copy } from '../components/Icons';
import styles from '../styles/Icon.module.css';

const Icon = (props) => {
    const copy = (icon) => {
        new Clipboard('#copy', {
            text: () => {
                return icon;
            },
        });
    };

    const copySVG = () => {
        copy(props.svg);
        props.copied();
    };

    const copyJSX = () => {
        copy(props.svg.replaceAll('class=', 'className='));
        props.copied();
    };

    return (
        <div className={styles.icon}>
            {props.type === 'brands' ? (
                <span className='badge'>B</span>
            ) : props.type === 'duotone' ? (
                <span className='badge'>D</span>
            ) : props.type === 'solid' ? (
                <span className='badge'>S</span>
            ) : props.type === 'regular' ? (
                <span className='badge'>R</span>
            ) : props.type === 'light' ? (
                <span className='badge'>L</span>
            ) : null}
            <div className={styles.svg}>{parse(props.svg)}</div>
            <div className={styles.copy}>
                <button id='copy' onClick={copySVG}>
                    <Copy />
                    SVG
                </button>
                <button id='copy' onClick={copyJSX}>
                    <Copy />
                    JSX
                </button>
            </div>
            <span className={styles.name}>{props.name}</span>
        </div>
    );
};

export default Icon;
