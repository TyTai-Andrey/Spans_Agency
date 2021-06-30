import React, {useState} from 'react'; 
import ava from '../img/Ellipse 4.png' 

import AchievementBlock from './AchievementBlock' 
import IconForStats from './IconForStats' 
import SeasonElem from './SeasonElem' 

import Data from '../Data/Data'         

function Main() { 
  
  const [active, setActive] = useState(false) 
  let styles = [];

  if (active) { styles.push('active') }


  const r = 2 * Math.PI * 38 ;

  function setProggress (percent) { 
    return (r - percent / 100 * r); 
  } const strokeDashoffset = setProggress(85) 


  


  return (
<main>
  <aside>
    <div className="side_menu">
      <div className="player bg-grad">
        <div className="player-top">
          <div className="player-ava">
            <svg className="circle" width="160" height="160">
              <circle stroke='#FF795B' strokeWidth='2' cx='80' cy='80' r='38' fill='transparent' style={{strokeDasharray: `${r} ${r}`, transform: 'rotate(-90deg)', strokeDashoffset: strokeDashoffset, transformOrigin: 'center'}}/> </svg> <img src={ava} alt="" width='70' /> </div>
          <div className="player-text">
            <div className="player-account">89.40 <span className="player-numbers">
    <span>999</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.125 6L6.5 3.25L3.875 6" stroke="#86E3CE" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 9.75V3.75" stroke="#86E3CE" strokeLinecap="round" strokeLinejoin="round" /> </svg>
              </span>
            </div>
            <div className="player-name">Елишакашвили Михо</div>
          </div>
        </div>
        <div className="player-bottom">
          <div className="player-edit">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.77081 11.0354L5.24998 10.4521L10.6708 5.03123C10.8986 4.80342 10.8986 4.43408 10.6708 4.20627L9.59996 3.1354C9.37216 2.90759 9.0028 2.90759 8.77501 3.1354L3.35415 8.55625L2.77081 11.0354Z" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.2291 11.0355H8.02081" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> <span>Редактировать</span> </div>
        </div>
      </div>
      <ul className="side_menu-list">
        <li className={styles}>
          <ol>
            <li
            onClick={ ()=> setActive(!active)}
            ><span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.84771 19.25H17.1527C18.2946 19.25 19.1742 18.2681 18.641 17.2584C17.8565 15.7731 16.0682 14 12.0002 14C7.93223 14 6.14389 15.7731 5.35946 17.2584C4.82619 18.2681 5.70579 19.25 6.84771 19.25Z" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    </span> Статистика <span className='header-icon'>
    <i className="fa fa-angle-down" aria-hidden="true"></i></span> </li>
            <li>Футбол</li>
            <li>Баскетбол</li>
            <li>Волейбол</li>
          </ol>
        </li>
        <li> <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4.75V8.25" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 4.75V8.25" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.75 10.75H16.25" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </span> Ближайшие игры</li>
        <li> <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.75 12.25H14.25" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.75 15.25H14.25" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </span> Игровые отчёты</li>
        <li> <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.75 12.375C4.75 16.3791 7.99594 19.625 12 19.625C16.0041 19.625 19.25 16.3791 19.25 12.375C19.25 8.37094 16.0041 5.125 12 5.125C9.47437 5.125 7.25038 6.41645 5.95236 8.375M5.95236 8.375V4.375M5.95236 8.375H10" stroke="#ACAFF3" strokeWidth="1.5"/>
    <path d="M12 8.375V12.375L14 14.375" stroke="#ACAFF3" strokeWidth="1.5"/>
    </svg>
    </span> История заказов</li>
        <li> <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.75 8.75L19.25 12L15.75 15.25" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 12H10.75" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25" stroke="#ACAFF3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </span> Выйти</li>
      </ul>
    </div>
  </aside>
  <section>
    <div className="stat bg-grad inline">
      <div className="achievements">
        <div className="achievements-top inline">
          <div className="achievements-top_left inline">
            {
              Data.Achievements.top.left.map(
                i => <AchievementBlock key={i.id} info={i}/>
              )
            }
          </div>
        <div className="achievements-top_right inline">
          {
            Data.Achievements.top.right.map(
              i => <AchievementBlock key={i.id} info={i}/>
            )
          }
        </div>
        </div>
        <div className="achievements-bottom inline">
            {
              Data.Achievements.bottom.map(
                i => <AchievementBlock key={i.id} info={i}/>
              )
            }
        </div>
      </div>
      <div className="mobil achievements-letters">Награды и достижения</div>

      <div className="statistics">
        <div className="statistics-buttons inline">
          <div className="button-season active">Все сезоны</div>
          <div className="button-season">Сезон 2020/21</div>
        </div>
        <div className="statistics-match">
          <div className="statistics-icons">
          {
            Data.IconsData.map(
              i => <IconForStats key={i.id} info={i}/>
            )
          }
          </div>
        </div>
      </div>
      <div className="social">
        <div className="social-icons">
          <div className="social-export">Поделиться</div>
          <div className="social-icons__block">
            <div className="social-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 20C32.5 13.0975 26.9025 7.5 20 7.5C13.0975 7.5 7.5 13.0975 7.5 20C7.5 26.9025 13.0975 32.5 20 32.5C20.0734 32.5 20.1465 32.4985 20.2197 32.4971V22.7664H17.5342V19.6367H20.2197V17.3335C20.2197 14.6625 21.8503 13.2087 24.233 13.2087C25.374 13.2087 26.3547 13.2938 26.6406 13.3317V16.1233H24.9976C23.7014 16.1233 23.4504 16.7394 23.4504 17.6433V19.6367H26.5498L26.1459 22.7664H23.4504V32.0171C28.6752 30.5192 32.5 25.7056 32.5 20Z" fill="white"/>
              </svg>

            </div>
            <div className="social-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.5C13.0964 7.5 7.5 13.0964 7.5 20C7.5 26.9036 13.0964 32.5 20 32.5C26.9036 32.5 32.5 26.9036 32.5 20C32.5 13.0964 26.9036 7.5 20 7.5ZM24.8073 21.6029C24.8073 21.6029 25.9128 22.694 26.1849 23.2005C26.1927 23.2109 26.1966 23.2214 26.1992 23.2266C26.3099 23.4128 26.3359 23.5573 26.2812 23.6654C26.1901 23.8451 25.8776 23.9336 25.7708 23.9414H23.8177C23.6823 23.9414 23.3984 23.9062 23.0547 23.6693C22.7904 23.4844 22.5299 23.181 22.276 22.8854C21.8971 22.4453 21.569 22.0651 21.2383 22.0651C21.1963 22.065 21.1545 22.0716 21.1146 22.0846C20.8646 22.1654 20.5443 22.5221 20.5443 23.4727C20.5443 23.7695 20.3099 23.9401 20.1445 23.9401H19.25C18.9453 23.9401 17.3581 23.8333 15.9518 22.3503C14.2305 20.5339 12.681 16.8906 12.668 16.8568C12.5703 16.6211 12.7721 16.4948 12.9922 16.4948H14.9648C15.2279 16.4948 15.3138 16.6549 15.3737 16.7969C15.444 16.9622 15.7018 17.6198 16.125 18.3594C16.8112 19.5651 17.2318 20.0547 17.569 20.0547C17.6322 20.0539 17.6944 20.0379 17.75 20.0078C18.1901 19.763 18.1081 18.194 18.0885 17.8685C18.0885 17.8073 18.0872 17.1667 17.862 16.8594C17.7005 16.6367 17.4258 16.5521 17.2591 16.5208C17.3266 16.4277 17.4154 16.3523 17.5182 16.3008C17.8203 16.1497 18.3646 16.1276 18.9049 16.1276H19.2057C19.7917 16.1354 19.9427 16.1732 20.1549 16.2266C20.5846 16.3294 20.5938 16.6068 20.556 17.556C20.5443 17.8255 20.5326 18.1302 20.5326 18.4896C20.5326 18.5677 20.5286 18.651 20.5286 18.7396C20.5156 19.2227 20.5 19.7708 20.8411 19.9961C20.8856 20.024 20.9371 20.0389 20.9896 20.0391C21.1081 20.0391 21.4648 20.0391 22.431 18.3815C22.729 17.848 22.9879 17.2936 23.2057 16.7227C23.2253 16.6888 23.2826 16.5846 23.3503 16.5443C23.4002 16.5188 23.4556 16.5058 23.5117 16.5065H25.8307C26.0833 16.5065 26.2565 16.5443 26.2891 16.6419C26.3464 16.7969 26.2786 17.2695 25.2201 18.7031L24.7474 19.3268C23.7878 20.5846 23.7878 20.6484 24.8073 21.6029Z" fill="white"/>
              </svg>
            </div>
            <div className="social-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20 32.5C26.9036 32.5 32.5 26.9036 32.5 20C32.5 13.0964 26.9036 7.5 20 7.5C13.0964 7.5 7.5 13.0964 7.5 20C7.5 26.9036 13.0964 32.5 20 32.5ZM24.4956 15.5043C23.1565 14.1653 20.9855 14.1653 19.6464 15.5043L19.6464 15.5044L18.7835 16.3673C18.5882 16.5626 18.5882 16.8791 18.7835 17.0744C18.9788 17.2697 19.2953 17.2697 19.4906 17.0744L20.3535 16.2115L20.3535 16.2115C21.3021 15.2629 22.84 15.2629 23.7885 16.2115C24.7371 17.16 24.7371 18.6979 23.7885 19.6465L22.9256 20.5094C22.7303 20.7047 22.7303 21.0212 22.9256 21.2165C23.1209 21.4118 23.4374 21.4118 23.6327 21.2165L24.4956 20.3536C25.8347 19.0145 25.8348 16.8434 24.4956 15.5043ZM21.9068 18.8003C22.1021 18.605 22.1021 18.2884 21.9068 18.0932C21.7116 17.8979 21.395 17.8979 21.1997 18.0932L18.0931 21.1998C17.8979 21.395 17.8979 21.7116 18.0931 21.9069C18.2884 22.1021 18.605 22.1021 18.8003 21.9069L21.9068 18.8003ZM17.0743 19.4906C17.2696 19.2954 17.2696 18.9788 17.0743 18.7835C16.8791 18.5883 16.5625 18.5883 16.3672 18.7835L15.5043 19.6465L15.5043 19.6465C14.1652 20.9856 14.1652 23.1566 15.5043 24.4957C16.8434 25.8348 19.0144 25.8348 20.3535 24.4957L21.2165 23.6327C21.4117 23.4375 21.4117 23.1209 21.2165 22.9256C21.0212 22.7304 20.7046 22.7304 20.5093 22.9256L19.6464 23.7886C18.6978 24.7371 17.16 24.7371 16.2114 23.7886C15.2629 22.84 15.2629 21.3022 16.2114 20.3536L16.2114 20.3536L17.0743 19.4906Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="social-bg">
          <div className="col">
            <div className="cross x1">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="col">
            <div className="cross x2">
              <span></span>
              <span></span>
            </div>
            <div className="cross x2">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="col">
            <div className="cross x3">
              <span></span>
              <span></span>
            </div>
            <div className="cross x3">
              <span></span>
              <span></span>
            </div>
            <div className="cross x3">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="season-info">
      <div className="season-menu">
        <div className="season-select">Формат</div>
      </div>
      <div className="season-list">
        <div className="list-title">
          <div className="title-date">Сезон</div>
          <div className="group">
            <div className="title-numberGame"><span className="desctop">Кол-во игр</span><span className="mobil">И</span></div>
            <div className="title-numberGol"><span className="desctop">Гол</span><span className="mobil">Г</span></div>
            <div className="title-numberPas"><span className="desctop">Пас</span><span className="mobil">П</span></div>
            <div className="title-numberTotal">Гол + пас</div>
            <div className="title-rating">Рейтинг</div>
          </div>
        </div>
        {
          Data.SeasonElemData.map(
            i => <SeasonElem key={i.id} info={i}/> 
          )
        }
      </div>
    </div>
  </section>
</main> 
); 
} 
export default Main;