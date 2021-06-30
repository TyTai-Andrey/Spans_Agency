import React from 'react';


import icon from '../img/Achie.png';

function AchievementBlock({info}) {

  let styles = ["achievement"];

  if (!info.active) { styles.push('inactive') }


  return (
     <>
      <div className={styles.join(' ')}>
      	<img src={icon} alt=""/>
      	{
      		info.number ? <span className="achievement-number">{info.number}</span> : null      		
      	}
      </div>
     </>
  );
}

export default AchievementBlock
