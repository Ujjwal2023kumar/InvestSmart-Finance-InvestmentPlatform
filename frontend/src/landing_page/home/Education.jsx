import React from 'react';

export default function Education() {
    return ( 
        <section className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-5'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' style={{textDecoration:"none"}} className='mb-5'>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{textDecoration:"none"}} className='mb-5'>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6'>
                    <img src='media\images\education.svg'></img>
                </div>
            </div>
        </section>
    );
}