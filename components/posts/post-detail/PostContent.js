import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from './PostHeader';
import classes from './post-content.module.css';

PrismLight.registerLanguage('js', js);
PrismLight.registerLanguage('css', css);

function PostContent(props) {
    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const MarkdownComponents = {
        // // Convert Markdown img to next/image component and set height, width and priority
        // // example: ![AltText {priority}{768x432}](...
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

            if (node.children[0].tagName === 'code') {
                return <PrismLight language="" children />;
            }

            return <p>{paragraph.children}</p>;
        },
        code: (code) => {
            const { className, children } = code;

            const language = className.split('-')[1];

            return (
                <PrismLight
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
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
