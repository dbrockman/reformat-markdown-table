# reformat-markdown-table

[![Build Status](https://travis-ci.org/dbrockman/reformat-markdown-table.svg?branch=master)](https://travis-ci.org/dbrockman/reformat-markdown-table)
[![Coverage Status](https://coveralls.io/repos/dbrockman/reformat-markdown-table/badge.png?branch=master)](https://coveralls.io/r/dbrockman/reformat-markdown-table?branch=master)

Reformat and align markdown tables

Takes a markdown string from `stdin` and outputs a formated string to `stdout`.

### Example

```
sudo npm i -g reformat-markdown-table

# copy a markdown table to the clipboard

pbpaste | reformat-markdown-table | pbcopy

# paste the table back into the markdown doc
```
