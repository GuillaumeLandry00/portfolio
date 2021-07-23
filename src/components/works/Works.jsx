import './works.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { travailData } from '../../data';
import { useState } from 'react';

export default function Works() {
    const [currentSlider, setCurrentSlider] = useState(0);

    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 1) :
            setCurrentSlider(currentSlider < travailData.length - 1 ? currentSlider + 1 : 0)
    }

    return (
        <>
            <div className='works' id='travails'>
                <h1 className='title'>Mes éxperiences</h1>
                <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>


                    {travailData.map((item, index) => (
                        <div className="container" key={item.id}>
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className='flexResponsive'>
                                            <h2>{item.title}</h2>
                                            <p>
                                                {item.desc}
                                            </p>
                                            <span>{item.date}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="right">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <ArrowBackIosIcon className="arrow left" onClick={() => handleClick("left")} />
                <ArrowForwardIosIcon className="arrow right" onClick={() => handleClick()} />
                <a href="#temoinages" className='anchor'>
                    <ExpandMoreIcon className='icon' />
                </a>
            </div>
        </>
    )
}
