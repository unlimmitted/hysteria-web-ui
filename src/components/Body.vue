<template>
	<div class="root-container">
		<div class="clients-container">
			<div class="container-header">
				<span class="title">Clients</span>
				<button
					class="new-client-btn"
					@click="this.openModal('addModalWindow', {})"
				>
					+ New
				</button>
			</div>
			<hr class="separator"/>
			<div v-for="user in this.users">
				<div class="container-body">
					<div class="left-block">
						<img class="def-user-pic" src="@/assets/def-user-icon.png" alt="">
						<div class="user-info">
							<span class="username">{{ user.name }}</span>
							<!--<span class="other-data">10.8.0.2 2 minutes ago</span>-->
						</div>
					</div>
					<div class="right-block">
						<label class="switch">
							<input type="checkbox" :checked="user.enabled"/>
							<span class="slider round"></span>
						</label>
						<button class="action-btn" @click="this.openModal('qrModalWindow', user)">
							<img class="btn-icon" src="@/assets/qr-icon.webp" alt="">
						</button>
						<button class="action-btn" @click="this.copyUrl(user)">
							<img class="btn-icon" src="@/assets/copy-icon.webp" alt="">
						</button>
						<button class="action-btn" @click="this.openModal('deleteModalWindow', user)">
							<img class="btn-icon" src="@/assets/delete-icon.png" alt="">
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<QrModal :imageUrl="qrUrl"/>
	<AddModal/>
	<DeleteModal :userToDelete="user"/>
</template>

<script>
import QrModal from "@/components/modal/QrModal.vue";
import AddModal from "@/components/modal/AddModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";
import axios from 'axios'

export default {
	name: "Body",

	components: {DeleteModal, AddModal, QrModal},

	data: () => ({
		name: "",
		users: [],
		user: {},
		qrUrl: ""
	}),

	methods: {
		openModal(modal, user) {
			this.user = user;
			this.qrUrl = user
			document.getElementById(modal).style.display = "unset";
		},

		copyUrl(user) {
			axios.get(`/api/v1/user/url?username=${user.name}`)
				.then(result => {
					navigator.clipboard.writeText(result.data);
				})
		}
	},

	mounted() {
		axios.get("/api/v1/users")
			.then((response) => {
				this.users = response.data;
			})
			.catch((error) => {
				console.log(error)
			})
	},

}
</script>

<style scoped>

.switch {
	position: relative;
	display: inline-block;
	width: 55px;
	height: 30px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: .4s;
	transition: .4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 20px;
	width: 20px;
	left: 4px;
	bottom: 5px;
	background-color: white;
	-webkit-transition: .4s;
	transition: .4s;
}

input:checked + .slider {
	background-color: #ffbc00;
}

input:focus + .slider {
	box-shadow: 0 0 1px #ffbc00;
}

input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
}

.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}

.btn-icon {
	width: 27px;
}

.right-block {
	display: flex;
	flex-direction: row;
	gap: 5px;
	align-items: center;
}

.action-btn {
	width: 50px;
	height: 50px;
	cursor: pointer;
	border-style: solid;
	border-color: #ededed;
	background-color: white;
	border-radius: 10px;
	border-width: 1px;
	color: #2e2e2e;
	padding: 10px;
	font-weight: 550;
	font-size: 18px;
}

.action-btn:hover {
	background-color: #ededed;
}

.left-block {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.def-user-pic {
	width: 40px;
	height: 40px;
	margin-right: 10px;
}

.username {
	font-size: 20px;
}

.other-data {
	font-size: 12px;
	color: #bababa;
}

.user-info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.container-body {
	margin: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.root-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.clients-container {
	display: flex;
	flex-direction: column;
	width: 50%;
	border-radius: 15px;
	border-style: solid;
	border-width: 1px;
	border-color: #ededed;
}

.new-client-btn {
	cursor: pointer;
	border-style: solid;
	border-color: #ededed;
	background-color: white;
	border-radius: 10px;
	border-width: 1px;
	color: #2e2e2e;
	padding: 10px;
	font-weight: 550;
	font-size: 18px;
}

.new-client-btn:hover {
	background-color: #ededed;
}

.container-header {
	margin: 10px;
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.separator {
	width: 100%;
	border-width: 1px;
	color: #ededed;
	margin: 0;
	padding: 0;
}

.title {
	user-select: none;
	font-size: 24px;
	font-weight: 500;
	max-width: fit-content;
}
</style>
