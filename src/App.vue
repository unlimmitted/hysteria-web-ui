<template>
	<div class="root">
		<Header class="app-header"/>
		<Body/>
		<Footer class="footer"/>
	</div>
</template>

<script>


import Header from "@/components/Header.vue";
import Body from "@/components/Body.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {Body, Header, Footer},
	data: () => ({})
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
	font-family: "Roboto", serif;
	font-weight: 400;
	font-style: normal;
	margin: 0 !important;
	padding: 0 !important;
	height: 100vh;
}

.app-header {
	z-index: 1;
	background-color: white;
	position: sticky;
	top: 0;
	margin-bottom: 10px;
}

.footer {
	margin-top: auto;
	position: sticky;
	bottom: 0;
}

button {
	font-family: "Roboto", serif;
}

.root {
	display: flex;
	flex-direction: column;
	height: 100vh;
}
</style>
