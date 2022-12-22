import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ModalBox from "../modal/ModalBox";
import { data } from "../../assets/data/data";
import TextIconComponent from "../text/TextIcon";
import CustomCard from "../card/CustomCard";
import Prototype from "../prototype/Prototype";

var Heading = ({ text }) => <h3 className="__open-sans-font-400 __font-blue">{text}</h3>;

const IndexView = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={6}>
          {/* This prototype is Row and Col */}
          <Prototype data={<TextIconComponent Icon={data[0]["icon"]["cashIcon"]} text="Payroll" />} />
          <Prototype data={<Heading text={data[2]["indexViewText"]["heading"]} />} />
          <Prototype className="mt-2" data={<p className="__font-small __roboto-font-300">{data[2]["indexViewText"]["text"]}</p>} />
          <Row>
            <Col className="m-1 mt-2" md={12}>
              <Row>
                <Col md={6}>
                  <ModalBox className="__btn-start" title="GET STARTED" icon={data[0]["icon"]["arrowIcon"]} />
                </Col>
                <Col md={6}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{data[0]["icon"]["giftIcon"]}</span>
                    <section>
                      <p className="m-0 __open-sans-font-400 __font-extra-small">Try out our payroll free for 10 employees</p>
                      <p className="m-0 __roboto-font-300 __font-gray __font-extra-small">Valid till 31 of Jan 2023</p>
                    </section>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col className="d-flex justify-content-between p-0 position-relative">
              <section className="__bg-image-xs"></section>
              <span />
              <img src={data[1]["image"]["screenImg"]} alt="screen" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={2}>
          <CustomCard img={data[1]["image"]["fingerTipImg"]} title={data[3]["cardText"]["1"]["title"]} text={data[3]["cardText"]["1"]["text"]} className="__card" />
        </Col>
        <Col md={3}>
          <CustomCard img={data[1]["image"]["squareImg"]} title={data[3]["cardText"]["2"]["title"]} text={data[3]["cardText"]["2"]["text"]} className="__card" />
        </Col>
        <Col md={3}>
          <CustomCard img={data[1]["image"]["recycleImg"]} title={data[3]["cardText"]["3"]["title"]} text={data[3]["cardText"]["3"]["text"]} className="__card" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={10} className="mx-auto">
          <h3 className="__open-sans-font-400 p-0 __font-blue text-center">
            500+ High Growth Companies Trust Star Payroll Software
          </h3>
          <p className="__roboto-font-300 __font-large p-0 __font-gray text-center">Join us and find out why</p>
        </Col>
      </Row>
      <div className="__chatBox" onClick={() => { window.alert("Hello, we are Stars Payroll.") }}>
        <img src={data[1]["image"]["chatIcon"]} alt="chatIcon" />
      </div>
      <Row className="mt-5" />
    </Container>
  )
}
export default IndexView;