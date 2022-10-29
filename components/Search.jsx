import { useRef } from 'react';
import styles from '../styles/Search.module.css';

import { MagnifyingGlass } from './Icons';

const Search = ({ setSearch }) => {
    const searchRef = useRef();

    return (
        <section
            className='container'
            style={{
                top: 0,
                position: 'sticky',
                boxShadow: '0 1px 5px rgba(255,215,0,0.8)',
                zIndex: 100,
                backgroundColor: 'white',
            }}>
            <div className='wrapper'>
                <div className={styles.search}>
                    <MagnifyingGlass />
                    <input
                        type='text'
                        placeholder='Search all 16000+ icons...'
                        ref={searchRef}
                        onKeyUp={e => {
                            if (e.key === 'Enter') {
                                setSearch(searchRef.current.value);
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Search;
