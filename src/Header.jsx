import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdLegendToggle } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import './Header.css'

function Header() {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-12">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
               <div className="col-lg-8">
               <div className="d-flex flex-wrap justify-content-center">
               
               <form className="d-flex flex-wrap">
                 <input className="" style={{border:"1 solid"}} type="search" placeholder="Search" aria-label="Search" />
                 <input className="" type="search" placeholder="All Categories" aria-label="Search" />
                 <button className="btn btn-outline-light bg-success" type="submit"><FaSearch />
                </button>
               </form>
             </div>
               </div>
                </div>
             
             <div className="col-lg-4">
             <div className="list">
              <span><a href="#"><FaRegUser /> Account</a></span>
              <span><a href="#"><FaRegHeart /> Wishlist</a></span>
              <span><a href="#"><RiShoppingCartLine /> Cart</a></span>
            </div>
             </div>
            </nav>
          
          </div>
        </div>
        <div className="header d-flex flex-wrap mt-3">
          <div className="btn col-lg-2 d-flex flex-wrap">
              <button><i><MdLegendToggle /></i></button>
          </div>
          <div className="item col-lg-7  d-flex flex-wrap justify-content-around  pe-3">
            <span><a href="#">Home</a></span>
            <span><a href="#">Category <IoIosArrowDown /></a></span>
            <span><a href="#">Products <IoIosArrowDown /></a></span>
            <span><a href="#">Pages <IoIosArrowDown /></a></span>
            <span><a href="#">Blog <IoIosArrowDown /></a></span>
            <span><a href="#">Elements <IoIosArrowDown /></a></span>
          </div>
          <div className="call col-lg-3" align="center">
          <IoCallOutline /> +123( 456 )( 7890 )
          </div>
        </div>
        <div className="slider mt-3">
          
          <div className="col-lg-6">
            <span className='explor'>100%</span><span className='explor2'>Organic Fruits</span>
            <h2>Explore fresh & <br></br>juicy fruits.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet reicendis beatae consequuntur.</p>
            <button className='rounded '>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header