import React from 'react'
import './Baner.css'

function Baner() {
  return (
    <div>
        <div className="container">
            <div className="row cake">
            <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="box shadow">
                        <h5>Cake & Milk</h5>
                        <p>(65 items    )</p>
                    </div>
                    <div className="box shadow">
                        <h5>Fresh Meat</h5>
                        <p>(30 items)</p>
                    </div>
                    <div className="box shadow">
                        <h5>Vegetables</h5>
                        <p>(25 items)</p>
                    </div>
                    <div className="box shadow">
                        <h5>Apple & Mango</h5>
                        <p>(45 items)</p>
                    </div>
                    <div className="box shadow">
                        <h5>Strawberry</h5>
                        <p>(68 items)</p>
                    </div>
                    <div className="box shadow">
                        <h5>View More</h5>
                    </div>
                </div>
                
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="up">
                        <h3>50% off</h3>
                        <h5>Cake</h5>
                        <button className='btn'>Shop Now</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="up hello">
                        <h3>50% off</h3>
                        <h5>Milk</h5>
                        <button className='btn'>Shop Now</button>
                </div>
            </div>
                <div className= "Popular col-lg-12 mt-5 mb-3" align="center">
                    <h2>Popular Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore lacus vel facilisis.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Baner