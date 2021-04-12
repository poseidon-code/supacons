import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';

import ICONS from '../public/icons.json';

import Icon from '../components/Icon';
import { More } from '../components/Icons';

const Home = (props) => {
    const { icons } = props;

    const [count, setCount] = useState(200);
    const [load, setLoad] = useState(true);

    const handleLoadMore = () => {
        setCount((p) => p + 200);
    };

    useEffect(() => {
        if (count > 7865) setLoad(false);
    }, [count]);

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                <div className={styles.icons}>
                    {icons.slice(0, count).map((icon, i) => (
                        <Icon key={i} name={icon.name} type={icon.type} svg={icon.svg} />
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
        </section>
    );
};

export default Home;

export const getStaticProps = async () => {
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
