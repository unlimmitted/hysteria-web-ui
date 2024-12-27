<template>
	<div class="header">
		<img class="title-img" src="https://v2.hysteria.network/assets/banner_light.svg" alt="pic">
		<div class="log-out" @click="logout">
			<img class="log-out-pic" src="@/assets/logout-icon.webp" alt="logout">
			<span class="logout-text">Logout</span>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import {useRouter} from "vue-router";

export default {
	name: "Header",

	methods: {
		logout() {
			axios.post("/auth/logout")
			this.router.push("/login");
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
.header {
	padding: 15px;
	border-radius: 18px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-bottom-color: #ededed;
}

.title-img {
	width: 320px;
}

.logout-text{
	user-select: none;
	font-weight: 550;
}

.log-out {
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
	border-style: solid;
	border-width: 1px;
	border-color: #ededed;
	background-color: white;
	padding: 5px;
	border-radius: 10px;
}

.log-out:hover {
	background-color: #ededed;
}

.log-out-pic {
	user-select: none;
	width: 30px;
}
</style>
