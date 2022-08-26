import { useRef } from "react";
const Navbar = () => {

    const navbar = useRef();
    const mobilenavbar = useRef();
    const hamburger = () => {
          if (menu.classList.contains('hidden')){
            menu.classList.remove('hidden');  
          } else{
            menu.classList.add('hidden');
          }
        }
      
    
    
    const menu = document.getElementById("menu");
    const closeburger = (() => {
      if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');  
      } else{
        menu.classList.add('hidden');
      }
    })
    
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
    // window.onscroll = () =>{
    //   if (window.pageYOffset >= 320){
    //   
    //   mobilenavbar.current.style.top = 0;}
    //   else{
    //     ;
    //   }
     
    // }
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
            <a href="#register-id" ><button className='justify-items-end px-8 py-1 text-sm  bg-[#331748] hover:bg-blue-700  text-white rounded-2xl'>REGISTER</button></a>
        </div>
        
        <div className=' fixed grid justify-items-start w-full  h-screen grid-rows-8 hidden top-0 left-0  bg-white/80 z-20' id="menu"  >
            <button className="block mx-12 mt-4 text-base font-semibold text-[#331748]  hover:text-hoverpink" onClick={closeburger}> Close  </button>
            <a href="#aboutinst" onClick={closeburger} className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">About</a>
            <a href="#committee-side-id" onClick={closeburger} className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Advisory committee</a>
            <a href="#topics-of-interest-id" onClick={closeburger} className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Topics Of Interest</a>
            <a href="#dates-to-remember-id" onClick={closeburger} className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Timeline</a>
            <a href="#guidelines-id" onClick={closeburger} className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Guidelines</a> 
            <a href="#speakerid" onClick={closeburger} className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Speakers</a>
            <a href="#contact-us" onClick={closeburger} className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Contact Us</a>
        </div>        
        </div>
    )
}

export default Navbar