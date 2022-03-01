import React from 'react'
import Tilt from 'react-tilt'
import { Link } from 'react-scroll'

const HomePage = () => {

  const styles = {

    wrapper: 'min-h-[calc(90vh-65px)] md:min-h-[calc(90vh-70px)] lg:min-h-[calc(100vh-80px)] flex flex-col justify-center lg:flex-row  lg:justify-around lg:items-center  items-center ',

    text_div: 'py-[1rem] flex flex-col items-center justify-between ',

    heading1: 'text-gradient hidden lg:block mt-[1.75rem] mb-[0.75rem] md:text-[1.25rem] lg:text-[1.3rem] text-[1rem] font-semibold ',

    join_now: 'text-[0.7rem] bg-[#F774C5] px-[1.3em] rounded-3xl font-medium py-[0.8em] md:text-[0.8rem] text-white lg:rounded-3xl mx-[1rem] lg:mx-[0rem] shadow-sm shadow-[#4299c2] hover:bg-[#fa5fbf] transition',

    free_trail: 'text-[0.7rem] bg-[#0898ec] px-[1.3em] rounded-3xl font-medium py-[0.8em] md:text-[0.8rem] text-white lg:rounded-3xl mx-[1rem] lg:mx-[3rem] shadow-sm shadow-[#418caf] hover:bg-[#1091db] transition',


    features: 'font-bold text-[#8336D0] text-[3rem] md:text-[4.5rem] text-gradient',

    heading2: 'mt-[1.75rem] mb-[0.75rem] md:mb-[1rem] md:mb-[1.25rem] md:text-[1.25rem] lg:text-[1.3rem] text-[1rem] font-semibold text-gradient',

    buttonContainer: 'w-[100%] mt-[2rem] mb-9 flex justify-center lg:justify-start'

  }
  const options  = {
    reverse:        true,  // reverse the tilt direction
    max:            50,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.2,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,    // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  // npm i --save-dev @types/react-tilt

  return (
    <div className={styles.wrapper} >

      <div className={styles.text_div} >

        <div >

          <h1 className={styles.heading2}>Online Education Made</h1>

          <h1 className={styles.features}   >Easy.</h1>
          <h1 className={styles.features}   >Effective.</h1>
          <h1 className={styles.features}  >Accessible.</h1>
        </div>

        <div className={styles.buttonContainer} >

          <button className={styles.join_now} > <Link to='signup' spy={true} smooth={true} offset={-30} duration={400}>Join Now</Link> </button>
          <button className={styles.free_trail}> <Link to='signup' spy={true} smooth={true} offset={-30} duration={400}>Join Now</Link> </button>

        </div>

      </div>

      <Tilt className="Tilt max-w-[600px]  flex items-center justify-center " options={options} style={{ width: '100%', }}  >
        <div className='Tilt-inner ' >
          <img src="./heroImage.png" alt="" className='max-w-[100%] ' />
        </div>
      </Tilt>



    </div>
  )
}

export default HomePage