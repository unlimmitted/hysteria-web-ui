<template>
	<Modal :id="'deleteModalWindow'">
		<template v-slot:header>
			Delete client
		</template>
		<template v-slot:content>
			<div class="content">
				<span class="text">Delete [какой то юзерок]</span>
				<button class="del-btn">Delete</button>
			</div>
		</template>
	</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
	name: "DeleteModal" ,
	components: {Modal}
}
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
	border-color: #fa7878;
	background-color: #e33b3b;
	border-radius: 10px;
	border-width: 1px;
	color: white;
	font-weight: 550;
	font-size: 18px;
}
</style>