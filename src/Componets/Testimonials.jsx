import React, { useState } from 'react'
import TestimonialBox from './TestimonialBox'


const Testimonials = () => {
    const [testData, setTestData] = useState([
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae iure magni velit, sed quod incidunt accusantium obcaecati id rerum?",
            image: "profile-1.jpg",
            position: "Found & CEO, Huddle",
            name: "Ahmed"
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae iure magni velit, sed quod incidunt accusantium obcaecati id rerum?",
            image: "profile-2.jpg",
            position: "Found & CEO, Huddle",
            name: "Rady"
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae iure magni velit, sed quod incidunt accusantium obcaecati id rerum?",
            image: "profile-3.jpg",
            position: "Found & CEO, Huddle",
            name: "Eman"
        },
    ])
  return (
    <>
      <section className='pb-[350px]'>
        <div className="container relative">
            <div className='absolute left-[20px] top-[-35px]'>
                <img src="./images/bg-quotes.png" alt="quote" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10'>
                {testData.map((item)=>(
                    <TestimonialBox key={item.id} desc={item.desc} name={item.name} position={item.position} image={item.image} />
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
