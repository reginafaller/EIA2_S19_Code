namespace L04_AssocArraysAndExport {
	// Heterogenes assoziatives Array mit vordefinierten Schlüsseln
	export interface HeteroPredefined {
		text: string;
		value: number;
		truth: boolean;
		words: string[];
	}

	// Homogenes assoziatives Array mit variablen Schlüsseln, 
	// ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 
	export interface HomogenousArray {
		[key: string]: HeteroPredefined[];
	}

	// Beispieldaten auf Basis der oben angegebenen Strukturen
	export let data: HomogenousArray
		= {
		"normal": [
			{ text: "Some text here", value: 101, truth: true, words: ["what", "ever"] },
			{ text: "More text here", value: 42, truth: false, words: ["idk", "google it"] }
		],
		"reverse": [
			{ text: "No text here", value: -101, truth: true, words: ["tahw", "reve"] },
			{ text: "Less text here", value: -42, truth: false, words: ["kdi", "ti elgoog"] }
		]
	};
}