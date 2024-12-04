import React from 'react';
import './oltinchiqisim.css'; 
import rasm2 from './img1/rasm2.svg'; 

const Oltinchiqisim = () => {
  return (
    <div className="contact-section">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Контакты</h2>
          <ul>
            <li>г.Ташкент, Чиланзар 16-й квартал, ул. Ботирма</li>
            <li>+998970020771</li>
            <li>+998971970771 (Пн.-Пт. с 09:00 до 17:00)</li>
          </ul>
          <img src={rasm2} alt="School" className="school-image" />
        </div>
        <div className="contact-right">
          <h2>Оставьте заявку</h2>
          <p>В честь открытия нашей школы дарим скидку -20%</p>
          <form>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <textarea placeholder="Номер"></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Oltinchiqisim;

