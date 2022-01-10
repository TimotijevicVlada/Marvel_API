import React from "react";

const Caracters = ({ caractersData }) => {
  return (
    <div className="caracters">
      <div className="caracters_wrapper">
        {caractersData.map((item) => (
          <div key={item.id} className="caracter">
            <div className="picture">
              <img
                src={item.thumbnail.path + "/portrait_incredible.jpg"}
                alt={item.name}
              />
            </div>
            <div className="name">
              <span>{item.name}</span>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caracters;
