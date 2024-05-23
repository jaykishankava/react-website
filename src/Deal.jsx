import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import './Deal.css'

function Deal() {
    return (
        <div>
            <div className="container">
                <div className="row mb-5">
                    <div className="deal-img">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/deal/bg-deal.jpg" alt="" />
                    </div>
                    <div className="deal-contain col-lg-5 col-md-12 d-none d-sm-none d-md-none d-lg-block shadow">
                        <h3>35% </h3>
                        <h2>Great deal on organic food.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do maecenas accumsan lacus vel facilisis.
                        </p>
                        <div className="time col-lg-6 ps-3">
                            <h3>220 : 18 : 03 : 00</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mb-5">
                    <div className=" col-lg-6 d-flex  ">
                    <div className=" clo-12 col-md-3 col-lg-4" align="center">
                            <div className="card" style={{ width: '10rem' }}>
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5>Vegetables</h5>
                                    <h3><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                        <span>(4.5)</span>
                                    </h3>
                                    <p className="card-text">Fresh organic villa farm lomon 500gm pack</p>
                                    <h4>$120.25 <span>$123.25</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className=" clo-12 col-md-3 col-lg-4" align="center">
                            <div className="card" style={{ width: '10rem' }}>
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5>Vegetables</h5>
                                    <h3><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                        <span>(4.5)</span>
                                    </h3>
                                    <p className="card-text">Fresh organic villa farm lomon 500gm pack</p>
                                    <h4>$120.25 <span>$123.25</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className=" clo-12 col-md-3 col-lg-4" align="center">
                            <div className="card" style={{ width: '10rem' }}>
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5>Vegetables</h5>
                                    <h3><FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                        <span>(4.5)</span>
                                    </h3>
                                    <p className="card-text">Fresh organic villa farm lomon 500gm pack</p>
                                    <h4>$120.25 <span>$123.25</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vagetable col-lg-6  ">
                        <div className="vagetable-img">
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/products-rightview.jpg" alt="" />
                        </div>
                            <div className="vagetable-contain"align="right">
                            <span >
                        Organic & Healthy <br />Vegetables <br />25% OFF
                        </span><br /><br />
                        <button className='rounded '>Shop Now</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deal