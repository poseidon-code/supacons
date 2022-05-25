import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { Brand, Github, Facebook, Linkedin } from './Icons';

const Footer = () => {
    return (
        <div className='container' style={{ background: 'var(--bg)' }}>
            <div className='break' />
            <div className='wrapper'>
                <footer className={styles.footer}>
                    <span>
                        <Link href='/'>
                            <a
                                className={styles.brand}
                                title='Font Icons ripped from popular Font Awesome 6 icon pack including all Pro icons !'>
                                <Brand />
                                <p>supacons</p>
                            </a>
                        </Link>
                        <div className='rule' />
                        <a href='https://github.com/poseidon-code' target='_blank' rel='noopener noreferrer'>
                            @poseidon-code
                        </a>
                    </span>
                    <div className={styles.social}>
                        <a
                            title='Facebook'
                            href='https://www.facebook.com/pritamhalder0506'
                            rel='noopener noreferrer'
                            target='_blank'>
                            <Facebook />
                        </a>
                        <a
                            title='Github'
                            href='https://www.github.com/poseidon-code'
                            rel='noopener noreferrer'
                            target='_blank'>
                            <Github />
                        </a>
                        <a
                            title='LinkedIn'
                            href='https://www.linkedin.com/in/pritamhalder0506'
                            rel='noopener noreferrer'
                            target='_blank'>
                            <Linkedin />
                        </a>
                    </div>
                </footer>
            </div>
            <div className='break' />
            <span className={styles.credits}>
                Icons designed by&nbsp;
                <a href='https://fontawesome.com/' target='_blank' rel='noopener noreferrer'>
                    Font Awesome
                </a>
            </span>
        </div>
    );
};

export default Footer;
