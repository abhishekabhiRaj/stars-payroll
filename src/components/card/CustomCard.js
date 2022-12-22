import React from "react";

const CustomCard = ({img, title, text, className}) => {
  return (
    <div className={className} >
      <div className="__img">
        <img src={img} alt="img" />
      </div>
      <section>
        <p className="m-0 __font-small __open-sans-font-400">{title}</p>
        <p className="m-0 __roboto-font-300 __font-extra-small">
          {text}
        </p>
      </section>
    </div>
  );
}

export default CustomCard;