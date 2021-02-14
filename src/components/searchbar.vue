<template>
	<div class="searchbar">
		<input class="searchInput" ref="searchInput" placeholder="Введите свой город" :value='value' @keyup="$emit('valueChange',$event.target.value)">
	</div>
</template>

<script lang='ts'>

	import { defineComponent } from 'vue';
	export default defineComponent({
		name:'searchbar',
		props:{
			value:String
		},
		emits:['valueChange']
	})

</script>

<style scoped lang="less">
.searchbar{
	position: relative;
	margin:15px 0;
	width:100%;
	max-width:500px;
	&:after{
		content:'';
		position: absolute;
		right:15px;
		top:0;
		bottom:0;
		margin:auto 0;
		width:16px;
		height:24px;
		transform:rotate(45deg);
		background:url('../assets/img/inputSearch.png') no-repeat center;
	}
}
.searchInput{
	width:100%;
	border: 1px solid rgba(255,255,255,0.3);
	border-radius: 4px;
	height: 45px;
	font-size: 16px;
	line-height: 45px;
	color: rgba(255,255,255,0.7);
	background-color:black;
	padding: 0 15px;
	text-overflow: ellipsis;
	box-sizing:border-box;
}
</style>

