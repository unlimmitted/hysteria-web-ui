<template>
	<Modal :id="'addModalWindow'">
		<template v-slot:header>
			New client
		</template>
		<template v-slot:content>
			<div class="content">
				<input class="nameInput" placeholder="Enter name" type="text">
				<button class="add-btn">Add</button>
			</div>
		</template>
	</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
	name: "AddModal",
	components: {Modal}
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
