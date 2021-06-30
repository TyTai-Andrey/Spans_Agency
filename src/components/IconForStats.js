import React from 'react';


function IconForStats({info}) {
  return (
    <div className="icon bg-grad">
      <div className="icon-name">{info.name}</div>
      <div className="icon-number">{info.number}</div>
    </div>   
  );
}

export default IconForStats;
