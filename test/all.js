/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

try { require('usnam-pmb'); } catch (ignore) {}
var hum = require('humanuri'), eq = require('equal-pmb'),
  rmf = require('read-resolved-file-sync')(require).frag('../README.md'),
  ize = require('humanize-url'),
  cmpTbl = [ '| input | humanuri | humanize-url |',
             '|:----- |:-------- |:------------ |'
    ],
  diffRx = /<(?:\-([ -;=\?-~]+)|\+([ -;=\?-~]+))>/g;


function veri(t) {
  if (!t) { return; }
  var i = t.replace(diffRx, '$1'), o = t.replace(diffRx, '$2'), z = ize(i);
  eq(hum(i), o);
  cmpTbl.push('|' + [i, o, (z === o ? '=' : z)
    ].map(function (s) { return ' `' + s + '` |'; }).join(''));
}


require('./urls.json').forEach(veri);




eq.lines(cmpTbl, rmf('cmptbl'));

console.log("+OK all test passed.");    //= "+OK all test passed."
