const Navbar = () => {
    return(
        <>
        <div className="w-full">
                    <div className="hidden pb-3 md:flex md:justify-center">
                            <a href="#aboutinst" className="block mx-4 mt-2 md:mt-4 text-base lg:text-xl font-semibold text-[#331748]  hover:text-hoverpink">About</a>
                            <a href="#committee-side-id" className="block mx-4 mt-2 md:mt-4 text-base lg:text-xl font-semibold text-[#331748]  hover:text-hoverpink">Adviosy committee</a>
                            <a href="#topics-of-interest-id" className="block mx-4 mt-2 md:mt-4 text-base lg:text-xl font-semibold text-[#331748]  hover:text-hoverpink">Topics Of Interest</a>
                            <a href="#dates-to-remember-id" className="block mx-4 mt-2 md:mt-4 text-base lg:text-xl font-semibold text-[#331748]  hover:text-hoverpink">Timeline</a>
                            <a href="#guidelines-id" className="block mx-4 mt-2 md:mt-4 text-base lg:text-xl font-semibold text-[#331748]  hover:text-hoverpink">Guidelines</a> 
                            <a href="#speakerid" className="block mx-4 mt-2 md:mt-4 text-base lg:text-xl font-semibold text-[#331748]  hover:text-hoverpink">Speakers</a>
                            <a href="#contact-us" className="block mx-4 mt-2 md:mt-4 text-base lg:text-xl font-semibold text-[#331748]  hover:text-hoverpink">Contact Us</a>

                            <a href="#register-id" ><button className='block px-2 mx-4 mt-3 md:mt-4 text-base lg:text-lg drop-shadow-2xl  bg-[#331748] hover:bg-hoverpink  text-white rounded-2xl'>REGISTER</button></a>
                    </div>
        </div>
        <div className='grid justify-items-start grid-rows-6 hidden' id="menu">
                                <a href="#" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">About</a>
                                <a href="#" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Call For Papers</a>
                                <a href="#" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Speakers</a>
                                <a href="#" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Contact Us</a>
                                <a href="#" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Timeline</a>
                                <a href="#" className="block mx-12 mt-4  text-base  font-semibold text-[#331748]  hover:text-hoverpink">Guidelines</a> 


        </div>        
        </>
    )
}

export default Navbar