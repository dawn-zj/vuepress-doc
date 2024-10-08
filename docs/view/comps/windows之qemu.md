# qemu

## 用户模式：-net user

在F:\zj\zipPag\qemu下，有运行程序和封好的一下基础脚本。

例如startX86：指定2个参数即可，镜像地址和ssh连接端口

```shell
F:\zj\zipPag\qemu>startX86.bat F:\1.qcow2 822
```

启动成功后，可以使用xshell连接：localhost/822

此脚本里用的是-net user模式，启动后虚拟机——>宿主机，虚拟机——>互联网，但宿主机ping不了虚拟机



## 桥接模式：-net tap

安装tap-windows软件，我下载了9.21.2版本，安装完成会自动创建一个虚拟网卡 TAP-Windows Adapter V9。

为了使用方便，我更名为tap0。

![image-20240712143246602](E:\zj\note\images\image-20240712143246602.png)



选中tap0和Intel上网卡，右键进行桥接，会新生成一个网桥。

![image-20240712144327680](E:\zj\note\images\image-20240712144327680.png)



原理：将上网卡与tap0进行桥接，以后运行虚拟机时指定虚拟网卡：-net nic -net tap,ifname=tap0

启动虚拟机

```
F:\zj\zipPag\qemu>startX86_tap.bat F:\1.qcow2
```

使用ifconfig查询，ip和宿主机为同网段，自然可访问。

![image-20240712144521228](E:\zj\note\images\image-20240712144521228.png)

此时可使用查到的ip进行xshell连接

