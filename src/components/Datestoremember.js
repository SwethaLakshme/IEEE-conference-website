import rightpinimg from "../images/right pin.png"
import leftpinimg from '../images/left pin.png';

const Datestoremember = () => {
    return ( 
        <>
            <div id="dates-to-remember-id" className="datestoremember w-full h-screen mb-5 flex justify-center items-center">
            
                <div className="datestoremembermain w-3/5 h-3/5">
                <h3 className="text-3xl text-center w-full text-gradpurple hover:text-gradpink -mt-10"><b> Dates To Remember </b></h3>
                    <div className="fullpapersubmissioncover mt-5 w-full h-1/3 grid grid-cols-2">
                        <div className="blank w-full h-full ">

                        </div>
                        <div className="fpscontent flex justify-center items-center w-full h-full border-l-4 border-gradpink hover:border-gradpurpl -ml-1">
                            
                            <p className="duration-500 scale-100 hover:scale-105 p-5">
                                <img src={rightpinimg} className=" w-14 h-18 md:w-20 md:h-24" alt="pinimg" />
                                <b className="text-lg md:text-2xl ">September 7,2022</b> <br />
                                <i className="text-md  md:text-xl">Full paper submission</i>
                            </p>
                        </div>  
                    </div>
                    <div className="notificationacceptancecover w-full h-1/3 grid grid-cols-2">
                        
                        <div className="fpscontent flex justify-center items-center w-full h-full border-r-4 border-gradpink hover:border-gradpurple">
                            <p className="duration-500 scale-100 hover:scale-105 p-5">
                                <img src={leftpinimg} className=" w-14 h-18 md:w-20 md:h-24" alt="pinimg" />
                                <b className="text-lg md:text-2xl ">September 28,2022</b> <br />
                                <i className="text-md md:text-xl">Notification Acceptance</i>
                                
                            </p>
                            
                            
                        </div>
                        <div className="blank w-full h-full ">

                        </div>
                    </div>
                    <div className="camerareadysubmission w-full h-1/3 grid grid-cols-2">
                        <div className="blank w-full h-full ">

                        </div>
                        <div className="fpscontent flex justify-center items-center w-full h-full border-l-4 border-gradpink hover:border-gradpurple -ml-1">
                            
                            <p className="duration-500 scale-100 hover:scale-105 p-5">
                                <img src={rightpinimg} className=" w-14 h-18 md:w-20 md:h-24" alt="pinimg" />
                                <b className="text-lg md:text-2xl ">October 5,2022</b> <br />
                                <i className="text-md md:text-xl">Camera ready Submission</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Datestoremember;