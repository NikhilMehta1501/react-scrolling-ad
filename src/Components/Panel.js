import React from 'react';

function Panel({panel}) {

  let leftSideStyle = {
    backgroundColor : panel.leftColor
  };

  let rightSideStyle = {
    backgroundColor : panel.rightColor
  };

  return (
    <div className={`panel panel-${panel.id}`}>
      <div className={ (panel.id == 1) ? "box left-box show" : "box left-box" } id={`box-${panel.id}-left`} style={leftSideStyle}></div>
      <div className={ (panel.id == 1) ? "box right-box show" : "box right-box" } id={`box-${panel.id}-right`} style={rightSideStyle}></div>
    </div>
  )
}

export default Panel
