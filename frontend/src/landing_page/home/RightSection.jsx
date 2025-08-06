import React from 'react';

export default function RightSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (  
        <section className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                        <a href={learnMore} style={{textDecoration:"none", marginLeft:"9rem"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media\images\googlePlayBadge.svg'></img></a>
                        <a href={appStore} style={{marginLeft:"5rem"}}><img src='media\images\appstoreBadge.svg'></img></a>
                    </div> 
                </div>
                <div className='col-6'>
                    <img src={imageUrl}></img>
                </div>
            </div>
        </section>
    );
}