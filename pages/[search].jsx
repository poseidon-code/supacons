import { useState } from 'react';

import ICONS from '../public/icons.json';
import Icon from '../components/Icon';

import styles from '../styles/index.module.css';
import { NotFound } from '../components/Icons';

const SearchedIcon = props => {
    const [IsCopied, setIsCopied] = useState(false);

    const copied = async () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                {props.icons.length === 0 ? (
                    <div className={styles.notfound}>
                        <NotFound />
                        <h1>No Icon Found !</h1>
                        <h3>Try searching again with new query.</h3>
                        <br />
                        <span>
                            Try searching on&nbsp;
                            <a href='http://fontawesome.com' target='_blank' rel='noopener noreferrer'>
                                FontAwesome
                            </a>
                            &nbsp;site & use the icon name to search here on Supacons.
                        </span>
                    </div>
                ) : (
                    <div className={styles.icons}>
                        {props.icons.map((icon, i) => (
                            <Icon key={i} copied={copied} name={icon.name} type={icon.type} svg={icon.svg} />
                        ))}
                    </div>
                )}
            </div>
            {IsCopied && <span className='copy-toaster'>Icon Copied !</span>}
        </section>
    );
};

export default SearchedIcon;

export const getServerSideProps = async context => {
    const { query } = context;

    const Icons = JSON.parse(JSON.stringify(ICONS));

    const filteredIcons = Icons.filter(
        icon => icon.name.toLowerCase().replace('-', '').indexOf(query.search.toLowerCase().replace('-', '')) !== -1
    );

    filteredIcons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return {
        props: {
            icons: filteredIcons,
        },
    };
};
