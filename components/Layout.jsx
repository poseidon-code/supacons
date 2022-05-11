import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';

const Layout = props => {
    return (
        <main>
            <Head>
                <title>Supacons 6 | Font Icons</title>
                <meta name='title' content='Supacons 6 | Font Icons' />
                <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
                <meta
                    name='description'
                    content='Font icons ripped from popular Font Awesome 6 icon pack including all Pro icons !'
                />
                <meta name='author' content='poseidon-code' />
                <meta
                    name='keywords'
                    content='font icons, web icons, icons, svg, free, font awesome, heroicons, supacons, font awesome 6 free, supacons 6'
                />

                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://supacons.netlify.app/' />
                <meta property='og:title' content='Supacons 6 | Font Icons' />
                <meta
                    property='og:description'
                    content='Font icons ripped from popular Font Awesome 6 icon pack including all Pro icons !'
                />
                <meta property='og:image' content='/card.jpg' />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:url' content='https://supacons.netlify.app/' />
                <meta property='twitter:title' content='Supacons 6 | Font Icons' />
                <meta
                    property='twitter:description'
                    content='Font icons ripped from popular Font Awesome 6 icon pack including all Pro icons !'
                />
                <meta property='twitter:image' content='/card.jpg' />
                <link rel='stylesheet' href='https://poseidon-code.github.io/supacons/dist/supacons.all.css' />
            </Head>
            <Navbar />
            <Search />
            <section>{props.children}</section>
            <Footer />
        </main>
    );
};

export default Layout;
