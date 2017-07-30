/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = function (url) {
  if (!url) { return url; }
  var pr = url.match(/^([ -9;-~]+):\/{2}(?=(www\.|))/), sl;
  if (!pr) { return url; }
  url = url.slice(pr[0].length);
  sl = url.match(/\/(\S?)/);
  if (pr[2] && /^https?$/i.exec(pr[1])) {
    // short web URL -> casualize
    if (sl && (!sl[1])) {
      // There is at least one slash, and the first one of them has
      // nothing behind it. => There's exactly one slash and it's a
      // trailing one. Remove it.
      url = url.slice(0, -1);
    }
  } else {
    // long formal URL
    url = pr[0] + url;
    if (!sl) { url += '/'; }
  }
  return url;
};










module.exports = EX;
