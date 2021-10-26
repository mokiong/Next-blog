import AllPosts from '../../components/posts/Allposts';

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        exerpt: 'NextJS is the React framework for production - it makes building fullstack React Apps in a breeze',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        exerpt: 'NextJS is the React framework for production - it makes building fullstack React Apps in a breeze',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        exerpt: 'NextJS is the React framework for production - it makes building fullstack React Apps in a breeze',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        exerpt: 'NextJS is the React framework for production - it makes building fullstack React Apps in a breeze',
        date: '2022-02-10',
    },
];

function AllPostPage() {
    return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostPage;
