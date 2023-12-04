import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { Brand, Code, Count, Github, License, Info } from './Icons';

const Navbar = () => {
    return (
        <div className='container' style={{ background: 'var(--bg)' }}>
            <div className='wrapper'>
                <nav className={styles.navbar}>
                    <Link href='/' title='v6.5.1'>
                        <Brand /> <span>Supacons 6</span>
                    </Link>
                    <div className={styles.links}>
                        <a
                            title='Documentation'
                            href='https://poseidon-code.github.io/supacons/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Info />
                        </a>
                        <a
                            title='Code'
                            href='https://github.com/poseidon-code/supacons'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Code />
                        </a>
                        <a
                            title='Github'
                            href='https://github.com/poseidon-code'
                            target='_blank'
                            rel='noopener noreferrer'>
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
                        <span title='30,013'>
                            <Count />
                            30,000+ Icons
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
