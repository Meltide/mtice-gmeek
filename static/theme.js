document.addEventListener('DOMContentLoaded', function() {

    //鼠标点击特效
    var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 100000000,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "#ff6651"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            }, 1500, function() {
                $i.remove();
            });
        });
    });

    //判断url，添加主题------------------------------------------------------------------------


    let currentUrl = window.location.pathname;

    if (currentUrl.includes('/index.html') || currentUrl === "/") {

        console.log('应用主页主题');


        //主页主题------------------------------------------------------------------------------
        let style = document.createElement("style");
        style.innerHTML = `
        
        /* header布局*/
        .blogTitle {
            display: unset;
        }
        
        #header {
            height: 340px;
        }
        
        #header h1 {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .title-right {
            margin: unset;
            margin-top: 295px;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        
        .avatar {
            width: 200px;
            height: 200px;
        }
        
        #header h1 a {
            margin-top: 30px;
            font-family: fantasy;
            margin-left: unset;
        }
        
        /* 背景图片 */
        html {
            background: url('https://www.freeimg.cn/i/2024/10/01/66fb52433c7ed.webp') no-repeat center center fixed;
            background-size: cover;
        }
        
        /* 主体布局 */
        body {
            margin: 30px auto;
            padding: 20px;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(255, 255, 255, 0.8); /* 白色背景，透明度80% */
            border-radius: 10px; /* 圆角边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影 */
            overflow: auto;
        }
        
        .SideNav {
            background: rgba(255, 255, 255, 0.6); /* 白色背景，透明度60% */
            border-radius: 10px; /* 圆角边框 */
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background-color: #c3e4e3;
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        .SideNav-item {
            transition: 0.5s;
        }
        
        /* 分页条 */
        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rebeccapurple;
        }
        
        /* 右上角按钮 */
        div.title-right .btn {
            display: inline-flex;
            align-items: center;
            width: auto;
            height: 40px;
            margin: 0 3px;
            border-radius: 2em !important;
            transition: 0.3s;
        }
        
        div.title-right .btn:hover {
            width: auto;
            border-radius: 2em !important;
            background-color: #3cd2cd;
        }
        
        div.title-right .btn .btndescription {
            display: none;
            margin-left: 3px;
            white-space: nowrap;
            color: black;
            font-weight: bold;
        }
        
        div.title-right .btn:hover .btndescription {
            display: inline;
        }
        
        `;
        document.head.appendChild(style);

        //右上角按钮描述
        let topright_buttons = document.querySelectorAll(".title-right a.btn");

        topright_buttons.forEach(button => {
            var title = button.getAttribute('title');
            if (title) {
                var btndescription = document.createElement('span');
                btndescription.className = 'btndescription';
                btndescription.textContent = title;
                button.appendChild(btndescription);
            }
        });




    } else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('应用文章页主题');


        //文章页主题------------------------------------------------------------------------------

        let style = document.createElement("style");
        style.innerHTML = `


        /* 背景图片 */
        html {
            background: url('https://www.freeimg.cn/i/2024/10/01/66fb52433c7ed.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 1100px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(255, 255, 255, 0.85); /* 白色背景，透明度85% */
            border-radius: 10px; /* 圆角边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影 */
            overflow: auto;
        }

        @media (min-width: 1001px) {
        body {
            padding: 45px;
        }
        }

        @media (max-width: 1000px) {
        body {
            padding: 20px;
        }
        }


        /* markdown内容 */
        .markdown-body img {
            border-radius: 10px;
        }

        .markdown-alert {
            border-radius: 10px;
        }

        .markdown-body .highlight pre, .markdown-body pre {
            background: rgba(255, 255, 255, 0.85);
            border-radius: 10px;
        }

        .markdown-body code, .markdown-body tt {
            background-color: rgb(141 150 161 / 20%);
        }

        video {
            border-radius: 10px;
        }

        /* 右上角按钮 */
        div.title-right .btn {
            display: inline-flex;
            align-items: center;
            width: auto;
            height: 40px;
            margin: 0 3px;
            border-radius: 2em !important;
            transition: 0.3s;
        }

        div.title-right .btn:hover {
            width: auto;
            border-radius: 2em !important;
            background-color: #3cd2cd;
        }

        div.title-right .btn .btndescription {
            display: none;
            margin-left: 3px;
            white-space: nowrap;
            color: black;
            font-weight: bold;
        }

        div.title-right .btn:hover .btndescription {
            display: inline;
        }

        `;
        document.head.appendChild(style);

        //右上角按钮描述
        let topright_buttons = document.querySelectorAll(".title-right a.btn");

        topright_buttons.forEach(button => {
            var title = button.getAttribute('title');
            if (title) {
                var btndescription = document.createElement('span');
                btndescription.className = 'btndescription';
                btndescription.textContent = title;
                button.appendChild(btndescription);
            }
        });





    } else if (currentUrl.includes('/tag.html')) {
        console.log('应用搜索页主题');

        // 搜索页主题--------------------------------------------------------------------
        let style = document.createElement("style");
        style.innerHTML = `
        
        /* header布局*/
        
        .title-right {
            align-items: flex-end;
        }

        @media (max-width: 600px) {
            .tagTitle {
                display: unset;
                font-size: 14px;
                white-space: unset;
            }
        }
        
        
        /* 背景图片 */
        html {
            background: url('https://www.freeimg.cn/i/2024/10/01/66fb52433c7ed.webp') no-repeat center center fixed;
            background-size: cover;
        }
        
        /* 主体布局 */
        body {
            margin: 30px auto;
            padding: 20px;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(255, 255, 255, 0.8); /* 白色背景，透明度80% */
            border-radius: 10px; /* 圆角边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 添加阴影 */
            overflow: auto;
        }
        
        .SideNav {
            background: rgba(255, 255, 255, 0.6); /* 白色背景，透明度60% */
            border-radius: 10px; /* 圆角边框 */
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background-color: #c3e4e3;
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        .SideNav-item {
            transition: 0.5s;
        }
        
        
        /* 右上角按钮 */
        div.title-right .btn {
            display: inline-flex;
            align-items: center;
            width: auto;
            height: 40px;
            margin: 0 3px;
            border-radius: 2em !important;
            transition: 0.3s;
        }
        
        div.title-right .btn:hover {
            width: auto;
            border-radius: 2em !important;
            background-color: #3cd2cd;
        }
        
        div.title-right .btn .btndescription {
            display: none;
            margin-left: 3px;
            white-space: nowrap;
            color: black;
            font-weight: bold;
        }
        
        div.title-right .btn:hover .btndescription {
            display: inline;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
        }
        
        .subnav-search-icon {
            top: 9px;
        }
        
        button.btn.float-left {
            display: none;
        }
        
        .subnav-search {
            width: unset; 
            height: 36px;
        }
        `;
        document.head.appendChild(style);

        //右上角按钮描述
        let topright_buttons = document.querySelectorAll(".title-right a.btn");

        topright_buttons.forEach(button => {
            var title = button.getAttribute('title');
            if (title) {
                var btndescription = document.createElement('span');
                btndescription.className = 'btndescription';
                btndescription.textContent = title;
                button.appendChild(btndescription);
            }
        });

        let input = document.getElementsByClassName("form-control subnav-search-input float-left")[0];
        let button = document.getElementsByClassName("btn float-left")[0];
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                button.click();
            }
        });





    } else {
        console.log('未应用主题');
    }











})