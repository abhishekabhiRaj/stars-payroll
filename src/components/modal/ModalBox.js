import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import CustomCard from "../card/CustomCard";
import FormField from "../form/Form";
import TextIcon from "../text/TextIcon";
import { data } from "../../assets/data/data";

// modal
const ModalBox = ({ title, icon, className }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="overflow-hidden">
      <Button className={className} onClick={handleShow}>
        <span className="__title">{title}</span>
        <span>{icon}</span>
      </Button>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Body className="position-relative overflow-hidden">
          <section className="__bg-image-md"/>
          <Container>
            <Row>
              <Col md={5} className="d-flex justify-content-center align-items-center p-5">
                <div className="__z-1">
                  <TextIcon Icon={data[0]["icon"]["cashIcon"]} text="Stars Payroll" />
                  <CustomCard img={data[1]["image"]["fingerTipImg"]} title={data[3]["cardText"]["1"]["title"]} text={data[3]["cardText"]["1"]["text"]} className="__card-horizontal mt-3" />
                  <CustomCard img={data[1]["image"]["squareImg"]} title={data[3]["cardText"]["2"]["title"]} text={data[3]["cardText"]["2"]["text"]} className="__card-horizontal mt-3" />
                  <CustomCard img={data[1]["image"]["recycleImg"]} title={data[3]["cardText"]["3"]["title"]} text={data[3]["cardText"]["3"]["text"]} className="__card-horizontal mt-3" />
                </div>
              </Col>
              <Col md={6} className="d-flex justify-content-center align-items-center p-1">
                <FormField />
              </Col>
              <Col md={1}>
                <span className="__modal-close-btn" onClick={handleClose}>
                  {data[0]["icon"]["closeIcon"]}
                </span>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalBox;
