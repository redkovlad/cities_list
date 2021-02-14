import RawCitiesData from '@/assets/cities.json';
import { 
	city,
	station,
	country,
	countryName,
	countryCode,
	countryNameDictionary,
	cityLetterContainer,
	citiesDataInterface } from '@/interfaces/citiesData'


const 
	citiesData:citiesDataInterface={
		cities:new Map() as Map<string,city>, //города по id
		countries:new Map() as Map<string,country>, //cтраны по названию
		citiesByCountries:{} as Record<countryCode,cityLetterContainer>  //ссылки на города из cities разбитые на массивы по буквам
		
	},
	citiesLetters=new Set<string>();


for (const prop  in countryNameDictionary){ //заполнение данных по странам
	const code = countryNameDictionary[prop as countryName];
	citiesData.countries.set(prop,{
		title:prop,
		code:code
	})
	citiesData.citiesByCountries[code] = {};
}


RawCitiesData.forEach(c=>{
	citiesData.cities.set(c.id,c);

	const 
		countryCode:countryCode = countryNameDictionary[c.country as countryName],
		countryArray:cityLetterContainer = citiesData.citiesByCountries[countryCode];

	pushCityToLetterContainer(c,countryArray);
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