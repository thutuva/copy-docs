import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Knowledge',
    Svg: require('@site/static/img/knowledge.svg').default,
    description: (
      <>
        Learn how to work with and analyze healthcare data.
      </>
    ),
  },
  {
    title: 'Code',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Data marts for cleaning and transforming healthcare data.
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        A growing community of healthcare data practitioners.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
