<template>
	<div :id="this.id" class="modal">
		<div class="modal-content">
			<div class="header">
				<span class="title">
					<slot name="header"></slot>
				</span>
				<span class="close" @click="this.closeModal">&times;</span>
			</div>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "Modal",
	props: ["id"],
	methods: {
		closeModal() {
			document.getElementById(this.id).style.display = "none";
		}
	}
}
</script>

<style scoped>

.title {
	font-weight: 550;
}
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.modal {
	display: none;
	position: fixed;
	z-index: 2;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
	border-radius: 15px;
	background-color: #fefefe;
	min-height: 100px;
	min-width: 200px;
	max-width: fit-content;
	margin: 15% auto;
	padding: 5px 20px 5px;
	border: 1px solid #888;
}

.close {
	color: #aaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover,
.close:focus {
	color: black;
	text-decoration: none;
	cursor: pointer;
}

</style>