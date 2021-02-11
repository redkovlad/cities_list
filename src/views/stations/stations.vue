<template>
	<h1 class="stationMainHeader">{{city.title}}</h1>
	<router-link to='/' class="goBackArrow">← назад</router-link>
	<h2>Список станций</h2>
	<div class="stations">
		<div class="station" v-for='station of stations' :key="station.id">{{station.title}}</div>
	</div>
</template>

<script lang='ts'>
	import { defineComponent } from 'vue';
	import { city, station } from '@/interfaces/citiesData';

	export default defineComponent({
		name:'stations',
		props:['cityID'],
		data(){
			return {
				city:{} as city,
				stations:[] as station[]
			}
		},
		created(){ //по id в url-е из state получим город и станции

			const
				cityID = this.cityID,
				cities = this.$store.state.citiesData.cities;
			if(cities.has(cityID)){
				const
					city:city = cities.get(cityID) as city,
					stations:station[] = city.stations;

				this.city = city;
				this.stations = stations;
			}
			else{
				this.$router.push('/404/');
			}

		}
	})
</script>
<style scoped>
	.stations{
		font-size: 15px;
		line-height: 30px;
		margin-top: 15px;
	}
</style>