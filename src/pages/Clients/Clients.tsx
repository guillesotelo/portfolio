import React from 'react'
import VolvoCars from '../../assets/logos/volvo.png'
import SigmaConn from '../../assets/logos/sigma_conn.png'
import SigmaConnE from '../../assets/logos/sigma_conn_e.png'
import Twigoh from '../../assets/logos/twigoh.png'
import MagisHogar from '../../assets/logos/magis_hogar.png'
import GerardoLosasso from '../../assets/logos/gerardo_losasso.png'
import EnamoradaDelMuro from '../../assets/logos/enamoradadelmuro.png'
import ByDanyGarcia from '../../assets/logos/bydanygarcia.png'
import ArchonTechStrategies from '../../assets/logos/archon_tech_strategies.png'
import Angelita from '../../assets/logos/angelita.png'
import Conexio from '../../assets/logos/conexio.png'
import Interval from '../../assets/logos/interval.svg'

type Props = {}

export default function Clients({ }: Props) {
    return (
        <div className="clients__container">
            <div className="clients__logos">
                <div className="clients__logo-wrapper">
                    <a href='https://www.volvocars.com/se/' target='_blank'><img src={VolvoCars} alt="Volvo Cars" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://www.sigmaconnectivity.com/' target='_blank'>  <img src={SigmaConn} alt="Sigma Connectivity" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://www.sigma.se/sv/contact/sigma-connectivity-engineering/' target='_blank'>   <img src={SigmaConnE} alt="Sigma Connectivity Engineering" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://www.selessux.com/twigoh' target='_blank'> <img src={Twigoh} alt="Twigoh" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://interval.ar/' target='_blank'> <img src={Interval} alt="Magis Hogar" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='' target='_blank'> <img src={MagisHogar} alt="Magis Hogar" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='' target='_blank'> <img src={GerardoLosasso} alt="Gerardo Losasso" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://enamoradadelmuro.myshopify.com/' target='_blank'> <img src={EnamoradaDelMuro} alt="Enamorada del Muro" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://www.conexiogroup.com/' target='_blank'> <img src={Conexio} alt="Conexio" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://bydanygarcia.vercel.app/' target='_blank'>  <img src={ByDanyGarcia} alt="by Dany Garcia" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://archontech.com/' target='_blank'> <img src={ArchonTechStrategies} alt="Archon Tech Strategies" className="clients__logo" /></a>
                </div>
                <div className="clients__logo-wrapper">
                    <a href='https://angelita.vercel.app/' target='_blank'> <img src={Angelita} alt="Angelita" className="clients__logo" /></a>
                </div>
            </div>
        </div>
    )
}