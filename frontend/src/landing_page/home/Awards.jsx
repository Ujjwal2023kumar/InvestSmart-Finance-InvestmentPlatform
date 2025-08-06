import React from 'react';

export default function Awards() {
    return ( 
        <section className="container mt-5 mb-5">
            <div className="row">
                <div className="col-7">
                    <img src='media/images/largestBroker.svg' alt = 'Hero Image' className='mb-5' style={{width:"30rem"}}></img>
                </div>
                <div className="col-5">
                    <h1 className='mb-3'>Largest stock broker in India</h1>
                    <p className='mb-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
