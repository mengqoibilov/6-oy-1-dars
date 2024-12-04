import React from 'react';
import './turtinchiqisim.css'; 
import rasm3 from "./images/rasm3.svg";
import rasm4 from "./images/rasm4.svg";
import rasm5 from "./images/rasm5.svg";
import rasm6 from "./images/rasm6.svg";
import rasm7 from "./images/rasm7.svg";

const Turtinchiqisim = () => {
  return (
    <div className="container">
      <h2 className="title">Наши преимущества</h2>
      <div className="advantages">
    
        <div className="advantage">
          <img src={rasm3} alt="3-х разовое питание" />
          <h3>3-х разовое питание</h3>
          <p>Для комфортного времяпровождения в нашей школе, мы готовим вкусную и полезную еду 3 раза в день.</p>
        </div>
        
    
        <div className="advantage">
          <img src={rasm4} alt="IT технологии" />
          <h3>IT технологии</h3>
          <p>21 век — это век информационных технологий. Ваш ребенок сможет научиться азам программирования и трендам в мире гаджетов.</p>
        </div>
        
  
        <div className="advantage">
          <img src={rasm5} alt="Ментальная арифметика" />
          <h3>Ментальная арифметика</h3>
          <p>Мы обучим детей быстро вычислять в уме сложные математические расчеты.</p>
        </div>
      </div>

      <div className="advantages second-row">
     
        <div className="advantage">
          <img src={rasm6} alt="Общение на английском языке" />
          <h3>Общение на английском языке</h3>
          <p>Для свободного общения на английском языке у нас предусмотрен целый день Speaking.</p>
        </div>

       
        <div className="advantage">
          <img src={rasm7} alt="Иностранные языки" />
          <h3>Иностранные языки</h3>
          <p>Наши высококвалифицированные учителя обучат детей английскому, русскому, арабскому и китайскому языку.</p>
        </div>
      </div>
    </div>
  );
};

export default Turtinchiqisim;
