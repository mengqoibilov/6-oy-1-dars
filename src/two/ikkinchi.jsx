import React from 'react';
import "./style.css";
import rasm1 from "./img2/rasm1.svg";

function Ikkinchi() {
  return (
    <div>
      <div className="main-content">
        <div className="text-section">
          <h1><span className="highlight">The Best Future Stars</span> - мы заботимся о будущем вашего ребенка</h1>
          <p>Наши опытные преподаватели сделают процесс обучения максимально интересным и эффективным для вашего ребенка.</p>
          <div className="buttons">
            <button className="call-button">Позвонить</button>
            <button className="more-button">Подробнее</button>
          </div>
        </div>
        <div className="image-section">
          <img src={rasm1} alt="Student" />
        </div>
      </div>
    </div>
  );
}

export default Ikkinchi;


