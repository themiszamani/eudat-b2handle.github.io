import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'B2HANDLE',
    Svg: require('@site/static/img/identity.svg').default,
    description: (
      <>
        The b2handle Python library is a client library for interaction with a Handle System server, using the native REST interface introduced in Handle System.
      </>
    ),
  },
  {
    title: 'PYHANDLE',
    Svg: require('@site/static/img/pyhandle.svg').default,
    description: (
      <>
        Python client library for interaction with a Handle System server, providing basic create, read, update and delete capabilities for  <code>Handles</code>.
      </>
    ),
  },
  {
    title: 'B2HANDLE-HRLS',
    Svg: require('@site/static/img/reverse-lookup.svg').default,
    description: (
      <>
        A Java servlet for local Handle System reverse-lookups and searching
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
