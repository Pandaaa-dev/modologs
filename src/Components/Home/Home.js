import React, {useState, useEffect} from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import UpdateBanner from '../UpdateBanner/UpdateBanner'
import Updates from '../Updates/Updates'
import updatesArray from './content.json'
 

const Home = () => {

    const [updateesArray, setUpdateesArray] = useState(updatesArray)
    return (
        <div className='homeContainer'>
            <Hero />
        <div className='updateBanner'>  
        <UpdateBanner />
        </div>
        <div className='updates'>
            <Updates updatesArray={updateesArray} />
        </div>
        </div>
    )
}

export default Home