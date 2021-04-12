import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';

const Layout = (props) => {
    return (
        <main>
            <Head>
                <title>Supacons | SVG Icons</title>
                <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
            </Head>
            <Navbar />
            <Search />
            <section>{props.children}</section>
            <Footer />
        </main>
    );
};

export default Layout;
