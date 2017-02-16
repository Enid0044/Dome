/*
* @Author: anchen
* @Date:   2016-12-23 14:16:27
* @Last Modified by:   anchen
* @Last Modified time: 2016-12-28 15:13:14
*/

'use strict';
(function(){
    function Drag(obj){
        var _this=this;
        this.icon=document.getElementById("icon");
        //this.music=document.getElementById("music");
        this.disX=0;
        this.disY=0;

        this.box=obj;
        this.box2=null;
        this.box.addEventListener("mousedown",fnDown);
        this.box.addEventListener("mouseover",fnOver);

        // console.log(this.music)
        function fnDown(ev){
            _this.down(ev)
        };
        function fnOver(){
            _this.over()
        };

    };
    Drag.prototype.init=function(){

    }
    Drag.prototype.over=function(ev){
        var _this=this;
        this.box.className="hover";
        this.box.addEventListener("mouseout",fnOut);
        function fnOut(){
            _this.out()
        }
    }
    Drag.prototype.out=function(ev){
        this.box.className="";
    }
    Drag.prototype.down=function(ev){
        var _this=this;
        this.disX=ev.pageX-this.box.offsetLeft;
        this.disY=ev.pageY-this.box.offsetTop;
        this.box2=this.box.cloneNode(true);
        this.box2.className="";
        this.icon.appendChild(this.box2);
        document.addEventListener("mousemove",fnMove);
        function fnMove(ev){
            _this.Move(ev)
        }
        document.addEventListener("mouseup",fnUp);
        function fnUp(){
            _this.Up(fnMove,fnUp);
        };
        ev.preventDefault();
    };
    Drag.prototype.Move=function(ev){
         this.box2.style.opacity="0.5";
         this.box2.style.left=ev.pageX-this.disX+"px";
         this.box2.style.top=ev.pageY-this.disY+"px";
    };
    Drag.prototype.Up=function(fnMove,fnUp){
        this.box.style.left=this.box2.style.left;
        this.box.style.top=this.box2.style.top;
        this.icon.removeChild(this.box2);
        document.removeEventListener("mousemove",fnMove);
        document.removeEventListener("mouseup",fnUp);
    }
     // Drag.prototype.duang=function(obj,obj2){
     //        var l1 = obj.offsetLeft,
     //        t1 = obj.offsetTop,
     //        r1 = l1 + obj.offsetWidth,
     //        b1 = t1 + obj.offsetHeight;

     //        var l2 = obj2.offsetLeft,
     //        t2 = obj2.offsetTop,
     //        r2 = l2 + obj2.offsetWidth,
     //        b2 = t2 + obj2.offsetHeight;

     //        if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){
     //            return false;
     //        }else{
     //            return true;
     //        }
     //    }
    var icon=document.getElementById("icon");
    var div=icon.getElementsByTagName("div");
    for(var i=0; i<div.length; i++){
        div[i].style.left=div[i].offsetLeft+"px";
        div[i].style.top=div[i].offsetTop+"px";
    }
    for(var i=0; i<div.length; i++){
        div[i].style.position="absolute";
        div[i].style.margin=0;

        var c1=new Drag(div[i]);

    };
    div[0].onclick=function(){
        alert(1);
    }

})()


