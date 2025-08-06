import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <h3 className="mb-4">404 - Page Not Found</h3>
                        <p className="mb-4">Sorry, the page you are looking for does not exist.<br />Return to the homepage or explore our services below.</p>
                        <div><Link to="/" className="btn btn-primary">Go to Home</Link></div>
                    </div>
                </div>
                <div className="col-lg-6"><img src="/media/images/hero4.jpg" alt="Page Not Found" style={{ width: '30rem' }} /></div>
            </div> 
        </div>  
    );
}
