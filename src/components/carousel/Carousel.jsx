import './carousel.scss'
import { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function Carousel({ img }) {

    const [current, setCurrent] = useState(0)
    const length = img.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(img) || img.length <= 0) {
        return null
    }


    return (
        <section className='carousel'>
            <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} />
            <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
            {img.map((item, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={item} alt='app' />)}
                    </div>
                )
            }
            )}
        </ section>
    )
}
