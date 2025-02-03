import React from 'react'
import { About } from '../UI/About';
import { Project } from '../UI/Project';
import { BlogInterface } from '../UI/Blog';
import { Hireme } from '../UI/Hireme';
import { Contact } from '../UI/Contact';
import { Followme } from '../UI/Followme';
import { Hero } from '../UI/Hero';
import { Skill } from '../UI/Skill';

export const Home = () => {
  return (
    <>
    <Hero/>
     <About />
      {/* <Skill /> */}
      <Project/>
      <BlogInterface/>
      <Skill/>
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
