import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import{Row,Col} from 'react-bootstrap';
// const btnStyle = {
//   anlignItem: 'center',
//   content:'center'
// }
export const Contacts = () => {
    return (
      <div  className=" container-fluid mt-5">
          <Row>
             <Col xs={12} md={6}>
                <Image src="Img/one.jpg" thumbnail />
            </Col>
            <Col xs={12} md={6}>
             <Image src="Img/two.jpg" thumbnail />
            </Col>
        </Row>
     </div>
    )
}

export default Contacts;