# 命令听写

Linux 与 ADB 命令听写记忆小游戏。

## 电脑本地预览

在这个目录启动本地服务：

```powershell
cd D:\skills\qa-learning\command-dictation-pwa
python -m http.server 8770 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:8770/
```

## 手机安装

手机安装成离线网页应用，需要先通过 HTTPS 打开一次。推荐把本目录发布到 GitHub Pages、Netlify、Cloudflare Pages 这类静态网页服务。

手机浏览器打开发布后的网址，然后选择“添加到主屏幕”或“安装应用”。首次打开后会缓存题库，之后可以离线练习。

## 当前题库依据

题库按 `notes/06_抓包与Linux.md` 和 `notes/17b_面试_Linux与数据库.md` 覆盖：

- 文件操作：`ls`, `cd`, `pwd`, `mkdir`, `touch`, `cp`, `mv`, `rm`, `cat`, `head`, `tail`
- 权限管理：`chmod`, `chown`
- 进程管理：`ps`, `ps -aux`, `kill`, `kill -9`, `top`
- 日志查看：`tail -f`, `grep`, `less`
- 网络相关：`ping`, `netstat`, `lsof -i`, `curl`, `systemctl status firewalld`, `iptables -L`
- 压缩解压：`tar`, `gzip`
- 软件/服务管理：`yum -y install`, `yum -y remove`, `systemctl status/start/stop/restart`
- 远程拷贝与编辑：`scp`, `vi/vim`
- 组合命令：`命令 | grep 关键词`, `命令 > 文件名`
- Linux 三剑客：`grep`, `sed`, `awk`
- ADB 命令：按 `notes/05_APP性能测试与ADB.md`、`notes/xmind提取/*day05APP性能测试及ADB应用*Day05总结.md`、`notes/17c_面试_功能测试.md` 覆盖
- ADB 场景：设备识别、服务重启、指定设备、无线连接、安装卸载、包名/Activity、启动耗时、日志、文件传输、内存、CPU、电量、流量、磁盘、Monkey 稳定性、Monkey seed 复现

## 当前题库

- Linux：目录、文件、备份、权限、编辑、日志、服务、网络、软件安装、压缩、传输、组合命令、三剑客、接口排查
- ADB：设备连接、安装卸载、包名定位、Activity 启停、启动耗时、手机日志、文件传输、性能数据、Monkey 稳定性
