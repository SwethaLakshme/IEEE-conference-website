import React from 'react'

function Quote() {
  return (
    <div className="bg-cover bg-quotebackground w-full h-96 pt-4 mt-40 lg:mt-20">
        <div className='sm:mt-8'>
            <div className='flex flex-col place-items-end float-right font-bold bg-white mt-12 sm:mt-0 md:mt-0 lg:mt-0 w-96 px-10 py-4'>
                <p>“We are drowning in information, while starving for wisdom. The world henceforth will be run by synthesizers, people able to put together the right information at the right time, think critically about it, and make important choices wisely.” <br/><br/>
                <span className='sm:pl-40 lg:pl-40 font-bold'>– E. O. Wilson</span></p>
            </div>
        </div>
    </div>
  )
}

export default Quote