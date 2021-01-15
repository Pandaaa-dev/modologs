import React, {useEffect} from 'react'
import './UpdateBanner.css'
const UpdateBanner = (props) => {
 
    return (
        <>
        <div className='updateBannerContainer'>
            <div className='bannerAnimation'>
                <div className='bannerContent'>
                    <div className='bannerTitle'>
                     <p className='title'> Updates</p>  
                    </div>
                    <div data-aos='fade-up' className='bannerDesc'>
                   <p className='desc'> The section below contains updates about how the people in-charge of modo  have visioned it to be, as well as how the vision has changed from time to time.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UpdateBanner