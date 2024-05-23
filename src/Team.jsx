import React from 'react'
import './Team.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function Team() {
  return (
    <div>
        <div className="container">
            <div className="row">
            <div className= "Popular col-lg-12 mt-5 mb-3" align="center">
                    <h2>Great Words From People</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore lacus vel facilisis.</p>
                </div>
                <div className="row">
                    <div className="team col-lg-4 mb-5">
                        <div className="team-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg" alt="" />
                        </div>
                        <div className="tram-contain"  align="center">
                            <span>Co Founder</span>
                            <h2>Stephen Smith</h2>
                            <p>
                            “eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel facilisis.”
                            </p>
                            <h3>
                                         <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar /> 
                            </h3>
                        </div>
                    </div>
                    <div className="team col-lg-4 mb-5">
                        <div className="team-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg" alt="" />
                        </div>
                        <div className="tram-contain"  align="center">
                            <span>Manager</span>
                            <h2>Lorem Robinson</h2>
                            <p>
                            “eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel facilisis.”
                            </p>
                            <h3>
                                         <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar /> 
                            </h3>
                        </div>
                    </div>
                    <div className="team col-lg-4  mb-5">
                        <div className="team-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg" alt="" />
                        </div>
                        <div className="tram-contain"  align="center">
                            <span>Team Leader</span>
                            <h2>Sabbika Alard</h2>
                            <p>
                            “eiusmpsu dolor sit amet, conse cte tur <br /> ng elit, sed do eiusmod tem lacus vel facilisis.”
                            </p>
                            <h3>
                                         <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar /> 
                            </h3>
                        </div>
                    </div>
                </div>
                <div className= "Popular col-lg-12 mt-5 mb-3" align="center">
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore lacus vel facilisis.</p>
                </div>
                <div className="row">
                <div className="menu col-lg-4 mb-5">
                        
                        <div className="menu-contain ms-3"  >
                            <span>By Admin  | Snacks</span>
                            <h2>Urna pretium elit mauris cursus at elit Vestibulum.</h2>

                            <a href="#">Read More <FaArrowRight /></a>
                        </div>
                        <div className="menu-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" alt="" />
                        </div>
                    </div>   
                    <div className="menu col-lg-4 mb-5">
                        
                        <div className="menu-contain ms-3"  >
                            <span>By Admin  | Food</span>
                            <h2>Best guide to Shopping for organic ingredients.</h2>

                            <a href="#">Read More <FaArrowRight /></a>
                        </div>
                        <div className="menu-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg" alt="" />
                        </div>
                    </div>    
                    <div className="menu col-lg-4 mb-5">
                        
                        <div className="menu-contain ms-3"  >
                            <span>By Admin  | Snacks</span>
                            <h2>Cursus at elit vestibulum urna pretium elit mauris.</h2>
                            <a href="#">Read More <FaArrowRight /></a>
                        </div>
                        <div className="menu-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg" alt="" />
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team