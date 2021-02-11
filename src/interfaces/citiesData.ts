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

export type countryCode = "ru" | "kz";

export type cityLetterContainer = Record<string,Array<city>>

export interface citiesDataInterface {
	cities:Map<string,city>; //{id_города : город}
	countries:Record<countryCode,cityLetterContainer>; //{ru:{'A':[{title:'Абакан'}]}}
}