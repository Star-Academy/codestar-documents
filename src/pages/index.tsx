import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout>
            <header className={clsx(styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link className="button button--secondary button--lg" to="/docs/non-technical-documents">
                            مستندات غیرفنی
                        </Link>
                    </div>
                </div>
            </header>
        </Layout>
    );
}
