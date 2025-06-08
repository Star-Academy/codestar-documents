import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Lottie from 'lottie-react';
import animationData from '/animations/documentation.lottie.json';
import styles from './index.module.css';

export default function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <main className={clsx(styles.mainContainer)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="codestar/about"
                        >
                            CodeStar
                        </Link>
                    </div>
                </div>
                <Lottie
                    animationData={animationData}
                    loop={true}
                />

            </main>
        </Layout>
    );
}
