import React from 'react'
import { About } from '../UI/About';
import { Project } from '../UI/Project';
import { BlogInterface } from '../UI/Blog';
import { Hireme } from '../UI/HIreme';
import { Contact } from '../UI/Contact';
import { Followme } from '../UI/Followme';
import { Hero } from '../UI/Hero';

export const Home = () => {
  return (
    <>
    <Hero/>
     <About />
      {/* <Skill /> */}
      <Project/>
      <BlogInterface/>
      <Hireme/>
      <Contact/>
      <Followme/>
    </>
  )
}

// About
// Project
// Blog
// hire me
// follow me 
