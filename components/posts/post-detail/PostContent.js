import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import PostHeader from './PostHeader';
import classes from './post-content.module.css';

function PostContent(props) {
    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const MarkdownComponents = {
        // Convert Markdown img to next/image component and set height, width and priority
        // example: ![AltText {priority}{768x432}](...
        p: (paragraph) => {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
                const isPriority = image.properties.alt
                    ?.toLowerCase()
                    .includes('{priority}');
                const metaWidth = image.properties.alt.match(/{([^}]+)x/);
                const metaHeight = image.properties.alt.match(/x([^}]+)}/);
                const width = metaWidth ? metaWidth[1] : '768';
                const height = metaHeight ? metaHeight[1] : '432';

                return (
                    <Image
                        src={`/images/posts/${post.slug}/${image.properties.src}`}
                        width={width}
                        height={height}
                        className="postImg"
                        alt={alt}
                        priority={isPriority}
                    />
                );
            }
            return <p>{paragraph.children}</p>;
        },
    };
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={MarkdownComponents}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;
