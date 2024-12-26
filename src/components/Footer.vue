<template>
	<div class="container">
		<div class="footer-data" @click="this.toLink('https://github.com/apernet/hysteria')">
			<img src="@/assets/github-icon.png" alt="GitHub" class="github-icon"/>
			Hysteria Github
		</div>
		<div class="footer-data" @click="this.toLink('https://github.com/ravel57')">
			<img src="@/assets/github-icon.png" alt="GitHub" class="github-icon"/>
			Ravel57 GitHub
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
	methods: {
		toLink(link) {
			window.open(link, '_blank');
		}
	}
}
</script>

<style scoped>
.container{
	background-color: white;
	border-top-style: solid;
	border-top-width: 1px;
	border-top-color: #ededed;
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.footer-data {
	cursor: pointer;
	opacity: 0.5;
	padding: 10px;
	gap: 5px;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.github-icon{
	width: 20px;
}

</style>