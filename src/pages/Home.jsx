import React from 'react';
import ProyectsList from '../components/ProyectsList';
import { Col, Row} from 'antd'
import './Home.scss';
import Particles from 'react-particles-js';
import Helmet from 'react-helmet';


const Home = () => {

    return (        
        <>
         <Helmet>
                <title>
                  Mi portafolio -Victor Hugo Jimenez
                </title>
            </Helmet>
        <div className="particulas">
            <Particles />
        </div>
        <Row>
            <Col md={2}/>
            <Col md={20}>
                <div className="home">
                    <h1 className="home-header">Portafolio</h1>
                    <ProyectsList/>
                </div>
            </Col>
            <Col md={2}/>
        </Row>
        </>
    );
}
 
export default Home;