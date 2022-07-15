import '../styles/globals.css';
import { useState, useRef, useEffect } from 'react';
import Router from 'next/router';
import Clipboard from 'clipboard';

import Layout from '../components/Layout';
import Loading from '../components/Loading';

const App = ({ Component, pageProps }) => {
    const [isCopied, setIsCopied] = useState(false);
    const toast = useRef();

    const copier = icon => {
        new Clipboard('#copy', {
            text: () => icon,
        });
        copied();
    };

    const copied = () => {
        clearTimeout(toast.current);
        setIsCopied(true);
        toast.current = setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const clipboard = {
        copier,
        isCopied,
    };

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);

        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Layout>
                    <Component clipboard={clipboard} {...pageProps} />
                </Layout>
            )}
        </>
    );
};

export default App;
