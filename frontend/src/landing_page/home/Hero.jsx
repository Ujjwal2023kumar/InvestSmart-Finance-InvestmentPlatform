import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return ( 
        <section className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-5">
                    <h1 className='mb-3'>Invest in everything</h1>
                    <p className='mb-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <div><Link className="btn btn-primary" to="/signup">Signup for Free</Link></div>
                </div>
                <div className="col-7">
                    <img src='media/images/homehero.png' alt = 'Hero Image' className='mb-5' style={{width:"50rem"}}></img>
                </div>
            </div>
        </section>
    );
}