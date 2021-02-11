import RawCitiesData from '@/assets/cities.json';
import { city, station, countryCode, cityLetterContainer, citiesDataInterface } from '@/interfaces/citiesData'

const 
	citiesData:citiesDataInterface={
		cities:new Map() as Map<string,city>, //города по id
		countries:{
			ru:{}, //ссылки на города из cities разбитые на массивы по буквам
			kz:{},			
		}
	},
	citiesLetters=new Set<string>();


type countryName = 'Россия'|'Казахстан';

const countryNameDictionary:Record<countryName,countryCode>={
	'Россия':'ru',	
	'Казахстан':'kz',	
}

RawCitiesData.forEach(c=>{
	citiesData.cities.set(c.id,c);

	const 
		rawCityCountryName:countryName = c.country as countryName,
		countryCode:countryCode = countryNameDictionary[rawCityCountryName];

	if(countryCode){ //с текущими данными сработает всегда, но...
		const country:cityLetterContainer = citiesData.countries[countryCode];

		if(country)
			pushCityToLetterContainer(c,country);
	}

});

function pushCityToLetterContainer( city:city, arr:cityLetterContainer ){

	const letter:string = city.title.substring(0,1);

	citiesLetters.add(letter);

	if(arr[letter])
		arr[letter].push(city);
	else
		arr[letter]=[city];
};

export {citiesData};
export {citiesLetters};