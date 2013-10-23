jquery-rewritelink
==================
Automatically switch link address to hash

Jquery with base URL
<pre>
<script>
$('.linkHash').rewriteLink({base:'http://localhost/test/',prefix:'#!/'});
</script>
</pre>
HTML (original link)
<pre>
<a href="http://localhost/test/page1" class="linkHash">Link</a>
</pre>
After
<pre>
<a href="http://localhost/test/#!/page1" class="linkHash">Link</a>
</pre>
