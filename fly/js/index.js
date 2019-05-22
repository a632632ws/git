// 获取所有li
var liAll = document.querySelectorAll("li");
console.dir(liAll);

// 父级盒子
var wrap = document.querySelector(".wrap");

// 缓存 - 长度 (没必要每次计算)
var liLen = liAll.length; // 5

// 事件委托 比如: 子级的点击事件委托给父级
// 事件监听 比如: 父级监听子级的点击事件
// 事件绑定 比如: 自己监听点击事件

// console.dir() dir = directory (目录) array  object 打印复杂结构
// console.log() log 日志 number string 打印简单数据

// js核心思想:一切皆对象 (学会一半的js)
// 找东西

// 捕获
// 冒泡
// mdn 火狐开发者社区(学习社区)!!!


// 分步实现
/*
wrap.addEventListener('mouseenter',function(event){
    console.dir(event);
    // e == li 元素
    var e = event.target;
    if(e.nodeName === 'LI'){
        liAll.forEach(function(li){
            li.style.width = "175px";
        });
        e.style.width = "500px";
    }
},true);
*/
// nodejs express
// nginx 

// linux 基础知识

// windows 界面操作系统 鼠标点点点 方便 日常办公
// dos windows 还没界面时候的操作系统,命令行
// linux 比dos强大得多的命令行操作系统 服务器

// linux 软件安装
// cd change directory 改变目录
// ls list 列表 列出当前目录下的文件
//  ~ 波浪线 家目录 home 目录
// vim 编辑器
// mkdir make directory 创建目录
// touch 触摸 创建一个文件
// git --help 显示帮助命令
// 一个计算机有多少个端口:65535
// http 默认 80
// ssh 默认 22
// mysql 默认 3306
// mariadb 默认 3307
// https 默认 445

// css 自适应栅格系统框架

// min-width:1200px 最小1200px才执行,大于1200px才执行

wrap.onclick = function(event){
    console.dir(event);
    var e = event.target;
    console.log(e.nodeName);
    
    if(e.nodeName === 'LI'){
        liAll.forEach(function(e,li){
            e.style.width = "175px";
        })
        e.style.width = "500px";
    }
       
    }


wrap.addEventListener('mouseleave',function(event){
    // e == li 元素
    var e = event.target;
    if(e.nodeName === 'LI'){
        liAll.forEach(function(ele,li){
            li.style.width = "240px";
        });
    }
})

/*for (var i = 0; i < liLen; i++) {

    liAll[i].onmouseenter = function () {

        for (var j = 0; j < liLen; j++) {

            //先循环让所有的等于175px;   再让点击的变成500px //(1200-500) / 4
            liAll[j].style.width = "175px";
        }
        this.style.width = "500px";

    }
//离开 ul 还原
    wrap.onmouseleave = function () {
        for (var i = 0; i < liLen; i++){
            liAll[i].style.width = "240px";
        }
    }

}
*/
