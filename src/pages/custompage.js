// src/pages/CustomPage.js
import React from 'react';
import Layout from '@theme/Layout';
import styles from './customPage.module.css';

function CustomPage() {
  return (
    <Layout title="Custom Page">
      <header className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>Welcome to Custom Page</h1>
        <p className={styles.heroSubtitle}>This is a custom page with a background image.</p>
      </header>
      <main>
        { 'trial' }
      </main>
    </Layout>
  );
}

export default CustomPage;
