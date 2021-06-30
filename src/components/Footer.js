import React from 'react';

import Logo from './Logo'

import AppStore from '../img/googleplay.png'
import GooglePlay from '../img/appstore.png'

import FB from '../img/icons/FB.png'
import IG from '../img/icons/IG.png'
import TG from '../img/icons/Telegram.png'
import VK from '../img/icons/VK.png'
import WA from '../img/icons/WA.png'
import YT from '../img/icons/YT.png'


function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo">
              <Logo color={'white'}/>
            </div>
            <div className="footer-icons">
              <div className="footer-icon">
                <img src={AppStore} alt='AppStore'/>
              </div>
              <div className="footer-icon">
                <img src={GooglePlay} alt='GooglePlay'/>
              </div>
            </div>
            <div className="footer-contacts">
              <div className="contacts-title">Наши контакты</div>
              <div className="contacts-tel">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#FAF9F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              +7(495)109-03-09</div>
              <div className="contacts-mail">
              <span>
                <svg width="24" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              go@crossball.ru</div>
            </div>
          </div>


          <div className="footer-right">
            <ul className="col">
              <li>Разделы</li>
              <li>Главная</li>
              <li>Расписание</li>
              <li>Игровые отчёты</li>
              <li>Статистика</li>
            </ul>
            <ul className="col">
              <li>Виды спорта</li>
              <li>Футбол</li>
              <li>Баскетбол</li>
              <li>Волейбол</li>
            </ul>
            <ul className="col">
              <li>Полезное</li>
              <li>Как записаться?</li>
              <li>Ответы на вопросы</li>
              <li>Достижения</li>
            </ul>
            <ul className="col">
              <li>Чё почём</li>
              <li>Абонименты</li>
              <li>Корп. клиентам</li>
              <li>Партнёры</li>
            </ul>

          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-warning">© Все права защищены</div>
          <div className="footer-social-icons">
            <div className="social-icon">
              <img src={IG} alt=""/>
            </div>
            <div className="social-icon">
              <img src={VK} alt=""/>
            </div>
            <div className="social-icon">
              <img src={FB} alt=""/>
            </div>
            <div className="social-icon">
              <img src={YT} alt=""/>
            </div>
            <div className="social-icon">
              <img src={TG} alt=""/>
            </div>
            <div className="social-icon">
              <img src={WA} alt=""/>
            </div>
          </div>
          <div className="footer-info">Cделали в <a href="#">Spans</a></div>
        </div>
      </div>
    </footer>   
  );
}

export default Footer;
