import React from 'react';
import Layout from './layouts/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </Layout>
  );
}

export default App;