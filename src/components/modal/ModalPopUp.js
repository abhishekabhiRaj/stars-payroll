import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { data } from "../../assets/data/data";

// modal
const ModalPopUp = ({ title, className }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitAlert = () => {
    window.alert("Data saved in redux...");
    handleClose();
  }
  return (
    <div>
      <Button className={className} onClick={handleShow}>
        <span className="__title text-center mx-auto">{title}</span>
      </Button>
      <Modal size="sm" className="__modal-bg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Body>
          <Container>
            <Row>
                <Col className="d-flex justify-content-center"> {data[0]["icon"]["checkIcon"]} </Col>
                <p className="__roboto-flex-500 text-center m-0 mt-2 __font-small">Account setup successful</p>
                <p className="__roboto-font-300 text-center __font-extra-small">
                    Your Stars Payroll account has been successfully
                    created. Please check the verification link which 
                    is sent on your mail.
                </p>
                          <Button className="__btn-start" onClick={handleClose}>
                              <span className="__title text-center mx-auto">Go To Dashboard</span>
                          </Button>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalPopUp;
