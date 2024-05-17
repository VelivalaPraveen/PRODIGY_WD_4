import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa";
import { GoStopwatch } from "react-icons/go";
import { TiWeatherCloudy } from "react-icons/ti";
import img1 from "./images/hospital.jpg";
import img2 from "./images/stopwatch.png";
import img3 from "./images/weather.png";
import { LuInstagram } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import img5 from "./images/praveen.jpg";




import Aos from "aos";
import Lottie from "lottie-react";



const Profile=()=>{
     return(
        <>
            <div className="main-div">
                <div className="heading">
                    <div className="portfolio">
                    <h1 className="heading-style">Personl Portfolio</h1></div>
                    <div className="nav">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                     </div>
                </div>
                
                <div className="details">
                   <div className="context-details">
                    <p className="context"> 
                    Hello,I am Praveen is a front-end web developer with a solid background in JavaScript frameworks like ReactJS and Vue.js and is also intimately familiar with the MERN (MongoDB, Express, React, and Node.js) software stack.
                    </p>
                    </div>
                    <div className="card-personal">
                    <div className="image-personal">
                        <img src={img5} alt="praveen"></img>
                    </div>
                </div>
                </div>
                <div className="Skills">
                    <h4 className="Skills-style">Skills</h4><hr/>
                    <div className="about-skills">
                        <ol>
                        <li><FaHtml5 size={30}/><label for="html">HTML</label><span><meter value="100" max="100" min="0">HTML</meter></span><br/></li>
                          
                        <li><FaCss3Alt size={30}/><label for="css">CSS</label><span><meter value="100" max="100" min="0"></meter></span></li><br/>


                        <li><IoLogoJavascript size={30}/><label for="java-script">Java-Script</label>
                        <span><meter value="70" max="100" min="0"></meter></span></li><br/>
                        <li><FaReact size={30}/><label for="react">React</label>
                        <span><meter value="85" max="100" min="0"></meter></span></li><br/>
                        </ol>
                    </div>
                </div>
                <hr/>
                <div className="projects">
                    <h4 className="project-heading">Projects</h4>
                    <div className="card-hospital">
                    <div className="image">
                        <img src={img1} alt="hospital"></img>
                    </div>
                    <div className="card-title">
                        <h1>Hospital Management</h1>
                        <p className="hospital-context">Hospital Management system is a computer that hepls to manage information related to Health Care</p>
                    </div>
                </div>
                <div className="card-stopwatch">
                    <div className="image-stopwatch">
                        <img src={img2} alt="stopwatch"></img>
                    </div>
                    <div className="card-title">
                        <h1>StopWatch Web Application</h1>
                        <p className="stopwatch-context">The Stop Watch sample application demonstrates how to create a simple stopwatch application.</p>
                    </div>
                </div>
                    
                <div className="card-weather">
                    <div className="image-weather">
                        <img src={img3} alt="weather"></img>
                    </div>
                    <div className="card-title">
                        <h1>Weather Forecast Project</h1>
                        <p className="weather-context">Weather Forecasting Application is one of the most common mini project in Software Development . In this article, we are going to make a Weather Forecasting Application from scratch which will tell us the weather of any location using its name . We will be covering all the steps you have to do while developing this mini project.</p>
                    </div>
                </div>
                </div>
                <hr/>
                <div className="About-section">
                    <h4 className="About-heading">About</h4><hr/>
                    <h3 className="About-styling">Education:Pursuing a Degree in Engineering</h3>
                    <h3 className="About-styling">Professional Experince:Intern at Prodigy</h3>
                    <h3 className="About-styling">Contact:</h3>
                    
                </div>
                <div className="contact">
                    <a href="https://www.instagram.com/praveen_00017__/" title="instagram"><LuInstagram size={30}/><br/></a>
                    <h3 className="Email"><MdOutlineMail size={30}/>velivalapraveen@gmail.com</h3>
                    <a href="https://www.linkedin.com/in/velivala-praveen-923aa02bb/" title="Linked-in" className="linked-in"><FaLinkedin size={40}/></a>
                </div>
            </div>
        </>

     );
}
export default Profile;