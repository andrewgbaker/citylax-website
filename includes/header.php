<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie ie9"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class='no-js' lang='en' prefix="og: http://ogp.me/ns#">
  <!--<![endif]-->
	<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title><?php echo $pageTitle; ?></title>
	<meta name="title" content="<?php echo $pageTitle; ?>">
	<meta name="description" content="<?php echo $pageDescription; ?>">
	<meta name="keywords" content="<?php echo $pageKeywords; ?>">
	<meta name="author" content="Andrew Baker Design and Development">
	<meta property="og:title" content="City Lax Denver" />
	<meta property="og:type" content="website" />
  	<meta property="og:description" content="City Lax Denver." />
  	<meta property="og:url" content="http://citylaxdenver.org" />
  	<meta property="og:site_name" content="City Lax Denver" />
  	<meta property="og:image" content="" />

	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<script type="text/javascript" src="/js/libs/modernizr.js"></script>

	<!-- CSS
  ================================================== -->
	<link rel="stylesheet" href="/style/style.css">
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<script src="/js/libs/jquery.1.8.2.min.js"></script>
	
	<link rel="icon" type="image/ico" href="favicon.ico" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">
	
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-47206103-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>
<body>

	<nav>
		<div class="container clearfix nav_wrap">
			<a href="/" class="logo"></a>
			<ul class="main_nav">
				<li <?php if ($thisPage=="get_involved") echo " id=\"active_nav\""; ?>><a href="/get-involved/">Get Involved</a></li>
				<li <?php if ($thisPage=="about") echo " id=\"active_nav\""; ?>><a href="/about/" class="facts">About</a></li>
				<li <?php if ($thisPage=="people") echo " id=\"active_nav\""; ?>><a href="/people/">People</a></li>
				<li <?php if ($thisPage=="programs") echo " id=\"active_nav\""; ?>><a href="#">Teams</a></li>
				<li <?php if ($thisPage=="blog") echo " id=\"active_nav\""; ?> class="last"><a href="http://blog.citylaxdenver.org">Blog</a></li>
			</ul>
		</div>
	</nav>
	
	<div class="body_wrap <?php echo $thisPage; ?>">
	
	