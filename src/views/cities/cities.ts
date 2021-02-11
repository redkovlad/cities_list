import { defineComponent } from 'vue';
import searchbar from '@/components/searchbar.vue';
import headerLetters from '@/components/headerLetters.vue';
import { city, cityLetterContainer, countryCode, citiesDataInterface } from '@/interfaces/citiesData.ts';

export default defineComponent({
	name:'cities',
	data(){
		return {
			country:'ru' as countryCode,
			citiesData:this.$store.state.citiesData as citiesDataInterface, //список городов + их деление на страны
			searchBarModel:'', //модель содержимого поискового инпута
			searchLetter:'',  //либо выбранная по клику на букву, либо первый символ инпута
		}
	},
	components:{
		searchbar,
		headerLetters
	},
	created(){
		console.log(this.citiesData);
	},
	methods:{
		setCountry(country:countryCode){
			this.country = country;
		},
		searchBarHandler(value:string){ //обработчик поискового инпута
			if(value.length==0){
				this.searchLetter='';
				this.searchBarModel = '';
			}
			else{
				this.searchLetter = value.substring(0,1).toUpperCase();
				this.searchBarModel = value;
			}
		},
		letterClickHandler(value:string){
			this.searchLetter = value;
			this.searchBarModel = ''; //очистка инпута при клике на букву
		},
		getCitiesLetters():cityLetterContainer{
			//вывод списка городов в зависимости от выбранной страны, буквы, данных поискового инпута
			const 
				countryData:cityLetterContainer = this.citiesData.countries[this.country],
				citiesByLetter = countryData[this.searchLetter];
			
			if (!citiesByLetter){ //По первой букве с инпута нет городов - вернет все города страны
				return countryData;
			}
			else{
				const 
					searchRequest = this.searchBarModel.toLowerCase(),
					result:cityLetterContainer = { [this.searchLetter]:citiesByLetter };

				if(searchRequest.length>0){
					const filteredCities=citiesByLetter.filter((l:city)=>{
						return l.title.toLowerCase().indexOf(searchRequest)==0;
					});
					if(filteredCities.length>0) //Если фильтрация не пройдет - вернет все города по первой букве
						result[this.searchLetter] = filteredCities;
				}
				return result;
			}

		}
	}
})