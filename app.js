const STORAGE_KEY = "command-dictation-progress-v1";

const cards = [
  {
    id: "linux-pwd",
    mode: "linux",
    tag: "目录",
    answer: "pwd",
    prompt: "刚连上服务器，先确认自己现在在哪个目录。",
    meaning: "print working directory，确认当前所在位置。",
    hint: "三个字母，p 开头。",
  },
  {
    id: "linux-ls",
    mode: "linux",
    tag: "目录",
    answer: "ls",
    prompt: "想看看当前目录下面有哪些文件和文件夹。",
    meaning: "列出当前目录内容。",
    hint: "两个字母，像 list 的缩写。",
  },
  {
    id: "linux-ls-root",
    mode: "linux",
    tag: "目录",
    answer: "ls /",
    prompt: "想看看 Linux 最顶层目录下面有什么。",
    meaning: "/ 是根目录，不是详细信息参数。",
    hint: "命令后面跟一个根目录符号。",
  },
  {
    id: "linux-ls-long",
    mode: "linux",
    tag: "目录",
    answer: "ls -l",
    prompt: "想用详细列表查看当前目录内容。",
    meaning: "-l 是 long listing，能看到权限、大小、时间等。",
    hint: "注意是短横线，不是斜杠。",
  },
  {
    id: "linux-cd",
    mode: "linux",
    tag: "目录",
    answer: "cd /var/log",
    prompt: "想进入常见日志目录 /var/log。",
    meaning: "cd 用来切换目录。",
    hint: "change directory 的缩写。",
  },
  {
    id: "linux-mkdir",
    mode: "linux",
    tag: "文件",
    answer: "mkdir logs_bak",
    prompt: "准备备份日志，先创建一个 logs_bak 文件夹。",
    meaning: "mkdir 创建目录，不是创建普通文件。",
    hint: "make directory 的缩写。",
  },
  {
    id: "linux-touch",
    mode: "linux",
    tag: "文件",
    answer: "touch test.txt",
    prompt: "想创建一个空文件 test.txt。",
    meaning: "touch 常用来创建空文件或更新时间。",
    hint: "命令后面跟文件名。",
  },
  {
    id: "linux-cp",
    mode: "linux",
    tag: "备份",
    answer: "cp application.yml application.yml.bak",
    prompt: "改配置前，把 application.yml 复制一份备份。",
    meaning: "cp 旧文件 新文件，目标存在时可能覆盖。",
    hint: "copy 的缩写。",
  },
  {
    id: "linux-cpr",
    mode: "linux",
    tag: "备份",
    answer: "cp -r project project_bak",
    prompt: "改项目前，把整个 project 文件夹复制成 project_bak。",
    meaning: "-r 用来递归复制目录。",
    hint: "复制文件夹要加递归参数。",
  },
  {
    id: "linux-mv",
    mode: "linux",
    tag: "文件",
    answer: "mv old.txt new.txt",
    prompt: "把 old.txt 改名成 new.txt。",
    meaning: "mv 可以移动文件，也可以重命名。",
    hint: "move 的缩写。",
  },
  {
    id: "linux-mv-to-dir",
    mode: "linux",
    tag: "文件",
    answer: "mv app.log logs_bak/",
    prompt: "想把 app.log 移动到已经存在的 logs_bak 目录里。",
    meaning: "xmind 里提到 mv 文件名 已存在目录，工作里常用于整理日志或部署包。",
    hint: "mv 后面先写文件名，再写目标目录。",
  },
  {
    id: "linux-rm",
    mode: "linux",
    tag: "文件",
    answer: "rm test.txt",
    prompt: "删除临时文件 test.txt。",
    meaning: "rm 删除要谨慎，工作里先确认路径。",
    hint: "remove 的缩写。",
  },
  {
    id: "linux-rm-r",
    mode: "linux",
    tag: "文件",
    answer: "rm -r olddir",
    prompt: "想删除 olddir 这个目录以及里面的内容。",
    meaning: "rm -r 递归删除目录，工作里一定要先确认路径。",
    hint: "删除目录要加递归参数。",
  },
  {
    id: "linux-chmod-755",
    mode: "linux",
    tag: "权限",
    answer: "chmod 755 startup.sh",
    prompt: "脚本 startup.sh 权限不够，想给它常见的可执行权限。",
    meaning: "chmod 修改权限，755 是部署脚本里常见权限。",
    hint: "change mode 的缩写，后面跟权限数字和文件名。",
  },
  {
    id: "linux-chmod-x",
    mode: "linux",
    tag: "权限",
    answer: "chmod +x startup.sh",
    prompt: "只想给 startup.sh 增加可执行权限。",
    meaning: "chmod +x 表示给文件增加执行权限。",
    hint: "加执行权限用 +x。",
  },
  {
    id: "linux-chown",
    mode: "linux",
    tag: "权限",
    answer: "chown test:test app.log",
    prompt: "app.log 属主不对，想改成 test 用户和 test 用户组。",
    meaning: "chown 修改文件属主和用户组。",
    hint: "change owner 的缩写。",
  },
  {
    id: "linux-cat",
    mode: "linux",
    tag: "查看",
    answer: "cat app.log",
    prompt: "想直接查看 app.log 文件内容。",
    meaning: "cat 适合看小文件，大日志别直接全量打开。",
    hint: "三个字母，c 开头。",
  },
  {
    id: "linux-cat-config",
    mode: "linux",
    tag: "查看",
    answer: "cat application.yml",
    prompt: "想快速查看 application.yml 配置内容，不打算编辑。",
    meaning: "cat 直接输出文件内容，适合小配置文件。",
    hint: "查看小文件常用 cat。",
  },
  {
    id: "linux-less",
    mode: "linux",
    tag: "查看",
    answer: "less app.log",
    prompt: "app.log 很大，不想一次性刷满屏幕，想分页慢慢看。",
    meaning: "less 适合翻看大文件，退出时按 q。",
    hint: "四个字母，和 more 类似但更常用。",
  },
  {
    id: "linux-less-search",
    mode: "linux",
    tag: "查看",
    answer: "/error",
    prompt: "在 less 里面打开日志后，想搜索 error 关键字。",
    meaning: "less 内部用 /关键字 搜索，按 n 看下一个匹配。",
    hint: "斜杠后面跟关键字。",
  },
  {
    id: "linux-less-quit",
    mode: "linux",
    tag: "查看",
    answer: "q",
    prompt: "在 less 里面看完日志，想退出回到命令行。",
    meaning: "less、top、man 这类界面里，q 经常表示退出。",
    hint: "quit 的首字母。",
  },
  {
    id: "linux-vi",
    mode: "linux",
    tag: "编辑",
    answer: "vi application.yml",
    aliases: ["vim application.yml"],
    prompt: "想在服务器上打开 application.yml 配置文件进行编辑。",
    meaning: "vi/vim 是 Linux 常见文本编辑器，工作里改配置经常会遇到。",
    hint: "vi 或 vim，后面跟文件名。",
  },
  {
    id: "linux-vi-insert",
    mode: "linux",
    tag: "编辑",
    answer: "i",
    prompt: "vi 打开文件后，想进入可输入文字的编辑模式。",
    meaning: "按 i 进入插入模式，才能真正输入内容。",
    hint: "insert 的首字母。",
  },
  {
    id: "linux-vi-esc",
    mode: "linux",
    tag: "编辑",
    answer: "Esc",
    prompt: "vim 里编辑完了，想从输入文字的状态退回命令状态。",
    meaning: "按 Esc 回到命令模式，然后才能输入 :wq 或 :q!。",
    hint: "键盘左上角那个退出键。",
  },
  {
    id: "linux-vi-save",
    mode: "linux",
    tag: "编辑",
    answer: ":wq",
    prompt: "vi 里改完文件后，想保存并退出。",
    meaning: ":wq 表示 write and quit，保存后退出。",
    hint: "冒号开头，写入 + 退出。",
  },
  {
    id: "linux-vi-quit",
    mode: "linux",
    tag: "编辑",
    answer: ":q!",
    prompt: "vi 里改乱了，不想保存，想强制退出。",
    meaning: ":q! 表示不保存强制退出，适合改错时撤退。",
    hint: "冒号开头，quit 加感叹号。",
  },
  {
    id: "linux-head",
    mode: "linux",
    tag: "查看",
    answer: "head app.log",
    prompt: "只想看 app.log 最前面的几行。",
    meaning: "head 查看文件开头。",
    hint: "和 tail 是一前一后。",
  },
  {
    id: "linux-tail",
    mode: "linux",
    tag: "查看",
    answer: "tail app.log",
    prompt: "只想看 app.log 最后几行。",
    meaning: "tail 查看文件末尾，日志排查很常用。",
    hint: "和 head 是一前一后。",
  },
  {
    id: "linux-tailf",
    mode: "linux",
    tag: "日志",
    answer: "tail -f app.log",
    prompt: "操作页面时，想实时盯着 app.log 新增日志。",
    meaning: "-f 会持续跟随文件变化。",
    hint: "tail 加一个 follow 参数。",
  },
  {
    id: "linux-tail-grep-error",
    mode: "linux",
    tag: "日志",
    answer: "tail -f catalina.out | grep ERROR",
    prompt: "Tomcat 项目报错，想实时看 catalina.out 里的 ERROR 日志。",
    meaning: "面试笔记里的典型日志定位命令：实时日志 + 关键字过滤。",
    hint: "tail -f 后面接管道，再 grep ERROR。",
  },
  {
    id: "linux-grep",
    mode: "linux",
    tag: "日志",
    answer: "grep error app.log",
    prompt: "想从 app.log 里搜索 error 关键字。",
    meaning: "grep 用来按关键字过滤文本。",
    hint: "命令 + 关键字 + 文件名。",
  },
  {
    id: "linux-grep-time",
    mode: "linux",
    tag: "日志",
    answer: "grep '2025-07-17 10:' app.log",
    prompt: "想在 app.log 里定位 2025-07-17 10 点这个时间段的日志。",
    meaning: "grep 可以按时间片段筛日志，排查线上问题时很常见。",
    hint: "grep 后面用引号包住时间片段。",
  },
  {
    id: "linux-ps",
    mode: "linux",
    tag: "服务",
    answer: "ps -ef",
    prompt: "想查看服务器上正在运行的进程。",
    meaning: "ps 查看进程，排查服务是否启动时常用。",
    hint: "常见组合参数是 -ef。",
  },
  {
    id: "linux-ps-aux",
    mode: "linux",
    tag: "服务",
    answer: "ps -aux",
    prompt: "想按 xmind 里的写法查看系统进程列表。",
    meaning: "ps -aux 和 ps -ef 都常见，用于看进程。",
    hint: "ps 后面是 -aux。",
  },
  {
    id: "linux-ps-java",
    mode: "linux",
    tag: "服务",
    answer: "ps -ef | grep java",
    prompt: "想查看 Java 项目进程是否还在运行。",
    meaning: "面试常问：先查 Java 进程，再按 PID 处理。",
    hint: "ps -ef 后面接管道，再过滤 java。",
  },
  {
    id: "linux-kill",
    mode: "linux",
    tag: "服务",
    answer: "kill -9 12345",
    prompt: "确认 12345 这个异常进程要强制结束。",
    meaning: "kill 结束进程，-9 是强制信号，工作里要先确认 PID。",
    hint: "kill 加强制参数，再跟 PID。",
  },
  {
    id: "linux-kill-normal",
    mode: "linux",
    tag: "服务",
    answer: "kill 12345",
    prompt: "想按普通方式结束 PID 为 12345 的进程。",
    meaning: "kill PID 是普通结束进程；kill -9 是强制结束。",
    hint: "kill 后面直接跟进程 ID。",
  },
  {
    id: "linux-top",
    mode: "linux",
    tag: "服务",
    answer: "top",
    prompt: "想实时看 CPU、内存和进程占用。",
    meaning: "top 是动态资源监控。",
    hint: "三个字母，t 开头。",
  },
  {
    id: "linux-ping",
    mode: "linux",
    tag: "网络",
    answer: "ping 192.168.5.14",
    prompt: "想确认服务器能不能连通 192.168.5.14 这台机器。",
    meaning: "ping 用来做基础网络连通性检查。",
    hint: "命令后面跟 IP 或域名。",
  },
  {
    id: "linux-netstat",
    mode: "linux",
    tag: "网络",
    answer: "netstat -tunlp",
    prompt: "想看服务器正在监听哪些端口。",
    meaning: "常用于确认服务端口是否起来。",
    hint: "netstat 加一串常见参数。",
  },
  {
    id: "linux-netstat-anptu",
    mode: "linux",
    tag: "网络",
    answer: "netstat -anptu",
    prompt: "想按 xmind 里的写法查看网络连接和端口信息。",
    meaning: "netstat -anptu 用于查看 TCP/UDP 网络连接和端口状态。",
    hint: "netstat 后面是 -anptu。",
  },
  {
    id: "linux-netstat-port",
    mode: "linux",
    tag: "网络",
    answer: "netstat -anp | grep 8080",
    prompt: "8080 端口被占用，想找出是谁占着这个端口。",
    meaning: "面试常问：查端口占用后，再根据 PID 处理。",
    hint: "netstat -anp 后面接管道过滤端口号。",
  },
  {
    id: "linux-lsof-port",
    mode: "linux",
    tag: "网络",
    answer: "lsof -i:8080",
    prompt: "想按 xmind 里的命令查看 8080 端口被哪个进程占用。",
    meaning: "lsof -i:端口号 也常用于定位端口占用。",
    hint: "lsof 后面接 -i:端口号。",
  },
  {
    id: "linux-curl",
    mode: "linux",
    tag: "接口",
    answer: "curl http://localhost:8080",
    prompt: "想在服务器本机访问 8080 服务，看接口或页面是否有响应。",
    meaning: "curl 可以从命令行发起 HTTP 请求。",
    hint: "命令后面跟 URL。",
  },
  {
    id: "linux-tar-extract",
    mode: "linux",
    tag: "压缩",
    answer: "tar -zxvf app.tar.gz",
    prompt: "拿到 app.tar.gz 部署包，想在服务器上解压。",
    meaning: "tar 常用来处理 .tar.gz 包，部署包和日志包都可能遇到。",
    hint: "tar 加 z/x/v/f 参数。",
  },
  {
    id: "linux-tar-create",
    mode: "linux",
    tag: "压缩",
    answer: "tar -zcvf logs.tar.gz logs",
    prompt: "想把 logs 文件夹打包成 logs.tar.gz 发给开发排查。",
    meaning: "tar -zcvf 常用于打包压缩目录。",
    hint: "c 表示 create，后面先写压缩包名，再写目录名。",
  },
  {
    id: "linux-gzip",
    mode: "linux",
    tag: "压缩",
    answer: "gzip app.log",
    prompt: "想把单个 app.log 压缩成 gzip 格式。",
    meaning: "gzip 常用于压缩单个文件，压完会生成 .gz 文件。",
    hint: "命令后面跟一个文件名。",
  },
  {
    id: "linux-firewalld",
    mode: "linux",
    tag: "网络",
    answer: "systemctl status firewalld",
    prompt: "服务访问不通，想先查看 firewalld 防火墙状态。",
    meaning: "面试笔记里的防火墙检查命令之一。",
    hint: "systemctl status 后面跟服务名。",
  },
  {
    id: "linux-systemctl-status",
    mode: "linux",
    tag: "服务",
    answer: "systemctl status nginx",
    prompt: "想查看 nginx 服务当前是否正在运行。",
    meaning: "systemctl status 服务名，用于查看服务状态。",
    hint: "systemctl status 后面跟服务名。",
  },
  {
    id: "linux-systemctl-start",
    mode: "linux",
    tag: "服务",
    answer: "systemctl start nginx",
    prompt: "想启动 nginx 服务。",
    meaning: "systemctl start 服务名，用于启动服务。",
    hint: "start 后面跟服务名。",
  },
  {
    id: "linux-systemctl-stop",
    mode: "linux",
    tag: "服务",
    answer: "systemctl stop nginx",
    prompt: "想停止 nginx 服务。",
    meaning: "systemctl stop 服务名，用于停止服务。",
    hint: "stop 后面跟服务名。",
  },
  {
    id: "linux-systemctl-restart",
    mode: "linux",
    tag: "服务",
    answer: "systemctl restart nginx",
    prompt: "改完 nginx 配置后，想重启 nginx 服务。",
    meaning: "systemctl restart 服务名，用于重启服务。",
    hint: "restart 后面跟服务名。",
  },
  {
    id: "linux-iptables",
    mode: "linux",
    tag: "网络",
    answer: "iptables -L",
    prompt: "想查看当前机器的 iptables 防火墙规则。",
    meaning: "iptables -L 用来列出防火墙规则。",
    hint: "大写 L 表示 list。",
  },
  {
    id: "linux-yum-install",
    mode: "linux",
    tag: "安装",
    answer: "yum -y install nginx",
    prompt: "想按 xmind 里的 CentOS 写法安装 nginx 软件包。",
    meaning: "yum -y install 软件包，用于安装软件，-y 表示自动确认。",
    hint: "install 前面有 -y。",
  },
  {
    id: "linux-yum-remove",
    mode: "linux",
    tag: "安装",
    answer: "yum -y remove nginx",
    prompt: "想按 xmind 里的 CentOS 写法卸载 nginx 软件包。",
    meaning: "yum -y remove 软件包，用于卸载软件。",
    hint: "remove 前面有 -y。",
  },
  {
    id: "linux-pipe-grep",
    mode: "linux",
    tag: "组合",
    answer: "ls | grep log",
    prompt: "想从 ls 的输出结果里筛出包含 log 的文件名。",
    meaning: "Linux命令 | grep 关键词，用于在前一个命令结果中继续过滤。",
    hint: "中间用管道符 | 连接。",
  },
  {
    id: "linux-redirect",
    mode: "linux",
    tag: "组合",
    answer: "ps -ef > process.txt",
    prompt: "想把 ps -ef 的输出保存到 process.txt 文件里。",
    meaning: "Linux命令 > 文件名，用于把命令输出重定向到文件。",
    hint: "中间用大于号 >。",
  },
  {
    id: "linux-scp",
    mode: "linux",
    tag: "传输",
    answer: "scp app.log test@192.168.5.14:/tmp/",
    prompt: "想把 app.log 远程拷贝到 192.168.5.14 的 /tmp/ 目录。",
    meaning: "scp 用于两台机器之间远程拷贝文件。",
    hint: "scp 源文件 用户@IP:目标路径。",
  },
  {
    id: "linux-sed",
    mode: "linux",
    tag: "三剑客",
    answer: "sed 's/dev/test/g' application.yml",
    prompt: "想把 application.yml 里的 dev 文本替换成 test 来查看效果。",
    meaning: "sed 常用于文本替换，面试里属于 Linux 三剑客之一。",
    hint: "s/旧内容/新内容/g。",
  },
  {
    id: "linux-awk",
    mode: "linux",
    tag: "三剑客",
    answer: "awk '{print $1}' app.log",
    prompt: "想从 app.log 每一行里取出第一列内容。",
    meaning: "awk 常用于按列处理文本，面试里属于 Linux 三剑客之一。",
    hint: "awk 后面用 print 输出某一列。",
  },
  {
    id: "adb-devices",
    mode: "adb",
    tag: "设备",
    answer: "adb devices",
    prompt: "APP 测试前，先确认电脑识别到了手机或模拟器。",
    meaning: "列出已连接的 Android 设备。",
    hint: "adb 加 devices。",
  },
  {
    id: "adb-kill-server",
    mode: "adb",
    tag: "设备",
    answer: "adb kill-server",
    prompt: "设备显示 offline，想先关闭 ADB 服务再重启。",
    meaning: "设备离线时，常用 kill-server + start-server 重启 ADB 服务。",
    hint: "kill 后面是 server。",
  },
  {
    id: "adb-start-server",
    mode: "adb",
    tag: "设备",
    answer: "adb start-server",
    prompt: "刚关闭 ADB 服务后，想重新启动 ADB 服务。",
    meaning: "和 adb kill-server 配合，用于处理设备离线或连接异常。",
    hint: "start 后面是 server。",
  },
  {
    id: "adb-select-device",
    mode: "adb",
    tag: "设备",
    answer: "adb -s emulator-5554 devices",
    prompt: "电脑连了多个 Android 设备，想指定 emulator-5554 执行命令。",
    meaning: "adb -s 设备名 其他命令，用于多设备场景。",
    hint: "adb 后面先写 -s 设备名。",
  },
  {
    id: "adb-connect",
    mode: "adb",
    tag: "连接",
    answer: "adb connect 192.168.5.20:5555",
    aliases: ["adb connect 192.168.5.20"],
    prompt: "想通过 Wi-Fi 连接 IP 为 192.168.5.20、端口 5555 的手机。",
    meaning: "adb connect IP:端口，用于无线连接设备。",
    hint: "connect 后面跟 IP:端口。",
  },
  {
    id: "adb-disconnect",
    mode: "adb",
    tag: "连接",
    answer: "adb disconnect 192.168.5.20:5555",
    prompt: "无线调试结束后，想断开 192.168.5.20:5555 这台设备。",
    meaning: "adb disconnect IP:端口，用于断开无线设备连接。",
    hint: "disconnect 后面跟 IP:端口。",
  },
  {
    id: "adb-install",
    mode: "adb",
    tag: "安装",
    answer: "adb install app.apk",
    prompt: "把 app.apk 安装到连接的 Android 设备上。",
    meaning: "APP 测试里常用于安装测试包。",
    hint: "adb 加 install，再跟 apk 文件。",
  },
  {
    id: "adb-install-r",
    mode: "adb",
    tag: "安装",
    answer: "adb install -r app.apk",
    aliases: ["adb -r install app.apk"],
    prompt: "设备上已经有旧包，想覆盖安装新版 app.apk。",
    meaning: "覆盖安装常用 adb install -r apk路径。",
    hint: "install 后面加 -r。",
  },
  {
    id: "adb-uninstall",
    mode: "adb",
    tag: "安装",
    answer: "adb uninstall com.tpshop.malls",
    prompt: "想卸载包名为 com.tpshop.malls 的 APP。",
    meaning: "adb uninstall 包名，用于卸载测试包。",
    hint: "uninstall 后面跟包名。",
  },
  {
    id: "adb-shell",
    mode: "adb",
    tag: "设备",
    answer: "adb shell",
    prompt: "想进入 Android 设备内部命令行。",
    meaning: "进入设备 shell 后可以继续查目录、进程等。",
    hint: "adb 后面跟 shell。",
  },
  {
    id: "adb-list-third-packages",
    mode: "adb",
    tag: "包名",
    answer: "adb shell pm list packages -3",
    prompt: "想查看 Android 设备里已经安装的第三方 APP 包名。",
    meaning: "pm list packages -3 只列第三方应用，找包名很常用。",
    hint: "pm list packages 后面加 -3。",
  },
  {
    id: "adb-current-focus-windows",
    mode: "adb",
    tag: "包名",
    answer: "adb shell dumpsys window | findstr mCurrentFocus",
    aliases: ["adb shell dumpsys window | grep mCurrentFocus"],
    prompt: "想查看当前打开 APP 的包名和页面名。",
    meaning: "Windows 常用 findstr，Mac/Linux 常用 grep，都是过滤 mCurrentFocus。",
    hint: "dumpsys window 后面接管道过滤 mCurrentFocus。",
  },
  {
    id: "adb-am-start",
    mode: "adb",
    tag: "启动",
    answer: "adb shell am start com.tpshop.malls/.activity.SplashActivity",
    prompt: "想用命令启动 TPSHOP 的启动页 Activity。",
    meaning: "am start 包名/页面名，用于命令行启动 APP 页面。",
    hint: "adb shell am start 后面跟包名/页面名。",
  },
  {
    id: "adb-force-stop",
    mode: "adb",
    tag: "启动",
    answer: "adb shell am force-stop com.tpshop.malls",
    prompt: "想强制关闭包名为 com.tpshop.malls 的 APP。",
    meaning: "am force-stop 包名，用于停止 APP 进程。",
    hint: "force-stop 后面跟包名。",
  },
  {
    id: "adb-start-time",
    mode: "adb",
    tag: "启动",
    answer: "adb shell am start -W -S -R 3 com.tpshop.malls/.activity.SplashActivity",
    aliases: ["adb shell am start -W com.tpshop.malls/.activity.SplashActivity", "adb shell am start -W -S com.tpshop.malls/.activity.SplashActivity"],
    prompt: "想测试 APP 启动耗时，启动前先停进程，并重复启动 3 次。",
    meaning: "-W 看启动耗时，-S 启动前停止进程，-R 指定重复次数。",
    hint: "am start 后面带 -W -S -R 次数。",
  },
  {
    id: "adb-logcat",
    mode: "adb",
    tag: "日志",
    answer: "adb logcat",
    prompt: "APP 闪退时，想查看手机端实时日志。",
    meaning: "logcat 是 Android 日志排查核心命令。",
    hint: "adb 加一个日志相关单词。",
  },
  {
    id: "adb-logcat-file",
    mode: "adb",
    tag: "日志",
    answer: "adb logcat > app.log",
    prompt: "APP 闪退后，想把手机日志保存到电脑当前目录的 app.log。",
    meaning: "adb logcat > 日志文件名.log，用于抓取 APP 端日志。",
    hint: "logcat 后面用 > 重定向到日志文件。",
  },
  {
    id: "adb-pull",
    mode: "adb",
    tag: "文件",
    answer: "adb pull /sdcard/log.txt .",
    prompt: "把手机里的 /sdcard/log.txt 拉到当前电脑目录。",
    meaning: "pull 是从设备取文件到电脑。",
    hint: "方向是设备到电脑。",
  },
  {
    id: "adb-push",
    mode: "adb",
    tag: "文件",
    answer: "adb push test.txt /sdcard/",
    prompt: "把电脑当前目录的 test.txt 推到手机 /sdcard/。",
    meaning: "push 是从电脑传文件到设备。",
    hint: "方向是电脑到设备。",
  },
  {
    id: "adb-meminfo",
    mode: "adb",
    tag: "性能",
    answer: "adb shell dumpsys meminfo com.tpshop.malls",
    prompt: "想查看 com.tpshop.malls 这个 APP 的内存占用。",
    meaning: "dumpsys meminfo 包名，用于看 PSS 等内存信息。",
    hint: "dumpsys meminfo 后面跟包名。",
  },
  {
    id: "adb-top",
    mode: "adb",
    tag: "性能",
    answer: "adb shell top",
    prompt: "想动态查看 Android 设备上的 CPU 和进程占用。",
    meaning: "adb shell top 用于动态查看设备进程资源占用。",
    hint: "进入 shell 执行 top。",
  },
  {
    id: "adb-cpuinfo",
    mode: "adb",
    tag: "性能",
    answer: "adb shell dumpsys cpuinfo | findstr com.tpshop.malls",
    prompt: "想在 Windows 上查看 com.tpshop.malls 的当前 CPU 信息。",
    meaning: "dumpsys cpuinfo 配合 findstr 过滤目标 APP。",
    hint: "dumpsys cpuinfo 后面接管道过滤包名。",
  },
  {
    id: "adb-ps-package",
    mode: "adb",
    tag: "性能",
    answer: "adb shell ps | findstr com.tpshop.malls",
    prompt: "想查看 com.tpshop.malls 的进程 ID。",
    meaning: "先查 PID，后面才能按 /proc/PID/net/dev 查看流量。",
    hint: "adb shell ps 后面接管道过滤包名。",
  },
  {
    id: "adb-battery",
    mode: "adb",
    tag: "性能",
    answer: "adb shell dumpsys battery",
    prompt: "想查看 Android 设备当前电量和充电状态。",
    meaning: "dumpsys battery 用于查看设备电量相关信息。",
    hint: "dumpsys 后面跟 battery。",
  },
  {
    id: "adb-traffic",
    mode: "adb",
    tag: "性能",
    answer: "adb shell cat /proc/12345/net/dev",
    prompt: "已经查到 APP 进程 ID 是 12345，想查看它的流量统计。",
    meaning: "按 /proc/进程ID/net/dev 查看该进程网络流量。",
    hint: "cat /proc/PID/net/dev。",
  },
  {
    id: "adb-df",
    mode: "adb",
    tag: "设备",
    answer: "adb shell df -h",
    prompt: "想查看 Android 设备磁盘空间使用情况。",
    meaning: "df -h 用更容易读的格式查看磁盘空间。",
    hint: "adb shell 后面是 Linux 风格的 df -h。",
  },
  {
    id: "adb-monkey-basic",
    mode: "adb",
    tag: "稳定性",
    answer: "adb shell monkey -p com.tpshop.malls -v 3000 > tpshop.log",
    prompt: "想对 com.tpshop.malls 做 3000 次随机稳定性测试，并保存日志。",
    meaning: "monkey 用于随机操作稳定性测试，日志里重点查 CRASH、ANR、Exception。",
    hint: "monkey -p 包名 -v 次数 > 日志文件。",
  },
  {
    id: "adb-monkey-advanced",
    mode: "adb",
    tag: "稳定性",
    answer: "adb shell monkey -p com.tpshop.malls --throttle 1000 --ignore-crashes --ignore-timeouts -v 2000 > tpshop.log",
    prompt: "想让 Monkey 每次操作间隔 1 秒，遇到闪退/超时也继续跑完 2000 次。",
    meaning: "--throttle 控制间隔，--ignore-crashes 和 --ignore-timeouts 让测试继续执行。",
    hint: "在 monkey 命令里加 throttle 和两个 ignore 参数。",
  },
  {
    id: "adb-monkey-seed",
    mode: "adb",
    tag: "稳定性",
    answer: "adb shell monkey -s 10 -p com.tpshop.malls -v 3000 > tpshop.log",
    prompt: "想给 Monkey 固定随机种子 10，方便复现同一轮随机操作。",
    meaning: "xmind 里出现过 monkey -s 种子数；固定 seed 后更方便复现问题。",
    hint: "monkey 后面加 -s 种子数。",
  },
];

let state = {
  mode: "linux",
  current: null,
  streak: 0,
  total: 0,
  correct: 0,
  progress: {},
};

let deferredInstallPrompt = null;

const els = {
  scenarioText: document.querySelector("#scenarioText"),
  meaningText: document.querySelector("#meaningText"),
  cardTag: document.querySelector("#cardTag"),
  cardProgress: document.querySelector("#cardProgress"),
  answerForm: document.querySelector("#answerForm"),
  answerInput: document.querySelector("#answerInput"),
  feedbackBox: document.querySelector("#feedbackBox"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackDetail: document.querySelector("#feedbackDetail"),
  streakValue: document.querySelector("#streakValue"),
  accuracyValue: document.querySelector("#accuracyValue"),
  masteredValue: document.querySelector("#masteredValue"),
  commandList: document.querySelector("#commandList"),
  speakButton: document.querySelector("#speakButton"),
  hintButton: document.querySelector("#hintButton"),
  skipButton: document.querySelector("#skipButton"),
  resetButton: document.querySelector("#resetButton"),
  installButton: document.querySelector("#installButton"),
  offlineStatus: document.querySelector("#offlineStatus"),
  segments: document.querySelectorAll(".segment"),
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    state = { ...state, ...JSON.parse(saved) };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function cardsForMode() {
  if (state.mode === "mixed") return cards;
  return cards.filter((card) => card.mode === state.mode);
}

function getProgress(cardId) {
  if (!state.progress[cardId]) {
    state.progress[cardId] = { seen: 0, correct: 0, wrong: 0, level: 0 };
  }
  return state.progress[cardId];
}

function pickNextCard() {
  const pool = cardsForMode();
  const scored = pool
    .map((card) => {
      const progress = getProgress(card.id);
      const score = progress.level * 6 + progress.correct * 2 - progress.wrong * 3 + progress.seen;
      return { card, score };
    })
    .sort((a, b) => a.score - b.score || a.card.answer.localeCompare(b.card.answer));

  if (scored.length === 1) return scored[0].card;

  const lowest = scored.slice(0, Math.min(5, scored.length));
  const filtered = lowest.filter((item) => item.card.id !== state.current?.id);
  const choices = filtered.length ? filtered : lowest;
  return choices[Math.floor(Math.random() * choices.length)].card;
}

function setCurrent(card) {
  state.current = card;
  const pool = cardsForMode();
  const index = pool.findIndex((item) => item.id === card.id) + 1;
  els.cardTag.textContent = card.tag;
  els.cardProgress.textContent = `${index} / ${pool.length}`;
  els.scenarioText.textContent = card.prompt;
  els.meaningText.textContent = card.meaning;
  els.answerInput.value = "";
  els.answerInput.placeholder = card.mode === "linux" ? "例如：pwd" : "例如：adb devices";
  els.answerInput.focus();
  renderList();
}

function normalize(value) {
  return value
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function isCorrect(value, card) {
  const normalized = normalize(value);
  const answers = [card.answer, ...(card.aliases || [])].map(normalize);
  return answers.includes(normalized);
}

function showFeedback(type, title, detail) {
  els.feedbackBox.className = `feedback ${type}`;
  els.feedbackTitle.textContent = title;
  els.feedbackDetail.textContent = detail;
}

function updateStats() {
  const pool = cardsForMode();
  const mastered = pool.filter((card) => getProgress(card.id).level >= 3).length;
  const accuracy = state.total ? Math.round((state.correct / state.total) * 100) : 0;
  els.streakValue.textContent = state.streak;
  els.accuracyValue.textContent = `${accuracy}%`;
  els.masteredValue.textContent = mastered;
}

function renderList() {
  const pool = cardsForMode();
  els.commandList.innerHTML = "";

  pool.forEach((card) => {
    const progress = getProgress(card.id);
    const item = document.createElement("div");
    item.className = "command-item";

    const name = document.createElement("span");
    name.className = "command-name";
    name.textContent = card.answer;

    const level = document.createElement("span");
    level.className = "command-level";
    level.textContent = `熟练度 ${Math.min(progress.level, 3)} / 3 · 对 ${progress.correct} · 错 ${progress.wrong}`;

    item.append(name, level);
    els.commandList.append(item);
  });

  updateStats();
}

function nextCard() {
  const card = pickNextCard();
  setCurrent(card);
  showFeedback("is-quiet", "下一题。", "先在脑子里想工作场景，再写命令。");
  saveState();
}

function submitAnswer(event) {
  event.preventDefault();
  const card = state.current;
  if (!card) return;

  const answer = els.answerInput.value;
  const progress = getProgress(card.id);
  progress.seen += 1;
  state.total += 1;

  if (isCorrect(answer, card)) {
    progress.correct += 1;
    progress.level = Math.min(3, progress.level + 1);
    state.correct += 1;
    state.streak += 1;
    showFeedback("is-correct", "答对了。", `${card.answer}：${card.meaning}`);
    saveState();
    renderList();
    window.setTimeout(() => {
      setCurrent(pickNextCard());
      saveState();
    }, 850);
    return;
  }

  progress.wrong += 1;
  progress.level = Math.max(0, progress.level - 1);
  state.streak = 0;
  showFeedback("is-wrong", "这题先记住场景。", `参考命令：${card.answer}`);
  saveState();
  renderList();
}

function speakCurrent() {
  const card = state.current;
  if (!card || !("speechSynthesis" in window)) {
    showFeedback("is-hint", "当前浏览器不支持朗读。", "可以直接看场景提示来默写命令。");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(card.prompt);
  utterance.lang = "zh-CN";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function showHint() {
  const card = state.current;
  if (!card) return;
  showFeedback("is-hint", card.hint, `答案格式接近：${maskAnswer(card.answer)}`);
}

function maskAnswer(answer) {
  return answer
    .split("")
    .map((char) => {
      if (char === " " || char === "/" || char === "." || char === "-") return char;
      return "_";
    })
    .join("");
}

function setMode(mode) {
  state.mode = mode;
  els.segments.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  setCurrent(pickNextCard());
  showFeedback("is-quiet", "已切换题库。", mode === "linux" ? "先练服务器命令。" : mode === "adb" ? "先练手机端命令。" : "混合练排查思路。");
  saveState();
}

function resetProgress() {
  state.progress = {};
  state.streak = 0;
  state.total = 0;
  state.correct = 0;
  setCurrent(pickNextCard());
  showFeedback("is-quiet", "进度已重置。", "从低熟练度题目重新开始。");
  saveState();
  renderList();
}

function updateOnlineStatus() {
  els.offlineStatus.textContent = navigator.onLine ? "在线可用" : "离线可用";
}

function bindEvents() {
  els.answerForm.addEventListener("submit", submitAnswer);
  els.speakButton.addEventListener("click", speakCurrent);
  els.hintButton.addEventListener("click", showHint);
  els.skipButton.addEventListener("click", nextCard);
  els.resetButton.addEventListener("click", resetProgress);
  els.segments.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    els.installButton.classList.remove("is-hidden");
  });
  els.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    els.installButton.classList.add("is-hidden");
  });
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("service-worker.js");
  } catch {
    showFeedback("is-hint", "离线缓存暂未启用。", "用本地服务或 HTTPS 打开后会自动启用。");
  }
}

function init() {
  loadState();
  bindEvents();
  updateOnlineStatus();
  setMode(state.mode || "linux");
  registerServiceWorker();
}

init();
