<html>
<head>
	<meta property="og:title" content="NSU School Of Business" />
	<meta property="og:description" content="NSU School Of Business." />
	<meta property="og:image" content="http://nsubusinessalumni.org/images/nsu_logo.png" />
	<title>NSU School Of Business</title>
</head>
<body>
	<strong>Please wait for a moment.</strong>
	<script type="text/javascript">
	window.location = "<?php echo $site_url ?>";

	function loader() {
		var strong = document.querySelectorAll('strong');
		strong[0].innerText = strong[0].innerText+'.';
		setTimeout(loader, 1000);
	}
	loader();
	</script>
</body>
</html>