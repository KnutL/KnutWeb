import React, { useState } from 'react';
import { Row, Col, Toast } from 'react-bootstrap';


export const ToastContact = () => {
  const [showToast, setShowToast] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  const toggleShowToast = () => setShowToast(!showToast);
  const toggleFirstTime = () => setFirstTime(!firstTime);

    if(firstTime && showToast === false){
      toggleFirstTime();
      setTimeout(function() {
        toggleShowToast();
      }, 5000);
    }

  return (
    <div className="toast-wrapper">
      <Row>
        <Col xs={12}>
          <Toast onClose={toggleShowToast} show={showToast} animation={true}>
            <Toast.Header>
              <img
                src="https://live.staticflickr.com/2073/5755025502_34f84c635c_b.jpg"
                width="24"
                height="24"
                className="rounded mr-2"
                alt=""
              />
              <strong>Interested?</strong>
            </Toast.Header>
            <Toast.Body>
              <h3>Contact me</h3>
              <p>knut@lyven.se</p>
              <p>0709677282</p>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  )
}