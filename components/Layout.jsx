import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';

const Layout = (props) => {
    return (
        <main>
            <Head>
                <title>Supacons | SVG Icons</title>
                <meta name='title' content='Supacons | SVG Icons' />
                <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
                <meta
                    name='description'
                    content='Vanilla SVG Icons ripped from, popular FontAwesome Icon pack! Get Icons in base SVG codes or modified React JSX codes (for use as a React Component).'
                />
                <meta name='author' content='poseidon-code' />
                <meta name='keywords' content='icons, svg, free, fontawesome, heroicons, supacons' />

                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://supacons.netlify.app/' />
                <meta property='og:title' content='Supacons | SVG Icons' />
                <meta
                    property='og:description'
                    content='Vanilla SVG Icons ripped from, popular FontAwesome Icon pack ! Get Icons in base SVG codes or modified React JSX codes (for use as a React Component).'
                />
                <meta property='og:image' content='/card.jpg' />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:url' content='https://supacons.netlify.app/' />
                <meta property='twitter:title' content='Supacons | SVG Icons' />
                <meta
                    property='twitter:description'
                    content='Vanilla SVG Icons ripped from, popular FontAwesome Icon pack ! Get Icons in base SVG codes or modified React JSX codes (for use as a React Component).'
                />
                <meta property='twitter:image' content='/card.jpg' />
            </Head>
            <Navbar />
            <Search />
            <section>{props.children}</section>
            <Footer />
        </main>
    );
};

export default Layout;
