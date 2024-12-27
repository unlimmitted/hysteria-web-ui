<template>
	<Modal :id="this.id">
		<template v-slot:header>
			Delete client
		</template>
		<template v-slot:content>
			<div class="content">
				<span class="text">Delete {{ userToDelete.name }}?</span>
				<button class="del-btn" @click="deleteUser">Delete</button>
			</div>
		</template>
	</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import axios from "axios";

export default {
	name: "DeleteModal",

	components: {
		Modal,
	},

	data: ()=> ({
		id: "deleteModalWindow",
	}),

	props: [
		'userToDelete',
	],

	methods: {
		deleteUser() {
			axios.delete(`/api/v1/user?username=${this.userToDelete.name}`)
			.then(response => {
				this.$emit('deleteUser', response.data);
				document.getElementById(this.id).style.display = "none"
			})
		}
	},
};
</script>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
}

.text {
	font-size: 20px;
	margin-bottom: 10px;
}

.del-btn {
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
