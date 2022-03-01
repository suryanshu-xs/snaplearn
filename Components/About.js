import React from 'react'

const About = () => {

  const styles = {
    wrapper: 'flex flex-col',
    heading: 'font-bold text-[#8336D0] text-[2rem] md:text-[3rem] text-gradient text-center',

  }
  const facilities = [
    {
      feature: '24/7 Video Lessons',
      pic: './video-marketing.png'
    },
    {
      feature: 'Personalised Learning Journeys',
      pic: './online-learning.png'
    },
    {
      feature: 'Unlimited Practice and Revision',
      pic: './revision.png'
    },
    {
      feature: 'Individual Knowledge Graph',
      pic: './performance.png'
    },
  ]
  const features = [
    {
      heading: 'Designed to Deliver Results',
      desc: 'Every class is carefully designed by experts with methods that are proven to give results.',
      pic: './results.png'
    },
    {
      heading: 'Tests, Quizzes and Worksheets',
      desc: 'Tests, quizzes and worksheets for better practice and retention.',
      pic: './notebook.png'
    },
    {
      heading: 'Parent Teacher Meetings',
      desc: 'Mentor feedback and guidance through PTMs.',
      pic: './meeting.png'
    }
  ]

  return (
    <div className={styles.wrapper} id='about' >

      <h1 className={styles.heading} >We Teach Different </h1>
      <p className=' text-[#313131] font-medium text-center max-w-[450px] mx-auto my-4 ' >
        SnapLearn provides personalized learning programs, Our their aim is to transform learning into fun through our interactions and 3D learning classes which will help the students to score better.
      </p>


      <div className='flex pt-2 md:pt-[2rem] justify-around items-center flex-col md:flex-row ' >
        <div className='mt-2' >
          {
            facilities.map((item, index) => {

              return <div key={index} className='mb-[0.75rem] md:mb-[1.5rem] items-center flex' >

                <img src={item.pic} className='h-[60px] md:h-[80px]' alt="" />
                <h2 className='text-[#4d4d4d] ml-[1.25rem] font-medium text-[1.05rem] md:text-[1.3rem] ' >{item.feature} </h2>


              </div>
            })
          }
        </div>

        <div className='mt-2 flex flex-col justify-between' >
          {
            features.map((item, index) => {

              return <div key={index} className='flex items-center py-[1rem] md:py-[0rem]  ' >

                <img src={item.pic} className='h-[80px] md:h-[110px]' alt="" />
                <div className='ml-[1.25rem] flex-1 min-h-[100%] flex flex-col justify-between ' >
                  <h2 className='text-[#454545] font-medium text-[1rem] md:text-[1.30rem] ' >{item.heading} </h2>
                  <p className='max-w-[300px] text-[#444444] text-[0.75rem] md:text-[0.85rem] font-medium  mt-1 md:mb-4  ' >
                    {item.desc}
                  </p>
                </div>


              </div>
            })
          }
        </div>


      </div>


    </div>
  )
}

export default About