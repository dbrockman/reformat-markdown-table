'use strict';

exports.splitStringToTable = splitStringToTable;
exports.getMaxLengthPerColumn = getMaxLengthPerColumn;
exports.getMaxLength = getMaxLength;
exports.padHeaderSeparatorString = padHeaderSeparatorString;
exports.getAlignment = getAlignment;
exports.fillInMissingColumns = fillInMissingColumns;
exports.getColumn = getColumn;
exports.trim = trim;
exports.padStringWithAlignment = padStringWithAlignment;
exports.padLeft = padLeft;
exports.padRight = padRight;
exports.padLeftAndRight = padLeftAndRight;
exports.getPadding = getPadding;
exports.repeatStr = repeatStr;


function splitStringToTable(str) {
  return trim(String(str)).split('\n').map(function(row) {
    row = row.replace(/^[\|\s]+/, '');
    row = row.replace(/[\|\s]+$/, '');
    return row.split('|').map(trim);
  });
}


function getMaxLengthPerColumn(table) {
  return table[0].map(function(str, column_index) {
    return getMaxLength(getColumn(table, column_index));
  });
}

function getMaxLength(array) {
  return array.reduce(function(max, item) {
    return Math.max(max, length(item));
  }, 0);
}


function padHeaderSeparatorString(str, len) {
  switch (getAlignment(str)) {
    case 'l': return repeatStr('-', Math.max(3, len));
    case 'c': return ':' + repeatStr('-', Math.max(3, len - 2)) + ':';
    case 'r': return repeatStr('-', Math.max(3, len - 1)) + ':';
  }
}


function getAlignment(str) {
  if (str[str.length - 1] === ':') {
    return str[0] === ':' ? 'c' : 'r';
  }
  return 'l';
}


function fillInMissingColumns(table) {
  var max = getMaxLength(table);
  table.forEach(function(row, i) {
    while (row.length < max) {
      row.push(i === 1 ? '---' : '');
    }
  });
}


function getColumn(table, column_index) {
  return table.map(function(row) {
    return row[column_index];
  });
}


function trim(str) {
  return str.trim();
}


function padStringWithAlignment(str, len, alignment) {
  switch (alignment) {
    case 'l': return padRight(str, len);
    case 'c': return padLeftAndRight(str, len);
    case 'r': return padLeft(str, len);
  }
}


function padLeft(str, len) {
  return getPadding(len - length(str)) + str;
}


function padRight(str, len) {
  return str + getPadding(len - length(str));
}


function padLeftAndRight(str, len) {
  var l = (len - length(str)) / 2;
  return getPadding(Math.ceil(l)) + str + getPadding(Math.floor(l));
}


function getPadding(len) {
  return repeatStr(' ', len);
}


function repeatStr(str, count) {
  return count > 0 ? Array(count + 1).join(str) : '';
}

/**
 * support chinese
 */
function length(str) {
  if (typeof str !== 'string') {
    return str.length || 0;
  }
  return str.replace(/[^\x00-\xff]/g, '00').length;
}
