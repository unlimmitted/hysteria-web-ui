<template>
	<Modal :id="this.id">
		<template v-slot:header>
			QR Code
		</template>
		<template v-slot:content>
			<div class="header">
			</div>
			<img :src="this.imageUrl" alt="qr-code">
		</template>
	</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
	name: "QrModal",
	components: {Modal},
	data: ()=> ({
		id: "qrModalWindow",
	}),
	props: [
		'imageUrl',
	],

	methods: {},
}
</script>

<style scoped>

</style>
