"use client";

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";
import TimelineElement from './vertical-timeline-element';


export default function Experience() {

    const { ref } = useSectionInView("Experience");

  return (
    <section
        id="experience"
        ref={ref}
        className="scroll-mt-28 mb-28 sm:mb-40">

        <SectionHeading>My Experience</SectionHeading>

        <VerticalTimeline lineColor="">
                {
                    experiencesData.map((item, index) => {
                        return ( <TimelineElement key={index} item={item} /> );
                        })
                        
                }
        </VerticalTimeline>
    </section>
  )
}
