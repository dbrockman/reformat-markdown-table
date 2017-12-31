'use strict';

var expect = require('chai').expect,
    reformat = require('../lib/reformat-table.js');


describe('reformat-table', function() {

  it('should reformat a markdown table 1', function() {
    var input = [
      '| Header 1 |   Header 2   | Header 3|H|',
      '| --- | --- | :---: | :---: |',
      '| aaa |bbb| cccc | ddd |',
      '   |   eee |fff'
    ].join('\n'),
    output = [
      '| Header 1 | Header 2 | Header 3 |   H   |',
      '|----------|----------|:--------:|:-----:|',
      '| aaa      | bbb      |   cccc   |  ddd  |',
      '| eee      | fff      |          |       |',
      ''
    ].join('\n');

    expect(reformat(input)).to.eql(output);
  });

  it('should reformat a markdown table 2', function() {
    var input = [
      '| 姓名 | 电话 | 邮箱 |',
      '| --- | :---: | ---: |',
      '| 王顶 | 13582027613 | 408542507@qq.com |',
      '| 郭玉朝 | 15703277652 | baldy@163.com |'
    ].join('\n'),
    output = [
      '| 姓名   |     电话    |             邮箱 |',
      '|--------|:-----------:|-----------------:|',
      '| 王顶   | 13582027613 | 408542507@qq.com |',
      '| 郭玉朝 | 15703277652 |    baldy@163.com |',
      ''
    ].join('\n');

    expect(reformat(input)).to.eql(output);
  });

});
