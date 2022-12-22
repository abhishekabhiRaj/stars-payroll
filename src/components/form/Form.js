import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { data as Data } from "../../assets/data/data";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, getFormData } from "../../appFeatures/formData/formDataSlice";
import ModalPopUp from "../modal/ModalPopUp";

const text = (<><span>I agree to the </span> <span className="__font-blue">terms of services & privacy </span></>);

const FormField = () => {
  const [input, setInput] = useState({
    companyName: "",
    emailAddress: "",
    contactNo: "",
    password: ""
  });
  const data = useSelector(getFormData);
  const dispatch = useDispatch();
  const submitFormData = () => {
    if (input.companyName !== "" && input.emailAddress !== "" && input.contactNo !== "" && input.password !== "") {
      dispatch(
        setFormData({
          id: data.length,
          companyName: input.companyName,
          emailAddress: input.emailAddress,
          contactNo: input.contactNo,
          password: input.password,
        })
      );
      window.alert("Date store in Redux...");
      setInput({
        companyName: "",
        emailAddress: "",
        contactNo: "",
        password: ""
      });
    } else {
      window.alert("Currently second Modal is commented. Please fill the data to store in redux...")
    }
  }
  return (
    <div className="__form-field p-3">
      <h4 className="__roboto-flex-500 __font-blue text-center m-0 mb-1"> Lets Get Started </h4>
      <p className="m-0 __font-small __roboto-font-300 text-center">One account for all Stars products</p>
      <Form>
        <div className="__input">
          {Data[0]["icon"]["buildingIcon"]}
          <input
            value={input.companyName}
            placeholder="Company Name"
            onChange={(e) => setInput({ ...input, companyName: e.target.value })}
          />
        </div>
        <div className="__input">
          {Data[0]["icon"]["envelopeIcon"]}
          <input
            value={input.emailAddress}
            placeholder="Email Address"
            onChange={(e) => setInput({ ...input, emailAddress: e.target.value })}
          />
        </div>
        <div className="__input">
          {Data[0]["icon"]["telephoneIcon"]}
          <input
            value={input.contactNo}
            placeholder="Contact Number"
            onChange={(e) => setInput({ ...input, contactNo: e.target.value })}
          />
        </div>
        <div className="__input">
          {Data[0]["icon"]["lockIcon"]}
          <input
            value={input.password}
            placeholder="Password" type="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={text} className="__font-extra-small" />
        </Form.Group>
        <Button className="__btn-start" onClick={() => submitFormData()}>
          <span className="mx-auto __font-extra-small">SIGN UP NOW</span>
        </Button>
        {/* Currently second Modal is disabled */}
        {/* <ModalPopUp title="SIGN UP NOW" onClick={() => submitFormData()} className="__btn-start" /> */}
        <p className="mt-2 mb-2 text-center __font-extra-small">or</p>
        <div className="d-flex justify-content-center">
          <section className="__icon-btn" onClick={() => window.alert("Google Login Button")}>
            <img width="20px" height="20px" className="m-2" src={Data[1]["image"]["google"]} alt="google" />
            <span className="__font-extra-small __font-gray">Goolge</span>
          </section>
          <img width="20px" height="20px" className="m-2 __cursor-pointer" src={Data[1]["image"]["linkdin"]} alt="linkdin" onClick={() => window.alert("Linkdin Login Button")} />
          <img width="20px" height="20px" className="m-2 __cursor-pointer" src={Data[1]["image"]["microsoft"]} alt="microsoft" onClick={() => window.alert("Microsoft Login Button")} />
        </div>
        <p className="mt-2 mb-2 text-center __font-extra-small">
          Already have an account? <span className="__font-blue">Sign In</span>
        </p>
      </Form>
    </div>
  );
}

export default FormField;