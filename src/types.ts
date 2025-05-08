export type Country = {
	name: {
		common: string;
		// official: string;
		nativeName: {
			[key: string]: {
				common: string;
			};
		};
	};
	tld: string[];
	cca2: string;
	currencies: {
		[key: string]: {
			name: string;
			// symbol: string;
		};
	};
	capital?: string[];
	region: string;
	subregion: string;
	languages: {
		[key: string]: string;
	};
	borders?: string[];
	maps: {
		googleMaps: string;
		openStreetMaps: string;
	};
	population: number;
	flags: {
		alt?: string;
	};
};

export type CountrySummary = Pick<
	Country,
	"name" | "flags" | "population" | "region" | "capital" | "cca2"
>;
