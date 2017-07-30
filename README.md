
<!--#echo json="package.json" key="name" underline="=" -->
humanuri
========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
A more cautious alternative to humanize-url.
<!--/#echo -->

Don't confuse with the "humanure" manure composting concept/movement.


Usage
-----

```javascript
var humanURI = require('humanuri'),
  u = 'https://www.example.net/foo/bar.html',
  h = humanURI(u);
console.log(u);
```
<!--/include-->

Output comparison:
<!-- §cmptbl -->
| input | humanuri | humanize-url |
|:----- |:-------- |:------------ |
| `http://www.permies.com/` | `www.permies.com` | `permies.com` |
| `https://www.permies.com/` | `www.permies.com` | `permies.com` |
| `http://permies.com` | `http://permies.com/` | `permies.com` |
| `https://permies.com` | `https://permies.com/` | `permies.com` |
| `http://permies.com/t/` | `http://permies.com/t/` | `permies.com/t` |
| `http://www.permies.com/t/` | `www.permies.com/t/` | `permies.com/t` |
| `http://permies.com/t/5942/Humanure` | `http://permies.com/t/5942/Humanure` | `permies.com/t/5942/Humanure` |
| `http://www.permies.com/t/5942/Humanure` | `www.permies.com/t/5942/Humanure` | `permies.com/t/5942/Humanure` |
| `ftp://www.debian.org` | `ftp://www.debian.org/` | `ftp://debian.org` |
| `ftp://ftp.debian.org` | `ftp://ftp.debian.org/` | `ftp://ftp.debian.org` |
| `http://ftp.debian.org/debian/README` | `http://ftp.debian.org/debian/README` | `ftp.debian.org/debian/README` |
<!-- § -->

<!--#toc stop="scan" -->





&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
