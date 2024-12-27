<template>
	<div class="login-container">
		<div class="login-card">
			<img class="logo" src="https://v2.hysteria.network/assets/banner_light.svg" alt="">
			<div class="input-container">
				<input class="input" placeholder="Enter password" type="password" v-model="password">
			</div>
			<button class="login-btn" @click="login">Login</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router.js";
import {useRouter} from "vue-router";

export default {
	name: "Login",

	data: () => ({
		password: ''
	}),

	methods: {
		login() {
			axios.post(`/auth/login?password=${this.password}`)
				.then(response => {
					router.push('/')
				})
		}
	},

	setup() {
		return {
			router: useRouter()
		}
	}
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
