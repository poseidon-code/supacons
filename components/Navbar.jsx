import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { Brand, Code, Count, Github, License } from './Icons';

const Navbar = () => {
    return (
        <div className='container' style={{ background: 'var(--bg)' }}>
            <div className='wrapper'>
                <nav className={styles.navbar}>
                    <Link href='/'>
                        <a>
                            <Brand /> <span>Supacons 6</span>
                        </a>
                    </Link>
                    <div className={styles.links}>
                        <a href='https://github.com/poseidon-code/supacons' target='_blank' rel='noopener noreferrer'>
                            <Code />
                        </a>
                        <a href='https://github.com/poseidon-code' target='_blank' rel='noopener noreferrer'>
                            <Github />
                            <span>/poseidon-code</span>
                        </a>
                    </div>
                </nav>
                <div className='break' />
            </div>
            <div className='wrapper'>
                <header className={styles.header}>
                    <h1>
                        <span>Font Icons ripped from,</span>
                        <span>Font Awesome 6 icon pack !</span>
                        <span>&gt; Pro icons included !</span>
                    </h1>
                    <div className={styles.stats}>
                        <span>
                            <Count />
                            16,000+ Icons
                        </span>
                        <span>
                            <License />
                            MIT License
                        </span>
                        <span>
                            <Code />
                            Hosted & Downloadable
                        </span>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Navbar;
