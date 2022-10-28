import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';

import Icon from '../components/Icon';

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
            </div>
            {clipboard.isCopied && <span className='copy-toaster'>Icon Tag Copied !</span>}
        </section>
    );
};

export default Home;
