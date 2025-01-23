import React, { useState } from 'react';
import {motion} from "framer-motion"

interface Typess {
    data: {
        rows: {
            title: string;
            description: string;
        }[];
    };
}

function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className=" h-auto p-10 mb-20 flex justify-center  items-center w-full">
            <div className='w-[1000px]'>
                <div className="text-center text-3xl md:text-5xl lg:text-6xl text-white mb-6">
                    FA<span className='text-pink-500'>Q</span>
                </div>
                <div className="space-y-7">
                    {data.rows.map((item, index) => (
                        <div
                            key={index}
                            className="b-1 border-b border-gray-300 pb-4"
                        >
                            <div
                                onClick={() => toggleAnswer(index)}
                                className="cursor-pointer flex justify-between items-center text-lg md:text-xl  font-medium " 
                            >
                                <span>{item.title}</span>
                                <span className="text-white">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <motion.div
                                initial={{z:100, opacity : 0, pathLength:0}}
                                animate={{z:0, opacity: 1, pathLength:1}}
                                transition={{duration:0.5}}
                                 className="mt-3 rounded-xl text-black bg-pink-500 p-5 text-base md:text-lg">
                                    {item.description}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const data = {
    rows: [
        {
            title: 'Why is content marketing important?',
            description:
                'Effective content marketing represents your brand in a wider conversation than simply conversions. Creating digital assets that appeal to the everyday needs of your customers inspires brand loyalty, establishes trust, and addresses every part of the sales funnel.',
        },
        {
            title: 'What is a content marketing strategy?',
            description:
                'Comprehensive content strategies address the overarching goals your brand hopes to achieve in the short and long terms. Content marketers identify, test, and optimize different tactics to deliver content to the right audience at the right time, including blogs, emails, social media, podcasts, and more.',
        },
        {
            title: 'What is the difference between content marketing and SEO?',
            description:
                'While SEO and content marketing are very much related, we like to think of them as art and science. Content marketing is the art, and SEO is the science. Content marketing is delivering information to your target audience through various channels and leaving them with a favorable impression of your brand. The content itself can take many forms – and it should be artful! SEO is much more technical and scientific, involving keyword targets, metadata, links, site speed, and more.',
        },
        {
            title: 'Does SEO come first, or does content marketing?',
            description:
                'We usually start on the SEO side of things with a technical site audit to ensure the website has a solid foundation from which to grow. Search data informs target keywords and, ultimately, the content we create.',
        },
        {
            title: 'Does content marketing drive sales?',
            description:
                'Yes, if that’s your goal. Like any marketing campaign, it depends on your aim. If your goal is to drive awareness, your content is going to address top-of-the-funnel queries. If your goal is to drive sales, your content is going to address bottom-of-funnel queries. Addressing every step in your customer journey is the best way to drive sales or conversions or to grow your online following.',
        },
        {
            title: 'Is content marketing only for big national brands?',
            description:
                'No, content marketing is not just for big brands. Both large and small brands engage in content marketing using a customer relationship management (CRM) strategy. Content marketing is how businesses entice users to either follow them on social media or subscribe to emails.',
        },
    ],
};

export default Faq;
