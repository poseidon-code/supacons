import styles from '../styles/Navbar.module.css';
import { Brand, Code, Count, Github, License } from './Icons';

const Navbar = () => {
    return (
        <div className='container' style={{ background: 'var(--bg)' }}>
            <div className='wrapper'>
                <nav className={styles.navbar}>
                    <span>
                        <Brand />
                        supacons
                    </span>
                    <div className={styles.links}>
                        <a href='https://github.com/poseidon-code/supacons' target='_blank' rel='noopener noreferrer'>
                            <Code />
                        </a>
                        <a href='https://github.com/poseidon-code' target='_blank' rel='noopener noreferrer'>
                            <Github /> <span> &nbsp;/poseidon-code</span>
                        </a>
                    </div>
                </nav>
                <div className='break' />
            </div>
            <div className='wrapper'>
                <header className={styles.header}>
                    <h1>
                        <span>Vanilla SVG Icons ripped from,</span>
                        <span>popular FontAwesome Icon pack!</span>
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
