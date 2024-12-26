<template>
	<Modal :id="'deleteModalWindow'">
		<template v-slot:header>
			Delete Modal
		</template>
		<template v-slot:content>
			<button>Delete</button>
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

</style>