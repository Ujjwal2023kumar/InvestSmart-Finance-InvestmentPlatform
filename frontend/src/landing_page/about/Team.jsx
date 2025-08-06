import React from 'react';

export default function Team() {
    return (  
        <div className='container'>
            <h2 style={{textAlign:"center"}}>People</h2>
            <div className='row p-5'>
                <div className='col-6'>
                    <img src='media\images\nithinKamath.jpg' style={{width:"50%", borderRadius:"50%"}} className='ms-5'></img>
                    <h5 style={{ marginLeft: "6rem", padding:"1rem"}}>Nithin Kamath</h5>
                    <p style={{ marginLeft: "8.5rem"}}>Founder, CEO</p>
                </div>
                <div className='col-6'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-4' style={{textAlign:"center"}}>
                    <img src='media\images\nithinKamath.jpg' style={{width:"50%", borderRadius:"50%", paddingBottom:"0.5rem"}}></img>
                    <h5>Nikhil Kamath</h5>
                    <p>Co-founder & CFO</p>
                </div>
                <div className='col-4' style={{textAlign:"center"}}>
                    <img src='media\images\nithinKamath.jpg' style={{width:"50%", borderRadius:"50%", paddingBottom:"0.5rem"}}></img>
                    <h5>Nikhil Kamath</h5>
                    <p>Co-founder & CFO</p>
                </div>
                <div className='col-4' style={{textAlign:"center"}}>
                    <img src='media\images\nithinKamath.jpg' style={{width:"50%", borderRadius:"50%", paddingBottom:"0.5rem"}}></img>
                    <h5>Nikhil Kamath</h5>
                    <p>Co-founder & CFO</p>
                </div>
            </div>
        </div>
    );
}