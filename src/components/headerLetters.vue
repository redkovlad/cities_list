<template>
	<div class="headerLetters">
		<div :class="['headerLetter',getFirstLetterActiveClass]" @click="$emit('letterClicked','')" ref="emptyLetter">Все</div>
		<div v-for="letter of getLetters" :key="letter" :class="[getLetterActiveClass(letter),'headerLetter']" @click="$emit('letterClicked',letter)">{{letter}}</div>
	</div>
</template>
<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name:'header-letters',
		methods:{
			getLetterActiveClass(letter:string):string{
				return (letter==this.searchLetter)?'active':'';
			}
		},
		props:{
			searchLetter:String
		},
		computed:{
			getLetters():Set<string>{
				return this.$store.state.letters;
			},
			getFirstLetterActiveClass():string{ //подсветит "Все", если с инпута введена невалидная первая буква
				if(typeof this.searchLetter == 'string' && !this.$store.state.letters.has(this.searchLetter))
					return 'active';
				else
					return '';
			},
		},
		emits:['letterClicked']
	})
</script>
<style scoped>
	.headerLetters{
		display:flex;
		flex-flow:row;
		flex-wrap:wrap;
		margin:30px -5px 15px -22px;
	}
	.headerLetter{
		font-size: 24px;
		margin:5px 0 0 26px;
		margin-left: 22px;
		cursor: pointer;
		transition: color 200ms linear;
		user-select: none;
	}
	.headerLetter:hover,.headerLetter.active{
		color:#ef6727;
	}
	.headerLetter:not(:first-child){
		width:20px;
		text-align: center;
	}
	@media (max-width:720px){
		.headerLetter:first-child{
			width:100%;
		}
	}
</style>