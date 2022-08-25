import { useRef } from "react";
const Navbar = () => {

    const navbar = useRef();
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
    console.log(window.pageYOffset)
    window.onscroll = () =>{
      if (window.pageYOffset >= 320){
      navbar.current.style.position = 'fixed';
      navbar.current.style.top = 0;}
      else
      navbar.current.style.position = 'relative';
      // if(window.pageYOffset)
    }
    // console.log(navbar.current.offsetTop)
    // if(navbar.current.offsetTop<0){
    //   navbar.current.style.position = 'fixed';
    // }

    return(
        <div >
        <div className="w-full bg-white z-10" ref={navbar} >
                    <div className="hidden pb-3 lg:flex lg:justify-center">
                            <a href="#aboutinst" className="block  lg:mx-3 mt-2 md:mt-4 text-base text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">About</a>
                            <a href="#committee-side-id" className="block  lg:mx-3 mt-2 md:mt-4 text-base text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Adviosy committee</a>
                            <a href="#topics-of-interest-id" className="block  lg:mx-3 mt-2 md:mt-4 text-base text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Topics Of Interest</a>
                            <a href="#dates-to-remember-id" className="block  lg:mx-3 mt-2 md:mt-4 text-base text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Timeline</a>
                            <a href="#guidelines-id" className="block  lg:mx-3 mt-2 md:mt-4 text-base text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Guidelines</a> 
                            <a href="#speakerid" className="block  lg:mx-3 mt-2 md:mt-4 text-base text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Speakers</a>
                            <a href="#contact-us" className="block  lg:mx-3 mt-2 md:mt-4 text-base text-sm lg:text-lg font-semibold text-[#331748]  hover:text-hoverpink">Contact Us</a>

                            <a href="#register-id" ><button className='block px-6 py-1 mx-4 mt-3 md:mt-4 text-base text-sm lg:text-lg drop-shadow-2xl  bg-[#331748] hover:bg-hoverpink  text-white rounded-2xl'>REGISTER</button></a>
                    </div>
        </div>

        <div className=" w-full p-2 flex items-center justify-center lg:hidden" id="hamburger-btn">
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
            <button className='justify-items-end px-8 py-1 text-sm  bg-[#331748] hover:bg-blue-700  text-white rounded-2xl'>REGISTER</button>         
        </div>
        
        <div className='grid justify-items-start grid-rows-6 hidden' id="menu">
            <a href="#aboutinst" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">About</a>
            <a href="#committee-side-id" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Adviosy committee</a>
            <a href="#topics-of-interest-id" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Topics Of Interest</a>
            <a href="#dates-to-remember-id" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Timeline</a>
            <a href="#guidelines-id" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Guidelines</a> 
            <a href="#speakerid" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Speakers</a>
            <a href="#contact-us" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Contact Us</a>
        </div>        
        </div>
    )
}

export default Navbar