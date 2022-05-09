import { useEffect, useRef, useState } from 'react';
import styles from '../styles/index.module.css';

// import Icon from '../components/Icon';
import { More } from '../components/Icons';

const Home = props => {
    // const { icons } = props;
    const { genericIcons, brandIcons, types } = props;

    const [count, setCount] = useState(200);
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
        setCount(p => p + 200);
    };

    useEffect(() => {
        if (count > 7865) setLoad(false);
    }, [count]);

    return (
        <section className='container' style={{ margin: '3rem 0' }}>
            <div className='wrapper'>
                {/* <div className={styles.icons}>
                    {icons.slice(0, count).map((icon, i) => (
                        <Icon key={i} copied={copied} name={icon.name} type={icon.type} svg={icon.svg} />
                    ))}
                </div> */}
                {Object.keys(genericIcons).map(name => {
                    return types.map(type => (
                        <i key={genericIcons[name] + type} className={`fa-${type} fa-${name}`}></i>
                    ));
                })}
                {Object.keys(brandIcons).map(name => (
                    <i key={brandIcons[name] + 'brands'} className={`fa-brands fa-${name}`}></i>
                ))}

                {load && (
                    <div className={styles.loadmore}>
                        <button onClick={handleLoadMore}>
                            <More />
                            Load More
                        </button>
                    </div>
                )}
            </div>
            {isCopied && <span className='copy-toaster'>Icon Copied !</span>}
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

    return {
        props: {
            genericIcons,
            brandIcons,
            types,
        },
    };
};
