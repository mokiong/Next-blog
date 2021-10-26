import NextImage from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <NextImage
                    src="/images/site/dog1.jpg"
                    alt="Am image showing max"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi im max</h1>
            <p>I blog about web dev</p>
        </section>
    );
}

export default Hero;
