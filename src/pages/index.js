import React from 'react';

import Layout from '../components/layout';
import { Image, ArcaImage } from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Is the Grind Over?" />
    <h1 style={{ textAlign: `center` }}>Haha, no.</h1>
    <div style={{ maxWidth: `602px`, margin: `1rem auto` }}>
      <Image />
    </div>
    <footer style={{maxWidth: `204px`, margin: `2rem auto`}}>
      <ArcaImage />
    </footer>
  </Layout>
);

export default IndexPage;
