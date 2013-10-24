keyboard-nav
============

navigate nav by keyboard

```
<script>
	document.addEventListener( "DOMContentLoaded", ready, false )
	function ready () {
		var nav = new KeyboardNav();
	}
</script>
```

for:

```
<ul>
	<li class="active">
		<a href="/1">1</a>
	</li>
	<li class=""><a href="/2">2</a></li>
	<li class=""><a href="/3">3</a></li>
	<li class=""><a href="/4">4</a></li>
</ul>
```

configure:

```
new KeyboardNav({
	activeSelector: '.active',	//querySelector format
	prevCode: 37,								//char code of left arrow
	nextCode: 39								//right arrow
})
```