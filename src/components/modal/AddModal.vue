<template>
<Modal :id="'addModalWindow'">
	<template v-slot:header>
		New client
	</template>
	<template v-slot:content>
		<input type="text">
		<button>Add</button>
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

</style>