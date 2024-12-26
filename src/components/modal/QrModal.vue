<template>
	<Modal :id="'qrModalWindow'">
		<template v-slot:header>
			QR Code
		</template>
		<template v-slot:content>
			<div class="header">
			</div>
			<img src="../../assets/qr-example.svg" alt="qr-code">
		</template>
	</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
	name: "QrModal",
	components: {Modal},
	methods: {}
}
</script>

<style scoped>

</style>