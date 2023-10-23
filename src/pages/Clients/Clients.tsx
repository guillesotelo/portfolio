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

type Props = {}

export default function Clients({ }: Props) {
    return (
        <div className="clients__container">
            <div className="clients__logos">
                <img src={VolvoCars} alt="Volvo Cars" className="clients__logo" />
                <img src={SigmaConn} alt="Sigma Connectivity" className="clients__logo" />
                <img src={SigmaConnE} alt="Sigma Connectivity Engineering" className="clients__logo" />
                <img src={Twigoh} alt="Twigoh" className="clients__logo" />
                <img src={MagisHogar} alt="Magis Hogar" className="clients__logo" />
                <img src={GerardoLosasso} alt="Gerardo Losasso" className="clients__logo" />
                <img src={EnamoradaDelMuro} alt="Enamorada del Muro" className="clients__logo" />
                <img src={ByDanyGarcia} alt="by Dany Garcia" className="clients__logo" />
                <img src={ArchonTechStrategies} alt="Archon Tech Strategies" className="clients__logo" />
                <img src={Angelita} alt="Angelita" className="clients__logo" />
            </div>
        </div>
    )
}