## 描述

继承当前 APP 的 Argc 和 Argv

## 返回值

| Name  | Description                                         |
| ----- | --------------------------------------------------- |
| gArgc | argument count.它表示有多少个参数被传入可执行文件。 |
| gArgv | 参数值。它是一个指向字符数组的指针。                |

## 方法

```objectivec
- (void) connectArgcArgv:(int)gArgc setgArgv:(char **) gArgv
```
