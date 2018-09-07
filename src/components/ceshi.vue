<template>
	<div @click="dianji">aaaaaaaaa</div>
</template>

<script>
	export default {
		data() {
			return {
               token:localStorage['ACCESS_TOKEN'],
               currentPage: 1,
			   length: 32,
			}
		},
		methods: {
			dianji() {
				this.$ajax
					.post(this.$Url + "/fp/selCollP",
						this.$qs.stringify({
							pageSize: 1,
							pageNum: 1
						}))
					.then(data => {
						console.log(data);
						//						this.list = data.data.data.list.list;
						//						this.total = data.data.data.list.total;
					})
					.catch(function(error) {
						console.log(error);
					});
			},
		}
	}
</script>

<style>

</style>