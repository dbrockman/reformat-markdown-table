'use strict';

var expect = require('chai').expect,
    utils = require('../lib/utils.js');


describe('utils', function() {

  describe('splitStringToTable', function() {

    it('should split input string to a 2D array', function() {
      var input = [
        '| Header 1 |   Header 2   | Header 3|H|',
        '| --- | --- | :---: | :---: |',
        '| aaa |bbb| ccc | ddd |',
        '   |   eee |fff'
      ].join('\n'),
      output = [
        ['Header 1', 'Header 2', 'Header 3', 'H'],
        ['---', '---', ':---:', ':---:'],
        ['aaa', 'bbb', 'ccc', 'ddd'],
        ['eee', 'fff']
      ];

      expect(utils.splitStringToTable(input)).to.eql(output);
    });

  });

});
