import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/FeaturedPost';
import Hero from '../components/home-page/Hero';
import { getFeaturedPosts } from '../lib/postsUtil';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Max's blog</title>
                <meta
                    name="description"
                    content="I post about programming and web development"
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
}

export default HomePage;
