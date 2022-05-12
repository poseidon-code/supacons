import { useEffect, useRef, useState } from 'react';
import styles from '../styles/index.module.css';

import Icon from '../components/Icon';
import { More } from '../components/Icons';

const Home = props => {
    const { icons } = props;

    const [count, setCount] = useState(200);
    const [load, setLoad] = useState(true);
    const [IsCopied, setIsCopied] = useState(false);
    const toast = useRef();

    const copied = async () => {
        clearTimeout(toast.current);
        setIsCopied(true);
        toast.current = setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const handleLoadMore = () => {
        setCount(p => p + 200);
    };

    useEffect(() => {
        if (count > 7865) setLoad(false);
    }, [count]);

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                <div className={styles.icons}>
                    {icons.slice(0, count).map((icon, i) => (
                        <Icon key={i} copied={copied} name={icon.name} type={icon.type} svg={icon.svg} />
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
            {IsCopied && <span className='copy-toaster'>Icon Copied !</span>}
        </section>
    );
};

export default Home;

export const getStaticProps = async () => {
    const ICONS = (await import('../public/icons.json')).default;

    const Icons = JSON.parse(JSON.stringify(ICONS));

    Icons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return {
        props: {
            icons: Icons,
        },
    };
};
