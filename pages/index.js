import Head from 'next/head'
import NavBar from '../Components/NavBar'
import About from '../Components/About'
import SignUp from '../Components/SignUp'
import HomePage from '../Components/HomePage'
import Courses from '../Components/Courses'

const Home = () => {
  return (
    <div className='px-[1rem] md:px-[3rem] lg:px-[7rem] max-w-[1600px] m-auto ' id='home' >
      <Head>
        <title>SnapLearn | Learn With Fun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative min-h-[100rem] ' >

        <NavBar />
        <HomePage />
        <About />
        {/* <Courses /> */}
        <SignUp />

        

      </div>




    </div>
  )
}

export default Home
// background: rgb(116,247,239);
//         background: linear-gradient(180deg, rgba(116,247,239,1) 0%, rgba(140,186,246,1) 43%, rgba(175,96,255,1) 100%);