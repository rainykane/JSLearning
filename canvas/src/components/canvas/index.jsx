import React, { memo } from 'react';


const CanvasFC = (props) => {
  
  const draw = () => {
    const canvas = document.getElementById('test');
    const ctx = canvas.getContext("2d");
    if(ctx) {
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect(10, 10, 55, 50);
      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 55, 50);
      console.log(ctx, 'xx');
    }
  }

  return (
    <div>
      <h3 onClick={draw}>Canvas Star</h3>
      <canvas id="test" width="300" height="300"></canvas>
    </div>
  );
};

export const Canvas = memo(CanvasFC);
