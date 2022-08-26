import React from 'react'

function Speakers() {
  return (
    <div id="speakerid">
        <div>
            <div className='duration-500 scale-100 hover:scale-105'><h1 className= 'text-center py-10'><span className='bg-ourpurple text-white hover:text-gray-200 font-bold rounded-xl px-8 py-2 text-lg lg:text-2xl'>SPEAKERS</span></h1></div>
        </div>
        <div className='grid grid-rows gap-4 mx-20 sm:mx-30 md:mx-40 lg:mx-40 py-10 bg-gradient-to-r from-gradpink/20 to-gradpurple/20 rounded-3xl'>
            <div className='grid grid-cols-1 text-xs sm:grid-cols-2 sm:text-sm md:grid-cols-2 md:text-sm lg:grid-cols-3 lg:text-[16px]'>
                <div className="text-center p-8">
                    <b>Dr. N. Kumarappan</b><br></br>
                    Professor,<br></br> Electrical Engineering,
                    Annamalai University,<br></br> 
                    Chidambaram,Tamilnadu,<br></br> 
                    Chairman, IEEE Madras Section
                </div>
                <div className='text-center p-8'>
                    <b>Dr. V. Gomathi</b><br></br>
                    Professor and Head, Department of CSE, <br></br>
                    National Engineering College, Kovilpatti, Tamilnadu, <br></br>
                    Chairman, IEEE Information Theory Society, <br></br>
                    IEEE Madras Section
                </div>
                <div className='text-center p-8'>
                    <b>Mr. Rajakumar</b><br></br>
                    Senior Technical Account Manager, <br></br>
                    AWS,<br></br>
                    USA
                </div>
                <div className='text-center p-8'>
                    <b>Dr. R Sundar</b><br></br>
                    Scientist, NIOT, <br></br>
                    Chennai, <br></br>
                    Tamil Nadu, India
                </div>
                <div className='text-center p-8'>
                    <b>Mr. SampathKumar Veeraraghavan</b><br></br>
                    Global Chair, <br></br>
                    IEEE Humanitarian Activities Committee,<br></br>
                    Senior Technical Program management Leader,<br></br> 
                    AWS, USA
                </div>
                <div className='text-center px-8 pt-8'>
                    <b>Dr. Philip Treleaven</b><br></br>
                    Professor, <br></br>
                    University College of London, <br></br>
                    United Kingdom
                </div>
            </div>
            <div className='grid grid-cols-1 text-xs sm:grid-cols-2 sm:text-sm md:grid-cols-2 md:text-sm lg:grid-cols-2 lg:text-[16px]'>
                <div className='text-center p-8'>
                    <b>Dr. N Elango </b><br></br>
                    Associate Professor, Faculty of Engineering, <br></br>
                    Technology and Build Environment, <br></br>
                    USCI University, <br></br>
                    Kuala Lumpur, Malaysia
                </div>
                <div className='text-center p-8'>
                    <b>Dr. Keoy Kay Hooi</b><br></br>
                    Director, Insititute of Computer Science <br></br>
                    and Digital Innovation,<br></br>
                    USCI University, <br></br> 
                    Kuala Lumpur, Malaysia <br></br>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speakers