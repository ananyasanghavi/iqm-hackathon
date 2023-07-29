import React from "react";
import {CgProfile} from "react-icons/cg";
import {FaBookOpen} from "react-icons/fa";
import {HiOutlineSearch} from "react-icons/hi"

const Home = () => {
    return (
        <div className="homePage">
            <div className="sidebar">
                    <ul className="sidebarElements">
                         <li className="logo">
                                l
                         </li>
                         <li>
                                <CgProfile className="icon"/>
                         </li>
                         <li>
                               <FaBookOpen className="icon"/>
                         </li>
                    </ul>
            </div>

            <nav className="homeNav">
            <div class="wrapper">
                <div class="searchBar">
                     <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
                        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                        <HiOutlineSearch className="searchIcon"/>
                    </button>
                </div>
            </div>
            </nav>

            <div className="newsArea" >
                <h1>Latest News:</h1>
                <div className="Cards">
                <div className="newsCards">
                    <div className="newsImg">
                        <img src="#" className="news"/>
                    </div>
                    <div>
                    <h5 className="newsTitle">Lorem Ipsum</h5>
                    <p className="author">by Author nasdgwrgme </p>
                   </div>
                </div>
                
                <div className="newsCards">
                <div className="newsImg">
                        <img src="#" className="news"/>
                    </div>
                    <div>
                    <h5 className="newsTitle">Lorem Ipsum</h5>
                    <p className="author">by Author nasdgwrgme </p>
                   </div>
                </div>
                
             <div className="newsCards">
                <div className="newsImg">
                        <img src="#" className="news"/>
                </div>
                  <div>
                    <h5 className="newsTitle">Lorem Ipsum</h5>
                    <p className="author">by Author </p>
                   </div>
                </div>
                
            </div>
            
         </div>
                

     </div>
    );
}

export default Home;