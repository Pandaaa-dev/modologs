import React from 'react'
import './hero.css'
import { Link } from 'react-scroll'
import {Fade} from 'react-awesome-reveal'
const Update = (props) => {
    return (
        <>
            <div className='homeHero'>
                <div className='firstHalf'>
                    <div className='backdropHero'></div>
                </div>
                <div className='secondHalf'>
                    <section className='heroBackdrop'>
                    <Fade cascade triggerOnce duration='500' direction='up'>
                    <div className='HeroTitle'>This ain't the final piece!</div>
                    <div className='HeroDesc'>We haven't even finished planning out our ideas. There's a lot more updates coming. stay tuned! </div>
                    <Link to='updates'
                          smooth={true}>
                        <div className='btn updatesBtn'>Updates</div>
                        </Link> 
                    </Fade>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Update