import '../styles/globals.css';
import { useState, useRef } from 'react';
import Clipboard from 'clipboard';

import Layout from '../components/Layout';

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

    return (
        <Layout>
            <Component clipboard={clipboard} {...pageProps} />
        </Layout>
    );
};

export default App;
