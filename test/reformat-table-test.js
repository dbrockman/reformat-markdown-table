'use strict';

var expect = require('chai').expect,
    reformat = require('../lib/reformat-table.js');


describe('reformat-table', function() {

  it('should reformat a markdown table', function() {
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

  it('should reformat a markdown table with chinese', function() {
    var input = [
      '| 第一个表头 1 |   表头 2   | Header 3|H|',
      '| --- | --- | :---: | :---: |',
      '| aaa |bbb| 中文3 | 中文4 |',
      '   |   eee |fff'
    ].join('\n'),
    output = [
      '| 第一个表头 1 | 表头 2 | Header 3 |   H   |',
      '|--------------|--------|:--------:|:-----:|',
      '| aaa          | bbb    |   中文3  | 中文4 |',
      '| eee          | fff    |          |       |',
      ''
    ].join('\n');

    expect(reformat(input)).to.eql(output);
  });

});
