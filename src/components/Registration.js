import React from 'react'

function Registration() {
  return (
    <div id="register-id" className='w-full'>
        <div>
            <h1 className= 'duration-500 scale-100 hover:scale-105 text-center py-10 sm:text-sm md:text-lg lg:text-lg'><span className='bg-ourpurple text-white hover:text-gray-200 font-bold rounded-xl px-8 py-2 text-sm sm:text-sm md:text-lg lg:text-2xl'>REGISTRATION</span></h1>
        </div>
        <div className=' bg-gradient-to-r from-gradpink/20 to-gradpurple/20 rounded-3xl mx-10 p-10 text-xs sm:mx-14 sm:p-14 md:p-10 lg:mx-60 my-2 '>
        <div className='w-12/12 flex flex-col justify-center content-center items-center '>
            <div className='flex flex-col justify-center content-center p-4 sm:text-sm sm:px-4 md:text-[16px] md:px-10 lg:p-12 lg:pb-2 lg:text-[16px]'>
                <div><b>Paper Template Link - </b><a className="underline hover:text-blue-800 " href="https://www.ieee.org/conferences/publishing/templates.html">Click Here</a></div><br/>
                <div><b>Paper Submission Link - </b><a className="underline hover:text-blue-800 " href="https://cmt3.research.microsoft.com/ICCST2022">Click Here</a><br/></div><br/>
                <div><b>Instructions for paper submission - </b><a className="underline hover:text-blue-800 " href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html">Click Here</a></div><br/>
                <div><b>Instructions for creating an account - </b><a className="underline hover:text-blue-800" href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html">Click Here</a></div><br/>
                <div><b>All questions about submissions can be sent as mail to - </b><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ieeeiccst2022.cse@sairam.edu.in">ieeeiccst2022.cse@sairam.edu.in</a></div><br/><br/>     
            </div>
        </div>
        <div className='w-full flex justify-center items-center'>
            <div className='rounded-2xl overflow-x-auto'>
                <table className="table-auto border-seperate text-white text-xs sm:text-sm md:text-sm lg:text-[16px]">
                    <thead className='bg-tablegrey'>
                        <tr>
                            <th width="50%" className=""></th>
                            <th width="25%" colSpan={2} className='py-4 w-60'>IEEE</th>
                            <th width="25%" colSpan={2} className='py-4 w-60'>Non - IEEE</th>
                        </tr>
                    </thead>
                    <thead className='bg-black'>
                        <tr>
                            <th></th>
                            <th className='p-4'>Indian</th>
                            <th className='p-4'>Foreign</th>
                            <th className='p-4'>Indian</th>
                            <th className='p-4'>Foreign</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-tablepurple'>
                            <td className='p-4 text-center'>Research Scholar/UG/PG</td>
                            <td className='p-4 text-center text-[10px] sm:text-sm md:text-sm lg:text-[16px]'>₹ 5000</td>
                            <td className='p-4 text-center text-[10px] sm:text-sm md:text-sm lg:text-[16px]'>$100</td>
                            <td className='p-4 text-center text-[10px] sm:text-sm md:text-sm lg:text-[16px]'>₹ 6000</td>
                            <td className='p-4 text-center text-[10px] sm:text-sm md:text-sm lg:text-[16px]'>$125</td>
                        </tr>
                        <tr className='bg-tablepink'>
                            <td className='p-4 text-center'>Academician</td>
                            <td className='p-4 text-center'>₹ 6000</td>
                            <td className='p-4 text-center'>$125</td>
                            <td className='p-4 text-center'>₹ 7000</td>
                            <td className='p-4 text-center'>$150</td>
                        </tr>
                        <tr className='bg-tablepurple'>
                            <td className='p-4 text-center'>Industry/R&D</td>
                            <td className='p-4 text-center'>₹ 7000</td>
                            <td className='p-4 text-center'>$150</td>
                            <td className='p-4 text-center'>₹ 8000</td>
                            <td className='p-4 text-center'>$175</td>
                        </tr>
                        <tr className='bg-tablepink'>
                            <td className='p-4 text-center'>Listener with certificate</td>
                            <td className='p-4 text-center'>₹ 1500</td>
                            <td className='p-4 text-center'>$50</td>
                            <td className='p-4 text-center'>₹ 2000</td>
                            <td className='p-4 text-center'>$75</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Registration