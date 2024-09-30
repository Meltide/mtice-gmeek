首先，你需要的：
一块华为watch3/3pro
shizuku 、shizukurunner（建议使用酷安@鱼Salmon 的圆屏适配版： [查看链接](https://www.coolapk.com/feed/49937487?shareKey=MjNiZTA2ODRmOGVkNjZlNjM2YTE~&shareUid=4135467&shareFrom=com.coolapk.market_14.1.3-beta2) ）
或wearos工具箱  [查看链接](https://www.123pan.com/s/HBU0Vv-gPQpH.html) 
好了，不多bb，直接开始正题

---

## 方法1：Shizuku+ShizukuRunner
1. 打开手表设置，关于，狂点HarmonyOS版本直到跳出toast

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e63761a590f.webp">`

2. 返回上一级，点击开发人员选项，滑到下面找到hdc调试，开启，再开启通过wlan调试

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e63761959b1.webp">`

如果显示了不可用，那很有可能是你没有把手表连接到wifi
3. 手表安装Shizuku和ShizukuRunner
装软件的教程略过，酷安上有

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e63761751f2.webp">`
`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e637614286d.webp">`

4. 打开Shizuku，点击无线调试下的启动按键，等待Shizuku启动完成

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e637618a87e.webp">` 

启动完成后给予ShizukuRunner权限 

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e63761660fe.webp">`

5. 打开ShizukuRunner，点击加号新建

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e637612b5e4.webp">`

名字随便取一个，然后在命令处输入wm overscan 60,60,60,60 

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e6376161acd.webp">`

完成后回到ShizukuRunner的主界面，点击刚刚新添加的 

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e63761544b0.webp">`

然后你就能享受方屏游戏了

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e63761a020b.webp">`

6. 复原也很简单：再用上面的手法新建一个，命令输入wm overscan reset，再点击右边的箭头就能恢复了

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e6376161acd.webp">`
`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e6376192470.webp">`

## 方法二：wearos工具箱
1. 用前面的手法打开无线调试
2. 回到主界面，下拉控制中心，点击亮屏
（这一步的目的是防止手表自动息屏导致adb断连）

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e637614d71d.webp">`

打开wearos工具箱，过向导后，在主界面最顶上的输入框输入前面开发者选项wlan调试里的ip地址（带端口），并点击连接按钮 

`Gmeek-html<img src="https://pic.imgdb.cn/item/66e63a82d9c307b7e9fec5c3.jpg">`
`Gmeek-html<img src="https://pic.imgdb.cn/item/66e63a82d9c307b7e9fec5d7.jpg">`

4. 点击下面的功能，在这个页面点屏幕工具

`Gmeek-html<img src="https://pic.imgdb.cn/item/66e63a82d9c307b7e9fec5fd.jpg">`

在overscan值处将水平与垂直都调整为60，并应用 

`Gmeek-html<img src="https://pic.imgdb.cn/item/66e63a8ed9c307b7e9feceb9.jpg">`
`Gmeek-html<img src="https://pic.imgdb.cn/item/66e63a81d9c307b7e9fec5a8.jpg">`

此时屏幕就能完整显示方形应用了

`Gmeek-html<img src="https://www.freeimg.cn/i/2024/09/15/66e637617ff42.webp">`

如果要恢复原来的直接点击恢复即可 

`Gmeek-html<img src="https://pic.imgdb.cn/item/66e63a82d9c307b7e9fec5e4.jpg">`

---

完
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>"}## -->

