import AllPosts from '../../components/posts/Allposts';
import { getAllPosts } from '../../lib/postsUtil';

function AllPostPage(props) {
    return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
        },
    };
}

export default AllPostPage;
