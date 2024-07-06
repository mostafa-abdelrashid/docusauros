// src/pages/CustomPage.js
import React from 'react';
import Layout from '@theme/Layout';
import styles from './customPage.module.css';

function CustomPage() {
  return (
    <Layout title="Custom Page">
      <header className={styles.heroBanner}>
        <h1  className={styles.heroTitle}>IOT research lab</h1>
        <p className={styles.heroSubtitle}>We make the future</p>
      </header>
      <main>
        { 'trial' }
      </main>
    </Layout>
  );
}

export default CustomPage;
