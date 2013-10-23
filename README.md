jquery-rewritelink
==================
Automatically switch link address to hash

Jquery with base URL
```javascript
<script>
$('.linkHash').rewriteLink({base:'http://localhost/test/',prefix:'#!/'});
</script>
```
HTML (original link)
```
<a href="http://localhost/test/page1" class="linkHash">Link</a>
```
After
```
<a href="http://localhost/test/#!/page1" class="linkHash">Link</a>
```
