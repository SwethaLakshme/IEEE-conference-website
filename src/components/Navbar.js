import { useState, useRef } from "react";
const Navbar = () => {

    const navbar = useRef();
    const mobilenavbar = useRef();
    const navlist =useRef();
    const [isActive, setIsActive] = useState(false);

    const togglenavlist = event => {
     
      setIsActive(current => !current);
    };
 
    
    window.onscroll = () =>{
      if (window.pageYOffset >= 320){
      navbar.current.style.position = 'fixed';
      mobilenavbar.current.style.position =' fixed';
      mobilenavbar.current.style.top=0;
      navbar.current.style.top = 0;}
      else{
        navbar.current.style.position = 'relative';
        mobilenavbar.current.style.position = 'relative';
      }
     
    }
    

    return(
        <div >
        <div className="w-full bg-white z-10" ref={navbar} >
                    <div className="hidden pb-3 lg:flex lg:justify-center">
                            <a href="#aboutinst" className="block  lg:mx-3 mt-2 md:mt-4 text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">About</a>
                            <a href="#committee-side-id" className="block  lg:mx-3 mt-2 md:mt-4 text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Advisory committee</a>
                            <a href="#topics-of-interest-id" className="block  lg:mx-3 mt-2 md:mt-4 text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Topics Of Interest</a>
                            <a href="#dates-to-remember-id" className="block  lg:mx-3 mt-2 md:mt-4 text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Timeline</a>
                            <a href="#guidelines-id" className="block  lg:mx-3 mt-2 md:mt-4 text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Guidelines</a> 
                            <a href="#speakerid" className="block  lg:mx-3 mt-2 md:mt-4 text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Speakers</a>
                            <a href="#contact-us" className="block  lg:mx-3 mt-2 md:mt-4 text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Contact Us</a>

                            <a href="#register-id" ><button className='block px-6 py-1 mx-4 mt-3 md:mt-4 text-sm lg:text-lg drop-shadow-2xl  bg-[#331748] hover:bg-hoverpink  text-white rounded-2xl'>REGISTER</button></a>
                    </div>
        </div>

        <div className=" w-full p-2 flex items-center bg-white justify-center lg:hidden z-10" id="hamburger-btn" ref={mobilenavbar}>
            <button onClick={togglenavlist}
                                type="button"
                                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                >
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    ></path>
                                </svg>
            </button>  
            <div className='flex w-full'></div>   
            <a href="#register-id" ><button className='justify-items-end px-8 py-1 text-sm  bg-[#331748] hover:bg-blue-700  text-white rounded-2xl'>REGISTER</button></a>
        </div>
        
        <div className={isActive?'fixed grid justify-items-start w-full h-screen grid-rows-8 top-0 left-0  bg-gradient-to-r from-gradpink/80 to-gradpurple/100 z-20' :'hidden fixed justify-items-start w-full  h-screen grid-rows-8 top-0 left-0  bg-white/80 z-20'}  name="menu" ref={navlist} >
        <button onClick={togglenavlist} className="block ml-4 mt-2 p-2 text-base font-semibold"> <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12"></path></svg></button>
          <div className="w-full grid place-items-center pt-20 pb-80">
            <a href="#aboutinst" onClick={togglenavlist} className="block mx-12 mt-4  text-lg  font-semibold  text-white py-2 px-4 hover:text-hoverpink">About</a>
            <a href="#committee-side-id" onClick={togglenavlist} className="block mx-12 mt-4  text-lg  font-semibold   text-white py-2 px-4 hover:text-hoverpink">Advisory committee</a>
            <a href="#topics-of-interest-id" onClick={togglenavlist} className="block mx-12 mt-4  text-lg   font-semibold  text-white py-2 px-4  hover:text-hoverpink">Topics Of Interest</a>
            <a href="#dates-to-remember-id" onClick={togglenavlist} className="block mx-12 mt-4  text-lg   font-semibold  text-white py-2 px-4  hover:text-hoverpink">Timeline</a>
            <a href="#guidelines-id" onClick={togglenavlist} className="block mx-12 mt-4  text-lg   font-semibold  text-white py-2 px-4 hover:text-hoverpink">Guidelines</a> 
            <a href="#speakerid" onClick={togglenavlist} className="block mx-12 mt-4  text-lg   font-semibold  text-white py-2 px-4 hover:text-hoverpink">Speakers</a>
            <a href="#contact-us" onClick={togglenavlist} className="block mx-12 mt-4  text-lg   font-semibold text-white py-2 px-4  hover:text-hoverpink">Contact Us</a>
          </div>
        </div>        
        </div>
    )
}

export default Navbar