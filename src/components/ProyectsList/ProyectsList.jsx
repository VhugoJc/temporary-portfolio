import React,{useState} from 'react';
import CardList from './CardList';
import {Col, Row} from 'antd';

import techfix from '../../assets/img/techfix.PNG';
import vallarta21 from '../../assets/img/vallarta21.PNG';
import cyblogupslp from '../../assets/img/cyblog.PNG';
import cocteleria from '../../assets/img/cocteleria.PNG';
import buscador from '../../assets/img/buscador.PNG';
import jdconstruction from '../../assets/img/jdconstruction.PNG';
import cotizador from '../../assets/img/cotizador.PNG';
import clima from '../../assets/img/clima.PNG';
import breakingbad from '../../assets/img/breakingbad.PNG';
import ForoItem from '../../assets/img/foro-item.PNG';
import Teoriflix from '../../assets/img/teoriflix.PNG';
import CCR from '../../assets/img/crossing-coronel-romero.PNG';

import jdconstructionGif from '../../assets/img/jdconstruction.gif';
import cyblogGif from '../../assets/img/cyblog.gif';
import techfixgif from '../../assets/img/techfixgif.gif';
import vallarta21gif from '../../assets/img/vallarta21gif.gif';
import coctelgif from '../../assets/img/coctelgif.gif';
import buscadorGif from '../../assets/img/buscadorGif.gif';
import cotizadorGif from '../../assets/img/cotizadorGif.gif';
import climaGif from '../../assets/img/climaGif.gif';
import breakingBadGif from '../../assets/img/breakingBadGif.gif';
import ForoItemGif from '../../assets/img/foro-itemgif.gif';
import TeoriflixGif from '../../assets/img/teoriflixGif.gif';
import CCRGif from '../../assets/img/crossing-coronel-romeroGif.gif';

import './ProyectList.scss';


import 'antd/dist/antd.css';

const ProyectsList = () => {
    // eslint-disable-next-line 
    const [list, setlist] = useState([
    {
        id:12,
        title:"Crossing-Coronel-Romero",
        img:CCR,
        description:"Proyecto escolar de video juego realizado con Unity",
        largeDescription:"Crossing-Coronel-Romero es un video juego dónde colaboré con compañeros de la carrera. Es basado en el popular video juego para dispositivos móviles 'crossy road'. El video juego estáinspirado a su vez en el trayecto que realiza un alumno de la universidad politécnica (polinesio) desde avenida Salvador Nava hasta la universidad por la calle Coronel Romero, de ahí su nombre",
        gif: CCRGif,
        url:"https://github.com/OscarMorado/Crossing-Coronel-Romero"
    },
    {
        id:10,
        title:"Foro Item",
        img:ForoItem,
        description:"Foro nacional de telemática redes y telecomunicaciones",
        largeDescription:"Página prototipo para el foro de la carrera de ITEM 2021 la cual no se implementó por problemas de calendarización por parte del comité organizador del foro",
        gif: ForoItemGif,
        url:"https://foroitem2021-upslp.netlify.app/"
    },{
        id:11,
        title:"Teoriflix",
        img:Teoriflix,
        description:"Proyecto final de la materia de Teoría computacional con interfaz basada en Netflix",
        largeDescription:"Este proyecto escolar es una recopilación de actividades realizadas en el semestre de otoño 2021 de la materia de Teoría Computacional y representa el proyecto final de la materia",
        gif: TeoriflixGif,
        url:"https://teoriflix.netlify.app/"
    },
    {
        id:1,
        title:"TechFix", 
        img: techfix,
        largeDescription: "TechFix es una empresa potosina que esta en crecimiento, dada su alta demanda y competencia, se vió en la necesidad de desarrollar una pagina web para darse a conocer y sobre todo para mejorar la atención a sus clientes a través de citas para un mejor servicio.", 
        gif:techfixgif,
        description:"Sitio web para empresa de reparación de celulares",
        url:"https://zealous-bhaskara-be83cd.netlify.app/#/"
    },{
        id:2,
        title:"Vallarta21", 
        img:vallarta21, 
        largeDescription:"Este sitio surge a partir de la necesidad de una correcta organización de pagos para realizar un viaje turístico en el verano del 2021. El sitió sirvió para cotizar, administrar pagos y usuarios referentes al viaje turístico. Facilitando la organización del evento para el encargado.",
        gif:vallarta21gif,
        description:"Sitio web creado para mejorar la gestión de un viaje turístico.",
        url:"https://vallarta21-34bd3.web.app/"
    },, {
        id:3,
        title:"JD Construction", 
        img:jdconstruction, 
        gif:jdconstructionGif,
        largeDescription:"JD Construction es una empresa que trabaja en el área de construcción en Austin, Texas. El principal ibjetivo de la página web es tener presencia en la web y formalizar la empresa ante potenciales clientes. ",
        description:"Sitio web para empresa de construcción",
        url: "https://www.jdconstructionatx.com/"
    },{
        id:4,
        title:"Cyblogupslp", 
        img:cyblogupslp, 
        largeDescription:"Tras una iniciativa de fomentar la seguridad informática entre los estudiantes de la carrera de tecnologías de la información de la universidad politécnica de San Luis Potosí, se lleva a cabo CYBLOGUPSLP que es un medio para dar a conocer información importante referente a la seguridad informática.",
        gif:cyblogGif,
        description:"Sitio web informativo sobre seguridad informática"
    },{
        id:5,
        title:"Coctelería", 
        img:cocteleria, 
        description:"Aplicación de coctelería",
        gif:coctelgif,
        largeDescription:"Esta aplicación es muy intuitiva y útil para encontrar recetas de cocteles. Basta con agregar el tipo de bebida. Ya sea vodka, tequila, Gin, etc. Indicar que tipo de coctel se busca y la aplicación desplegará diferentes recetas.",
        url: 'https://blissful-darwin-007651.netlify.app/'
    }, {
        id:6,
        title:"Buscador de imagenes", 
        img:buscador, 
        description:"Aplicación para buscar imagenes",
        largeDescription:"Conectada a un banco de imagenes libres y muy popular de internet, esta aplicación permite buscar imagenes de alta calidad y libres de derechos de autor listas para ser descargadas.",
        gif:buscadorGif,
        url: "https://upbeat-aryabhata-611f4b.netlify.app/"
    },{
        id:7,
        title:"Cotizador",
        img:cotizador,
        description:"Aplicación que cotiza en tiempo real criptomonedas",
        largeDescription:"Esta aplicación es muy útil para aquellas personas que han invertido en criptomonedas y tienen que estar pendientes de su inversión. Con el cotizador puedes ver la conversión de diferentes criptomonedas a las monedas más comerciales, de igual puedes ver como cambia el precio en tiempo real.",
        gif:cotizadorGif,
        url:"https://sharp-yalow-466038.netlify.app/"
    },{
        id:8,
        title:"Clima",
        img:clima,
        description:"Aplicación que muestra la temperatura de alguna ciudad",
        largeDescription:"Por medio de esta aplicación puedes conocer el clima de forma instantanea en diferentes ciudades del mundo. Se obtiene información detallada del clima y la temperatura máxima y minima que se presentará.",
        gif: climaGif,
        url:"https://nifty-leakey-9b12a2.netlify.app/"
    },{
        id:9,
        title:"Generador de frases",
        img:breakingbad,
        description:"Generador de frases de la serie Breaking Bad",
        largeDescription:"Breaking bad es una exitosa serie que ha sido situada como la favorita de muchas personas. Con esta app se generán frases aleatorias sobresalientes de los diferentes personajes de dicha serie",
        gif: breakingBadGif,
        url:"https://vibrant-kilby-02c66d.netlify.app/"
    }
]);

    return (  
        <div className="proyect-list">
            <h4>Recopilación de algunos trabajos realizados por <strong>Víctor Hugo Jiménez</strong></h4>
            <br/>
            <br/>
            <Row gutter={16}>
                
            {list
                ?list.map(item=>{
                    return( <CardList
                        key={item.id}
                        item = {item}
                        />)
                    })
                    :null
                }
                <Col sd={2}/>
            </Row>
        </div>
    );
}
 
export default ProyectsList;