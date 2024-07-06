import React from 'react'; 
import Layout from '@theme/Layout'; 
import clsx from 'clsx'; 
import Heading from '@theme/Heading'; 
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Iot infrastructure',
    Svg: require('@site/static/img/infrastructure.svg').default,
    description: (
      <>
       Building an open loT platform that can be widely deployed and uSed by building a new, robust and integrated stack with innovations at the hardware, software and end-user levels.
      </>
    ),
  },
  {
    title: 'privacy and access control',
    Svg: require('@site/static/img/privacy.svg').default,
    description: (
      <>
     Developing a robust framework for dynamic access control and privacy that are well suited for loT deployments and can rabidly promote and accelerate adoption of lot.
      </>
    ),
  },
  {
    title: 'on demand sensing and service delivery',
    Svg: require('@site/static/img/demand.svg').default,
    description: (
      <>
        The project will build the necessary infrast
        processing, and intelligent decision making.
      </>
    ),
  },
  {
    title: 'Iot in health care',
    Svg: require('@site/static/img/health1.svg').default,
    description: (
      <>
        Building a complete loT platform that can be widely deployed and used by the healthcare providers and patients starting by the hardware design by building innovative ECG sensors providing maximum efficiency and patients' experience. While integrating latest loT communication technologies for the conveying the patient's ECG to the healthcare providers to take actions in real time and save patients lives. Further more, take advantage of the latest machine learning techniques for analyzing the data and making
      </>
    ),
  },
  {
    title: 'smart city applications',
    Svg: require('@site/static/img/smart.svg').default,
    description: (
      <>
       Intelligent transportation, Traffic monitoring and modeling, Public safety, Smart intersections, and Vehicle to everything communications. Traffic Prediction and Analysis
      </>
    ),
  },
  {
    title: 'Real-time data analytics for live data streams',
    Svg: require('@site/static/img/streams.svg').default,
    description: (
      <>
      Leveraging deep learning to support real-time decision making in loT applications including, smart agriculture, health monitoring, traffic management, autonomous driving and more.
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <Layout title="Home">
      <header className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>IOT research laeeeeeeb</h1>
        <p className={styles.heroSubtitle}>We make the future</p>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
