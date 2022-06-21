import styles from '../styles/index.module.css';

import Icon from '../components/Icon';
import { NotFound } from '../components/Icons';

const SearchedIcon = ({ clipboard, icons }) => {
    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                {icons.length === 0 ? (
                    <div className={styles.notfound}>
                        <NotFound />
                        <h1>No Icon Found !</h1>
                        <h3>Try searching again with new query.</h3>
                        <br />
                        <span>
                            Try searching on&nbsp;
                            <a href='http://fontawesome.com' target='_blank' rel='noopener noreferrer'>
                                Font Awesome
                            </a>
                            &nbsp;& copy the icon tag, as it is 100% compatible with Supacons.
                        </span>
                    </div>
                ) : (
                    <div className={styles.icons}>
                        {icons.map((icon, i) => (
                            <Icon key={i} clipboard={clipboard} name={icon.name} type={icon.type} svg={icon.svg} />
                        ))}
                    </div>
                )}
            </div>
            {clipboard.isCopied && <span className='copy-toaster'>Icon Tag Copied !</span>}
        </section>
    );
};

export default SearchedIcon;

export const getServerSideProps = async context => {
    const { query } = context;
    const getIcons = (await import('../getIcons')).default;
    const icons = await getIcons();

    const filteredIcons = icons.filter(
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
