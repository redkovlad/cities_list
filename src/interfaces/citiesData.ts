export interface city {
	id:string;
	title:string;
	country:string;
	stations:Array<station>;
}

export interface station {
	id:string,
	title:string
}

export type countryName = 'Россия'|'Казахстан';
export type countryCode = "ru" | "kz";
export enum countryNameDictionary {
	"Россия" = "ru",
	"Казахстан" = "kz"
}

export interface country{
	title:string,
	code:countryCode
}

export type cityLetterContainer = Record<string,Array<city>>

export interface citiesDataInterface {
	cities:Map<string,city>; //{id_города : город}
	countries:Map<string, country>; //{Название : страна}
	citiesByCountries:Record<countryCode,cityLetterContainer>; //{ru:{'A':[{title:'Абакан'}]}}
}