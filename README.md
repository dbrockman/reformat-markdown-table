# reformat-markdown-table

[![Version](http://img.shields.io/npm/v/reformat-markdown-table.svg?style=flat)](https://www.npmjs.org/package/reformat-markdown-table)
[![Build Status](https://img.shields.io/travis/dbrockman/reformat-markdown-table/master.svg?style=flat)](https://travis-ci.org/dbrockman/reformat-markdown-table)
[![Coverage Status](http://img.shields.io/coveralls/dbrockman/reformat-markdown-table.svg?style=flat)](https://coveralls.io/r/dbrockman/reformat-markdown-table?branch=master)
[![Dependency Status](https://david-dm.org/dbrockman/reformat-markdown-table.svg?style=flat)](https://david-dm.org/dbrockman/reformat-markdown-table)
[![devDependency Status](https://david-dm.org/dbrockman/reformat-markdown-table/dev-status.svg?style=flat)](https://david-dm.org/dbrockman/reformat-markdown-table#info=devDependencies)


**特别声明：**

>因为，原仓库作者已经不维护了，所以在 npmjs.com 网站上重新发布项目，项目的名称为：reformat-markdown-table-cn。感谢原作者的贡献，本仓库保留原作者的所有提交。源仓库地址：https://github.com/dbrockman/reformat-markdown-table
>
>本仓库对原仓库做了以下两方面改进：
>1. 原仓库代码不支持中文，也就是说在 MarkDown 表格中包含中文时，不能很好的对齐；
>2. 原仓库代码不支持表格每行前后有空白的单元格；

## 功能

用来对 GFM MarkDown 表格源代码进行对齐美化。

例如，GFM MarkDown 表格代码如下：

```
| 姓名 | 电话 | 邮箱 |
| --- | :---: | ---: |
| 王顶 | 13582027613 | 408542507@qq.com |
| 郭玉朝 | 13812347652 | baldy@163.com |
|  | abc | def'
```

通过 reformat-markdown-table-cn 工具的处理之后：

```
| 姓名   |     电话    |             邮箱 |
|--------|:-----------:|-----------------:|
| 王顶   | 13582027613 | 408542507@qq.com |
| 郭玉朝 | 15703277652 |    baldy@163.com |
|        |     abc     |              def |
```

注意，这个示例包括对原仓库的两点改进：
1. 表格的前四行，表格文字包括中文，中文是两个半角字符宽度，可以很好对齐；
2. 表格的最后一行，包括一个空白单元格，也可以很好的对齐。原仓库是直接删除空白单元格的。

## 安装

运行下面的命令完成安装。

```
sudo npm install -g reformat-markdown-table-cn
```

## 使用

编辑一个 MarkDown 文件，该 Markdown 文件中只包含 GFM MarkDown 表格内容，假设文件名为：table.md，运行下面的命令：

```bash
cat table.md | reformat-markdown-table-cn

# or

cat table.md | reformat-markdown-table-cn > table2.md
```

