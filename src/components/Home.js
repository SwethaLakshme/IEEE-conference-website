import clgvideo from '../images/promo sairam.mp4'
import Timer from './Timer';

const Home = () => {
    return (  
        <>
               <div id="homeid" className="videorunsection w-full h-screen static ">

               <div className="contentsection w-4/5 h-screen bg-ourpurple/90 right-0 absolute">  
                    <div className="homecontent text-white w-5/5 h-full top-0 flex justify-center  items-center	relative">
                        <div className="contentalone md:mt-6 lg:mt-0">
                            <p className='text-lg sm:text-xl lg:text-2xl'>
                            <h3 className='text-xl sm:text-2xl lg:text-3xl'> <b> Registration starts on: </b></h3> <br className='hidden sm:hidden lg:block' />
                                20th August 2022
                                <br className='hidden sm:block' /><br className='hidden sm:block'/>
                            <h3 className='text-xl lg:text-3xl'> <b> Registration ends on: </b> </h3> <br className='hidden sm:hidden lg:block'/>
                            7th September 2022                       
                            </p>
                            <br className='hidden md:block'/><br />
                            <h3 className='text-xl w-5/5 lg:text-4xl text-center'> <b>Conference starts in </b> </h3> <br />
                            <Timer /> 
                            <br /><br />
                        </div>
                        
                    </div>
                    
                </div> 
                
               <video src={clgvideo} className="w-full h-screen object-cover" autoPlay loop muted  type="video/mp4"/> 
               
                
 
         </div>
            
        </>
    );
}
 
export default Home;