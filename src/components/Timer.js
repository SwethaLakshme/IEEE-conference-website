import { useEffect } from "react";

// ********************************************  timercode-starts **********************************************************

const newYear = "11/9/2022";

const daysEl = document.querySelector('.day');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.seconds');

function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
}
// useEffect
function formatTime(time) {
  return time >= 10 ? time : `0${time}`;
    
}

setInterval(timeCountDown, 1000)


// ********************************************  timercode-ends **********************************************************
const Timer = () => {
    
    // timeCountDown();

    return ( 
        <>
            <div className="timer flex  justify-center  items-center w-full h-full grid grid-cols-2 lg:grid-cols-4 mt-12 relative ml-6 lg:mt-8 lg:m-0">
            
                <div className="countdown-container flex-row justify-center items-center  w-3/5 lg:w-full lg:m-1 xl:m-0">
                    <div className="time bg-daysbackground bg-contain bg-no-repeat day  flex justify-center items-center p-14 h-8 w-8 lg:h-12 lg:w-12 xl:h-full xl:w-full  text-white 2xl:text-6xl text-3xl rounded-[50%] backdrop-blur-lg " >10</div>
                
                    <div className="text-xl md:text-2xl lg:text-3xl flex flex-wrap justify-center ml-8 lg:ml-0 items-center mt-2 ">Days</div>
                </div>
                <div className="countdown-container flex-row justify-center items-center  w-3/5 lg:w-full lg:m-1 xl:m-0">
                    <div className="time hour bg-hoursbackground bg-contain bg-no-repeat flex justify-center items-center p-14 h-8 w-8 lg:h-12 lg:w-12 xl:h-full xl:w-full  text-white 2xl:text-6xl text-3xl rounded-[50%] backdrop-blur-lg " >10</div>
                
                    <div className="text-xl md:text-2xl lg:text-3xl flex flex-wrap justify-center ml-8 lg:ml-0 items-center mt-2 ">Hours</div>
                </div>
                <div className="countdown-container flex-row justify-center items-center  w-3/5 lg:w-full mt-8 lg:m-1 xl:m-0">
                    <div className="time minute bg-minutesbackground bg-contain bg-no-repeat flex justify-center items-center p-14 h-8 w-8 lg:h-12 lg:w-12 xl:h-full xl:w-full  text-white 2xl:text-6xl text-3xl rounded-[50%] backdrop-blur-lg " >10</div>
                
                    <div className="text-xl md:text-2xl lg:text-3xl flex flex-wrap justify-center ml-8 lg:ml-0 items-center mt-2 ">Minutes</div>
                </div>
                <div className="countdown-container flex-row justify-center items-center  w-3/5 lg:w-full mt-8 lg:m-1 xl:m-0">
                    <div className="time seconds bg-secondsbackground bg-contain bg-no-repeat flex justify-center items-center p-14 h-8 w-8 lg:h-12 lg:w-12 xl:h-full xl:w-full  text-white 2xl:text-6xl text-3xl rounded-[50%] backdrop-blur-lg " >10</div>
                
                    <div className="text-xl md:text-2xl lg:text-3xl flex flex-wrap justify-center ml-8 lg:ml-0 items-center mt-2 ">Seconds</div>
                </div>
                {/* <div className="countdown-container ">
                    <div className="time bg-hoursbackground bg-contain bg-no-repeat hour  flex justify-center items-center p-14 h-full w-full text-white text-6xl rounded-[50%] backdrop-blur-lg " >10</div>
                
                    <div className="text-3xl flex flex-wrap justify-center  items-center mt-4 ">Hours</div>
                </div>
                <div className="countdown-container ">
                    <div className="time bg-minutesbackground bg-contain bg-no-repeat minute  flex justify-center items-center p-14 h-full w-full text-white text-6xl rounded-[50%] backdrop-blur-lg " >10</div>
                
                    <div className="text-3xl flex flex-wrap justify-center  items-center mt-4 ">Minutes</div>
                </div>
                <div className="countdown-container ">
                    <div className="time bg-secondsbackground bg-contain bg-no-repeat seconds  flex justify-center items-center p-14 h-full w-full text-white text-6xl rounded-[50%] backdrop-blur-lg " >10</div>
                
                    <div className="text-3xl flex flex-wrap justify-center  items-center mt-4 ">Seconds</div>
                </div> */}
                
            </div>
        </>
     );
}
 
export default Timer;