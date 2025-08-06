import React from 'react';

export default function PricingPage() {
    return (
        <section className='container mt-5 mb-5'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1 className='mb-3'>Pricing</h1>
                <p>Free equity investments and flat $20 traday and F&O trades</p>
            </div>
            <div className='row'>
                <div className='col-4 text-center'>
                    <img src= "media\images\pricing0.svg" style={{width:"", margin:"0 auto"}}></img>
                    <h3>Free equality delivery</h3>
                    <p>All equity delivery investments (NSE,BSE), are ansolutely free - $0 brokerage</p>
                </div>
                <div className='col-4 text-center'>
                    <img src= "media\images\intradayTrades.svg" style={{width:"", margin:"0 auto"}}></img>
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat $20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency and commodity trades.</p>
                </div>
                <div className='col-4 text-center'>
                    <img src= "media\images\pricing0.svg" style={{width:"", margin:"0 auto"}}></img>
                    <h3>Free direct MF</h3>
                    <p>All direct mutual funds investments are absolutely free - $0 costing charges</p>
                </div>
            </div>
        </section>   
    );
}