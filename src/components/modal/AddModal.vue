<template>
	<Modal :id="this.id">
		<template v-slot:header>
			New client
		</template>
		<template v-slot:content>
			<div class="content">
				<input v-model="username" class="nameInput" placeholder="Enter name" type="text">
				<button class="add-btn" @click="addUser">Add</button>
			</div>
		</template>
	</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import axios from "axios";

export default {
	name: "AddModal",

	components: {
		Modal
	},

	data: () =>({
		id: "addModalWindow",
		username: ""
	}),

	methods: {
		addUser() {
			axios.post(`/api/v1/user`, {username: this.username})
				.then(response => {
					this.$emit('newUser', response.data)
					// \/Это для закрытия модалки
					document.getElementById(this.id).style.display = "none";
				})
		}
	},
}
</script>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
}

.nameInput {
	border-radius: 5px;
	font-size: 26px;
	margin-bottom: 10px;
	border-style: solid;
	border-width: 2px;
}

.add-btn {
	margin-bottom: 10px;
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
