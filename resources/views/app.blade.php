<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet" />
		<link
			href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Kanit:wght@200&display=swap"
			rel="stylesheet"
		/>
    @viteReactRefresh
    @vite('resources/js/App.jsx')
    @inertiaHead
  </head>
  <body>
    @inertia
    <div id="login"></div>
  </body>
</html>