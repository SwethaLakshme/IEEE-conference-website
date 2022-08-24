import React from 'react'
import iccstlogo from '../images/iccstlogo.png'
import ieeelogo from '../images/ieeelogo.png'


function Head() { 
  const hamburger = () => {
    const burger = document.getElementById("hamburger-btn");
    const menu = document.getElementById("menu");

    burger.addEventListener('click',() => {
      if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');  
      } else{
        menu.classList.add('hidden');
      }
    })
}

  return (
    <>
        <div className="w-full h-80 bg-cover bg-center bg-headerbackground">
          
          <img src={iccstlogo} alt='iccst logo' className="absolute top-0 ml-3 mt-2 h-14 w-13 sm:h-16 sm:w-14 lg:h-20 lg:w-16 "></img> 
          <div className='flex w-full '>
            <img src={ieeelogo} alt='ieee logo' className=" absolute top-2 right-3 h-7 w-16 sm:h-10 sm:w-20 lg:w-24 lg:h-12  "></img>
          </div>
        
            <div className=" p-10 pt-20 justify-center h-full w-full ">
                <span className="text-center ">
                    <h1 className="text-white text-xl sm:text-2xl leading-7 font-barlow-semi-condensed md:text-2xl">SRI SAIRAM ENGINEERING COLLEGE</h1>
                    <h1 className="text-white text-xl sm:text-2xl leading-7 font-barlow-semi-condensed md:text-3xl ">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
                    <h1 className="text-white text-xl sm:text-2xl leading-7 font-barlow-semi-condensed md:text-lg font-thin">PRESENTS</h1>
                    <h1 className="text-white text-xl sm:text-2xl leading-7 font-barlow-semi-condensed md:text-2xl">IEEE Technically Sponsored</h1>
                    <h1 className="text-white text-xl sm:text-2xl leading-7 font-barlow-semi-condensed md:text-3xl">1st International Conference on</h1>
                    <h1 className="text-white text-xl sm:text-2xl leading-7 font-barlow-semi-condensed md:text-2xl">Computational Science and Technology</h1>
                    
                </span>
            </div>

            <div className=" w-full p-4 flex md:hidden" id="hamburger-btn">
                <button onClick={hamburger}
                                    type="button"
                                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                    aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                      <path
                                        fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                      ></path>
                                    </svg>
                </button>  
                <div className='flex w-full'></div>   
                <button className='justify-items-end px-2 mx-4 md:mt-4 text-sm  bg-[#331748] hover:bg-blue-700  text-white rounded-2xl'>REGISTER</button>         
            </div>

            

        </div>

        

    </>
  )
}

export default Head ;
