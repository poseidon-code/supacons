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
                            <Brand /> <span>Supacons 5</span>
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
                        <span>Vanilla SVG Icons ripped from,</span>
                        <span>popular Font Awesome 5 Icon pack!</span>
                    </h1>
                    <div className={styles.stats}>
                        <span>
                            <Count />
                            7865 Icons
                        </span>
                        <span>
                            <License />
                            MIT License
                        </span>
                        <span>
                            <Code />
                            Vanilla SVG + React JSX
                        </span>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Navbar;
