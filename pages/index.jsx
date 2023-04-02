import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';

import Icon from '../components/Icon';
import { Spinner } from '../components/Loading';
import { NotFound } from '../components/Icons';

export const getStaticProps = async () => {
    const getIcons = (await import('../getIcons')).default;
    let icons = await getIcons();

    return {
        props: {
            icons,
        },
    };
};

const Home = ({ icons, clipboard, search }) => {
    const [allIcons, setAllIcons] = useState([]);
    const [loading, setLoading] = useState(true);

    const iconTypes = {
        classic: ['solid', 'regular', 'light', 'thin', 'duotone'],
        sharp: ['solid', 'regular', 'light'],
        brands: ['brands'],
    };

    useEffect(() => {
        let flattenIcons = [];

        for (let type in iconTypes) {
            if (type === 'brands') {
                for (let name in icons[type]) {
                    const icon = {
                        name: name,
                        type: type,
                        subtypes: iconTypes[type],
                    };
                    flattenIcons.push(icon);
                }
            } else {
                for (let name in icons['generic']) {
                    const icon = {
                        name: name,
                        type: type,
                        subtypes: iconTypes[type],
                    };
                    flattenIcons.push(icon);
                }
            }
        }

        flattenIcons = flattenIcons.filter(
            ({ name }) => name.toLowerCase().replace('-', '').indexOf(search.toLowerCase().replace('-', '')) !== -1
        );

        flattenIcons.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        setAllIcons(flattenIcons);
        setLoading(false);
    }, [search]);

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper' style={{ minHeight: '100vh' }}>
                {loading ? (
                    <div style={{ padding: '4rem', display: 'grid', placeContent: 'center' }}>
                        <Spinner />
                    </div>
                ) : allIcons.length == 0 ? (
                    <div className={styles.notfound}>
                        <NotFound />
                        <h1>No Icon Found !</h1>
                        <h3>Try searching again with new query.</h3>
                        <br />
                        <span>
                            Try searching on&nbsp;
                            <a href='https://fontawesome.com/search' target='_blank' rel='noopener noreferrer'>
                                Font Awesome
                            </a>
                            &nbsp;& copy the icon tag, as it is 100% compatible with Supacons.
                        </span>
                    </div>
                ) : (
                    <div className={styles.icons}>
                        {allIcons.map((icon, i) => (
                            <Icon
                                key={i}
                                clipboard={clipboard}
                                name={icon.name}
                                type={icon.type}
                                subtypes={icon.subtypes}
                            />
                        ))}
                    </div>
                )}
            </div>
            {clipboard.isCopied && <span className='copy-toaster'>Icon Tag Copied !</span>}
        </section>
    );
};

export default Home;
