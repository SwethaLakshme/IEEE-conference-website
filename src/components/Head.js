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
          <a href='https://www.ieee.org/'><img src={ieeelogo} alt='ieee logo' className=" absolute top-5 md:top-2 right-3 h-7 w-16 sm:h-10 sm:w-20 lg:w-24 lg:h-12"></img></a>
          </div>
        
            <div className=" p-10 pt-20 justify-center h-full w-full ">
                <span className="text-center ">
                    <h1 className="text-white text-lg sm:text-2xl leading-7 font-barlow-semi-condensed md:text-2xl"><b> SRI SAIRAM ENGINEERING COLLEGE </b></h1>
                    <h1 className="text-white text-md sm:text-2xl leading-7 font-barlow-semi-condensed md:text-3xl ">DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h1>
                    <h1 className="text-white text-md sm:text-2xl leading-7 font-barlow-semi-condensed md:text-lg font-thin">PRESENTS</h1>
                    <h1 className="text-white text-lg sm:text-2xl leading-7 font-barlow-semi-condensed md:text-2xl">IEEE Technically Sponsored</h1>
                    <h1 className="text-white text-lg sm:text-2xl leading-7 font-barlow-semi-condensed md:text-3xl"><b> 1st International Conference on </b></h1>
                    <h1 className="text-white text-md sm:text-2xl leading-7 font-barlow-semi-condensed md:text-2xl">Computational Science and Technology</h1>
                    
                </span>
            </div>

            
            

        </div>

        

    </>
  )
}

export default Head ;
