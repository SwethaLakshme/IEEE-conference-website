import React from "react";

function Footer() {
  return (
    <div className="static bottom-0 ">
        
      <div className=" mt-10 p-12 bg-cover bg-[url('img/footer2.png')]">
        <span className="w-full">
          <p className=" text-center text-white font-bold font-roboto-condensed text-3xl">
            Contact Us
          </p>
        </span>

        <div className="pt-7 grid justify-items-center lg:grid-cols-3 gap-10 ">

          <div className="bg-[#aa7ca4] p-5 h-65 w-65 opacity-90 rounded-lg  ">
            <span className="text-white font-roboto-condensed">
              <p className="font-bold text-2xl text-center">Publication Chair</p>
              <p className=" text-center text-lg font-semibold">MS G Manimala</p>
              <p className="text-center font-light"> Associate Professor, CSE</p>
              <p className="text-center font-light">Sri Sai Ram Engineering College</p>
              <p className=" italic text-center">
                manimala.cse@sairam.edu.in<br></br>
                9884675773
              </p>
            </span>
          </div>

          <div className="bg-[#aa7ca4] p-5 h-65 w-65 opacity-90 rounded-lg  ">
            <span className="text-white font-roboto-condensed">
              <p className="font-bold text-2xl text-center">Conference Chair</p>
              <p className=" text-center text-lg font-semibold">Dr B Latha</p>
              <p className="text-center font-light">Professor & Head of Department, CSE</p>
              <p className="text-center font-light">Sri Sai Ram Engineering College</p>
              <p className=" italic text-center">
                hod.cse@sairam.edu.in<br></br>
                9840428435
              </p>
            </span>
          </div>

          <div className="bg-[#aa7ca4] p-5 h-65 w-65 opacity-90 rounded-lg  ">
            <span className="text-white font-roboto-condensed">
              <p className="font-bold text-2xl text-center">Conference Chair</p>
              <p className=" text-center text-lg font-semibold">Dr B Priya</p>
              <p className="flex justify-center font-light">Associate Professor, CSE</p>
              <p className="text-center font-light">Sri Sai Ram Engineering College</p>
              <p className=" text-center italic">
                bpriya.cse@sairam.edu.in<br></br>
                9940137065
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
