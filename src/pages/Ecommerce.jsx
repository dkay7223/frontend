import React from "react";

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

const Ecommerce = () => {
  return <Layout>
  <Hero
    title="Admin Dashboard"
    content="If there were no gravity, i'd still fall for my crush."
    illustration={<HeroIllustration />}
  />
</Layout>;
};

export default Ecommerce;
