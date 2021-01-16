import React, {useState, useEffect} from 'react'
import Update from '../Update/Update'
import {Element} from 'react-scroll'

import './Updates.css'
const Updates = (props) => {
    // const updateSingular = useRef()
    const [showModal, setShowModal] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const [modalContent, setModalContent] = useState({})
    // const [isVisible, setIsVisible] = useState('displayNO')

 
    const showModalFunc = async (update)=> {
        console.log(update)
        setModalContent(update)
        setShowModal(true)
        setShowBackdrop(true)
    }
    const exitModal = (key) => {
        setShowModal(false)
        setShowBackdrop(false)
    }
    
    return (
        <>
        <Element name='updatesSection' id='updates' className='fullContainer'>
        <div  className='updatesTitle'>Recent Updates</div>
        <div className='alert'>(Click on the cards to see the full update)</div>
        {showBackdrop && <div onClick={exitModal} className='modalBackdrop'></div>}
        {showModal && (
            <div className='modal'>
              
                <div className='modalTitle'>{modalContent.subject}</div>
                <div className='modalDate'>{modalContent.previewDate}</div>
                <div className='modalContent'>{modalContent.content}</div>
                <div className='modalAuthor'>By {modalContent.authorName}</div>
                <div onClick={exitModal} className='order'>Click here to exit</div>
            </div>
        )}
        {props.updatesArray.map(update => {
            return( <Update key={update.key} aosKey={update.key} showModal={() => showModalFunc(update)} subject={update.subject} 
                    author={update.authorName} previewContent = {update.previewContent} 
                    previewDate = {update.previewDate}/> )
        })}
        </Element>
        </>
    )
}

export default Updates