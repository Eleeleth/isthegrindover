import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="The Grind Is Never Over" />
    <h1 style={{ textAlign: `center` }}>Haha, no.</h1>
    <div style={{ maxWidth: `602px`, margin: `1rem auto` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
