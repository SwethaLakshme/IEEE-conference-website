import React from 'react'

function Generalinfo() {
  return (
    <>
    <div id="guidelines-id" className='mt-10 relative'>
            <div className='duration-500 scale-100 hover:scale-105 pt-10 grid place-items-center lg:place-items-start lg:pt-20 lg:pl-40'>
                <div className='text-[16px] sm:text-sm md:text-xl lg:text-2xl w-40 sm:w-40 md:w-48 lg:w-60 p-4 lg:p-6 font-semibold bg-ourpurple'>
                    <h1 className='text-white border-b-4 lg:border-r-8 lg:border-b-0 lg:text-right border-babypink pb-2 lg:pr-2'>GENERAL<br></br>
                    <span className='font-bold'>INFORMATION
                    </span></h1>
                </div>
            </div>
            <div className='duration-500 scale-100 hover:scale-105 pl-10 lg:ml-8 lg:-mt-10 lg:pl-80 lg:pr-20'>
                <div className='pl-8 py-10 lg:pl-12 lg:py-10 w-11/12 bg-gradient-to-r from-gradpink/20 to-gradpurple/20 rounded-3xl'>
                    <p className='pl-4 pr-8 lg:pr-12 lg:pl-8 border-l-8 border-ourpurple text-justify text-xs sm:text-sm md:text-sm lg:text-[16px] backdrop-blur'>
                    The original unpublished Technical Papers, Articles and Working Papers having maximum length 6 pages on the topics related to the theme of the conference are invited for presentation / publication in the conference proceedings.<br/><br/>
                    Kindly ensure that your paper is formatted as per Template (not exceeding 6 pages) single-spaced double-column pages using 10-point size font on 8.5×11 inch pages (IEEE conference style), including authors' affiliations, figures, tables, and references. Additional pages per paper above the 6 pages limit will be charged.<br/><br/>
                    <b>Paper Template Link:</b>  <span className='bg-ourpurple rounded-xl p-2 text-white'> <a href="https://www.ieee.org/conferences/publishing/templates.html">Click Here</a></span><br/><br/>
                    <b>Paper submission Link:</b> <span className='bg-ourpink rounded-xl p-2 text-white'> <a href="https://cmt3.research.microsoft.com/ICCST2022">Click Here</a></span><br/><br/>
                    All submissions will undergo a double-blind peer review by the team of peer reviewers based on originality, relevance to the conference theme, technical strength, significance, quality of results, and organization and clarity of presentation of the paper.<br/><br/>
                    </p>
                </div>
            </div>
        
    </div>
    </>
  )
}

export default Generalinfo