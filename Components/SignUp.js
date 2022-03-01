import React from 'react'
import Tilt from 'react-tilt'

const SignUp = () => {

  const styles = {
    wrapper: 'flex flex-col pb-[4rem] mt-[3rem]',
    heading: 'font-bold text-[#8336D0] text-[2rem] md:text-[3rem] heading-gradient text-center',

  }
  const options = {
    reverse: true,  // reverse the tilt direction
    max: 50,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.2,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,    // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const inputs = [
    {
      placeholder: 'Name',
      icon: './user.png',
      type: 'text'
    },
    {
      placeholder: 'Email',
      icon: './email.png',
      type: 'email'
    },
    {
      placeholder: 'Password',
      icon: './padlock.png',
      type: 'password'
    }
  ]

  return (
    <div className={styles.wrapper} id='signup' >
      <h1 className={styles.heading} >Let’s Create a Brighter Future</h1>

      <div className='flex flex-col md:flex-row mt-[2rem] ' >
        <div className='flex justify-center items-center' >
          <Tilt className="Tilt max-w-[500px] w-[100%] flex items-center justify-center " options={options} style={{ width: '100%', }}  >
            <div className='Tilt-inner ' >
              <img src="./loginPic.png" alt="" className='max-w-[100%] ' />
            </div>
          </Tilt>
        </div>


        <div className='flex-1 flex flex-col ' >

          <h1 className='text-center text-[1.75rem] md:text-[2rem] heading-gradient font-semibold pb-[2rem] md:py-[0rem] md:pt-[2rem]  ' >Sign Up</h1>

          <form action="" className='flex-1 flex flex-col justify-center items-center '  >
            {
              inputs.map((item, index) => <div key={index} className='flex bg-white py-[0.5rem] px-[0.8rem]
              w-[100%] max-w-[400px] overflow-hidden rounded-full opacity-90 mb-[2rem]' >
                <img src={item.icon} className='max-w-[35px] opacity-40 ' alt="" />
                <input type={item.type} required placeholder={item.placeholder} className='ml-[1rem] flex-1 text-[0.9rem] border-none outline-none ' />
              </div>)
            }

            <button type='submit' className='text-[0.7rem] bg-[#F774C5] px-[1.35em] rounded-3xl font-medium py-[0.85em] md:text-[0.85rem] text-white lg:rounded-3xl mx-[1rem] lg:mx-[0rem] shadow-sm shadow-[#5c5c5c] hover:bg-[#fa5fbf] transition' > Sign Up </button>

          </form>


        </div>
      </div>

    </div>
  )
}

export default SignUp