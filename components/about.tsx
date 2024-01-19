"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About");

  return (
    <motion.section ref={ref} id="about" className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}>
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Japanese and German</span> and working as an 
        assistant language teacher and freelance translator,
        I entered medical school. Since graduating with my MD, I have begun specialist training in{" "}
        <span className="font-medium">psychiatry</span>.{" "}</p>
        <p>At the same time, I have developed a keen interest in{" "}
        <span className="italic">programming and artificial intelligence.</span>{" "}
        Currently, I work mostly with{" "} 
        <span className="font-medium">
          Microsoft Power Platform, JavaScript, TypeScript, HTML, CSS, and Python.
        </span></p>

      <p>When I'm not coding, I enjoy learning languages, playing tennis, and spending time with my family.</p>
    </motion.section>
  )
}
