<template>
	<div class="login-container">
		<div class="login-card">
			<img class="logo" src="https://v2.hysteria.network/assets/banner_light.svg" alt="">
			<div class="input-container">
				<input class="input" placeholder="Enter password" type="password">
			</div>
			<button class="login-btn">Login</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Login"
}
</script>

<style scoped>

.logo {

}

.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.login-card {
	padding: 20px;
	width: 300px;
	border-style: solid;
	border-width: 1px;
	border-radius: 10px;
	border-color: #ededed;
}

.input-container {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 10px;
}

.input {
	border-radius: 5px;
	border-style: solid;
	border-width: 1px;
	padding: 5px;
	font-size: 18px;
}

.login-btn {
	width: 100%;
	height: 50px;
	cursor: pointer;
	border-style: solid;
	background-color: #ffbc00;
	border-radius: 10px;
	border-width: 1px;
	color: white;
	font-weight: 550;
	font-size: 18px;
}

</style>