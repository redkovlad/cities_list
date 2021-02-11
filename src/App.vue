<template>
<router-view/>
</template>

<style>
body,h1,h2{
	margin:0;
}
h1{
	font-size: 36px;
	line-height: 1em;
}
input:focus{
	outline:none;
}
a{
	color:currentColor;
	text-decoration: none;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: white;
	background-color:black;
	min-height: 100vh;
	padding:35px 20px;
}
.goBackArrow{
	display: inline-block;
	margin:20px 0;
}
</style>
