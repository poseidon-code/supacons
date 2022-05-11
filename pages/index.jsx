import { useEffect, useRef, useState } from 'react';
import styles from '../styles/index.module.css';

import Icon from '../components/Icon';
import { More } from '../components/Icons';

const Home = ({ icons, total_icons }) => {
    const [count, setCount] = useState(400);
    const [load, setLoad] = useState(true);
    const [isCopied, setIsCopied] = useState(false);
    const toast = useRef();

    const copied = async () => {
        clearTimeout(toast.current);
        setIsCopied(true);
        toast.current = setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const handleLoadMore = () => {
        setCount(p => p + 400);
    };

    useEffect(() => {
        if (count > total_icons) setLoad(false);
    }, [count]);

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                <div className={styles.icons}>
                    {icons.slice(0, count).map((icon, i) => (
                        <Icon key={i} copied={copied} name={icon.name} type={icon.type} />
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
            {isCopied && <span className='copy-toaster'>Icon Tag Copied !</span>}
        </section>
    );
};

export default Home;

export const getStaticProps = async () => {
    const generic_icons = (await import('../public/generic_icons.json')).default;
    const brand_icons = (await import('../public/brand_icons.json')).default;

    const genericIcons = JSON.parse(JSON.stringify(generic_icons));
    const brandIcons = JSON.parse(JSON.stringify(brand_icons));
    const types = ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'];

    let icons = [];
    types.forEach(type => {
        if (type === 'brands') {
            Object.keys(brandIcons).forEach(key => {
                icons.push({
                    name: key,
                    type: type,
                });
            });
        } else {
            Object.keys(genericIcons).forEach(key => {
                icons.push({
                    name: key,
                    type: type,
                });
            });
        }
    });

    icons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    const total_icons = icons.length;

    return {
        props: {
            icons,
            total_icons,
        },
    };
};
