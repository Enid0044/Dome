/*
* @Author: anchen
* @Date:   2016-12-16 13:17:26
* @Last Modified by:   anchen
* @Last Modified time: 2016-12-23 17:00:47
*/

'use strict';
(function(){
    //-----------------------------------------------
    var canvas=document.getElementById("canvas");
    var cxt=canvas.getContext("2d");
    var W=window.innerWidth, H=window.innerHeight;
    var timer=0;
    canvas.width=W;
    canvas.height=H;
    window.onresize=function(){
        W=window.innerWidth; H=window.innerHeight;
    };
    canvas.width=W;
    canvas.height=H;
    var m=500   //雪花数量
    var arr=[];
    timer=setInterval(draw, 15);
    //---------------------------------------------------
    for(var i=0; i<m; i++){
        arr.push({
            x:Math.random()*W,  //雪花x轴坐标
            y:Math.random()*H,  //雪花Y轴坐标
            r:Math.random()*6+1,  //半径
            d:Math.random()*m
        });

    };
    function draw(){
        cxt.clearRect(0, 0, W, H)
        cxt.fillStyle="rgba(255,255,255,0.6)";
        cxt.beginPath();
        for(var i=0; i<m; i++){
            cxt.moveTo(arr[i].x, arr[i].y);
            cxt.arc(arr[i].x, arr[i].y,arr[i].r,0,Math.PI*2)
        }
        cxt.fill();
        update()
    };
    var angle = 0;
    function update(){
        angle += 0.01;
        for(var i = 0; i < m; i++){
            var p = arr[i];
            p.y += Math.cos(angle+p.d) + 1+ p.r/2;
            if(p.x > W || p.x < 0 || p.y > H){
                if(i%3 > 0){
                    arr[i] = {x: Math.random()*W, y: -20, r: p.r, d: p.d};
                }else{
                    if(Math.sin(angle) > 0){
                        arr[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                    }else{
                        arr[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                }
            }
        }
    }

    //---------------------------------------------------
})()
