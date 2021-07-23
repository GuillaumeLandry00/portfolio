import PortfolioList from '../portfolioList/PortfolioList';
import Showcase from '../showcase/Showcase.jsx';
import './portfolio.scss';
import { useState, useEffect } from 'react';
import { mobilePortfolio, webPorfolio, wordpresPortfolio, portfolio, application, vino, extension_wp, indywork } from '../../data.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Portfolio() {

    const [selected, setSelected] = useState('travaux');
    const [data, setData] = useState([])
    const [selectedShowCase, setSelectedShowCase] = useState('app');
    const [dataShowCase, setDataShowCase] = useState(application)

    const list = [
        {
            id: 'travaux',
            title: 'Tous mes travaux'
        },
        {
            id: 'mobile',
            title: 'Application Mobile'
        },
        {
            id: 'web',
            title: 'Application Web'
        },
        {
            id: 'wordpress',
            title: 'Dévelopement WordPress'
        },
    ]

    useEffect(() => {
        switch (selected) {
            case 'travaux':
                setData(portfolio)
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'web':
                setData(webPorfolio);
                break;
            case 'wordpress':
                setData(wordpresPortfolio);
                break;
            default:
                setData(portfolio);
                break;
        }
    }, [selected])

    useEffect(() => {
        switch (selectedShowCase) {
            case 'app':
                setDataShowCase(application)
                break;
            case 'vino':
                setDataShowCase(vino);
                break;
            case 'wp':
                setDataShowCase(extension_wp);
                break;
            case 'indy':
                setDataShowCase(indywork);
                break;
            default:
                setDataShowCase(application);
                break;
        }
    }, [selectedShowCase])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item, index) => (
                    <PortfolioList
                        key={index}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((item, index) => (
                    <div className="item" key={index} onClick={() => setSelectedShowCase(item.slug)}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                    </div>
                ))}


            </div>
            <div className='showCaseContainer'>
                <Showcase data={dataShowCase} />
            </div>
            <a href="#travails" className='anchor'>
                <ExpandMoreIcon className='icon' />
            </a>
        </div>
    )
}
