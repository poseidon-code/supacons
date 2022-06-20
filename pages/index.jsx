import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';

import Icon from '../components/Icon';
import { More } from '../components/Icons';

const Home = ({ icons, total_icons, clipboard }) => {
    const [count, setCount] = useState(400);
    const [load, setLoad] = useState(true);

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
                        <Icon key={i} clipboard={clipboard} name={icon.name} type={icon.type} />
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

export const getStaticProps = async () => {
    const getIcons = (await import('../getIcons')).default;
    const icons = await getIcons();
    const total_icons = icons.length;

    return {
        props: {
            icons,
            total_icons,
        },
    };
};
