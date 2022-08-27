import { useRef, useState } from "react";
import Quote from "./Quote";


const Advisorycommittee = () => {

    const AC=useRef();
    const toggle = () => {
        AC.current.style.transform = 'rotateY(180deg)';
      }
      
    const btoggle = () => {
        AC.current.style.transform = 'rotateY(360deg)';
    }
    const [nationaladvisorycommittee, setNAC] = useState([
        {committeeName: 'Dr. Bhuvana Ramachandran ', committeeDesignation: 'University of West Florida, USA'},
        {committeeName: 'Dr. Xiaohui Yuan', committeeDesignation: ' University of North Texas, USA.  Dr. Bhuvana Ramachandran'},
        {committeeName: 'Dr.Osamah Rawashdeh', committeeDesignation: 'Oakland University, Michigan, USA'},
        {committeeName: 'Dr. Lu Ho Ching', committeeDesignation: 'University of Western Australia, Australia'},
        {committeeName: 'Dr. Xavier Fernando', committeeDesignation: 'Ryerson University, Canada'},
        {committeeName: 'Dr. Vincenzo piuri', committeeDesignation: ' University of Milan, Italy '},
        {committeeName: 'Dr. J. Emerson Raja ', committeeDesignation: ' Multimedia University, Malaysia '},
        {committeeName: ' Dr.P.D.D.Dominic', committeeDesignation: ' Universiti Teknologi, Malaysia '},
        {committeeName: 'Mr. B. Venkatesh Prabhu ', committeeDesignation: 'Royal Commission of Yanbu Colleges and Institutes, Saudi Arabia'},
        {committeeName: 'Dr.V.Kalaichelvi ', committeeDesignation: ' Birla Institute of Technology & Science, Pilani, Dubai Campus, Dubai, United Arab Emirates'},
        {committeeName: 'Dr.E.Ben George', committeeDesignation: ' Higher College of Technology, Muscat, Oman'},
        {committeeName: 'Dr. Basim AlhDr. Vincenzo piuriadidi', committeeDesignation: 'Albalqa Applied University, Jordan'},
        {committeeName: 'Dr Shaji.Kalistin.Apolin', committeeDesignation: 'Al Musanna College of Technology, Oman'},
        {committeeName: 'Dr.Seyed M.Bhuri', committeeDesignation: ' University Brunei Darussalam, Brunei Darussalam '},
        {committeeName: 'Mr. Velu Mani, Director', committeeDesignation: '  ZyxSys Computing, London, United Kingdom'},
        {committeeName: 'Mr. Raja Kumar Sampath Kumar ', committeeDesignation: ' Aalto univ school of Electrical Engineers, Finland.'},
        {committeeName: 'Dr. Xiaohui Yuan', committeeDesignation: 'Senior Technical Account Manager, AWS, USA.'},
        {committeeName: 'Dr. S. Sathyachandran', committeeDesignation: ' Senior Security Engineer, NetFlix, USA'},
    ]);

    const [internationaladvisorycommittee, setINAC] = useState([
        {committeeName: ' Dr. R Hariprakash', committeeDesignation: 'Vice Chairman (Academics), IEEE Madras Section'},
        {committeeName: 'Dr. N. Kumarappan ' ,committeeDesignation: 'Professor, Electrical Engineering, Annamalai University, Chidambaram,Tamilnadu, Chairman, IEEE Madras Section'}, 
        {committeeName:'Dr. R. Ramarathnam' ,committeeDesignation: 'Vice Chairman (Industry), IEEE Madras Section'},
        {committeeName: 'Dr. D. Devaraj ',committeeDesignation: 'Secretary, IEEE Madras Section '},
        {committeeName: 'Dr. S. Joseph Gladwin ',committeeDesignation: 'Treasurer,  IEEE Madras Section'},
        {committeeName: 'Dr. V. Gomathi ',committeeDesignation: '  Professor and Head, Department of CSE, National Engineering College,Kovilpatti, Tamilnadu, Chairman,   IEEE Information Theory Society, IEEE Madras Section'},
        {committeeName: 'Dr.Sadagopan ',committeeDesignation: ' IIITDM, Kancheepuram '},
        {committeeName: 'Dr.S.Valli ',committeeDesignation: 'Prof & Head, CEG Campus, Anna University, Chennai. '},
        {committeeName: 'Dr.A.Kannan ',committeeDesignation: 'Anna University,Chennai. '},
        {committeeName: 'Dr.S.Swamynathan ',committeeDesignation: 'Anna University,Chennai. '},
        {committeeName: 'Dr.P.Nirmalkumar ',committeeDesignation: 'Anna University,Chennai. '},
        {committeeName: 'Dr. A Vadivel ',committeeDesignation: 'National Institute of Technology, Trichy '},
        {committeeName: 'Dr. R. Jagadeesh Kannan ',committeeDesignation: 'VIT University Chennai Campus '},
        {committeeName: 'Dr.K.Vivekanandan ',committeeDesignation: 'Pondicherry Engineering College, Pondicherry '},
        {committeeName: 'Dr. E. Ilavarasan ',committeeDesignation: 'Pondicherry Engineering College, Puducherry '},
        {committeeName: 'Dr.M.Hanumanthappa ',committeeDesignation: 'Bangalore University, Bangalore '},
        {committeeName: 'Dr. Niranjanamurthy M ',committeeDesignation: 'MS Ramaiah Institute of Technology, Bangalore'},
        {committeeName: 'Dr.P.ShanmugaPriya ',committeeDesignation: 'SCSVMV University, Kancheepuram '},
        {committeeName: 'Dr.M.A. Maluk Mohamed ',committeeDesignation: 'M.A.M. College of Engineering & Technology, Tirchy '},
        {committeeName: 'Dr. R.Sugumar ',committeeDesignation: 'Velammal Institute of Technology, Chennai '},
        {committeeName: 'Dr.B.Bharathi ',committeeDesignation: 'Professor, Sathyabama Institute of Science & Tech., Chennai. '},
        {committeeName: 'Dr. S. Palanivel ',committeeDesignation: 'Faculty of Engineering And Technology, Annamalai University'},
        {committeeName: 'Dr. K.Selvakumar ',committeeDesignation: 'Faculty of Engineering And Technology, Annamalai University'}, 
        {committeeName: 'Dr.M.Somu ',committeeDesignation: 'KSR College of Engineering, Tiruchengode '},
        {committeeName: 'Dr.R.Velumani ',committeeDesignation: 'KSR College of Engineering, Tiruchengode '},
        {committeeName: 'Dr. S.Vigneshwari ',committeeDesignation: 'Asso.Professor & Head, Sathyabama Institute of Science & Technology, Chennai. '},
        {committeeName: 'Dr.V.S.Giridhar Akula ',committeeDesignation: 'Methodist College of Engg. & Technology, Hyderabad '},
        {committeeName: 'Mr.G.Muthuram ',committeeDesignation: 'Founder & CEO ',committeeDesignation: 'Indigeneous Tech Private Limited, Bangalore '},
        {committeeName: 'Dr.Nickolas ',committeeDesignation: 'Professor, Department of Computer Applications, NIT, Trichy '},
        {committeeName: 'Dr. T. Gnanasekaran ',committeeDesignation: 'Professor, RMK Engineering College, Chennai.'},
        {committeeName: 'Dr. S. Kavitha ',committeeDesignation: 'Associate Professor, SSN College of Engineering, Chennai.'},
    ]);
                

    return ( 
        <>
        <div id="committee-side-id" className="committee-container row mt-20" >
            <div className="switch-btn w-full items-center p-3 sm:p-0 justify-center grid grid-cols-1 sm:grid-cols-2  ">
                <button className="btn bg-ourpurple hover:bg-hoverpurple sm:w-8/12 sm:ml-32 md:ml-36 lg:ml-48 xl:ml-60 2xl:ml-70 p-3  rounded-full text-white text-xs sm:text-sm drop-shadow-xl " onClick={btoggle}>INTERNATIONAL ADVISORY COMMITTEE</button>
                <button className="btn bg-ourpink hover:bg-hoverpink  sm:w-7/12 m-3 p-3 rounded-full text-white text-xs sm:text-sm drop-shadow-xl " onClick={toggle} >NATIONAL ADVISORY COMMITTEE</button>
            </div>
            <div className="committee-container-in mt-10" id="committee-members-id " ref={AC}>
                <div className="committee-list-container  w-full flex flex-col items-center justify-center absolute" id="international-committee" >
                        <ul className="international-committee-list w-4/5 bg-gradient-to-r from-gradpink/20 to-gradpurple/20 items-center justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 rounded-3xl p-10">
                            {nationaladvisorycommittee.map((committeeMember)=>(
                                <li className="w-full international-committee-items flex items-center justify-center  p-5">
                                    <p className="text-sm sm:text-lg text-center"> 
                                        <b>  {committeeMember.committeeName} <br /></b>
                                        <i>  {committeeMember.committeeDesignation} </i> 
                                    </p>
                                </li>
                            ))}
                        </ul>
                    <Quote />
                 </div>
            
            <div className="committee-list-container  w-full flex flex-col items-center justify-center transform-y-180" id="national-committee" >
                <ul className="international-committee-list w-4/5 bg-gradient-to-r from-gradpink/20 to-gradpurple/20 items-center justify-center grid grid-cols-1 md:grid-cols-4 rounded-3xl p-10">
                    { internationaladvisorycommittee.map((icommitteemember) =>(
                        <li className="w-full international-committee-items flex items-center justify-center  p-5">
                            <p className="text-sm sm:text-lg text-center"> 
                                <b> {icommitteemember.committeeName} <br /></b>
                                <i> {icommitteemember.committeeDesignation }</i> 
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </>
    );
}
 
export default Advisorycommittee;
