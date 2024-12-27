<template>
	<div class="root">
		<Header class="app-header"/>
		<Body/>
		<Footer class="footer"/>
	</div>
</template>

<script>
import Body from "@/components/Body.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
	name: "Layout" ,
	components: {Header, Footer, Body}
}
</script>

<style scoped>


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