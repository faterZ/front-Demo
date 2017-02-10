/**
 * Created by zhengqiguang on 2017/1/18.
 */

import "../style/video.css";
var u = navigator.userAgent,
    isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
    isweibo = u.indexOf('Weibo') > -1,
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

var oLd = document.getElementById('lodding'),
    oSt = oLd.children[1],
    om = document.querySelector('.mohu'),
    oV = document.getElementById('video'),
    aV = document.querySelectorAll('.andr'),
    bts = document.getElementById('btns'),
    aLink = document.getElementById('applink'),
    fenx = document.getElementById('fenx'),
    fxmc = fenx.children[0],
    gif = fenx.children[1],
    istest = true,
    stimer = null,
    startnum = 0,
    typenum = 1,ovstatus = 0;

// 微博
if(isweibo) {
    // 开始lodding
    stimer = setInterval(function(){
        startnum++;
        oSt.innerText = startnum + '%';
        om.style.opacity = 1 - startnum / 100;
        if(startnum == 100) {
            clearInterval(stimer);
            oSt.innerHTML = '';
            removeClass(oSt, 'ldnum');
            addClass(oSt, 'play');
        }
    },50);
    oV.src = oV.getAttribute('data-link');
    // oV.play();
    // oV.pause();
    oSt.addEventListener('touchstart', function(){
        if(this.innerText === '') {
            this.parentNode.className = 'hide';
            setTimeout(function(){
                if(ovstatus != 1) window.location.reload();
                oLd.style.display = 'none';
            },1000);
            // window.location.href = "http://wag.i-h5.cn/dj/wyf/weibo.html"
            oV.play();
        }
    }, false);
    oV.addEventListener('play', function(){
        ovstatus = 1;
    }, false);
    oV.addEventListener('ended', function(){
        window.location.href = 'http://wag.i-h5.cn/dj/wyf/fenx.html';
    }, false);
}


/*---------------------PUBLIC------------------*/
// 开始lodding
stimer = setInterval(function(){
    startnum++;
    oSt.innerText = startnum + '%';
    om.style.opacity = 1 - startnum / 100;
    if(startnum == 100) {
        clearInterval(stimer);
        oSt.innerHTML = '';
        removeClass(oSt, 'ldnum');
        addClass(oSt, 'play');
    }
},50);
// 跳转
document.querySelector('.flook').addEventListener('touchend', function(ev){
    window.location.href = this.href;
}, false);
// 分享点击
fenx.addEventListener('touchend', function(){
    this.className = 'hide';
    setTimeout(function(){
        fenx.style.display = 'none';
        fxmc.className = '';
        gif.className = '';
    },800);
}, false);
// 分享
document.querySelector('.fxiu').addEventListener('touchend', function(){
    fenx.className = '';
    fenx.style.display = 'block';
    setTimeout(function(){
        fxmc.className = 'show';
        gif.className = 'show';
    },200);
    return false;
}, false)
/*---------------------PUBLIC------------------*/
// 垃圾安卓版微信！！！
// if(isAndroid && !isweibo) {
//     oV.style.display = 'none';

//     bts.addEventListener('touchstart', function(ev){
//         var e = ev || window.event,
//             target = e.target || e.srcElement,
//             type;
//         if(target.nodeName.toLowerCase() === 'i') {
//             // 获取点击类型
//             type = target.getAttribute('data-link');
//             bts.style.display = 'none';
//             for(var i=0;i<5;i++){
//                 aV[i].style.visibility = 'hidden';
//                 aV[i].style.display = 'none';
//                 aV[i].src = '';
//                 aV[i].pause();
//             }
//             aV[type].style.display = 'block';
//             aV[type].style.visibility = 'visible';
//             aV[type].src = aV[type].getAttribute('data-link');
//             aV[type].play();
//         }
//     }, false);

//     for(var i=0;i<5;i++) {
//         if(i == 0) {
//             aV[i].addEventListener('timeupdate', function(){
//                 if(this.currentTime > 32.13) {
//                     bts.style.display = 'block';
//                     this.currentTime = 32.13;
//                     this.pause();
//                 }
//             }, false);
//         }
//         if(i == 1 || i == 2 || i == 4) {
//             aV[i].addEventListener('ended', function(){
//                 bts.style.display = 'block';
//             }, false);
//         }
//         else {
//             aV[i].addEventListener('ended', function(){
//                 window.location.href = 'http://wag.i-h5.cn/dj/wyf/fenx.html';
//             }, false);
//         }
//     }
//     oSt.addEventListener('touchstart', function(){
//         if(this.innerText === '') {
//             this.parentNode.className = 'hide';
//             setTimeout(function(){
//                 oLd.style.display = 'none';
//             },1000);
//             aV[0].style.display = 'block';
//             aV[0].style.visibility = 'visible';
//             aV[0].src = '';
//             aV[0].src = aV[0].getAttribute('data-link');
//             aV[0].play();
//         }
//     }, false);
//     return false;
// }




oSt.addEventListener('touchstart', function(){
    if(this.innerText === '') {
        this.parentNode.className = 'hide';
        setTimeout(function(){
            oLd.style.display = 'none';
            // if(ovstatus != 1) {
            //     window.location.reload();
            // }
        },1000);
        oV.src=oV.src;
        oV.play();
        oV.play();
        oV.play();
    }
}, false);
oV.play();//chrome开发者工具报错
oV.pause();
oV.addEventListener('touchstart', function(){
    this.play();
}, false);
// 播放
oV.addEventListener('play', function(){
    // ovstatus = 1;
    getTime(this);
}, false);
oV.addEventListener('ended', function(){
    if(this.currentTime > 172) {
        window.location.href = 'http://wag.i-h5.cn/dj/wyf/fenx.html';
    }
}, false);
// 选项点击
bts.addEventListener('touchstart', function(ev){
    var e = ev || window.event,
        target = e.target || e.srcElement,
        type,a;
    if(target.nodeName.toLowerCase() === 'i') {
        oV.pause();
        // 获取点击类型
        type = target.getAttribute('data-link');
        bts.style.display = 'none';
        typenum = type;
        !isAndroid && oV.play();
        switch(type) {
            //选墨镜
            case '1':
                isAndroid && (oV.currentTime = 32.13);
                break;
            // 选镯子
            case '2':
                oV.currentTime = 46.14;
                break;
            // 选项链
            case '3':
                oV.currentTime = 81;
                break;
            // 选帽子
            case '4':
                oV.currentTime = 65.16;
        }
        isAndroid && oV.pause();
        oV.play();
        istest = false;
    }
}, false);

function getTime(obj){
    obj.timer = setInterval(function(){
        var t = obj.currentTime;
        if(isAndroid) {
            // 选项出现
            if(Math.abs(t - 32.13) <= .1 && istest) {
                bts.style.display = 'block';
                obj.pause();
                clearInterval(obj.timer);
            }
            // // 墨鏡播放完必,镯子播放完毕,帽子播放完毕
            if(Math.abs(t) > 46.04 && typenum == 1 || Math.abs(t) > 65.16 && typenum == 2 || Math.abs(t) > 80.64 && typenum == 4) {
                bts.style.display = 'block';
                obj.pause();
                istest = true;
                clearInterval(obj.timer);
            }
        } else {
            // 选项出现
            if(Math.abs(t - 32.13) <= .1 && istest) {
                bts.style.display = 'block';
                obj.currentTime = 32.13;
                obj.pause();
                clearInterval(obj.timer);
            }
            // // 墨鏡播放完必,镯子播放完毕,帽子播放完毕
            if(Math.abs(t) > 46.04 && typenum == 1 || Math.abs(t) > 65.16 && typenum == 2 || Math.abs(t) > 80.24 && typenum == 4) {
                bts.style.display = 'block';
                obj.currentTime = 32.13;
                obj.pause();
                istest = true;
                clearInterval(obj.timer);
            }
        }
        // 项链播放，提前呼出点击按钮
        if(t > 172) {
            // aLink.style.display = 'block';
            // window.location.href = 'http://wag.i-h5.cn/dj/wyf/fenx.html';
        }
    },20);
}

//add class
function addClass(obj, cl) {
    var arrc = obj.className.split(' '),
        len = arrc.length,
        re = new RegExp('(^|\\s+)' + arrc.join('|') + '(\\s+|$)');
    if (arrc[0] == '') obj.className = cl;
    else !cl.match(re) && (obj.className += ' ' + cl);
}
//remove class
function removeClass(obj, cl) {
    obj.className = obj.className.replace(new RegExp("(\\s|^)" + cl + "(\\s|$)"), "");
}
function init(){

}

