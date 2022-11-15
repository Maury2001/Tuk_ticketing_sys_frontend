import React from 'react'
import back from '../images/back2.jpg'
import logo from '../images/tuklogo2.jpg'
import {FcGoogle} from 'react-icons/fc'

function Reg() {
  return (
  
 <section className='flex flex-row w-full min-h-screen justify-between bg-white'>
      <div className='w-1/2 min-h-screen'>
       <form>

       <div className='text-black font-sans'>
          <img className='h-25 w-24 bg-transparent right-0 m-14' src={logo} />
          <h2 className='m-4 font-normal text-2xl'>Welcome !!</h2>
          <h4 className='m-4 text-xl font-normal'>
            Create your Account ...
          </h4>
        </div>
        <div className='flex flex-col text-center text-black w-96 align-middle p-4'>
              <input className='text-black text-left m-2 p-2 bg-transparent border border-neutral-800 rounded-lg hover:border-transparent' type={'email'} placeholder={'enter e-mail'} />
              <input className='text-black text-left m-2 p-2 bg-transparent border border-neutral-800 rounded-lg  hover:border-transparent' type={'password'} placeholder={'enter password'} />
              <input className='text-black text-left m-2 p-2 bg-transparent border border-neutral-800 rounded-lg  hover:border-transparent' type={'password'} placeholder={'confirm password'} />

              <button className='text-center text-white hover:text-black hover: border-neutral bg-[#008080] hover:bg-white m-2' type='submit'>SIGN IN</button>
              <button className='text-center flex align-middle hover: border-neutral justify-center text-white  hover:text-black bg-[#008080] hover:bg-white m-2'> <FcGoogle/> Sign up with Google</button>

            </div>

            <div className='text-black text-center p-1'>
              <h5>Already Registered? <a className='cursor-pointer'>Login</a></h5>
            </div>
       </form>

      </div>
      <div className='md:w-1/2 lg:w-1/2 min-h-screen justify-around sm:w-0 '>
        <img className='bg-transparent w-full h-full object-cover' src={back} />

      </div>
    </section>
   
  )
}

export default Reg
