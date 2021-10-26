import PostContent from '../../components/posts/post-detail/PostContent';
import { getPostData, getPostFiles } from '../../lib/postsUtil';

function PostDetailPage(props) {
    return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
}

export function getStaticPaths() {
    const postFileNames = getPostFiles();

    const slugs = postFileNames.map((filename) =>
        filename.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default PostDetailPage;
