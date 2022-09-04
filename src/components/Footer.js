import React from "react";

function Footer() {
  return (
    <div id="contact-us" className="static bottom-0 ">
        
      <div className="mt-10 p-12 bg-cover bg-footerbackground">
        <span className="w-full">
          <p className=" duration-500 scale-100 hover:scale-105 text-center text-white hover:text-gray-200 font-bold font-roboto-condensed text-xl md:text-2xl lg:text-3xl">
            Contact Us
          </p>
        </span>

        <div className="pt-7 grid justify-items-center md:grid-cols-3 gap-10 ">

        <div className="duration-500 scale-100 hover:scale-105 bg-[#aa7ca4] p-5 h-65 w-65 opacity-90 rounded-lg">
            <span className="text-white font-roboto-condensed">
              <p className="font-bold text-lg md:text-xl lg:text-2xl text-center">Conference Chair</p>
              <p className=" text-center text-sm md:text-base lg:text-lg font-semibold">Dr B Latha</p>
              <p className="text-center text-sm md:text-base lg:text-lg font-light">Professor & HOD, CSE</p>
              <p className="text-center text-sm md:text-base lg:text-lg font-light">Sri Sai Ram Engineering College</p>
              <p className=" text-sm md:text-base lg:text-lg italic text-center ">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hod.cse@sairam.edu.in">hod.cse@sairam.edu.in</a><br></br>
              <a href="tel:+919840428435">9840428435</a>
              </p>
            </span>
          </div>

          <div className="duration-500 scale-100 hover:scale-105 bg-[#aa7ca4] p-5 h-65 w-65 opacity-90 rounded-lg  ">
            <span className="text-white font-roboto-condensed">
              <p className="font-bold text-lg md:text-xl lg:text-2xl text-center">Publication Chair</p>
              <p className=" text-center text-sm md:text-base lg:text-lg font-semibold">Ms G Manimala</p>
              <p className="text-sm md:text-base lg:text-lg text-center font-light"> Associate Professor, CSE</p>
              <p className="text-sm md:text-base lg:text-lg text-center font-light">Sri Sai Ram Engineering College</p>
              <p className="text-sm md:text-base lg:text-lg italic text-center">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manimala.cse@sairam.edu.in">manimala.cse@sairam.edu.in</a><br></br>
              <a href="tel:+919884675773">9884675773</a>
              </p>
            </span>
          </div>

          <div className="duration-500 scale-100 hover:scale-105 bg-[#aa7ca4] p-5 h-65 w-65 opacity-90 rounded-lg  ">
            <span className="text-white font-roboto-condensed">
              <p className="font-bold text-lg md:text-xl lg:text-2xl text-center">Conference Chair</p>
              <p className=" text-center text-sm md:text-base lg:text-lg font-semibold">Dr B Priya</p>
              <p className="text-sm md:text-base lg:text-lg text-center font-light">Associate Professor, CSE</p>
              <p className="text-sm md:text-base lg:text-lg text-center font-light">Sri Sai Ram Engineering College</p>
              <p className=" text-sm md:text-base lg:text-lg italic text-center">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bpriya.cse@sairam.edu.in">bpriya.cse@sairam.edu.in</a><br></br>
                <a href="tel:+919940137069">9940137069</a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
