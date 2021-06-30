import React from 'react';


function SeasonElem({info}) {
  return (
    <div className="season-elem">
      <div className="season-date">{info.season}</div>
      <div className="group">
        <div className="season-numberGame">{info.numberGames}</div>
        <div className="season-numberGol">{info.numberGol}</div>
        <div className="season-numberPas">{info.numberPas}</div>
        <div className="season-numberTotal">{info.numberTotal}</div>
        <div className="season-rating">{info.numberRating}</div>
      </div>
    </div>   
  );
}

export default SeasonElem;
