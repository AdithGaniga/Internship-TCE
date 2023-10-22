import React from "react";

function Header() {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASUDsgZ4MV3PBNti35dpVGLnOvcnjITLTbA&usqp=CAU"
        alt="Mahatma Gandhi"
        className="card-image"
      />
      <div className="card-content">
        <h1 className="card-title">Mahatma Gandhi</h1>
        <p className="card-description">
          Mahatma Gandhi was a prominent leader in the Indian independence movement
          against British colonial rule.
        </p>
      </div>
    </div>
  );
}

export default Header;