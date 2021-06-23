import React, { memo } from 'react';
import './index.css';

const CanvasFC = (props) => {
  
  const draw = (id) => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    if(ctx) {
      switch(id) {
        case 'test': {
          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect(10, 10, 55, 50);
          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 55, 50);
          break;
        }
        case 'rect': {
          ctx.fillStyle = 'rgb(0,0,0)';
          ctx.fillRect(0, 0, 80, 80);
        }
        default: {

        }
      }
    }
  }

  return (
    <div className='wrapper'>
      <div className='box'>
        <h3 onClick={() => { draw('test') }}>Canvas test</h3>
        <canvas id="test" width="80" height="80"></canvas>
      </div>
      <div className='box'>
        <h3 onClick={() => { draw('rect') }}>Canvas Rect</h3>
        <canvas id="rect" width="80" height="80"></canvas>
      </div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
      <div className='box'></div>
    </div>
  );
};

export const Canvas = memo(CanvasFC);
