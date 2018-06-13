# rem-reset-js


#移动端初始加载设置rem

##Usage

body前或者head头内执行
resetrem()调用
可用参数为 320,375,640,720,750【根据移动端的设计稿宽度填写】

如果你在页面中调用了此方法但是在浏览器调试过程中没看到效果，你一定是忘记了设置视口了///
其实我也是测试了半天才发现的哈哈哈哈////。。。。


。。。/ 6.4 < X ? X : 。。。/6.4
这个X的值就是320（最小宽度及ip5等设备的宽度）/6.4（及设计稿除以自定义的根自己的比值）
即： X = 320 / (设计稿宽度/100)


    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    
 
