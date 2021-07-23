import './showcase.scss';
import Carousel from '../carousel/Carousel';

export default function Showcase({ data }) {
    console.log(data.img);
    return (
        <>
            <h1 className='showCaseTitle'>{data.title}</h1>
            <div className='showCase'>
                <div className='left'>
                    <Carousel img={data.img} />
                </div>
                <div className="right">
                    <h2 className='hide'>Détails</h2>
                    <hr />
                    <p>{data.details}</p>
                    <div className='flex'>
                        <div className='bottom'>
                            <h3 className='title'>Téchnologies utilisées</h3>
                            <hr />
                            <div className='containerRow'>
                                {data.technologies.map((item, index) => (
                                    <div key={index}>
                                        <img src={`https://guillaumeartiste3d.ca/wp-content/uploads/${item}.png`} alt={`logo-${item}`} className='logo_prog' />
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className='lienUtile'>
                            <h4 className='title'>Liens utiles</h4>
                            <hr />
                            <div className='containerRow'>
                                {data.github && (<a href={data.github} rel="noreferrer" target='_blank'><img src="https://guillaumeartiste3d.ca/wp-content/uploads/GitHub-Mark.png" alt="github" className='logo' /></a>)}
                                {data.lien && (<a href={data.lien} rel="noreferrer" vtarget='_blank'><img src="https://guillaumeartiste3d.ca/wp-content/uploads/web.png" alt="website" className='logo' /></a>)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
