import React, {useEffect, useState} from 'react'
import {Paper} from '@material-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Update = (props) => {
  const [isEven, setIsEven] = useState(false)
  useEffect(()=> {
    Aos.init({duration:500})
    if(props.aosKey%2 == 0){
      setIsEven(true)
    } else {
      setIsEven(false)
    }
  }, [])
    return (
        <>
          <Paper 
           data-aos={isEven? 'fade-up-right': 'fade-up-left'}
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           onClick={props.showModal}
           className='updateContainer'>
            <div className='first-row'> 
                <div className='subject'>{props.subject}</div>
                <div className='author'>By {props.author}</div>
            </div>
            <div className='second-row'>
                 <div className='content'>{props.previewContent}</div>
            </div>
            <div className='third-row'>
                {props.previewDate}
            </div>
          </Paper>  
        </>
    )
}

export default Update