import React from 'react';
import './beshinchiqisim.css';
import img1 from './image2/img1.svg';
import img from './image2/img.svg';
import img3 from './image2/img3.svg';
import img4 from './image2/img4.svg';
import img5 from './image2/img5.svg';

const Beshinchiqisim = () => {
  return (
    <div className="classes-container">
      <h2 className="title">Классы</h2>
      <div className="classes-grid">

        <div className="class-card">
          <img src={img1} alt="1 класс" />
          <h3>1 классы</h3>
          <p>6-7 лет</p>
          <p>Изучение английского языка, арифметики и общеобразовательных предметов.</p>
          <button>Записаться</button>
        </div>

      
        <div className="class-card">
          <img src={img} alt="2 класс" />
          <h3>2 классы</h3>
          <p>7-8 лет</p>
          <p>Изучение IT-технологий, логического мышления и общеобразовательных предметов.</p>
          <button>Записаться</button>
        </div>

     
        <div className="class-card">
          <img src={img3} alt="3 класс" />
          <h3>3 классы</h3>
          <p>8-9 лет</p>
          <p>Английский язык, психология и ментальная арифметика.</p>
          <button>Записаться</button>
        </div>

       
        <div className="class-card">
          <img src={img4} alt="4 класс" />
          <h3>4 классы</h3>
          <p>9-10 лет</p>
          <p>Французский язык, программирование и спортивные занятия.</p>
          <button>Записаться</button>
        </div>

     
        <div className="class-card">
          <img src={img5} alt="0 класс" />
          <h3>0 классы</h3>
          <p>4-5 лет</p>
          <p>Основы математики, робототехника и логическое мышление.</p>
          <button>Записаться</button>
        </div>
      </div>
    </div>
  );
};

export default Beshinchiqisim;
