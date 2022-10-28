import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';

import Icon from '../components/Icon';
import { More } from '../components/Icons';

export const getStaticProps = async () => {
    const getIcons = (await import('../getIcons')).default;
    const icons = await getIcons();

    return {
        props: {
            icons,
        },
    };
};

const Home = ({ icons, clipboard }) => {
    const [count, setCount] = useState();
    const [load, setLoad] = useState(true);
    const [allIcons, setAllIcons] = useState([]);

    const iconTypes = {
        classic: ['solid', 'regular', 'light', 'thin', 'duotone'],
        sharp: ['solid'],
        brands: ['brands'],
    };

    const handleLoadMore = () => {
        setCount(p => p + 400);
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

    useEffect(() => {
        if (count >= allIcons.length) setLoad(false);
        else setLoad(true);
    }, [count]);

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                <div className={styles.icons}>
                    {allIcons.slice(0, count).map((icon, i) => (
                        <Icon
                            key={i}
                            clipboard={clipboard}
                            name={icon.name}
                            type={icon.type}
                            subtypes={icon.subtypes}
                        />
                    ))}
                </div>
                {load && (
                    <div className={styles.loadmore}>
                        <button onClick={handleLoadMore}>
                            <More />
                            Load More
                        </button>
                    </div>
                )}
            </div>
            {clipboard.isCopied && <span className='copy-toaster'>Icon Tag Copied !</span>}
        </section>
    );
};

export default Home;
