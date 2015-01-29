<html>
<head>
	<meta property="og:title" content="NSU School Of Business" />
	<meta property="og:description" content="NSU School Of Business." />
	<meta property="og:image" content="http://nsubusinessalumni.org/images/nsu_logo.png" />
	<title>NSU School Of Business</title>
	<style type="text/css">
	.links{
		float: left; padding: 3px 5px;
	}
	</style>
</head>
<body>
	<div class="links">
		<div id="fb-root"></div>
		<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=485258221589254&version=v2.0";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>

		<div class="fb-share-button" data-href="<?php echo $site_url.$referral_link; ?>" data-layout="button"></div>
	</div>
	<div class="links">
		<script src="//platform.linkedin.com/in.js" type="text/javascript">
		lang: en_US
		</script>
		<script type="IN/Share" data-url="<?php echo $site_url.$referral_link; ?>"></script>
	</div>
	<div class="links">
		<!-- Place this tag in your head or just before your close body tag. -->
		<script src="https://apis.google.com/js/platform.js" async defer></script>

		<!-- Place this tag where you want the share button to render. -->
		<div class="g-plus" data-action="share" data-annotation="none" data-href="<?php echo $site_url.$referral_link; ?>"></div>
	</div>
	<div class="links">
		<a class="twitter-share-button" href="<?php echo $site_url.$referral_link; ?>" data-related="NSU School Of Business" data-count="none"></a>
		<script>
		window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));
		</script>
	</div>
	<div class="links">
		<button id="clickButton" value="email">Email</button>
		<!-- <img src="<?php echo base_url() ?>images/email.png" alt="email" style="width: 20px;"> -->
		<input id="email" style="display:none;">
	</div>

	<script type="text/javascript">

	var b = document.getElementById('clickButton');
	var f = document.getElementById('email');

	b.addEventListener("click", function(){ 
		console.log('wow');
		if (this.innerText === 'Email') {
			this.innerText = 'Send';
			f.style.display = '';
		} else{
			this.innerText = 'Email';
			var email = f.value;
			f.style.display = 'none';

			var xmlhttp;
			if (window.XMLHttpRequest){
				xmlhttp=new XMLHttpRequest();
			}
			else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					alert("Referral Link send successfully!")
				}
			}
			xmlhttp.open("GET","<?php echo base_url()?>index.php/referral/send_referral_email/"+encodeURIComponent(email),true);
			xmlhttp.send();
		};
	});

	</script>
</body>
</html>