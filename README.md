# reformat-markdown-table

[![Version](http://img.shields.io/npm/v/reformat-markdown-table.svg?style=flat)](https://www.npmjs.org/package/reformat-markdown-table)
[![Build Status](https://img.shields.io/travis/dbrockman/reformat-markdown-table/master.svg?style=flat)](https://travis-ci.org/dbrockman/reformat-markdown-table)
[![Coverage Status](http://img.shields.io/coveralls/dbrockman/reformat-markdown-table.svg?style=flat)](https://coveralls.io/r/dbrockman/reformat-markdown-table?branch=master)
[![Dependency Status](https://david-dm.org/dbrockman/reformat-markdown-table.svg?style=flat)](https://david-dm.org/dbrockman/reformat-markdown-table)
[![devDependency Status](https://david-dm.org/dbrockman/reformat-markdown-table/dev-status.svg?style=flat)](https://david-dm.org/dbrockman/reformat-markdown-table#info=devDependencies)

Reformat and align markdown tables

Takes a markdown string from `stdin` and outputs a formated string to `stdout`.

### Example

```
sudo npm i -g reformat-markdown-table

# copy a markdown table to the clipboard

pbpaste | reformat-markdown-table | pbcopy

# paste the table back into the markdown doc
```
