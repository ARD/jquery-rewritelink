jquery-rewritelink
==================
Automatically switch link address to hash

Jquery with base URL
```javascript
$('.linkHash').rewriteLink({base:'http://localhost/test/',prefix:'#!/'});
```
HTML (original link)
```html
<a href="http://localhost/test/page1" class="linkHash">Link</a>
```
After
```html
<a href="http://localhost/test/#!/page1" class="linkHash">Link</a>
```
