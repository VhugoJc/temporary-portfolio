import React,{useState} from 'react';
import { Button, Card, Col, Row } from 'antd';
import './ProyectList.scss';
import Modal from '../Modal';


const CardList = ({item}) => {
  const {title, img, description,url,largeDescription,gif} = item;
  const [content, setcontent] = useState();
  const [isVisible, setIsVisible] = useState(false);

    const {Meta} = Card;

    const onclick = () =>{
      setcontent(
       <Row>
         <Col xl={12}>
           <div  style={{textAlign:"center",height:"500px",paddingTop:"50px"}}>

           <div style={{height:"250px",marginTop:"50px",padding:"10px 10px 10px 10px"}} >
             <h1>{title}</h1>
              <p style={{fontSize:"16px"}}>
                  {largeDescription}
              </p>
           </div>
           <Button type="primary" style={{marginTop:"10px  "}} href={url} target="_blank" rel="noopener referrer" >
            Ver Sitio Web
          </Button>
           </div>
         </Col>
         <Col xl={12}>
        <div style={{textAlign:"center",height:"500px",paddingTop:"100px"}}>
          <img
            alt={title}
            src={gif}
            style={{width:"90%"}}
          />
          <br/>
         
        </div>
         </Col>
       </Row>
      );
      setIsVisible(true);
    }

    return (
      <>
        <Col sd={8}>
            <Card onClick={onclick}
                className="proyect-list-card"
                hoverable
                cover={
                  <img
                  alt={title}
                  src={img}
                  />
                }
                >
                <Meta title={title} description={description} />
            </Card>
        </Col>  
      <Modal
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        width={"1200px"}
        >
        {content}
      </Modal>
      </>
    );
}
 
export default CardList;