import NextLink from 'next/link';

import Logo from './Logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <NextLink href="/">
                <a>
                    <Logo />
                </a>
            </NextLink>
            <nav>
                <ul>
                    <li>
                        <NextLink href="/posts">Posts</NextLink>
                    </li>
                    <li>
                        <NextLink href="/contact">Contact</NextLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
