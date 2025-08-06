import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div className="container d-flex justify-content-between align-items-center">
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}><h3 className='text-primary' style={{textDecoration: "none"}}>InvestSmart</h3></Link>
            <div className="d-flex gap-3">
                <Link to="https://www.youtube.com" style={{ textDecoration: 'none', color: '#000' }}><i className="fa-brands fa-youtube fs-4 text-danger"></i></Link>
                <Link to="https://www.facebook.com" style={{ textDecoration: 'none', color: '#000' }}><i className="fa-brands fa-facebook fs-4 text-primary"></i></Link>
                <Link to="https://www.github.com" style={{ textDecoration: 'none', color: '#000' }}><i className="fa-brands fa-github fs-4"></i></Link>
                <Link to="https://www.linkedin.com" style={{ textDecoration: 'none', color: '#000' }}><i className="fa-brands fa-linkedin fs-4 text-primary"></i></Link>
            </div>
        </div>
    );
}
