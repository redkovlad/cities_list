<template>
	<h1>Выбор города</h1>
	<header-letters @letterClicked="letterClickHandler" :searchLetter="searchLetter"></header-letters>
	<searchbar @valueChange="searchBarHandler" :value='searchBarModel' ref="searchbar"></searchbar>
	<div class="countries">
		<div :class="[country=='ru'?'country__active':'','country']" @click="setCountry('ru')">Россия</div>
		<div :class="[country=='kz'?'country__active':'','country']" @click="setCountry('kz')">Казахстан</div>
	</div>
	<div class="citiesList">
		<div class="citiesLetter" v-for="(cities,letter) of getCitiesLetters()" :key="letter">
			<div class="letter">{{letter}}</div>
			<div class="cities">
				<div class="city" v-for="city of cities" :key="city.id"><router-link :to='{name:`stations`,params:{cityID:city.id}}'>{{city.title}}</router-link></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./cities.ts"></script>
<style lang="css" scoped src="./cities.css"></style>