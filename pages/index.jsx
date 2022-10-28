import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';

import Icon from '../components/Icon';
import { NotFound } from '../components/Icons';

export const getServerSideProps = async context => {
    const { query } = context;
    const getIcons = (await import('../getIcons')).default;
    let icons = await getIcons();

    if (query['s'] && query['s'].length != 0) {
        Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

        const filteredBrandIcons = Object.filter(
            icons['brands'],
            ([name, _]) => name.toLowerCase().replace('-', '').indexOf(query['s'].toLowerCase().replace('-', '')) !== -1
        );
        const filteredGenericIcons = Object.filter(
            icons['generic'],
            ([name, _]) => name.toLowerCase().replace('-', '').indexOf(query['s'].toLowerCase().replace('-', '')) !== -1
        );

        icons = {
            brands: filteredBrandIcons,
            generic: filteredGenericIcons,
        };
    }

    return {
        props: {
            icons,
        },
    };
};

const Home = ({ icons, clipboard }) => {
    const [allIcons, setAllIcons] = useState([]);

    const iconTypes = {
        classic: ['solid', 'regular', 'light', 'thin', 'duotone'],
        sharp: ['solid'],
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

        flattenIcons.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        setAllIcons(flattenIcons);
    }, []);

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                {allIcons.length === 0 ? (
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
