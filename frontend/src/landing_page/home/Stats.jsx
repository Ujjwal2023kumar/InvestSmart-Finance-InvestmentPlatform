import React from 'react';

export default function Stats() {
    return (  
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h4>Customer-first always</h4>
                    <p className='mb-5 opacity-75'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='mb-5 opacity-75'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h4>The Zerodha universe</h4>
                    <p className='mb-5 opacity-75'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className='mb-5 opacity-75'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width:"40rem"}}></img>
                </div>
            </div>
        </div>
    );
}