import React from 'react';

import Logo from './Logo'


import ball from '../img/football.png'
import ava from '../img/Ellipse 4.png'
import bag from '../img/Group.png'


function Header() {
  return (
      <header>
	      <div className="header">
	        <div className="header-logo">
	      		<Logo color={'black'} />
	      	</div>
	      	<div className="header-list">
	      		<ul>
	      			<li>Расписание</li>
	      			<li>Игровые отчёты</li>
	      			<li>Статистика</li>
	      			<li>
		      			<span>Ещё</span>
		      			<span className='header-icon'><i className="fa fa-angle-down" aria-hidden="true"></i></span>
		      		</li>
	      		</ul>
	      	</div>
	      	<div className="header-ball">
	      		<img src={ball} alt=""/>
		      	<span className='header-icon'><i className="fa fa-angle-down" aria-hidden="true"></i></span>
	      	</div>
	      	<div className="header-photo">
	      		<img src={ava} alt=""/>
	      	</div>
	      	<div className="header-notifications">
	      		<img src={bag} alt=""/>
	      		<span>1</span>
	      	</div>
	      </div>
      </header>
  );
}

export default Header
