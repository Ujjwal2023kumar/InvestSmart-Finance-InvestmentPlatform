import React from 'react';

export default function SupportPage() {
    return (  
        <section className='container mt-5 mb-5'>
            <div style={{backgroundColor:"#387ed1"}}>
                <div className='container' style={{height:"30rem"}}>
                    <div className='row'>
                        <h5 style={{color:"white", paddingTop:"2rem"}}>Support Portal</h5>
                        <h5 style={{color:"white", textDecoration:"underline", textAlign:"right", marginTop:"-1rem"}}>Track Tickets</h5>
                    </div>
                    <div className='row'>
                        <div className='col-7'>
                            <h4 style={{color:"white"}} className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                            <div class="input-group input-group-lg">
                                <div><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Eg: how do i activate F&O, why is my order getting rejected' style={{width:"35rem", height:"4rem"}}></input></div>
                                <div className='mt-3'>
                                    <a style={{color:"white", textDecoration:"underline", marginRight:"1rem"}}>Track account opening</a>
                                    <a style={{color:"white", textDecoration:"underline", marginRight:"1rem"}}>Track segment activation</a>
                                    <a style={{color:"white", textDecoration:"underline", marginRight:"1rem"}}>Intraday margins</a>
                                    <a style={{color:"white", textDecoration:"underline", marginRight:"1rem"}}>Kite user manual</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-5'>
                            <h4 style={{color:"white"}} className='mb-3'>Featured</h4>
                            <ol type='1' style={{color:"white"}}>
                                <li><a style={{color:"white", textDecoration:"underline", marginRight:"1rem"}}>Withdrawal of additional margin in Gold Futures contracts</a></li>
                                <li><a style={{color:"white", textDecoration:"underline", marginRight:"1rem"}}>Offer for sale (OFS) – May 2025</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <h4 className='text-muted mt-5 mb-5'>To create a ticket, select a relevant topic</h4>
                <div className='row mb-5'>
                    <div className='col-4'>
                        <h5 className='mb-3'><i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Account Opening</h5>
                        <ul type='none' style={{ lineHeight: "2" }}>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Resident individual</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Minor</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Non Resident Indian (NRI)</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Company, Partnership, HUF and LLP</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Glossary</a></li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <h5 className='mb-3'><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Your Zerodha Account</h5>
                        <ul type='none' style={{ lineHeight: "2" }}>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Your Profile</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Account modification</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Client Master Report (CMR)</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Nomination</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Transfer and conversion</a></li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <h5 className='mb-3'><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;Kite</h5>
                        <ul type='none' style={{ lineHeight: "2" }}>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>IPO</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Trading FAQs</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Margin Trading Facility</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Charts and orders</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Alerts and Nudges</a></li>
                        </ul>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-4'>
                        <h5 className='mb-3'><i class="fa-solid fa-wallet"></i>&nbsp;&nbsp;Funds</h5>
                        <ul type='none' style={{ lineHeight: "2" }}>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Add money</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Withdraw money</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Add bank accounts</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>eMandates</a></li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <h5 className='mb-3'><i class="fa-solid fa-circle"></i>&nbsp;&nbsp;Console</h5>
                        <ul type='none' style={{ lineHeight: "2" }}>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Portfolio</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Corporate actions</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Funds statement</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Reports</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Segments</a></li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <h5 className='mb-3'><i class="fa-solid fa-coins"></i>&nbsp;&nbsp;Coin</h5>
                        <ul type='none' style={{ lineHeight: "2" }}>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Understanding mutual funds</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Coin app</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Coin web</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Transactions and reports</a></li>
                        <li><a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>National Pension Scheme (NPS)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}