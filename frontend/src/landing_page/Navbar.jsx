import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-light container">
            <div className="container-fluid">
                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}><h3 className='text-primary' style={{textDecoration: "none"}}>InvestSmart</h3></Link> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item me-4"><Link className="nav-link" to="/trading">Stock Trading</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary" to="/signup">Register</Link></li>
                    </ul>
                </div>         
            </div>
        </nav>   
    );
}
