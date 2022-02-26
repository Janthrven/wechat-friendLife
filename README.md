# wechat-friendLife

模仿微信朋友圈的小程序，可发表、查看以及删除朋友圈，还有一些小功能

## **技术栈及配置说明**

基于windows10进行开发，临时服务器使用Apache2.4.39搭建，数据库使用Mysql5.7.26，以上工具通过phpstudy_pro以及Navicat Premium 15进行相关配置；后端服务接口使用php进行开发，小程序页面开发使用腾讯官方的微信开发者工具1.03.0，其中还引入Vant Weapp小程序 UI 组件库，使开发页面更为便利，用了一些iconfont的图标素材

## 功能简介

首页：登录者的头像以及昵称显示，点击头像打开新页面，展示开发者的话；实时更新的日历；

发表页：编辑要发表的朋友圈内容，文本、图片等等；

朋友圈页：查看已发表的朋友圈内容，可点赞评论；

发现页：小功具的集合页—>扫一扫、看一看、指南针以及视频号

## 原型

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

## 数据库

下面是我建立好的数据库，使用者可参考格式来建立自己的，

![img](file:///C:/Users/ADMINI~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

## 注意

代码的注释已经很详细了,建议仔细查看,有些功能页用不到的可以自行删除,比如开发者的话 页

关于微信小程序如何引入iconfont:https://blog.csdn.net/Sakiaaa/article/details/121849911

phpStudy ，结果启动却发现报错，Apache80端口被占用解决办法:https://blog.csdn.net/Sakiaaa/article/details/121851449

