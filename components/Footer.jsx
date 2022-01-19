import styles from '../styles/Footer.module.css';
import { Brand, Github, Facebook, Linkedin } from './Icons';

const Footer = () => {
    return (
        <div className='container' style={{ background: 'var(--bg)' }}>
            <div className='break' />
            <div className='wrapper'>
                <footer className={styles.footer}>
                    <span>
                        <Brand />
                        <p>supacons</p>
                        <div className='rule' />
                        <a href='https://github.com/poseidon-code' target='_blank' rel='noopener noreferrer'>
                            by @poseidon-code
                        </a>
                    </span>
                    <div className={styles.social}>
                        <a href='https://www.facebook.com/pritamhalder0506' rel='noopener noreferrer' target='_blank'>
                            <Facebook />
                        </a>
                        <a href='https://www.github.com/poseidon-code' rel='noopener noreferrer' target='_blank'>
                            <Github />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/pritam-halder-8306741b3'
                            rel='noopener noreferrer'
                            target='_blank'>
                            <Linkedin />
                        </a>
                    </div>
                </footer>
            </div>
            <div className='break' />
            <span className={styles.credits}>
                Icons designed by &nbsp;
                <a href='https://fontawesome.com/' target='_blank' rel='noopener noreferrer'>
                    FontAwesome
                </a>
            </span>
        </div>
    );
};

export default Footer;
