---
lang: zh-CN
title: URL化
description: https://leetcode-cn.com/problems/string-to-url-lcci/
---
[TOC]

# 题目
```
URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/string-to-url-lcci
```

# 无需额外空间，Java的两种解法

- 首先分析题意，可以发现``给定字符串尾部有足够的空间``,并且Java实现要求使用``字符数组``，也就是说避免使用`String`相关替换字符API，否则也失去了题目的意义。

# 方案一