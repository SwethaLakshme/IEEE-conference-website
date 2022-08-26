import React from "react";
// import image3 from "../img/image3.png";

function Quote() {
  return (
    <div>
      <div className="h-96 w-screen ">
      <div className="mt-28 sm:mt-28 md:mt-28 lg:mt-28 h-96 w-full bg-no-repeat bg-contain bg-[url('images/Path6402.png')] sm:bg-[url('images/path768.png')] md:bg-[url('images/path1024.png')] lg:bg-[url('images/path4.png')]">
        <div className="h-60 w-full flex justify-end sm:pr-0 md:pr-2 lg:pr-8 lg:pl-10 xl:px-32">
        <div  className=" h-16 w-80 pt-4 sm:pt-4 md:pt-4 lg:pt-0 xl:pt-4">
          <p className="px-12 sm:pl-4 sm:pr-2 md:pl-8 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-serif">
            “We are drowning in information, while starving for wisdom. The
            world henceforth will be run by synthesizers, people able to put
            together the right information at the right time, think critically
            about it, and make important choices wisely.” <br/><span className="font-bold pl-20 sm:pl-40"> - E O Wilson</span>
          </p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Quote;