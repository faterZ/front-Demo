/**
 * xiaweize
 */

import "../style/video.css";
/**
 * 判断客户端
 *
 * @type {string}
 */
var u = navigator.userAgent,
    isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
    isweibo = u.indexOf('Weibo') > -1,
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);


 var video = document.getElementById("video");
var loadingTag = document.getElementById('lodding'),
    loadingStatus = loadingTag.children[1],
    mohu =  loadingTag.children[0],
    startnum = 0,
    istest = true,
    selectBtn = document.getElementById('btns');
/**
 * 添加类
 * @param obj
 * @param cl
 */
function addClass(obj, cl) {
    var arrc = obj.className.split(' '),
        len = arrc.length,
        re = new RegExp('(^|\\s+)' + arrc.join('|') + '(\\s+|$)');
    if (arrc[0] == '') obj.className = cl;
    else !cl.match(re) && (obj.className += ' ' + cl);
}
/**
 * 删除类
 * @param obj
 * @param cl
 */
function removeClass(obj, cl){
    obj.className = obj.className.replace(new RegExp("(\\s|^)" + cl + "(\\s|$)"), "");
}


function getTime(obj){
    obj.timer = setInterval(function(){
        var t = obj.currentTime;
        if(isAndroid) {
            // 选项出现
            if(Math.abs(t - 32.13) <= .1 && istest) {
                selectBtn.style.display = 'block';
                obj.pause();
                clearInterval(obj.timer);
            }
            // // 墨鏡播放完必,镯子播放完毕,帽子播放完毕
            if(Math.abs(t) > 46.04 && typenum == 1 || Math.abs(t) > 65.16 && typenum == 2 || Math.abs(t) > 80.64 && typenum == 4) {
                selectBtn.style.display = 'block';
                obj.pause();
                istest = true;
                clearInterval(obj.timer);
            }
        } else {
            // 选项出现
            if(Math.abs(t - 32.13) <= .1 && istest) {
                selectBtn.style.display = 'block';
                // obj.currentTime = 32.13;
                obj.pause();
                clearInterval(obj.timer);
            }
            // // 墨鏡播放完必,镯子播放完毕,帽子播放完毕
            if(Math.abs(t) > 46.04 && typenum == 1 || Math.abs(t) > 65.16 && typenum == 2 || Math.abs(t) > 80.24 && typenum == 4) {
                selectBtn.style.display = 'block';
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


function videoPlay(){
    loadingTag.className = 'hide';
    setTimeout(function(){
        loadingTag.style.display = 'none';
        // if(ovstatus != 1) {
        //     window.location.reload();
        // }
    },1000);
    video.src=video.src;
    video.play();
    video.play();
    video.play();
}
/**
 * loading
 * @type {number}
 */
var stimer = setInterval(function(){
    startnum++;
    loadingStatus.innerText = startnum + '%';
    mohu.style.opacity = 1 - startnum / 100;
    if(startnum == 100) {
        clearInterval(stimer);
        loadingStatus.innerHTML = '';
        removeClass(loadingStatus, 'ldnum');
        addClass(loadingStatus, 'play');
        videoPlay();
    }
},50);

/**
 * 点击播放按钮
 */
loadingStatus.addEventListener("touchstart",function(){
    if(this.innerText === '') {
        // videoPlay();
    }
})
/**
 * 视频开始play
 */
video.addEventListener('play', function(){
    // ovstatus = 1;
    console.log("play")
    getTime(this);
}, false);
/**
 * 选项选择
 */
bts.addEventListener('touchstart', function(ev){
    var e = ev || window.event,
        target = e.target || e.srcElement,
        type,a;
    if(target.nodeName.toLowerCase() === 'i') {
        video.pause();
        // 获取点击类型
        type = target.getAttribute('data-link');
        selectBtn.style.display = 'none';
        typenum = type;
        !isAndroid && video.play();
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