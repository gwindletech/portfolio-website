import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";

type TimelineItem = {
    title: string,
    location: string,
    description: string,
    icon: any,
    date: string,
}

export default function TimelineElement({ item }: { item: TimelineItem }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,})

        const { theme } = useTheme();

    return (
        <div ref={ref} className="vertical-timeline-element">
        <VerticalTimelineElement
            contentStyle={{
                background: theme === 'light' ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rbga(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
            
            }}
            contentArrowStyle={{
                borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
                background: theme === 'light' ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
            }}
            visible={inView}>
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
        </VerticalTimelineElement>
        </div>
        )}