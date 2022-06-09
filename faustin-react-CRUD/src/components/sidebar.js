import React from "react"; 
import {Link, Route, Switch} from 'react-router-dom';

import HomeReact from "./homeReact";
import SeeProduct from "./seeProduct";

function Sidebar() {
    return (
        <React.Fragment>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-chart-line"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            <hr className="sidebar-divider my-0"/>
            
			<li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
			<hr className="sidebar-divider"/>
			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
                <a className="nav-link collapsed" href="http://localhost:3030/">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </a>
            </li>

	{/*		<li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                </a>
            </li>
    */}
			<li className="nav-item">
            <Link className="nav-link" to="/HomeReact" exact="true">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>HOME-REACT</span>
                </Link>
            <Link className="nav-link" to="/SeeProduct">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>See-Product</span>
                </Link>

          {/*      <a className="nav-link" href="http://localhost:3030/bproducts/listRtos">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Home</span>
    </a> */}
            </li>

			{/*<hr className="sidebar-divider d-none d-md-block" />*/}
		</ul>
         <Switch>
             {/*saque el exact */}
        <Route path="/HomeReact" exact ={true} component={HomeReact}/>        
       <Route path="/SeeProduct" component={SeeProduct}/> 
         </Switch>
 </React.Fragment>
    )
}



export default Sidebar;