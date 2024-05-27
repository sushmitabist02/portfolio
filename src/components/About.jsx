import React from 'react'

const About = () => {
  return (
    <div 
        name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Ambitious and versatile professional with expertise in React, JavaScript, HTML, CSS, Java, and C, 
            and strong skills in market research, sales strategy, and customer relationship management. 
            Adept at creating dynamic web applications and driving business growth, seeking opportunities to 
            leverage my technical and business acumen in an innovative environment.
            </p>
            <br/>
            <p className='text-xl'>
            Skilled in developing cross-platform mobile applications using Flutter and Dart, with a deep 
            understanding of the framework's widget-based architecture and reactive programming model. 
            Experienced in building high-performance, visually appealing apps that offer a seamless user experience 
            across both iOS and Android platforms. Committed to staying updated with the latest trends and best 
            practices in mobile development to deliver cutting-edge solutions that meet business objectives and 
            enhance customer satisfaction.</p>
        </div>
    </div>
  )
}

export default About
