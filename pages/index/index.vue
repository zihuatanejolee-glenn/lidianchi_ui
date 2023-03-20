<tab-bar :current="currentTabIndex" backgroundColor="#fbfbfb" color="#999" tintColor="#42b983" @click="tabClick">
</tab-bar>

<script>
	export default {
		data() {
			return {

				currentTabIndex: 1
			}
		},
		methods: {
			tabClick(index) {
				console.log('返回tabBar索引：' + index)
				this.currentTabIndex = index
			}


		},
	}
</script>
<style>

</style>
