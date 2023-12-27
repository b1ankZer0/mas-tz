const tz = {
    'Pacific/Midway': '-11:00',
    'Pacific/Niue': '-11:00',
    'Pacific/Pago_Pago': '-11:00',
    'America/Adak': '-10:00',
    'Pacific/Honolulu': '-10:00',
    'Pacific/Johnston': '-10:00',
    'Pacific/Rarotonga': '-10:00',
    'Pacific/Tahiti': '-10:00',
    'Pacific/Marquesas': '-09:30',
    'America/Anchorage': '-09:00',
    'Pacific/Gambier': '-09:00',
    'America/Juneau': '-09:00',
    'America/Nome': '-09:00',
    'America/Sitka': '-09:00',
    'America/Yakutat': '-09:00',
    'America/Dawson': '-08:00',
    'America/Los_Angeles': '-08:00',
    'America/Metlakatla': '-08:00',
    'Pacific/Pitcairn': '-08:00',
    'America/Santa_Isabel': '-08:00',
    'America/Tijuana': '-08:00',
    'America/Vancouver': '-08:00',
    'America/Whitehorse': '-08:00',
    'America/Boise': '-07:00',
    'America/Cambridge_Bay': '-07:00',
    'America/Chihuahua': '-07:00',
    'America/Creston': '-07:00',
    'America/Dawson_Creek': '-07:00',
    'America/Denver': '-07:00',
    'America/Edmonton': '-07:00',
    'America/Hermosillo': '-07:00',
    'America/Inuvik': '-07:00',
    'America/Mazatlan': '-07:00',
    'America/Ojinaga': '-07:00',
    'America/Phoenix': '-07:00',
    'America/Shiprock': '-07:00',
    'America/Yellowknife': '-07:00',
    'America/Bahia_Banderas': '-06:00',
    'America/Belize': '-06:00',
    'America/North_Dakota/Beulah': '-06:00',
    'America/Cancun': '-06:00',
    'America/North_Dakota/Center': '-06:00',
    'America/Chicago': '-06:00',
    'America/Costa_Rica': '-06:00',
    'Pacific/Easter': '-06:00',
    'America/El_Salvador': '-06:00',
    'Pacific/Galapagos': '-06:00',
    'America/Guatemala': '-06:00',
    'America/Indiana/Knox': '-06:00',
    'America/Managua': '-06:00',
    'America/Matamoros': '-06:00',
    'America/Menominee': '-06:00',
    'America/Merida': '-06:00',
    'America/Mexico_City': '-06:00',
    'America/Monterrey': '-06:00',
    'America/North_Dakota/New_Salem': '-06:00',
    'America/Rainy_River': '-06:00',
    'America/Rankin_Inlet': '-06:00',
    'America/Regina': '-06:00',
    'America/Resolute': '-06:00',
    'America/Swift_Current': '-06:00',
    'America/Tegucigalpa': '-06:00',
    'America/Indiana/Tell_City': '-06:00',
    'America/Winnipeg': '-06:00',
    'America/Atikokan': '-05:00',
    'America/Bogota': '-05:00',
    'America/Cayman': '-05:00',
    'America/Detroit': '-05:00',
    'America/Grand_Turk': '-05:00',
    'America/Guayaquil': '-05:00',
    'America/Havana': '-05:00',
    'America/Indiana/Indianapolis': '-05:00',
    'America/Iqaluit': '-05:00',
    'America/Jamaica': '-05:00',
    'America/Lima': '-05:00',
    'America/Kentucky/Louisville': '-05:00',
    'America/Indiana/Marengo': '-05:00',
    'America/Kentucky/Monticello': '-05:00',
    'America/Montreal': '-05:00',
    'America/Nassau': '-05:00',
    'America/New_York': '-05:00',
    'America/Nipigon': '-05:00',
    'America/Panama': '-05:00',
    'America/Pangnirtung': '-05:00',
    'America/Indiana/Petersburg': '-05:00',
    'America/Port-au-Prince': '-05:00',
    'America/Thunder_Bay': '-05:00',
    'America/Toronto': '-05:00',
    'America/Indiana/Vevay': '-05:00',
    'America/Indiana/Vincennes': '-05:00',
    'America/Indiana/Winamac': '-05:00',
    'America/Caracas': '-04:30',
    'America/Anguilla': '-04:00',
    'America/Antigua': '-04:00',
    'America/Aruba': '-04:00',
    'America/Asuncion': '-04:00',
    'America/Barbados': '-04:00',
    'Atlantic/Bermuda': '-04:00',
    'America/Blanc-Sablon': '-04:00',
    'America/Boa_Vista': '-04:00',
    'America/Campo_Grande': '-04:00',
    'America/Cuiaba': '-04:00',
    'America/Curacao': '-04:00',
    'America/Dominica': '-04:00',
    'America/Eirunepe': '-04:00',
    'America/Glace_Bay': '-04:00',
    'America/Goose_Bay': '-04:00',
    'America/Grenada': '-04:00',
    'America/Guadeloupe': '-04:00',
    'America/Guyana': '-04:00',
    'America/Halifax': '-04:00',
    'America/Kralendijk': '-04:00',
    'America/La_Paz': '-04:00',
    'America/Lower_Princes': '-04:00',
    'America/Manaus': '-04:00',
    'America/Marigot': '-04:00',
    'America/Martinique': '-04:00',
    'America/Moncton': '-04:00',
    'America/Montserrat': '-04:00',
    'Antarctica/Palmer': '-04:00',
    'America/Port_of_Spain': '-04:00',
    'America/Porto_Velho': '-04:00',
    'America/Puerto_Rico': '-04:00',
    'America/Rio_Branco': '-04:00',
    'America/Santiago': '-04:00',
    'America/Santo_Domingo': '-04:00',
    'America/St_Barthelemy': '-04:00',
    'America/St_Kitts': '-04:00',
    'America/St_Lucia': '-04:00',
    'America/St_Thomas': '-04:00',
    'America/St_Vincent': '-04:00',
    'America/Thule': '-04:00',
    'America/Tortola': '-04:00',
    'America/St_Johns': '-03:30',
    'America/Araguaina': '-03:00',
    'America/Bahia': '-03:00',
    'America/Belem': '-03:00',
    'America/Argentina/Buenos_Aires': '-03:00',
    'America/Argentina/Catamarca': '-03:00',
    'America/Cayenne': '-03:00',
    'America/Argentina/Cordoba': '-03:00',
    'America/Fortaleza': '-03:00',
    'America/Godthab': '-03:00',
    'America/Argentina/Jujuy': '-03:00',
    'America/Argentina/La_Rioja': '-03:00',
    'America/Maceio': '-03:00',
    'America/Argentina/Mendoza': '-03:00',
    'America/Miquelon': '-03:00',
    'America/Montevideo': '-03:00',
    'America/Paramaribo': '-03:00',
    'America/Recife': '-03:00',
    'America/Argentina/Rio_Gallegos': '-03:00',
    'Antarctica/Rothera': '-03:00',
    'America/Argentina/Salta': '-03:00',
    'America/Argentina/San_Juan': '-03:00',
    'America/Argentina/San_Luis': '-03:00',
    'America/Santarem': '-03:00',
    'America/Sao_Paulo': '-03:00',
    'Atlantic/Stanley': '-03:00',
    'America/Argentina/Tucuman': '-03:00',
    'America/Argentina/Ushuaia': '-03:00',
    'America/Noronha': '-02:00',
    'Atlantic/South_Georgia': '-02:00',
    'Atlantic/Azores': '-01:00',
    'Atlantic/Cape_Verde': '-01:00',
    'America/Scoresbysund': '-01:00',
    'Africa/Abidjan': '+00:00',
    'Africa/Accra': '+00:00',
    'Africa/Bamako': '+00:00',
    'Africa/Banjul': '+00:00',
    'Africa/Bissau': '+00:00',
    'Atlantic/Canary': '+00:00',
    'Africa/Casablanca': '+00:00',
    'Africa/Conakry': '+00:00',
    'Africa/Dakar': '+00:00',
    'America/Danmarkshavn': '+00:00',
    'Europe/Dublin': '+00:00',
    'Africa/El_Aaiun': '+00:00',
    'Atlantic/Faroe': '+00:00',
    'Africa/Freetown': '+00:00',
    'Europe/Guernsey': '+00:00',
    'Europe/Isle_of_Man': '+00:00',
    'Europe/Jersey': '+00:00',
    'Europe/Lisbon': '+00:00',
    'Africa/Lome': '+00:00',
    'Europe/London': '+00:00',
    'Atlantic/Madeira': '+00:00',
    'Africa/Monrovia': '+00:00',
    'Africa/Nouakchott': '+00:00',
    'Africa/Ouagadougou': '+00:00',
    'Atlantic/Reykjavik': '+00:00',
    'Africa/Sao_Tome': '+00:00',
    'Atlantic/St_Helena': '+00:00',
    UTC: '+00:00',
    'Africa/Algiers': '+01:00',
    'Europe/Amsterdam': '+01:00',
    'Europe/Andorra': '+01:00',
    'Africa/Bangui': '+01:00',
    'Europe/Belgrade': '+01:00',
    'Europe/Berlin': '+01:00',
    'Europe/Bratislava': '+01:00',
    'Africa/Brazzaville': '+01:00',
    'Europe/Brussels': '+01:00',
    'Europe/Budapest': '+01:00',
    'Europe/Busingen': '+01:00',
    'Africa/Ceuta': '+01:00',
    'Europe/Copenhagen': '+01:00',
    'Africa/Douala': '+01:00',
    'Europe/Gibraltar': '+01:00',
    'Africa/Kinshasa': '+01:00',
    'Africa/Lagos': '+01:00',
    'Africa/Libreville': '+01:00',
    'Europe/Ljubljana': '+01:00',
    'Arctic/Longyearbyen': '+01:00',
    'Africa/Luanda': '+01:00',
    'Europe/Luxembourg': '+01:00',
    'Europe/Madrid': '+01:00',
    'Africa/Malabo': '+01:00',
    'Europe/Malta': '+01:00',
    'Europe/Monaco': '+01:00',
    'Africa/Ndjamena': '+01:00',
    'Africa/Niamey': '+01:00',
    'Europe/Oslo': '+01:00',
    'Europe/Paris': '+01:00',
    'Europe/Podgorica': '+01:00',
    'Africa/Porto-Novo': '+01:00',
    'Europe/Prague': '+01:00',
    'Europe/Rome': '+01:00',
    'Europe/San_Marino': '+01:00',
    'Europe/Sarajevo': '+01:00',
    'Europe/Skopje': '+01:00',
    'Europe/Stockholm': '+01:00',
    'Europe/Tirane': '+01:00',
    'Africa/Tripoli': '+01:00',
    'Africa/Tunis': '+01:00',
    'Europe/Vaduz': '+01:00',
    'Europe/Vatican': '+01:00',
    'Europe/Vienna': '+01:00',
    'Europe/Warsaw': '+01:00',
    'Africa/Windhoek': '+01:00',
    'Europe/Zagreb': '+01:00',
    'Europe/Zurich': '+01:00',
    'Europe/Athens': '+02:00',
    'Asia/Beirut': '+02:00',
    'Africa/Blantyre': '+02:00',
    'Europe/Bucharest': '+02:00',
    'Africa/Bujumbura': '+02:00',
    'Africa/Cairo': '+02:00',
    'Europe/Chisinau': '+02:00',
    'Asia/Damascus': '+02:00',
    'Africa/Gaborone': '+02:00',
    'Asia/Gaza': '+02:00',
    'Africa/Harare': '+02:00',
    'Asia/Hebron': '+02:00',
    'Europe/Helsinki': '+02:00',
    'Europe/Istanbul': '+02:00',
    'Asia/Jerusalem': '+02:00',
    'Africa/Johannesburg': '+02:00',
    'Europe/Kiev': '+02:00',
    'Africa/Kigali': '+02:00',
    'Africa/Lubumbashi': '+02:00',
    'Africa/Lusaka': '+02:00',
    'Africa/Maputo': '+02:00',
    'Europe/Mariehamn': '+02:00',
    'Africa/Maseru': '+02:00',
    'Africa/Mbabane': '+02:00',
    'Asia/Nicosia': '+02:00',
    'Europe/Riga': '+02:00',
    'Europe/Simferopol': '+02:00',
    'Europe/Sofia': '+02:00',
    'Europe/Tallinn': '+02:00',
    'Europe/Uzhgorod': '+02:00',
    'Europe/Vilnius': '+02:00',
    'Europe/Zaporozhye': '+02:00',
    'Africa/Addis_Ababa': '+03:00',
    'Asia/Aden': '+03:00',
    'Asia/Amman': '+03:00',
    'Indian/Antananarivo': '+03:00',
    'Africa/Asmara': '+03:00',
    'Asia/Baghdad': '+03:00',
    'Asia/Bahrain': '+03:00',
    'Indian/Comoro': '+03:00',
    'Africa/Dar_es_Salaam': '+03:00',
    'Africa/Djibouti': '+03:00',
    'Africa/Juba': '+03:00',
    'Europe/Kaliningrad': '+03:00',
    'Africa/Kampala': '+03:00',
    'Africa/Khartoum': '+03:00',
    'Asia/Kuwait': '+03:00',
    'Indian/Mayotte': '+03:00',
    'Europe/Minsk': '+03:00',
    'Africa/Mogadishu': '+03:00',
    'Europe/Moscow': '+03:00',
    'Africa/Nairobi': '+03:00',
    'Asia/Qatar': '+03:00',
    'Asia/Riyadh': '+03:00',
    'Antarctica/Syowa': '+03:00',
    'Asia/Tehran': '+03:30',
    'Asia/Baku': '+04:00',
    'Asia/Dubai': '+04:00',
    'Indian/Mahe': '+04:00',
    'Indian/Mauritius': '+04:00',
    'Asia/Muscat': '+04:00',
    'Indian/Reunion': '+04:00',
    'Europe/Samara': '+04:00',
    'Asia/Tbilisi': '+04:00',
    'Europe/Volgograd': '+04:00',
    'Asia/Yerevan': '+04:00',
    'Asia/Kabul': '+04:30',
    'Asia/Aqtau': '+05:00',
    'Asia/Aqtobe': '+05:00',
    'Asia/Ashgabat': '+05:00',
    'Asia/Dushanbe': '+05:00',
    'Asia/Karachi': '+05:00',
    'Indian/Kerguelen': '+05:00',
    'Indian/Maldives': '+05:00',
    'Antarctica/Mawson': '+05:00',
    'Asia/Oral': '+05:00',
    'Asia/Samarkand': '+05:00',
    'Asia/Tashkent': '+05:00',
    'Asia/Colombo': '+05:30',
    'Asia/Kolkata': '+05:30',
    'Asia/Kathmandu': '+05:45',
    'Asia/Almaty': '+06:00',
    'Asia/Bishkek': '+06:00',
    'Indian/Chagos': '+06:00',
    'Asia/Dhaka': '+06:00',
    'Asia/Qyzylorda': '+06:00',
    'Asia/Thimphu': '+06:00',
    'Antarctica/Vostok': '+06:00',
    'Asia/Yekaterinburg': '+06:00',
    'Indian/Cocos': '+06:30',
    'Asia/Rangoon': '+06:30',
    'Asia/Bangkok': '+07:00',
    'Indian/Christmas': '+07:00',
    'Antarctica/Davis': '+07:00',
    'Asia/Ho_Chi_Minh': '+07:00',
    'Asia/Hovd': '+07:00',
    'Asia/Jakarta': '+07:00',
    'Asia/Novokuznetsk': '+07:00',
    'Asia/Novosibirsk': '+07:00',
    'Asia/Omsk': '+07:00',
    'Asia/Phnom_Penh': '+07:00',
    'Asia/Pontianak': '+07:00',
    'Asia/Vientiane': '+07:00',
    'Asia/Brunei': '+08:00',
    'Antarctica/Casey': '+08:00',
    'Asia/Choibalsan': '+08:00',
    'Asia/Chongqing': '+08:00',
    'Asia/Harbin': '+08:00',
    'Asia/Hong_Kong': '+08:00',
    'Asia/Kashgar': '+08:00',
    'Asia/Krasnoyarsk': '+08:00',
    'Asia/Kuala_Lumpur': '+08:00',
    'Asia/Kuching': '+08:00',
    'Asia/Macau': '+08:00',
    'Asia/Makassar': '+08:00',
    'Asia/Manila': '+08:00',
    'Australia/Perth': '+08:00',
    'Asia/Shanghai': '+08:00',
    'Asia/Singapore': '+08:00',
    'Asia/Taipei': '+08:00',
    'Asia/Ulaanbaatar': '+08:00',
    'Asia/Urumqi': '+08:00',
    'Australia/Eucla': '+08:45',
    'Asia/Dili': '+09:00',
    'Asia/Irkutsk': '+09:00',
    'Asia/Jayapura': '+09:00',
    'Pacific/Palau': '+09:00',
    'Asia/Pyongyang': '+09:00',
    'Asia/Seoul': '+09:00',
    'Asia/Tokyo': '+09:00',
    'Australia/Adelaide': '+09:30',
    'Australia/Broken_Hill': '+09:30',
    'Australia/Darwin': '+09:30',
    'Australia/Brisbane': '+10:00',
    'Pacific/Chuuk': '+10:00',
    'Australia/Currie': '+10:00',
    'Antarctica/DumontDUrville': '+10:00',
    'Pacific/Guam': '+10:00',
    'Australia/Hobart': '+10:00',
    'Asia/Khandyga': '+10:00',
    'Australia/Lindeman': '+10:00',
    'Australia/Melbourne': '+10:00',
    'Pacific/Port_Moresby': '+10:00',
    'Pacific/Saipan': '+10:00',
    'Australia/Sydney': '+10:00',
    'Asia/Yakutsk': '+10:00',
    'Australia/Lord_Howe': '+10:30',
    'Pacific/Efate': '+11:00',
    'Pacific/Guadalcanal': '+11:00',
    'Pacific/Kosrae': '+11:00',
    'Antarctica/Macquarie': '+11:00',
    'Pacific/Noumea': '+11:00',
    'Pacific/Pohnpei': '+11:00',
    'Asia/Sakhalin': '+11:00',
    'Asia/Ust-Nera': '+11:00',
    'Asia/Vladivostok': '+11:00',
    'Pacific/Norfolk': '+11:30',
    'Asia/Anadyr': '+12:00',
    'Pacific/Auckland': '+12:00',
    'Pacific/Fiji': '+12:00',
    'Pacific/Funafuti': '+12:00',
    'Asia/Kamchatka': '+12:00',
    'Pacific/Kwajalein': '+12:00',
    'Asia/Magadan': '+12:00',
    'Pacific/Majuro': '+12:00',
    'Antarctica/McMurdo': '+12:00',
    'Pacific/Nauru': '+12:00',
    'Antarctica/South_Pole': '+12:00',
    'Pacific/Tarawa': '+12:00',
    'Pacific/Wake': '+12:00',
    'Pacific/Wallis': '+12:00',
    'Pacific/Chatham': '+12:45',
    'Pacific/Apia': '+13:00',
    'Pacific/Enderbury': '+13:00',
    'Pacific/Fakaofo': '+13:00',
    'Pacific/Tongatapu': '+13:00',
    'Pacific/Kiritimati': '+14:00'
}

const airports = { "ATL": "America/New_York", "ORD": "America/Chicago", "PEK": "Asia/Shanghai", "LHR": "Europe/London", "CDG": "Europe/Paris", "LAX": "America/Los_Angeles", "FRA": "Europe/Berlin", "DFW": "America/Chicago", "JFK": "America/New_York", "AMS": "Europe/Amsterdam", "PVG": "Asia/Shanghai", "SIN": "Asia/Singapore", "BCN": "Europe/Madrid", "ICN": "Asia/Seoul", "DEN": "America/Denver", "MIA": "America/New_York", "MUC": "Europe/Berlin", "IST": "Europe/Istanbul", "HKG": "Asia/Hong_Kong", "DXB": "Asia/Dubai", "LGW": "Europe/London", "CAN": "Asia/Shanghai", "FCO": "Europe/Rome", "MAD": "Europe/Madrid", "BKK": "Asia/Bangkok", "DME": "Europe/Moscow", "CTU": "Asia/Shanghai", "YYZ": "America/Toronto", "BRU": "Europe/Brussels", "MAN": "Europe/London", "VIE": "Europe/Vienna", "CLT": "America/New_York", "PHL": "America/New_York", "NRT": "Asia/Tokyo", "DUS": "Europe/Berlin", "XIY": "Asia/Shanghai", "PMI": "Europe/Madrid", "KMG": "Asia/Shanghai", "CKG": "Asia/Shanghai", "DEL": "Asia/Kolkata", "TPE": "Asia/Taipei", "KUL": "Asia/Kuala_Lumpur", "PHX": "America/Phoenix", "HGH": "Asia/Shanghai", "EWR": "America/New_York", "SFO": "America/Los_Angeles", "LAS": "America/Los_Angeles", "ZRH": "Europe/Zurich", "IAH": "America/Chicago", "MEX": "America/Mexico_City", "AUH": "Asia/Dubai", "MCO": "America/New_York", "SZX": "Asia/Shanghai", "XMN": "Asia/Shanghai", "CPH": "Europe/Copenhagen", "BOM": "Asia/Kolkata", "ARN": "Europe/Stockholm", "LIS": "Europe/Lisbon", "DTW": "America/Detroit", "MSP": "America/Chicago", "BOS": "America/New_York", "TXL": "Europe/Berlin", "DUB": "Europe/Dublin", "SHA": "Asia/Shanghai", "SYD": "Australia/Sydney", "AGP": "Europe/Madrid", "ORY": "Europe/Paris", "ATH": "Europe/Athens", "SEA": "America/Los_Angeles", "SVO": "Europe/Moscow", "DCA": "America/New_York", "GRU": "America/Sao_Paulo", "IAD": "America/New_York", "MNL": "Asia/Manila", "MXP": "Europe/Rome", "CSX": "Asia/Shanghai", "DOH": "Asia/Qatar", "JED": "Asia/Riyadh", "TAO": "Asia/Shanghai", "FLL": "America/New_York", "WUH": "Asia/Shanghai", "YUL": "America/Toronto", "LED": "Europe/Moscow", "CGK": "Asia/Jakarta", "OSL": "Europe/Oslo", "PRG": "Europe/Prague", "CGO": "Asia/Shanghai", "STN": "Europe/London", "NKG": "Asia/Shanghai", "GVA": "Europe/Zurich", "JNB": "Africa/Johannesburg", "HAM": "Europe/Berlin", "HEL": "Europe/Helsinki", "TFS": "Atlantic/Canary", "LGA": "America/New_York", "HND": "Asia/Tokyo", "YVR": "America/Vancouver", "ALC": "Europe/Madrid", "CUN": "America/Cancun", "LPA": "Atlantic/Canary", "BOG": "America/Bogota", "URC": "Asia/Urumqi", "KIX": "Asia/Tokyo", "CAI": "Africa/Cairo", "BNE": "Australia/Brisbane", "TSN": "Asia/Shanghai", "SAW": "Europe/Istanbul", "BWI": "America/New_York", "DLC": "Asia/Shanghai", "SLC": "America/Denver", "TPA": "America/New_York", "RUH": "Asia/Riyadh", "LYS": "Europe/Paris", "KWE": "Asia/Shanghai", "STR": "Europe/Berlin", "SHE": "Asia/Shanghai", "MDW": "America/Chicago", "TLV": "Asia/Jerusalem", "TNA": "Asia/Shanghai", "MEL": "Australia/Melbourne", "NCE": "Europe/Paris", "FOC": "Asia/Shanghai", "CGN": "Europe/Berlin", "MRS": "Europe/Paris", "BHX": "Europe/London", "HRB": "Asia/Shanghai", "NBO": "Africa/Nairobi", "AYT": "Europe/Istanbul", "CMN": "Africa/Casablanca", "MSY": "America/Chicago", "VCE": "Europe/Rome", "WAW": "Europe/Warsaw", "KWI": "Asia/Kuwait", "SAN": "America/Los_Angeles", "EDI": "Europe/London", "HNL": "Pacific/Honolulu", "CTA": "Europe/Rome", "ACE": "Atlantic/Canary", "PDX": "America/Los_Angeles", "LIM": "America/Lima", "NNG": "Asia/Shanghai", "YYC": "America/Edmonton", "OTP": "Europe/Bucharest", "MLA": "Europe/Malta", "AMM": "Asia/Amman", "STL": "America/Chicago", "TYN": "Asia/Shanghai", "HER": "Europe/Athens", "SYX": "Asia/Shanghai", "SGN": "Asia/Ho_Chi_Minh", "HAK": "Asia/Shanghai", "LTN": "Europe/London", "KWL": "Asia/Shanghai", "ADD": "Africa/Addis_Ababa", "AKL": "Pacific/Auckland", "PTY": "America/Panama", "MAA": "Asia/Kolkata", "FAO": "Europe/Lisbon", "MCT": "Asia/Muscat", "SJU": "America/Puerto_Rico", "CMB": "Asia/Colombo", "RIX": "Europe/Riga", "KBP": "Europe/Kiev", "OPO": "Europe/Lisbon", "IBZ": "Europe/Madrid", "DPS": "Asia/Makassar", "BRS": "Europe/London", "SVX": "Asia/Yekaterinburg", "BSB": "America/Sao_Paulo", "GLA": "Europe/London", "BLR": "Asia/Kolkata", "SHJ": "Asia/Dubai", "BUD": "Europe/Budapest", "CCU": "Asia/Kolkata", "GIG": "America/Sao_Paulo", "EMA": "Europe/London", "FUE": "Atlantic/Canary", "LCA": "Asia/Nicosia", "BSL": "Europe/Paris", "GDL": "America/Mexico_City", "NTE": "Europe/Paris", "PER": "Australia/Perth", "CCS": "America/Caracas", "OVB": "Asia/Novosibirsk", "ALG": "Africa/Algiers", "BLQ": "Europe/Rome", "TUN": "Africa/Tunis", "HET": "Asia/Shanghai", "HAN": "Asia/Bangkok", "SKG": "Europe/Athens", "KHN": "Asia/Shanghai", "VKO": "Europe/Moscow", "BEG": "Europe/Belgrade", "FUK": "Asia/Tokyo", "BAH": "Asia/Bahrain", "NGO": "Asia/Tokyo", "LHW": "Asia/Shanghai", "NGB": "Asia/Shanghai", "CRL": "Europe/Brussels", "RHO": "Europe/Athens", "AUS": "America/Chicago", "RDU": "America/New_York", "NCL": "Europe/London", "SJW": "Asia/Shanghai", "BNA": "America/Chicago", "DMM": "Asia/Riyadh", "VLC": "Europe/Madrid", "WNZ": "Asia/Shanghai", "CTS": "Asia/Tokyo", "BGY": "Europe/Rome", "CLE": "America/New_York", "TLS": "Europe/Paris", "NAY": "Asia/Shanghai", "LBA": "Europe/London", "TAS": "Asia/Tashkent", "PUS": "Asia/Seoul", "MCI": "America/Chicago", "MFM": "Asia/Macau", "SCL": "America/Santiago", "NAP": "Europe/Rome", "HFE": "Asia/Shanghai", "HAJ": "Europe/Berlin", "PSA": "Europe/Rome", "CVG": "America/New_York", "EZE": "America/Argentina/Buenos_Aires", "HOU": "America/Chicago", "SJO": "America/Costa_Rica", "PIT": "America/New_York", "DAC": "Asia/Dhaka", "HYD": "Asia/Kolkata", "MTY": "America/Monterrey", "RAK": "Africa/Casablanca", "PUJ": "America/Santo_Domingo", "LUX": "Europe/Luxembourg", "YEG": "America/Edmonton", "IND": "America/Indiana/Indianapolis", "HKT": "Asia/Bangkok", "BGO": "Europe/Oslo", "SAT": "America/Chicago", "EIN": "Europe/Amsterdam", "NAS": "America/Nassau", "DMK": "Asia/Bangkok", "ALA": "Asia/Almaty", "BOD": "Europe/Paris", "DKR": "Africa/Dakar", "BEY": "Asia/Beirut", "ADB": "Europe/Istanbul", "SOF": "Europe/Sofia", "CGQ": "Asia/Shanghai", "INC": "Asia/Shanghai", "SUB": "Asia/Jakarta", "LJG": "Asia/Shanghai", "KHH": "Asia/Taipei", "LCY": "Europe/London", "MHD": "Asia/Tehran", "RSW": "America/New_York", "CMH": "America/New_York", "GYD": "Asia/Baku", "AEP": "America/Argentina/Buenos_Aires", "BIO": "Europe/Madrid", "SVQ": "Europe/Madrid", "PMO": "Europe/Rome", "MKE": "America/Chicago", "KHI": "Asia/Karachi", "THR": "Asia/Tehran", "OKA": "Asia/Tokyo", "IKA": "Asia/Tehran", "DBV": "Europe/Zagreb", "SJC": "America/Los_Angeles", "LIN": "Europe/Rome", "BVA": "Europe/Paris", "ZUH": "Asia/Shanghai", "LOS": "Africa/Lagos", "ANC": "America/Anchorage", "COK": "Asia/Kolkata", "CJU": "Asia/Seoul", "ISB": "Asia/Karachi", "LPL": "Europe/London", "VNO": "Europe/Vilnius", "SSA": "America/Bahia", "DLM": "Europe/Istanbul", "KRK": "Europe/Warsaw", "SXM": "America/Lower_Princes", "VCP": "America/Sao_Paulo", "MEM": "America/Chicago", "YNT": "Asia/Shanghai", "UPG": "Asia/Makassar", "OAK": "America/Los_Angeles", "LHE": "Asia/Karachi", "CNS": "Australia/Brisbane", "CNF": "America/Sao_Paulo", "SMF": "America/Los_Angeles", "MSQ": "Europe/Minsk", "ACC": "Africa/Accra", "GOT": "Europe/Stockholm", "SVG": "Europe/Oslo", "DYU": "Asia/Dushanbe", "FLR": "Europe/Rome", "SAL": "America/El_Salvador", "ESB": "Europe/Istanbul", "FNC": "Atlantic/Madeira", "BKI": "Asia/Kuching", "OLB": "Europe/Rome", "BDL": "America/New_York", "CFU": "Europe/Athens", "POM": "Pacific/Port_Moresby", "ADL": "Australia/Adelaide", "ABJ": "Africa/Abidjan", "GDN": "Europe/Warsaw", "SJD": "America/Mazatlan", "BRE": "Europe/Berlin", "CIA": "Europe/Rome", "BRI": "Europe/Rome", "XNN": "Asia/Shanghai", "RGN": "Asia/Yangon", "DLA": "Africa/Douala", "MED": "Asia/Riyadh", "GRO": "Europe/Madrid", "CEB": "Asia/Manila", "SFB": "America/New_York", "SPU": "Europe/Zagreb", "YHZ": "America/Halifax", "CNX": "Asia/Bangkok", "NUE": "Europe/Berlin", "TIP": "Africa/Tripoli", "WUX": "Asia/Shanghai", "BLL": "Europe/Copenhagen", "HHN": "Europe/Berlin", "CGH": "America/Sao_Paulo", "SDQ": "America/Santo_Domingo", "LAD": "Africa/Luanda", "DWC": "Asia/Dubai", "KJA": "Asia/Krasnoyarsk", "PVR": "America/Mexico_City", "JAX": "America/New_York", "KRR": "Europe/Moscow", "KEF": "Atlantic/Reykjavik", "NBE": "Africa/Tunis", "DRW": "Australia/Darwin", "EVN": "Asia/Yerevan", "FRU": "Asia/Bishkek", "AUA": "America/Aruba", "CHQ": "Europe/Athens", "KGS": "Europe/Athens", "MBJ": "America/Jamaica", "YOW": "America/Toronto", "JJN": "Asia/Shanghai", "PBI": "America/New_York", "KTM": "Asia/Kathmandu", "HAV": "America/Havana", "CPT": "Africa/Johannesburg", "TRD": "Europe/Oslo", "SNA": "America/Los_Angeles", "POA": "America/Sao_Paulo", "CWB": "America/Sao_Paulo", "TRN": "Europe/Rome", "CAG": "Europe/Rome", "MLE": "Indian/Maldives", "ZAG": "Europe/Zagreb", "PFO": "Asia/Nicosia", "OGG": "Pacific/Honolulu", "PEN": "Asia/Kuala_Lumpur", "TRV": "Asia/Kolkata", "ITM": "Asia/Tokyo", "ABQ": "America/Denver", "SDF": "America/Kentucky/Louisville", "NAN": "Pacific/Fiji", "TIJ": "America/Tijuana", "MRU": "Indian/Mauritius", "ABZ": "Europe/London", "IKT": "Asia/Irkutsk", "OKC": "America/Chicago", "HBE": "Africa/Cairo", "REP": "Asia/Phnom_Penh", "YWG": "America/Winnipeg", "KRT": "Africa/Khartoum", "COO": "Africa/Porto-Novo", "TSA": "Asia/Taipei", "LIL": "Europe/Paris", "LEJ": "Europe/Berlin", "HRG": "Africa/Cairo", "UIO": "America/Guayaquil", "GMP": "Asia/Seoul", "SYZ": "Asia/Tehran", "AJA": "Europe/Paris", "KGL": "Africa/Kigali", "PPT": "Pacific/Tahiti", "SSH": "Africa/Cairo", "GUA": "America/Guatemala", "VRN": "Europe/Rome", "JER": "Europe/Jersey", "NRN": "Europe/Berlin", "TLL": "Europe/Tallinn", "RIC": "America/New_York", "YKS": "Asia/Yakutsk", "TSF": "Europe/Rome", "SAH": "Asia/Aden", "DAL": "America/Chicago", "KHV": "Asia/Vladivostok", "TRF": "Europe/Oslo", "RYG": "Europe/Oslo", "CZX": "Asia/Shanghai", "ORF": "America/New_York", "DJE": "Africa/Tunis", "BPN": "Asia/Makassar", "REC": "America/Recife", "CHC": "Pacific/Auckland", "BIA": "Europe/Paris", "TIA": "Europe/Tirane", "SWA": "Asia/Shanghai", "BUF": "America/New_York", "BHM": "America/Chicago", "GYE": "America/Guayaquil", "FOR": "America/Fortaleza", "BFS": "Europe/London", "AMD": "Asia/Kolkata", "POS": "America/Port_of_Spain", "BEL": "America/Belem", "GUM": "Pacific/Guam", "SCQ": "Europe/Madrid", "MAH": "Europe/Madrid", "TBS": "Asia/Tbilisi", "CHS": "America/New_York", "OMA": "America/Chicago", "ANU": "America/Antigua", "SZG": "Europe/Vienna", "SXB": "Europe/Paris", "ORK": "Europe/Dublin", "MYR": "America/New_York", "PNQ": "Asia/Kolkata", "ORN": "Africa/Algiers", "KIV": "Europe/Chisinau", "LUN": "Africa/Lusaka", "DTM": "Europe/Berlin", "EBB": "Africa/Kampala", "DAR": "Africa/Dar_es_Salaam", "WRO": "Europe/Warsaw", "LBD": "Asia/Dushanbe", "RTM": "Europe/Amsterdam", "SOU": "Europe/London", "DAD": "Asia/Ho_Chi_Minh", "STT": "America/St_Thomas", "CGB": "America/Cuiaba", "OUA": "Africa/Ouagadougou", "LJU": "Europe/Ljubljana", "TFN": "Atlantic/Canary", "AZA": "America/Phoenix", "DAY": "America/New_York", "MAO": "America/Manaus", "WLG": "Pacific/Auckland", "GAU": "Asia/Kolkata", "CWL": "Europe/London", "BJV": "Europe/Istanbul", "CUR": "America/Curacao", "NYO": "Europe/Stockholm", "TYS": "America/New_York", "TUS": "America/Phoenix", "PIE": "America/New_York", "SDJ": "Asia/Tokyo", "PLS": "America/Grand_Turk", "AHO": "Europe/Rome", "CCJ": "Asia/Kolkata", "PNH": "Asia/Phnom_Penh", "SDU": "America/Sao_Paulo", "LXA": "Asia/Shanghai", "EBL": "Asia/Baghdad", "ALB": "America/New_York", "ROC": "America/New_York", "OSS": "Asia/Bishkek", "ABV": "Africa/Lagos", "PEW": "Asia/Karachi", "YCU": "Asia/Shanghai", "BAV": "Asia/Shanghai", "SNN": "Europe/Dublin", "GSP": "America/New_York", "JOG": "Asia/Jakarta", "LIT": "America/Chicago", "SZB": "Asia/Kuala_Lumpur", "GOI": "Asia/Kolkata", "PTP": "America/Guadeloupe", "RMQ": "Asia/Taipei", "YZF": "America/Yellowknife", "KIN": "America/Jamaica", "DSM": "America/Chicago", "BET": "America/Anchorage", "CLO": "America/Bogota", "YQB": "America/Toronto", "HRE": "Africa/Harare", "KTW": "Europe/Warsaw", "RNO": "America/Los_Angeles", "GRR": "America/Detroit", "OOL": "Australia/Brisbane", "KZN": "Europe/Moscow", "ROV": "Europe/Moscow", "VLI": "Pacific/Efate", "BZE": "America/Belize", "TPS": "Europe/Rome", "AGA": "Africa/Casablanca", "TUL": "America/Chicago", "PVD": "America/New_York", "BKO": "Africa/Bamako", "FIH": "Africa/Kinshasa", "TNR": "Indian/Antananarivo", "BMA": "Europe/Stockholm", "KUF": "Europe/Samara", "BTH": "Asia/Jakarta", "FAI": "America/Anchorage", "KBL": "Asia/Kabul", "WMI": "Europe/Warsaw", "TOS": "Europe/Oslo", "TXN": "Asia/Shanghai", "SYR": "America/New_York", "KCH": "Asia/Kuching", "AER": "Europe/Moscow", "VVO": "Asia/Vladivostok", "MDE": "America/Bogota", "ZAD": "Europe/Zagreb", "BZV": "Africa/Brazzaville", "GSO": "America/New_York", "PSP": "America/Los_Angeles", "LPB": "America/La_Paz", "GCM": "America/Cayman", "DSN": "Asia/Shanghai", "ONT": "America/Los_Angeles", "VTE": "Asia/Vientiane", "SUF": "Europe/Rome", "BEN": "Africa/Tripoli", "EXT": "Europe/London", "OME": "America/Nome", "LBV": "Africa/Libreville", "YIH": "Asia/Shanghai", "XNA": "America/Chicago", "HIR": "Pacific/Guadalcanal", "JHG": "Asia/Shanghai", "MYY": "Asia/Kuching", "VVI": "America/La_Paz", "AWZ": "Asia/Tehran", "PAP": "America/Port-au-Prince", "HMO": "America/Hermosillo", "SKP": "Europe/Skopje", "MPL": "Europe/Paris", "YRT": "America/Rankin_Inlet", "ELP": "America/Denver", "PDL": "Atlantic/Azores", "FMM": "Europe/Berlin", "SAV": "America/New_York", "HPN": "America/New_York", "BWN": "Asia/Brunei", "UFA": "Asia/Yekaterinburg", "FDF": "America/Martinique", "BGI": "America/Barbados", "MVD": "America/Montevideo", "SAP": "America/Tegucigalpa", "TJM": "Asia/Yekaterinburg", "OTZ": "America/Nome", "LIR": "America/Costa_Rica", "CAK": "America/New_York", "ADE": "Asia/Aden", "KTN": "America/Sitka", "DRS": "Europe/Berlin", "MRV": "Europe/Moscow", "IEV": "Europe/Kiev", "YZV": "America/Toronto", "BDS": "Europe/Rome", "FNA": "Africa/Freetown", "MIG": "Asia/Shanghai", "GYN": "America/Sao_Paulo", "YYT": "America/St_Johns", "XRY": "Europe/Madrid", "DUR": "Africa/Johannesburg", "GSE": "Europe/Stockholm", "POZ": "Europe/Warsaw", "DYG": "Asia/Shanghai", "PIK": "Europe/London", "BHD": "Europe/London", "SCO": "Asia/Aqtau", "BDO": "Asia/Jakarta", "LIH": "Pacific/Honolulu", "PNS": "America/Chicago", "MDC": "Asia/Makassar", "FLN": "America/Sao_Paulo", "PRN": "Europe/Belgrade", "CLJ": "Europe/Bucharest", "AAL": "Europe/Copenhagen", "KOA": "Pacific/Honolulu", "BOI": "America/Boise", "ULN": "Asia/Ulaanbaatar", "LFW": "Africa/Lome", "JRO": "Africa/Dar_es_Salaam", "RUN": "Indian/Reunion", "BHY": "Asia/Shanghai", "FKB": "Europe/Berlin", "IFN": "Asia/Tehran", "XUZ": "Asia/Shanghai", "JIB": "Africa/Djibouti", "LEX": "America/New_York", "MHT": "America/New_York", "FAT": "America/Los_Angeles", "JNU": "America/Juneau", "ICT": "America/Chicago", "CEK": "Asia/Yekaterinburg", "BTS": "Europe/Bratislava", "GOA": "Europe/Rome", "CLY": "Europe/Paris", "MJV": "Europe/Madrid", "MDT": "America/New_York", "PMV": "America/Caracas", "REU": "Europe/Madrid", "ZHA": "Asia/Shanghai", "BOH": "Europe/London", "NSI": "Africa/Douala", "WDH": "Africa/Windhoek", "KUN": "Europe/Vilnius", "RAO": "America/Sao_Paulo", "BND": "Asia/Tehran", "GRZ": "Europe/Vienna", "SDR": "Europe/Madrid", "TNG": "Africa/Casablanca", "ODS": "Europe/Kiev", "UVF": "America/St_Lucia", "WIL": "Africa/Nairobi", "PNR": "Africa/Brazzaville", "YIW": "Asia/Shanghai", "LYI": "Asia/Shanghai", "NDR": "Africa/Casablanca", "YFB": "America/Iqaluit", "NTG": "Asia/Shanghai", "GCI": "Europe/Guernsey", "GOJ": "Europe/Moscow", "CKY": "Africa/Conakry", "HSV": "America/Chicago", "BUR": "America/Los_Angeles", "LGB": "America/Los_Angeles", "JAN": "America/Chicago", "HLD": "Asia/Shanghai", "JHB": "Asia/Kuala_Lumpur", "PKU": "Asia/Jakarta", "USM": "Asia/Bangkok", "LKO": "Asia/Kolkata", "VTZ": "Asia/Kolkata", "ASU": "America/Asuncion", "KLO": "Asia/Manila", "KOJ": "Asia/Tokyo", "TGU": "America/Tegucigalpa", "LEI": "Europe/Madrid", "FEZ": "Africa/Casablanca", "PGD": "America/New_York", "BOO": "Europe/Oslo", "CID": "America/Chicago", "DJJ": "Asia/Jayapura", "DOM": "America/Dominica", "SID": "Atlantic/Cape_Verde", "MPM": "Africa/Maputo", "YNZ": "Asia/Shanghai", "RAI": "Atlantic/Cape_Verde", "SRG": "Asia/Jakarta", "CAE": "America/New_York", "MSN": "America/Chicago", "LGK": "Asia/Kuala_Lumpur", "CJB": "Asia/Kolkata", "JAI": "Asia/Kolkata", "OMS": "Asia/Omsk", "LWO": "Europe/Kiev", "NIM": "Africa/Niamey", "CGR": "America/Campo_Grande", "HIJ": "Asia/Tokyo", "KMQ": "Asia/Tokyo", "NGS": "Asia/Tokyo", "YXL": "America/Winnipeg", "ADA": "Europe/Istanbul", "BES": "Europe/Paris", "OVD": "Europe/Madrid", "EYW": "America/New_York", "ISP": "America/New_York", "MDL": "Asia/Yangon", "UUS": "Asia/Sakhalin", "KIH": "Asia/Tehran", "CUU": "America/Chihuahua", "ZTH": "Europe/Athens", "YQR": "America/Regina", "LOP": "Asia/Makassar", "MMX": "Europe/Stockholm", "LYG": "Asia/Shanghai", "JDZ": "Asia/Shanghai", "CIH": "Asia/Shanghai", "KIJ": "Asia/Tokyo", "NUX": "Asia/Yekaterinburg", "FWA": "America/Indiana/Indianapolis", "CHA": "America/New_York", "TSV": "Australia/Brisbane", "KBV": "Asia/Bangkok", "CGP": "Asia/Dhaka", "IXB": "Asia/Kolkata", "IDR": "Asia/Kolkata", "VIX": "America/Sao_Paulo", "NAT": "America/Fortaleza", "CZL": "Africa/Algiers", "VER": "America/Mexico_City", "CZM": "America/Cancun", "CUL": "America/Mazatlan", "TGD": "Europe/Podgorica", "SJJ": "Europe/Sarajevo", "ROB": "Africa/Monrovia", "IXE": "Asia/Kolkata", "MIR": "Africa/Tunis", "SLZ": "America/Fortaleza", "YWK": "America/Goose_Bay", "JTR": "Europe/Athens", "DZA": "Indian/Mayotte", "YLW": "America/Vancouver", "WUS": "Asia/Shanghai", "CIF": "Asia/Shanghai", "NOC": "Europe/Dublin", "MLI": "America/Chicago", "BDA": "Atlantic/Bermuda", "PIA": "America/Chicago", "ROA": "America/New_York", "TLH": "America/New_York", "GEG": "America/Los_Angeles", "NAG": "Asia/Kolkata", "ASB": "Asia/Ashgabat", "KGD": "Europe/Kaliningrad", "UDI": "America/Sao_Paulo", "TBZ": "Asia/Tehran", "FPO": "America/Nassau", "YYR": "America/Goose_Bay", "MZT": "America/Mazatlan", "MID": "America/Merida", "YXE": "America/Regina", "PUY": "Europe/Zagreb", "NSK": "Asia/Krasnoyarsk", "BDJ": "Asia/Makassar", "SXR": "Asia/Kolkata", "GND": "America/Grenada", "AHB": "Asia/Riyadh", "MGA": "America/Managua", "BJX": "America/Mexico_City", "POP": "America/Santo_Domingo", "SSG": "Africa/Malabo", "YNJ": "Asia/Shanghai", "HYN": "Asia/Shanghai", "LZH": "Asia/Shanghai", "SEN": "Europe/London", "SGF": "America/Chicago", "FAR": "America/Chicago", "BGW": "Asia/Baghdad", "STM": "America/Santarem", "DVO": "Asia/Manila", "TTN": "America/New_York", "KBR": "Asia/Kuala_Lumpur", "AMQ": "Asia/Jayapura", "SGC": "Asia/Yekaterinburg", "NJC": "Asia/Yekaterinburg", "DNK": "Europe/Kiev", "MAR": "America/Caracas", "ISG": "Asia/Tokyo", "UET": "Asia/Karachi", "MHH": "America/Nassau", "RTB": "America/Tegucigalpa", "YTZ": "America/Toronto", "FSC": "Europe/Paris", "BIQ": "Europe/Paris", "BVC": "Atlantic/Cape_Verde", "EUG": "America/Los_Angeles", "COS": "America/Denver", "BTV": "America/New_York", "PLM": "Asia/Jakarta", "RAR": "Pacific/Rarotonga", "TLC": "America/Mexico_City", "YQT": "America/Thunder_Bay", "BJM": "Africa/Bujumbura", "SEZ": "Indian/Mahe", "LZO": "Asia/Shanghai", "HSN": "Asia/Shanghai", "KOW": "Asia/Shanghai", "XFN": "Asia/Shanghai", "TGO": "Asia/Shanghai", "AES": "Europe/Oslo", "ABE": "America/New_York", "CRK": "Asia/Manila", "FNT": "America/Detroit", "SRQ": "America/New_York", "CHO": "America/New_York", "FSD": "America/Chicago", "ILM": "America/New_York", "FDH": "Europe/Berlin", "KHG": "Asia/Urumqi", "CBR": "Australia/Sydney", "ISA": "Australia/Brisbane", "LPQ": "Asia/Vientiane", "MCZ": "America/Maceio", "AJU": "America/Maceio", "COR": "America/Argentina/Cordoba", "OKJ": "Asia/Tokyo", "TIF": "Asia/Riyadh", "NOU": "Pacific/Noumea", "VSA": "America/Mexico_City", "YYJ": "America/Vancouver", "TSR": "Europe/Bucharest", "JMK": "Europe/Athens", "RNS": "Europe/Paris", "MBA": "Africa/Nairobi", "BJL": "Africa/Banjul", "YMM": "America/Edmonton", "ANI": "America/Anchorage", "RAB": "Pacific/Port_Moresby", "PAT": "Asia/Kolkata", "PLU": "America/Sao_Paulo", "ELQ": "Asia/Riyadh", "LLW": "Africa/Blantyre", "HIA": "Asia/Shanghai", "HAU": "Europe/Oslo", "WXN": "Asia/Shanghai", "UYN": "Asia/Shanghai", "NMA": "Asia/Tashkent", "MRA": "Africa/Tripoli", "MGQ": "Africa/Mogadishu", "TMP": "Europe/Helsinki", "BME": "Australia/Perth", "BMI": "America/Chicago", "BIL": "America/Denver", "AVL": "America/New_York", "UKB": "Asia/Tokyo", "GNV": "America/New_York", "ASP": "Australia/Darwin", "IXJ": "Asia/Kolkata", "EIS": "America/Tortola", "CTG": "America/Bogota", "IGU": "America/Sao_Paulo", "MYJ": "Asia/Tokyo", "MUX": "Asia/Karachi", "VRA": "America/Havana", "CJS": "America/Ciudad_Juarez", "BRN": "Europe/Zurich", "IAS": "Europe/Bucharest", "LCG": "Europe/Madrid", "BOJ": "Europe/Sofia", "ZNZ": "Africa/Dar_es_Salaam", "JUB": "Africa/Juba", "SKT": "Asia/Karachi", "LDB": "America/Sao_Paulo", "SUV": "Pacific/Fiji", "LNZ": "Europe/Vienna", "NKC": "Africa/Nouakchott", "FUG": "Asia/Shanghai", "NZH": "Asia/Shanghai", "RZE": "Europe/Warsaw", "KRS": "Europe/Oslo", "DAT": "Asia/Shanghai", "EGO": "Europe/Moscow", "SON": "Pacific/Efate", "KOI": "Europe/London", "IOM": "Europe/Isle_of_Man", "SBN": "America/Indiana/Indianapolis", "LAE": "Pacific/Port_Moresby", "RIY": "Asia/Aden", "CEI": "Asia/Bangkok", "PAD": "Europe/Berlin", "FMO": "Europe/Berlin", "IXZ": "Asia/Kolkata", "RPR": "Asia/Kolkata", "HGU": "Pacific/Port_Moresby", "UUD": "Asia/Irkutsk", "HTA": "Asia/Chita", "SKB": "America/St_Kitts", "PZO": "America/Caracas", "BLA": "America/Caracas", "CUZ": "America/Lima", "ADZ": "America/Bogota", "EOH": "America/Bogota", "ANF": "America/Santiago", "THE": "America/Fortaleza", "MAB": "America/Belem", "JPA": "America/Fortaleza", "KMI": "Asia/Tokyo", "ZAH": "Asia/Tehran", "STI": "America/Santo_Domingo", "TIV": "Europe/Podgorica", "TER": "Atlantic/Azores", "TRS": "Europe/Rome", "PVK": "Europe/Athens", "LIG": "Europe/Paris", "EGC": "Europe/Paris", "VGO": "Europe/Madrid", "RBA": "Africa/Casablanca", "NJF": "Asia/Baghdad", "SBH": "America/St_Barthelemy", "INV": "Europe/London", "CRW": "America/New_York", "BPS": "America/Bahia", "KOE": "Asia/Makassar", "IXR": "Asia/Kolkata", "CIT": "Asia/Almaty", "SLU": "America/St_Lucia", "MDZ": "America/Argentina/Mendoza", "HAH": "Indian/Comoro", "NLA": "Africa/Lusaka", "UNK": "America/Anchorage", "JNG": "Asia/Shanghai", "HMI": "Asia/Urumqi", "LRH": "Europe/Paris", "FSZ": "Asia/Tokyo", "JMU": "Asia/Shanghai", "KRL": "Asia/Urumqi", "ALF": "Europe/Oslo", "ISU": "Asia/Baghdad", "NWI": "Europe/London", "GUW": "Asia/Atyrau", "MDG": "Asia/Shanghai", "AOI": "Europe/Rome", "YBP": "Asia/Shanghai", "MRY": "America/Los_Angeles", "PWM": "America/New_York", "BLI": "America/Los_Angeles", "ACY": "America/New_York", "VNS": "Asia/Kolkata", "VOG": "Europe/Volgograd", "SFA": "Africa/Tunis", "VLN": "America/Caracas", "AQP": "America/Lima", "PBM": "America/Paramaribo", "BAQ": "America/Bogota", "PMC": "America/Santiago", "MGF": "America/Sao_Paulo", "ILO": "Asia/Manila", "HKD": "Asia/Tokyo", "SPN": "Pacific/Saipan", "RAS": "Asia/Tehran", "HOG": "America/Havana", "TRC": "America/Monterrey", "MLM": "America/Mexico_City", "LAP": "America/Mazatlan", "LRM": "America/Santo_Domingo", "TZX": "Europe/Istanbul", "YXS": "America/Vancouver", "MJT": "Europe/Athens", "KLX": "Europe/Athens", "CCF": "Europe/Paris", "YQM": "America/Moncton", "LXR": "Africa/Cairo", "OUD": "Africa/Casablanca", "FBM": "Africa/Lubumbashi", "NDJ": "Africa/Ndjamena", "HRK": "Europe/Kiev", "MST": "Europe/Amsterdam", "AVP": "America/New_York", "AMA": "America/Chicago", "LBB": "America/Chicago", "CBB": "America/La_Paz", "IQQ": "America/Santiago", "ROR": "Pacific/Palau", "YNB": "Asia/Riyadh", "YVP": "America/Toronto", "APL": "Africa/Maputo", "GBE": "Africa/Gaborone", "PLZ": "Africa/Johannesburg", "HMB": "Africa/Cairo", "GOH": "America/Nuuk", "HTY": "Europe/Istanbul", "JGS": "Asia/Shanghai", "EVE": "Europe/Oslo", "DAX": "Asia/Shanghai", "CJJ": "Asia/Seoul", "DSA": "Europe/London", "JUV": "America/Nuuk", "BLK": "Europe/London", "ARH": "Europe/Moscow", "LYA": "Asia/Shanghai", "MFR": "America/Los_Angeles", "GPT": "America/Chicago", "EVV": "America/Chicago", "MOB": "America/Chicago", "FMN": "America/Denver", "PHF": "America/New_York", "SCN": "Europe/Berlin", "HBA": "Australia/Hobart", "SBW": "Asia/Kuching", "TRZ": "Asia/Kolkata", "IXC": "Asia/Kolkata", "ATQ": "Asia/Kolkata", "IMF": "Asia/Kolkata", "SCW": "Europe/Moscow", "BON": "America/Kralendijk", "STX": "America/St_Thomas", "PVH": "America/Porto_Velho", "IOS": "America/Bahia", "PPS": "Asia/Manila", "TOY": "Asia/Tokyo", "KMJ": "Asia/Tokyo", "OIT": "Asia/Tokyo", "AAE": "Africa/Algiers", "TUU": "Asia/Riyadh", "GGT": "America/Nassau", "SNU": "America/Havana", "PAC": "America/Panama", "ZIH": "America/Mexico_City", "AGU": "America/Mexico_City", "GZT": "Europe/Istanbul", "PSR": "Europe/Rome", "SMI": "Europe/Athens", "BZR": "Europe/Paris", "CFE": "Europe/Paris", "GRX": "Europe/Madrid", "VAR": "Europe/Sofia", "NEV": "America/St_Kitts", "MAF": "America/Chicago", "ADQ": "America/Anchorage", "LGG": "Europe/Brussels", "BBI": "Asia/Kolkata", "MJZ": "Asia/Yakutsk", "ZQN": "Pacific/Auckland", "GEA": "Pacific/Noumea", "ACA": "America/Mexico_City", "POL": "Africa/Maputo", "CIY": "Europe/Rome", "BFJ": "Asia/Shanghai", "SFJ": "America/Godthab", "VBY": "Europe/Stockholm", "UME": "Europe/Stockholm", "WUA": "Asia/Shanghai", "QSF": "Africa/Algiers", "NDG": "Asia/Shanghai", "GYS": "Asia/Shanghai", "NNY": "Asia/Shanghai", "CGD": "Asia/Shanghai", "NYM": "Asia/Yekaterinburg", "HMA": "Asia/Yekaterinburg", "SLY": "Asia/Yekaterinburg", "PSC": "America/Los_Angeles", "UKK": "Asia/Almaty", "AAR": "Europe/Copenhagen", "PIR": "America/Chicago", "FAY": "America/New_York", "GSM": "Asia/Tehran", "YRL": "America/Winnipeg", "YEV": "America/Inuvik", "TKU": "Europe/Helsinki", "HFT": "Europe/Oslo", "NTL": "Australia/Sydney", "GEO": "America/Guyana", "RDM": "America/Los_Angeles", "GWT": "Europe/Berlin", "RAP": "America/Denver", "GJT": "America/Denver", "BZN": "America/Denver", "KUT": "Asia/Tbilisi", "SBA": "America/Los_Angeles", "SOC": "Asia/Jakarta", "BTR": "America/Chicago", "GRB": "America/Chicago", "SHV": "America/Chicago", "LAN": "America/Detroit", "BGR": "America/New_York", "PHE": "Australia/Perth", "KNX": "Australia/Perth", "LST": "Australia/Hobart", "SOQ": "Asia/Jayapura", "TTE": "Asia/Jayapura", "HEH": "Asia/Yangon", "IXM": "Asia/Kolkata", "IXA": "Asia/Kolkata", "VOZ": "Europe/Moscow", "ASF": "Europe/Astrakhan", "TDD": "America/La_Paz", "TJA": "America/La_Paz", "VVC": "America/Bogota", "PHC": "Africa/Lagos", "SJP": "America/Sao_Paulo", "AXT": "Asia/Tokyo", "TAK": "Asia/Tokyo", "YGJ": "Asia/Tokyo", "BSR": "Asia/Baghdad", "MAG": "Pacific/Port_Moresby", "ELH": "America/Nassau", "YYY": "America/Toronto", "YYQ": "America/Winnipeg", "TGZ": "America/Mexico_City", "SLP": "America/Mexico_City", "REX": "America/Matamoros", "INN": "Europe/Vienna", "ZAZ": "Europe/Madrid", "SPC": "Atlantic/Canary", "VXO": "Europe/Stockholm", "KSU": "Europe/Oslo", "UGC": "Asia/Samarkand", "YDF": "America/St_Johns", "ASM": "Africa/Asmara", "HRL": "America/Chicago", "PLW": "Asia/Makassar", "REN": "Asia/Yekaterinburg", "SKD": "Asia/Samarkand", "LCE": "America/Tegucigalpa", "ASR": "Europe/Istanbul", "BBO": "Africa/Mogadishu", "HGA": "Africa/Mogadishu", "TET": "Africa/Maputo", "BEW": "Africa/Maputo", "LVI": "Africa/Lusaka", "MUB": "Africa/Gaborone", "UMD": "America/Godthab", "ECP": "America/Chicago", "NBC": "Europe/Moscow", "SZZ": "Europe/Warsaw", "MOL": "Europe/Oslo", "JGN": "Asia/Shanghai", "AQG": "Asia/Shanghai", "WEF": "Asia/Shanghai", "DIG": "Asia/Shanghai", "XIL": "Asia/Shanghai", "HLH": "Asia/Shanghai", "HTI": "Australia/Lindeman", "VII": "Asia/Bangkok", "CXR": "Asia/Ho_Chi_Minh", "BMV": "Asia/Ho_Chi_Minh", "FEG": "Asia/Tashkent", "CEE": "Europe/Moscow", "CCC": "America/Havana", "OXB": "Africa/Bissau", "YGW": "America/Toronto", "JJU": "America/Godthab", "YEK": "America/Rankin_Inlet", "OAJ": "America/New_York", "KGF": "Asia/Almaty", "VDS": "Europe/Oslo", "KLU": "Europe/Vienna", "DNH": "Asia/Shanghai", "SRZ": "America/La_Paz", "MSO": "America/Denver", "PMW": "America/Araguaina", "TRI": "America/New_York", "MGM": "America/Chicago", "DLU": "Asia/Shanghai", "TAI": "Asia/Aden", "TRK": "Asia/Makassar", "PKN": "Asia/Pontianak", "PGK": "Asia/Jakarta", "GTF": "America/Denver", "AKN": "America/Anchorage", "PBG": "America/New_York", "GAL": "America/Anchorage", "AGS": "America/New_York", "KTA": "Australia/Perth", "MKY": "Australia/Brisbane", "TGG": "Asia/Kuala_Lumpur", "PDG": "Asia/Jakarta", "TWU": "Asia/Kuching", "BTU": "Asia/Kuching", "MKW": "Asia/Jayapura", "IXS": "Asia/Kolkata", "UDR": "Asia/Kolkata", "BHO": "Asia/Kolkata", "MMK": "Europe/Moscow", "SIP": "Europe/Simferopol", "AKX": "Asia/Aqtobe", "IQT": "America/Lima", "CAY": "America/Cayenne", "KAN": "Africa/Lagos", "LSC": "America/Santiago", "NVT": "America/Sao_Paulo", "IMP": "America/Fortaleza", "BRC": "America/Argentina/Salta", "CRD": "America/Argentina/Catamarca", "ROS": "America/Argentina/Cordoba", "CGY": "Asia/Manila", "AKJ": "Asia/Tokyo", "SLL": "Asia/Muscat", "AZD": "Asia/Tehran", "ZLO": "America/Mexico_City", "ZCL": "America/Mexico_City", "TAM": "America/Monterrey", "QRO": "America/Mexico_City", "PBC": "America/Mexico_City", "DIY": "Europe/Istanbul", "YVO": "America/Toronto", "PIS": "Europe/Paris", "RJK": "Europe/Zagreb", "YQQ": "America/Vancouver", "VFA": "Africa/Harare", "TMM": "Indian/Antananarivo", "HRI": "Asia/Colombo", "TJU": "Asia/Dushanbe", "KKN": "Europe/Oslo", "GRQ": "Europe/Amsterdam", "NYU": "Asia/Yangon", "BRW": "America/Anchorage", "FYU": "America/Anchorage", "BHK": "Asia/Samarkand", "JUL": "America/Lima", "PUQ": "America/Punta_Arenas", "CJC": "America/Santiago", "AOK": "Europe/Athens", "EFL": "Europe/Athens", "YTH": "America/Winnipeg", "YNA": "America/Toronto", "ULK": "Asia/Yakutsk", "TVS": "Asia/Shanghai", "LUZ": "Europe/Warsaw", "HDG": "Asia/Kuala_Lumpur", "GZP": "Europe/Istanbul", "LLA": "Europe/Stockholm", "GEV": "Europe/Stockholm", "SOW": "America/Phoenix", "ALS": "America/Denver", "VQS": "America/Puerto_Rico", "GBT": "Asia/Tehran", "NVI": "Asia/Samarkand", "DIB": "Asia/Kolkata", "NAO": "Asia/Shanghai", "JUZ": "Asia/Shanghai", "JIU": "Asia/Shanghai", "IQN": "Asia/Shanghai", "PQQ": "Australia/Sydney", "MQL": "Australia/Melbourne", "VDC": "America/Bahia", "KIR": "Europe/Dublin", "WWK": "Pacific/Port_Moresby", "NKM": "Asia/Tokyo", "MCG": "America/Anchorage", "LRR": "Asia/Tehran", "SRY": "Asia/Tehran", "AZS": "America/Santo_Domingo", "ATZ": "Africa/Cairo", "VPE": "Africa/Luanda", "YKQ": "America/Toronto", "YCS": "America/Rankin_Inlet", "HKN": "Pacific/Port_Moresby", "NQY": "Europe/London", "RMF": "Africa/Cairo", "JKL": "Europe/Athens", "MWX": "Asia/Seoul", "DOY": "Asia/Shanghai", "SDK": "Asia/Kuching", "PGA": "America/Phoenix", "BIS": "America/Chicago", "MZV": "Asia/Kuching", "AZO": "America/Detroit", "BUS": "Asia/Tbilisi", "ELM": "America/New_York", "ILG": "America/New_York", "AEX": "America/Chicago", "MFE": "America/Chicago", "CYS": "America/Denver", "SAF": "America/Denver", "GRK": "America/Chicago", "MLU": "America/Chicago", "SWF": "America/New_York", "BFL": "America/Los_Angeles", "ACK": "America/New_York", "LFT": "America/Chicago", "HTN": "Asia/Urumqi", "ERF": "Europe/Berlin", "DJB": "Asia/Jakarta", "PNK": "Asia/Pontianak", "MUR": "Asia/Kuching", "YCB": "America/Cambridge_Bay", "UTH": "Asia/Bangkok", "HDY": "Asia/Bangkok", "IXL": "Asia/Kolkata", "JDH": "Asia/Kolkata", "AJL": "Asia/Kolkata", "YBL": "America/Vancouver", "PEE": "Asia/Yekaterinburg", "PKC": "Asia/Kamchatka", "GDX": "Asia/Magadan", "AXA": "America/Anguilla", "YBK": "America/Rankin_Inlet", "TPP": "America/Lima", "PCL": "America/Lima", "SRE": "America/La_Paz", "UIB": "America/Bogota", "PEI": "America/Bogota", "LET": "America/Bogota", "YBC": "America/Toronto", "NQN": "America/Argentina/Salta", "SLA": "America/Argentina/Salta", "BCD": "Asia/Manila", "ZAM": "Asia/Manila", "TAE": "Asia/Seoul", "HME": "Africa/Algiers", "TLM": "Africa/Algiers", "MMB": "Asia/Tokyo", "ZBR": "Asia/Tehran", "KSH": "Asia/Tehran", "ABD": "Asia/Tehran", "BJA": "Africa/Algiers", "GIZ": "Asia/Riyadh", "HEA": "Asia/Kabul", "BOB": "Pacific/Tahiti", "PAZ": "America/Mexico_City", "OAX": "America/Mexico_City", "YXU": "America/Toronto", "GIB": "Europe/Gibraltar", "EZS": "Europe/Istanbul", "YXJ": "America/Dawson_Creek", "HOR": "Atlantic/Azores", "YVQ": "America/Inuvik", "REG": "Europe/Rome", "LRS": "Europe/Athens", "KVA": "Europe/Athens", "JKH": "Europe/Athens", "MWZ": "Africa/Dar_es_Salaam", "WJR": "Africa/Nairobi", "VXE": "Atlantic/Cape_Verde", "ZQW": "Europe/Berlin", "AKU": "Asia/Urumqi", "ENY": "Asia/Shanghai", "TKG": "Asia/Jakarta", "TUK": "Asia/Karachi", "BHV": "Asia/Karachi", "YXN": "America/Rankin_Inlet", "GUR": "Pacific/Port_Moresby", "YZS": "America/Atikokan", "SCC": "America/Anchorage", "CCP": "America/Santiago", "RGL": "America/Argentina/Rio_Gallegos", "REL": "America/Argentina/Catamarca", "OGX": "Africa/Algiers", "AZR": "Africa/Algiers", "SKZ": "Asia/Karachi", "RGI": "Pacific/Tahiti", "APW": "Pacific/Apia", "SCU": "America/Havana", "KSC": "Europe/Bratislava", "YTS": "America/Toronto", "YSB": "America/Toronto", "BVE": "Europe/Paris", "DIE": "Indian/Antananarivo", "GNY": "Europe/Istanbul", "NBS": "Asia/Shanghai", "RLK": "Asia/Shanghai", "GRJ": "Africa/Johannesburg", "ELS": "Africa/Johannesburg", "YKL": "America/Toronto", "TCZ": "Asia/Shanghai", "YKA": "America/Vancouver", "RLG": "Europe/Berlin", "AGM": "America/Godthab", "PGU": "Asia/Tehran", "SDL": "Europe/Stockholm", "KKA": "America/Anchorage", "HAD": "Europe/Stockholm", "UAK": "America/Godthab", "TEN": "Asia/Shanghai", "MQM": "Europe/Istanbul", "KSM": "America/Nome", "DDG": "Asia/Shanghai", "JNZ": "Asia/Shanghai", "MXZ": "Asia/Shanghai", "BNN": "Europe/Oslo", "GOV": "Australia/Darwin", "CNJ": "Australia/Brisbane", "KSQ": "Asia/Samarkand", "OVS": "Asia/Yekaterinburg", "PYJ": "Asia/Yakutsk", "JDO": "America/Fortaleza", "GES": "Asia/Manila", "KUH": "Asia/Tokyo", "GXF": "Asia/Aden", "NUS": "Pacific/Efate", "HTS": "America/New_York", "DDC": "America/Chicago", "PZU": "Africa/Khartoum", "MYD": "Africa/Nairobi", "HDF": "Europe/Berlin", "YQD": "America/Winnipeg", "YGT": "America/Iqaluit", "MAS": "Pacific/Port_Moresby", "PNP": "Pacific/Port_Moresby", "SYY": "Europe/London", "LSI": "Europe/London", "HUY": "Europe/London", "LDY": "Europe/London", "VAA": "Europe/Helsinki", "NOJ": "Asia/Yekaterinburg", "RTW": "Europe/Saratov", "LBL": "America/Chicago", "MEH": "Europe/Oslo", "SCE": "America/New_York", "TOF": "Asia/Tomsk", "BNK": "Australia/Sydney", "KUS": "America/Godthab", "TAH": "Pacific/Efate", "PQC": "Asia/Ho_Chi_Minh", "DLI": "Asia/Ho_Chi_Minh", "MBS": "America/Detroit", "FCA": "America/Denver", "CWA": "America/Chicago", "TOL": "America/New_York", "RFD": "America/Chicago", "TVC": "America/Detroit", "JAV": "America/Godthab", "DAB": "America/New_York", "CDB": "America/Nome", "CRP": "America/Chicago", "EWN": "America/New_York", "DRO": "America/Denver", "YCO": "America/Cambridge_Bay", "MLB": "America/New_York", "IAG": "America/New_York", "MOT": "America/Chicago", "GFK": "America/Chicago", "FSM": "America/Chicago", "XIC": "Asia/Shanghai", "FNJ": "Asia/Pyongyang", "KGI": "Australia/Perth", "ROK": "Australia/Brisbane", "MCY": "Australia/Brisbane", "KUA": "Asia/Kuala_Lumpur", "AOR": "Asia/Kuala_Lumpur", "BTJ": "Asia/Jakarta", "BKS": "Asia/Jakarta", "PBH": "Asia/Thimphu", "PKZ": "Asia/Vientiane", "DED": "Asia/Kolkata", "ZYL": "Asia/Dhaka", "BDQ": "Asia/Kolkata", "IXU": "Asia/Kolkata", "BQS": "Asia/Yakutsk", "BRM": "America/Caracas", "BGA": "America/Bogota", "TFF": "America/Manaus", "RBR": "America/Rio_Branco", "PNZ": "America/Recife", "PFB": "America/Sao_Paulo", "JOI": "America/Sao_Paulo", "XAP": "America/Sao_Paulo", "USH": "America/Argentina/Ushuaia", "TAC": "Asia/Manila", "MMY": "Asia/Tokyo", "AOJ": "Asia/Tokyo", "IBR": "Asia/Tokyo", "MZG": "Asia/Taipei", "KNH": "Asia/Taipei", "BUZ": "Asia/Tehran", "HAS": "Asia/Riyadh", "KDH": "Asia/Kabul", "PMR": "Pacific/Auckland", "DUD": "Pacific/Auckland", "TBU": "Pacific/Tongatapu", "GHB": "America/Nassau", "LMM": "America/Mazatlan", "DGO": "America/Monterrey", "RKV": "Atlantic/Reykjavik", "CEN": "America/Hermosillo", "YXY": "America/Whitehorse", "YXT": "America/Vancouver", "VAN": "Europe/Istanbul", "ERZ": "Europe/Istanbul", "YWL": "America/Vancouver", "ETH": "Asia/Jerusalem", "KLV": "Europe/Prague", "PEG": "Europe/Rome", "EBA": "Europe/Rome", "CUF": "Europe/Rome", "YUY": "America/Toronto", "JSH": "Europe/Athens", "LXS": "Europe/Athens", "VOL": "Europe/Athens", "TUF": "Europe/Paris", "PGF": "Europe/Paris", "EBU": "Europe/Paris", "ETZ": "Europe/Paris", "LDE": "Europe/Paris", "PUF": "Europe/Paris", "MLN": "Africa/Ceuta", "BLZ": "Africa/Blantyre", "GKA": "Pacific/Port_Moresby", "KWN": "America/Anchorage", "WAA": "America/Nome", "ELI": "America/Nome", "TAL": "America/Anchorage", "YHK": "America/Cambridge_Bay", "RBY": "America/Anchorage", "SSJ": "Europe/Oslo", "MJF": "Europe/Oslo", "FRO": "Europe/Oslo", "YFO": "America/Winnipeg", "TOB": "Africa/Tripoli", "MQN": "Europe/Oslo", "YTL": "America/Winnipeg", "UNG": "Pacific/Port_Moresby", "GZO": "Pacific/Guadalcanal", "HOD": "Asia/Aden", "HLN": "America/Denver", "BTT": "America/Anchorage", "THL": "Asia/Yangon", "SVD": "America/St_Vincent", "TAB": "America/Port_of_Spain", "ARI": "America/Santiago", "RFP": "Pacific/Tahiti", "XQP": "America/Costa_Rica", "SBZ": "Europe/Bucharest", "VNX": "Africa/Maputo", "WMN": "Indian/Antananarivo", "DCY": "Asia/Shanghai", "NOS": "Indian/Antananarivo", "BBK": "Africa/Gaborone", "EYK": "Asia/Yekaterinburg", "HLA": "Africa/Johannesburg", "BFN": "Africa/Johannesburg", "CKS": "America/Belem", "VHM": "Europe/Stockholm", "SMK": "America/Nome", "LYC": "Europe/Stockholm", "WMO": "America/Nome", "GLV": "America/Nome", "KTS": "America/Nome", "KRF": "Europe/Stockholm", "IAN": "America/Anchorage", "BKC": "America/Anchorage", "ABL": "America/Anchorage", "TWB": "Australia/Brisbane", "HSL": "America/Anchorage", "YHU": "America/Toronto", "RSH": "America/Anchorage", "HHH": "America/New_York", "YHM": "America/Toronto", "COQ": "Asia/Choibalsan", "YIF": "America/Blanc-Sablon", "DRG": "America/Nome", "YPX": "America/Toronto", "SVA": "America/Nome", "PHO": "America/Nome", "GAM": "America/Nome", "PZI": "Asia/Shanghai", "YIN": "Asia/Urumqi", "BJF": "Europe/Oslo", "ENH": "Asia/Shanghai", "GTE": "Australia/Darwin", "GLT": "Australia/Brisbane", "FAE": "Atlantic/Faroe", "BHQ": "Australia/Broken_Hill", "HPH": "Asia/Bangkok", "UUA": "Europe/Moscow", "NCU": "Asia/Samarkand", "IJK": "Europe/Samara", "NYA": "Asia/Yekaterinburg", "IGM": "America/Phoenix", "VIJ": "America/Tortola", "SCY": "Pacific/Galapagos", "RIA": "America/Sao_Paulo", "MEA": "America/Sao_Paulo", "FKS": "Asia/Tokyo", "LNV": "Pacific/Port_Moresby", "KLG": "America/Anchorage", "AUQ": "Pacific/Marquesas", "PJM": "America/Costa_Rica", "TNO": "America/Costa_Rica", "GDT": "America/Grand_Turk", "SBP": "America/Los_Angeles", "GRI": "America/Chicago", "ABY": "America/New_York", "NYK": "Africa/Nairobi", "GLK": "Africa/Mogadishu", "BSA": "Africa/Mogadishu", "EUN": "Africa/El_Aaiun", "MQP": "Africa/Johannesburg", "YFC": "America/Moncton", "SOG": "Europe/Oslo", "KMS": "Africa/Accra", "BLJ": "Africa/Algiers", "MSA": "America/Winnipeg", "YHR": "America/Blanc-Sablon", "YHO": "America/Goose_Bay", "YMN": "America/Goose_Bay", "YDP": "America/Goose_Bay", "JNN": "America/Nuuk", "KVG": "Pacific/Port_Moresby", "DAU": "Pacific/Port_Moresby", "BUA": "Pacific/Bougainville", "MUA": "Pacific/Guadalcanal", "OUL": "Europe/Helsinki", "MHQ": "Europe/Mariehamn", "NNM": "Europe/Moscow", "UCT": "Europe/Moscow", "KZO": "Asia/Qyzylorda", "BVG": "Europe/Oslo", "HOV": "Europe/Oslo", "CPO": "America/Santiago", "AGT": "America/Asuncion", "ERI": "America/New_York", "MVY": "America/New_York", "OZC": "Asia/Manila", "LGP": "Asia/Manila", "DPL": "Asia/Manila", "BXU": "Asia/Manila", "JTY": "Europe/Athens", "BGM": "America/New_York", "IDA": "America/Boise", "HUI": "Asia/Ho_Chi_Minh", "FTE": "America/Argentina/Rio_Gallegos", "MHK": "America/Chicago", "CMI": "America/Chicago", "RST": "America/Chicago", "AYQ": "Australia/Darwin", "MPH": "Asia/Manila", "URT": "Asia/Bangkok", "YCY": "America/Iqaluit", "ITH": "America/New_York", "LWS": "America/Los_Angeles", "LBJ": "Asia/Makassar", "ENE": "Asia/Makassar", "TJQ": "Asia/Jakarta", "KDI": "Asia/Makassar", "YNG": "America/New_York", "ART": "America/New_York", "COU": "America/Chicago", "LRD": "America/Chicago", "SBY": "America/New_York", "LBC": "Europe/Berlin", "DLH": "America/Chicago", "ITO": "Pacific/Honolulu", "CFS": "Australia/Sydney", "ABX": "Australia/Sydney", "CTL": "Australia/Brisbane", "DIL": "Asia/Dili", "LBU": "Asia/Kuching", "GTO": "Asia/Makassar", "TIM": "Asia/Jayapura", "BIK": "Asia/Jayapura", "MYT": "Asia/Yangon", "STW": "Europe/Moscow", "MCX": "Europe/Moscow", "ABA": "Asia/Krasnoyarsk", "BTK": "Asia/Irkutsk", "BQN": "America/Puerto_Rico", "SFG": "America/Marigot", "STD": "America/Caracas", "MUN": "America/Caracas", "LSP": "America/Caracas", "YBG": "America/Toronto", "BYC": "America/La_Paz", "SMR": "America/Bogota", "CUC": "America/Bogota", "PUU": "America/Bogota", "BBA": "America/Santiago", "UBA": "America/Sao_Paulo", "BHI": "America/Argentina/Buenos_Aires", "IGR": "America/Argentina/Cordoba", "DGT": "Asia/Manila", "GHA": "Africa/Algiers", "KWJ": "Asia/Seoul", "BSK": "Africa/Algiers", "HNA": "Asia/Tokyo", "KCZ": "Asia/Tokyo", "FUJ": "Asia/Tokyo", "HUN": "Asia/Taipei", "CXI": "Pacific/Kiritimati", "MAJ": "Pacific/Majuro", "AZI": "Asia/Dubai", "TMR": "Africa/Algiers", "KER": "Asia/Tehran", "YAM": "America/Toronto", "MZR": "Asia/Kabul", "NSN": "Pacific/Auckland", "HLZ": "Pacific/Auckland", "HUH": "Pacific/Tahiti", "NHV": "Pacific/Marquesas", "ZSA": "America/Nassau", "YYH": "America/Cambridge_Bay", "MXL": "America/Tijuana", "YYG": "America/Halifax", "YYD": "America/Vancouver", "YXP": "America/Pangnirtung", "MLX": "Europe/Istanbul", "VAS": "Europe/Istanbul", "YXC": "America/Edmonton", "PIX": "Atlantic/Azores", "FLW": "Atlantic/Azores", "OSR": "Europe/Prague", "PMF": "Europe/Rome", "YUX": "America/Iqaluit", "YUT": "America/Rankin_Inlet", "KSJ": "Europe/Athens", "KIT": "Europe/Athens", "FNI": "Europe/Paris", "CFR": "Europe/Paris", "YSM": "America/Yellowknife", "RDZ": "Europe/Paris", "YQZ": "America/Vancouver", "YQU": "America/Edmonton", "OSI": "Europe/Zagreb", "LAU": "Africa/Nairobi", "ASW": "Africa/Cairo", "NDB": "Africa/Nouakchott", "BUQ": "Africa/Harare", "TMS": "Africa/Sao_Tome", "MRE": "Africa/Nairobi", "KWK": "America/Nome", "EMK": "America/Nome", "YVB": "America/Toronto", "UAS": "Africa/Nairobi", "EGM": "Pacific/Guadalcanal", "TMU": "America/Costa_Rica", "AKP": "America/Anchorage", "YHD": "America/Rainy_River", "ANX": "Europe/Oslo", "LRE": "Australia/Brisbane", "HNS": "America/Juneau", "SGY": "America/Juneau", "CCV": "Pacific/Efate", "YPM": "America/Winnipeg", "YPH": "America/Toronto", "SKN": "Europe/Oslo", "JIK": "Europe/Athens", "LNY": "Pacific/Honolulu", "MKK": "Pacific/Honolulu", "FKQ": "Asia/Jayapura", "DMB": "Asia/Almaty", "PET": "America/Sao_Paulo", "ATM": "America/Santarem", "CAW": "America/Sao_Paulo", "MOZ": "Pacific/Tahiti", "GLF": "America/Costa_Rica", "KYA": "Europe/Istanbul", "TGM": "Europe/Bucharest", "VLL": "Europe/Madrid", "EDL": "Africa/Nairobi", "UEL": "Africa/Maputo", "INH": "Africa/Maputo", "SDD": "Africa/Luanda", "NOV": "Africa/Luanda", "TLE": "Indian/Antananarivo", "SVB": "Indian/Antananarivo", "MJN": "Indian/Antananarivo", "ANM": "Indian/Antananarivo", "GIU": "Asia/Colombo", "SMS": "Indian/Antananarivo", "ZSE": "Indian/Reunion", "YMO": "America/Nipigon", "BQB": "Australia/Perth", "BGF": "Africa/Bangui", "LLF": "Asia/Shanghai", "JTC": "America/Sao_Paulo", "OOK": "America/Nome", "AEB": "Asia/Shanghai", "UKA": "Africa/Nairobi", "YKF": "America/Toronto", "PVU": "America/Denver", "HJJ": "Asia/Shanghai", "HZH": "Asia/Shanghai", "YIO": "America/Iqaluit", "JIJ": "Africa/Addis_Ababa", "DOU": "America/Campo_Grande", "CFB": "America/Sao_Paulo", "VST": "Europe/Stockholm", "ZEL": "Asia/Yakutsk", "SFT": "Europe/Stockholm", "YGV": "America/Toronto", "STG": "America/Nome", "KRN": "Europe/Stockholm", "KGX": "America/Anchorage", "AKI": "America/Anchorage", "KKH": "America/Nome", "KLW": "America/Sitka", "YHY": "America/Yellowknife", "TLA": "America/Nome", "OBU": "America/Anchorage", "MTM": "America/Metlakatla", "HNH": "America/Juneau", "SHG": "America/Anchorage", "NUL": "America/Anchorage", "KWT": "America/Anchorage", "EEK": "America/Nome", "SHX": "America/Anchorage", "KLR": "Europe/Stockholm", "AIA": "America/Denver", "CDR": "America/Denver", "CYF": "America/Nome", "DRK": "America/Costa_Rica", "RNB": "Europe/Stockholm", "MQT": "America/Detroit", "YHI": "America/Yellowknife", "MSR": "Europe/Istanbul", "WVB": "Africa/Windhoek", "PDP": "America/Montevideo", "CHG": "Asia/Shanghai", "WUZ": "Asia/Shanghai", "FON": "America/Costa_Rica", "SHH": "America/Nome", "KVL": "America/Nome", "KAL": "America/Anchorage", "ANV": "America/Anchorage", "SRP": "Europe/Oslo", "LYR": "Arctic/Longyearbyen", "YGR": "America/Halifax", "HEK": "Asia/Shanghai", "BPX": "Asia/Shanghai", "ZAT": "Asia/Shanghai", "SYM": "Asia/Shanghai", "BWT": "Australia/Hobart", "RMA": "Australia/Brisbane", "PBO": "Australia/Perth", "ONG": "Australia/Brisbane", "MOV": "Australia/Brisbane", "MNG": "Australia/Darwin", "MIM": "Australia/Sydney", "LDH": "Australia/Lord_Howe", "GET": "Australia/Perth", "DMD": "Australia/Brisbane", "ALH": "Australia/Perth", "LWY": "Asia/Kuching", "LUV": "Asia/Jayapura", "BEJ": "Asia/Makassar", "TMC": "Asia/Makassar", "YGL": "America/Toronto", "PXU": "Asia/Ho_Chi_Minh", "UIH": "Asia/Ho_Chi_Minh", "VCA": "Asia/Ho_Chi_Minh", "GAN": "Indian/Maldives", "AZN": "Asia/Tashkent", "KVX": "Europe/Kirov", "KSN": "Asia/Qostanay", "VIG": "America/Caracas", "PDA": "America/Bogota", "ESM": "America/Guayaquil", "RXS": "Asia/Manila", "TUG": "Asia/Manila", "SUG": "Asia/Manila", "HIN": "Asia/Seoul", "GST": "America/Juneau", "OMH": "Asia/Tehran", "ADU": "Asia/Tehran", "IPA": "Pacific/Efate", "ZGU": "Pacific/Efate", "LNE": "Pacific/Efate", "TOH": "Pacific/Efate", "SLH": "Pacific/Efate", "MTV": "Pacific/Efate", "UAH": "Pacific/Marquesas", "UAP": "Pacific/Marquesas", "SVU": "Pacific/Fiji", "TVU": "Pacific/Fiji", "ATC": "America/Nassau", "JBQ": "America/Santo_Domingo", "KCM": "Europe/Istanbul", "KSY": "Europe/Istanbul", "BNX": "Europe/Sarajevo", "WRL": "America/Denver", "VLD": "America/New_York", "RKS": "America/Denver", "LBE": "America/New_York", "BQK": "America/New_York", "ATY": "America/Chicago", "LAQ": "Africa/Tripoli", "ESU": "Africa/Casablanca", "VIL": "Africa/El_Aaiun", "ERS": "Africa/Windhoek", "AGH": "Europe/Stockholm", "OSD": "Europe/Stockholm", "BZG": "Europe/Warsaw", "VAW": "Europe/Oslo", "SVJ": "Europe/Oslo", "RVK": "Europe/Oslo", "OSY": "Europe/Oslo", "LKN": "Europe/Oslo", "PPW": "Europe/London", "NRL": "Europe/London", "ZSJ": "America/Winnipeg", "YSK": "America/Iqaluit", "YUD": "America/Toronto", "YMT": "America/Toronto", "YPJ": "America/Toronto", "YFH": "America/Toronto", "YBX": "America/Blanc-Sablon", "YKG": "America/Toronto", "JHS": "America/Nuuk", "NAQ": "America/Thule", "VAI": "Pacific/Port_Moresby", "TIZ": "Pacific/Port_Moresby", "MXH": "Pacific/Port_Moresby", "IRA": "Pacific/Guadalcanal", "MME": "Europe/London", "POR": "Europe/Helsinki", "LPP": "Europe/Helsinki", "ACV": "America/Los_Angeles", "URJ": "Asia/Yekaterinburg", "AAQ": "Europe/Moscow", "KOK": "Europe/Helsinki", "ISC": "Europe/London", "GCC": "America/Denver", "GTR": "America/Chicago", "CSG": "America/New_York", "USU": "Asia/Manila", "NPE": "Pacific/Auckland", "INU": "Pacific/Nauru", "LSE": "America/Chicago", "FRS": "America/Guatemala", "JEG": "America/Nuuk", "TAG": "Asia/Manila", "PLQ": "Europe/Vilnius", "UBP": "Asia/Bangkok", "BMU": "Asia/Makassar", "PKY": "Asia/Pontianak", "TNJ": "Asia/Jakarta", "MLG": "Asia/Jakarta", "CPR": "America/Denver", "DUT": "America/Nome", "SIT": "America/Sitka", "TYR": "America/Chicago", "DHN": "America/Chicago", "BRO": "America/Chicago", "CLL": "America/Chicago", "LUK": "America/New_York", "ENA": "America/Anchorage", "CDV": "America/Anchorage", "YUM": "America/Phoenix", "LNK": "America/Chicago", "LCH": "America/Chicago", "HON": "America/Chicago", "DLG": "America/Anchorage", "SNP": "America/Nome", "WGA": "Australia/Sydney", "DBO": "Australia/Sydney", "LEA": "Australia/Perth", "PPP": "Australia/Brisbane", "MKQ": "Asia/Jayapura", "NBX": "Asia/Jayapura", "AKY": "Asia/Yangon", "PHS": "Asia/Bangkok", "RJA": "Asia/Kolkata", "VGA": "Asia/Kolkata", "ZVK": "Asia/Vientiane", "JSR": "Asia/Dhaka", "CXB": "Asia/Dhaka", "STV": "Asia/Kolkata", "RAJ": "Asia/Kolkata", "JLR": "Asia/Kolkata", "TOE": "Africa/Tunis", "KEJ": "Asia/Novokuznetsk", "BAX": "Asia/Barnaul", "PLX": "Asia/Almaty", "PWQ": "Asia/Almaty", "URA": "Asia/Oral", "PEM": "America/Lima", "PSO": "America/Bogota", "PCR": "America/Bogota", "MVP": "America/Bogota", "MTR": "America/Bogota", "IBE": "America/Bogota", "CUE": "America/Guayaquil", "OCC": "America/Guayaquil", "ZCO": "America/Santiago", "ENU": "Africa/Lagos", "SJK": "America/Sao_Paulo", "MCP": "America/Belem", "MOC": "America/Sao_Paulo", "IPN": "America/Sao_Paulo", "FEN": "America/Noronha", "CXJ": "America/Sao_Paulo", "CAC": "America/Sao_Paulo", "BVB": "America/Boa_Vista", "MDQ": "America/Argentina/Buenos_Aires", "TML": "Africa/Accra", "EQS": "America/Argentina/Catamarca", "YAY": "America/St_Johns", "CBO": "Asia/Manila", "KPO": "Asia/Seoul", "USN": "Asia/Seoul", "RSU": "Asia/Seoul", "GAJ": "Asia/Tokyo", "KKJ": "Asia/Tokyo", "TSJ": "Asia/Tokyo", "UBJ": "Asia/Tokyo", "OBO": "Asia/Tokyo", "PNI": "Pacific/Pohnpei", "KWA": "Pacific/Kwajalein", "RYK": "Asia/Karachi", "GWD": "Asia/Karachi", "EAM": "Asia/Riyadh", "BHH": "Asia/Riyadh", "ABT": "Asia/Riyadh", "HOF": "Asia/Riyadh", "BHE": "Pacific/Auckland", "TRG": "Pacific/Auckland", "ROT": "Pacific/Auckland", "NPL": "Pacific/Auckland", "LIF": "Pacific/Noumea", "MAU": "Pacific/Tahiti", "XMH": "Pacific/Tahiti", "WLS": "Pacific/Wallis", "TRW": "Pacific/Tarawa", "CMW": "America/Havana", "CAP": "America/Port-au-Prince", "PMZ": "America/Costa_Rica", "PXM": "America/Mexico_City", "CLQ": "America/Mexico_City", "TPQ": "America/Mazatlan", "YYE": "America/Fort_Nelson", "CME": "America/Merida", "HUX": "America/Mexico_City", "BAL": "Europe/Istanbul", "ERC": "Europe/Istanbul", "PXO": "Atlantic/Madeira", "SMA": "Atlantic/Azores", "SDV": "Asia/Jerusalem", "RMI": "Europe/Rome", "PNL": "Europe/Rome", "LMP": "Europe/Rome", "SKU": "Europe/Athens", "GPA": "Europe/Athens", "AXD": "Europe/Athens", "FSP": "America/Miquelon", "TLN": "Europe/Paris", "DNR": "Europe/Paris", "YTE": "America/Iqaluit", "YSJ": "America/Moncton", "DLE": "Europe/Paris", "DCM": "Europe/Paris", "YQX": "America/St_Johns", "EAS": "Europe/Madrid", "AKF": "Africa/Tripoli", "YQK": "America/Winnipeg", "YQG": "America/Toronto", "YQF": "America/Edmonton", "MQX": "Africa/Addis_Ababa", "LLI": "Africa/Addis_Ababa", "DIR": "Africa/Addis_Ababa", "VDE": "Atlantic/Canary", "KGA": "Africa/Lubumbashi", "GOM": "Africa/Lubumbashi", "CAB": "Africa/Luanda", "RVT": "Australia/Perth", "WTK": "America/Nome", "EPR": "Australia/Perth", "HSG": "Asia/Tokyo", "DEA": "Asia/Karachi", "ULB": "Pacific/Efate", "AHE": "Pacific/Tahiti", "EWB": "America/New_York", "CKB": "America/New_York", "SOJ": "Europe/Oslo", "NDY": "Europe/London", "ZRJ": "America/Winnipeg", "YER": "America/Toronto", "YAG": "America/Winnipeg", "JNS": "America/Nuuk", "FDE": "Europe/Oslo", "SPI": "America/Chicago", "HVG": "Europe/Oslo", "KEM": "Europe/Helsinki", "JYV": "Europe/Helsinki", "HYA": "America/New_York", "MOF": "Asia/Makassar", "ELD": "America/Chicago", "NLK": "Pacific/Norfolk", "KNG": "Asia/Jayapura", "CIJ": "America/La_Paz", "INZ": "Africa/Algiers", "TKX": "Pacific/Tahiti", "TIH": "Pacific/Tahiti", "TUB": "Pacific/Tahiti", "RUR": "Pacific/Tahiti", "AIT": "Pacific/Rarotonga", "CYB": "America/Cayman", "CYO": "America/Havana", "BOC": "America/Panama", "KIS": "Africa/Nairobi", "FKI": "Africa/Lubumbashi", "MDK": "Africa/Kinshasa", "YOJ": "America/Edmonton", "VXC": "Africa/Maputo", "VHC": "Africa/Luanda", "FTU": "Indian/Antananarivo", "BGG": "Europe/Istanbul", "MOQ": "Indian/Antananarivo", "IGD": "Europe/Istanbul", "GOU": "Africa/Douala", "XSB": "Asia/Dubai", "ODO": "Asia/Irkutsk", "BSG": "Africa/Malabo", "GKK": "Indian/Maldives", "LLK": "Asia/Baku", "FRW": "Africa/Gaborone", "UTN": "Africa/Johannesburg", "ULH": "Asia/Riyadh", "CFC": "America/Sao_Paulo", "WWT": "America/Nome", "IZA": "America/Sao_Paulo", "KIM": "Africa/Johannesburg", "NYT": "Asia/Yangon", "HDS": "Africa/Johannesburg", "ZHY": "Asia/Shanghai", "YUS": "Asia/Shanghai", "UKS": "Europe/Simferopol", "ONQ": "Europe/Istanbul", "LTX": "America/Guayaquil", "MMU": "America/New_York", "NDU": "Africa/Windhoek", "NNB": "Pacific/Guadalcanal", "RNA": "Pacific/Guadalcanal", "ITB": "America/Santarem", "WNH": "Asia/Shanghai", "LNJ": "Asia/Shanghai", "BSD": "Asia/Shanghai", "OHH": "Asia/Sakhalin", "FUO": "Asia/Shanghai", "RVV": "Pacific/Tahiti", "NRK": "Europe/Stockholm", "LPI": "Europe/Stockholm", "BLE": "Europe/Stockholm", "RVE": "America/Bogota", "RBQ": "America/La_Paz", "ORB": "Europe/Stockholm", "AJR": "Europe/Stockholm", "YOP": "America/Edmonton", "YWB": "America/Toronto", "SLQ": "America/Anchorage", "AIN": "America/Anchorage", "KYU": "America/Anchorage", "AUK": "America/Nome", "WLK": "America/Anchorage", "EVG": "Europe/Stockholm", "WBQ": "America/Anchorage", "VEE": "America/Anchorage", "HUS": "America/Anchorage", "CIK": "America/Anchorage", "MLL": "America/Nome", "NUI": "America/Anchorage", "MMH": "America/Los_Angeles", "DIK": "America/Denver", "JHW": "America/New_York", "ULV": "Europe/Ulyanovsk", "ASE": "America/Denver", "MXX": "Europe/Stockholm", "QRW": "Africa/Lagos", "PGV": "America/New_York", "LWB": "America/New_York", "BRD": "America/Chicago", "AAT": "Asia/Urumqi", "RMT": "Pacific/Tahiti", "UKX": "Asia/Irkutsk", "BNY": "Pacific/Guadalcanal", "JKG": "Europe/Stockholm", "IMT": "America/Menominee", "YAK": "America/Yakutat", "TRO": "Australia/Sydney", "MPA": "Africa/Windhoek", "DHM": "Asia/Kolkata", "TCG": "Asia/Urumqi", "SDP": "America/Anchorage", "GOP": "Asia/Kolkata", "ACR": "America/Bogota", "HGR": "America/New_York", "PJA": "Europe/Stockholm", "QOW": "Africa/Lagos", "YTQ": "America/Toronto", "HPB": "America/Nome", "ATK": "America/Anchorage", "LKL": "Europe/Oslo", "HAA": "Europe/Oslo", "ORH": "America/New_York", "KRY": "Asia/Urumqi", "KCA": "Asia/Urumqi", "MXV": "Asia/Ulaanbaatar", "BYN": "Asia/Ulaanbaatar", "GOQ": "Asia/Shanghai", "WIN": "Australia/Brisbane", "WNR": "Australia/Brisbane", "SGO": "Australia/Brisbane", "ULP": "Australia/Brisbane", "EDR": "Australia/Brisbane", "PLO": "Australia/Adelaide", "PKE": "Australia/Sydney", "ZNE": "Australia/Perth", "NTN": "Australia/Brisbane", "NRA": "Australia/Sydney", "MGB": "Australia/Adelaide", "MYA": "Australia/Sydney", "YGP": "America/Toronto", "IRG": "Australia/Brisbane", "KWM": "Australia/Brisbane", "KNS": "Australia/Currie", "JCK": "Australia/Brisbane", "GFF": "Australia/Sydney", "CMA": "Australia/Brisbane", "BHS": "Australia/Sydney", "BQL": "Australia/Brisbane", "BUC": "Australia/Brisbane", "BEU": "Australia/Brisbane", "BVI": "Australia/Brisbane", "AUU": "Australia/Brisbane", "KBU": "Asia/Makassar", "KUD": "Asia/Kuching", "BBN": "Asia/Kuching", "MKM": "Asia/Kuching", "ODN": "Asia/Kuching", "LGL": "Asia/Kuching", "TVY": "Asia/Yangon", "VCS": "Asia/Ho_Chi_Minh", "KDO": "Indian/Maldives", "HAQ": "Indian/Maldives", "DMU": "Asia/Kolkata", "KCT": "Asia/Colombo", "HBX": "Asia/Kolkata", "SKX": "Europe/Moscow", "CSY": "Europe/Moscow", "VKT": "Europe/Moscow", "TMJ": "Asia/Samarkand", "KRO": "Asia/Yekaterinburg", "NOZ": "Asia/Novokuznetsk", "IFO": "Europe/Kiev", "OZH": "Europe/Zaporozhye", "EBJ": "Europe/Copenhagen", "DYR": "Asia/Anadyr", "IKS": "Asia/Yakutsk", "CYX": "Asia/Srednekolymsk", "CKH": "Asia/Srednekolymsk", "DZN": "Asia/Almaty", "PPK": "Asia/Almaty", "KOV": "Asia/Almaty", "JPR": "America/Porto_Velho", "HUU": "America/Lima", "CJA": "America/Lima", "EYP": "America/Bogota", "WAT": "Europe/Dublin", "LOH": "America/Guayaquil", "MII": "America/Sao_Paulo", "CRM": "Asia/Manila", "BSO": "Asia/Manila", "WNP": "Asia/Manila", "KUV": "Asia/Seoul", "YFS": "America/Inuvik", "WRG": "America/Sitka", "VAK": "America/Nome", "MOU": "America/Nome", "DSK": "Asia/Karachi", "CJL": "Asia/Karachi", "AAN": "Asia/Dubai", "NSH": "Asia/Tehran", "AJF": "Asia/Riyadh", "DWD": "Asia/Riyadh", "TGJ": "Pacific/Noumea", "FTA": "Pacific/Efate", "DLY": "Pacific/Efate", "AWD": "Pacific/Efate", "SWJ": "Pacific/Efate", "LNB": "Pacific/Efate", "LPM": "Pacific/Efate", "PBJ": "Pacific/Efate", "LOD": "Pacific/Efate", "LBS": "Pacific/Fiji", "KDV": "Pacific/Fiji", "CRI": "America/Nassau", "JAL": "America/Mexico_City", "PEU": "America/Tegucigalpa", "ADF": "Europe/Istanbul", "AJI": "Europe/Istanbul", "CVU": "Atlantic/Azores", "JSY": "Europe/Athens", "TUP": "America/Chicago", "SMX": "America/Los_Angeles", "RHI": "America/Chicago", "OWB": "America/Chicago", "OTH": "America/Los_Angeles", "LYH": "America/New_York", "LMT": "America/Los_Angeles", "LEB": "America/New_York", "HOT": "America/Chicago", "DUJ": "America/New_York", "CEC": "America/Los_Angeles", "BRL": "America/Chicago", "BFD": "America/New_York", "APN": "America/Detroit", "ALO": "America/Chicago", "DIU": "Asia/Kolkata", "UYL": "Africa/Khartoum", "SRX": "Africa/Tripoli", "TSH": "Africa/Lubumbashi", "CBT": "Africa/Luanda", "SLI": "Africa/Lusaka", "HMV": "Europe/Stockholm", "TYF": "Europe/Stockholm", "KSD": "Europe/Stockholm", "HFS": "Europe/Stockholm", "SDN": "Europe/Oslo", "RET": "Europe/Oslo", "CFN": "Europe/Dublin", "WRY": "Europe/London", "SOY": "Europe/London", "ZUM": "America/Goose_Bay", "ZPB": "America/Winnipeg", "ZKE": "America/Toronto", "ZEM": "America/Toronto", "YZG": "America/Toronto", "YWP": "America/Toronto", "YNC": "America/Toronto", "YLH": "America/Toronto", "AKV": "America/Toronto", "YIK": "America/Toronto", "YNS": "America/Toronto", "YQC": "America/Toronto", "YGX": "America/Winnipeg", "YFA": "America/Toronto", "YAT": "America/Toronto", "XKS": "America/Winnipeg", "YAC": "America/Winnipeg", "ZLT": "America/Blanc-Sablon", "KIF": "America/Winnipeg", "JQA": "America/Nuuk", "JSU": "America/Nuuk", "JFR": "America/Godthab", "CNP": "America/Scoresbysund", "LLU": "America/Nuuk", "MIS": "Pacific/Port_Moresby", "RBV": "Pacific/Guadalcanal", "KGE": "Pacific/Guadalcanal", "VAO": "Pacific/Guadalcanal", "RNL": "Pacific/Guadalcanal", "BEB": "Europe/London", "WIC": "Europe/London", "CEG": "Europe/London", "ACI": "Europe/Guernsey", "YDQ": "America/Dawson_Creek", "SVL": "Europe/Helsinki", "RVN": "Europe/Helsinki", "DBQ": "America/Chicago", "KTT": "Europe/Helsinki", "USK": "Europe/Moscow", "JLN": "America/Chicago", "COD": "America/Denver", "KAJ": "Europe/Helsinki", "LYB": "America/Cayman", "MGW": "America/New_York", "STC": "America/Chicago", "FLG": "America/Phoenix", "LAW": "America/Chicago", "YGH": "America/Yellowknife", "ZFN": "America/Yellowknife", "YWJ": "America/Yellowknife", "KDM": "Indian/Maldives", "BDB": "Australia/Brisbane", "CLV": "America/Sao_Paulo", "LAO": "Asia/Manila", "KZS": "Europe/Athens", "PAS": "Europe/Athens", "JNX": "Europe/Athens", "MLO": "Europe/Athens", "JST": "America/New_York", "TAY": "Europe/Tallinn", "TBB": "Asia/Ho_Chi_Minh", "VCL": "Asia/Ho_Chi_Minh", "PSG": "America/Sitka", "NNT": "Asia/Bangkok", "YWH": "America/Vancouver", "ARM": "Australia/Sydney", "FKL": "America/New_York", "HVB": "Australia/Brisbane", "DEC": "America/Chicago", "JAC": "America/Denver", "RDN": "Asia/Kuala_Lumpur", "HVN": "America/New_York", "KSF": "Europe/Berlin", "EMD": "Australia/Brisbane", "NAV": "Europe/Istanbul", "SCT": "Asia/Aden", "PUW": "America/Los_Angeles", "KKC": "Asia/Bangkok", "KOP": "Asia/Bangkok", "NST": "Asia/Bangkok", "FLO": "America/New_York", "VDZ": "America/Anchorage", "JHM": "Pacific/Honolulu", "TXK": "America/Chicago", "MCN": "America/New_York", "SUX": "America/Chicago", "ROW": "America/Denver", "BFI": "America/Los_Angeles", "ABI": "America/Chicago", "SJT": "America/Chicago", "MKL": "America/Chicago", "ACT": "America/Chicago", "AOO": "America/New_York", "IPL": "America/Los_Angeles", "SPS": "America/Chicago", "LCK": "America/New_York", "HOM": "America/Anchorage", "ISN": "America/Chicago", "BPT": "America/Chicago", "YCL": "America/Moncton", "IPT": "America/New_York", "INL": "America/Chicago", "PQI": "America/New_York", "GCK": "America/Chicago", "GGG": "America/Chicago", "HRO": "America/Chicago", "PIZ": "America/Nome", "BTI": "America/Anchorage", "YCG": "America/Vancouver", "XCH": "Indian/Christmas", "WEI": "Australia/Brisbane", "IPH": "Asia/Kuala_Lumpur", "KTE": "Asia/Kuala_Lumpur", "YCD": "America/Vancouver", "KTG": "Asia/Pontianak", "LUW": "Asia/Makassar", "SNW": "Asia/Yangon", "MGZ": "Asia/Yangon", "TST": "Asia/Bangkok", "UTP": "Asia/Bangkok", "TIR": "Asia/Kolkata", "IXD": "Asia/Kolkata", "AGR": "Asia/Kolkata", "PBD": "Asia/Kolkata", "BHU": "Asia/Kolkata", "BHJ": "Asia/Kolkata", "ANR": "Europe/Brussels", "MQF": "Asia/Yekaterinburg", "GAE": "Africa/Tunis", "PSE": "America/Puerto_Rico", "VLV": "America/Caracas", "PBL": "America/Caracas", "MRD": "America/Caracas", "BNS": "America/Caracas", "PIU": "America/Lima", "TCQ": "America/Lima", "AYP": "America/Lima", "POI": "America/La_Paz", "VUP": "America/Bogota", "AUC": "America/Bogota", "TME": "America/Bogota", "SVI": "America/Bogota", "SJE": "America/Bogota", "NVA": "America/Bogota", "GPI": "America/Bogota", "FLA": "America/Bogota", "CZU": "America/Bogota", "BUN": "America/Bogota", "AXM": "America/Bogota", "GPS": "Pacific/Galapagos", "ZAL": "America/Santiago", "IPC": "Pacific/Easter", "CBQ": "Africa/Lagos", "BNI": "Africa/Lagos", "GEL": "America/Sao_Paulo", "CPV": "America/Fortaleza", "PPB": "America/Sao_Paulo", "CCM": "America/Sao_Paulo", "ARU": "America/Sao_Paulo", "TKD": "Africa/Accra", "RGA": "America/Argentina/Ushuaia", "JUJ": "America/Argentina/Jujuy", "BOY": "Africa/Ouagadougou", "UAQ": "America/Argentina/San_Juan", "TUC": "America/Argentina/Tucuman", "AFA": "America/Argentina/Mendoza", "SFN": "America/Argentina/Cordoba", "IAM": "Africa/Algiers", "PRA": "America/Argentina/Cordoba", "PAG": "Asia/Manila", "ELG": "Africa/Algiers", "MSJ": "Asia/Tokyo", "TKS": "Asia/Tokyo", "ASJ": "Asia/Tokyo", "IKI": "Asia/Tokyo", "WKJ": "Asia/Tokyo", "SHB": "Asia/Tokyo", "MMJ": "Asia/Tokyo", "YAP": "Pacific/Chuuk", "KSA": "Pacific/Kosrae", "TKK": "Pacific/Chuuk", "ROP": "Pacific/Saipan", "HRM": "Africa/Algiers", "PZH": "Asia/Karachi", "MJD": "Asia/Karachi", "LYP": "Asia/Karachi", "AQJ": "Asia/Amman", "RZR": "Asia/Tehran", "XBJ": "Asia/Tehran", "BDH": "Asia/Tehran", "MRX": "Asia/Tehran", "SHW": "Asia/Riyadh", "RAE": "Asia/Riyadh", "AQI": "Asia/Riyadh", "URY": "Asia/Riyadh", "WRE": "Pacific/Auckland", "PPQ": "Pacific/Auckland", "IVC": "Pacific/Auckland", "GIS": "Pacific/Auckland", "TUO": "Pacific/Auckland", "UVE": "Pacific/Noumea", "YZT": "America/Vancouver", "KOC": "Pacific/Noumea", "MVT": "Pacific/Tahiti", "FAV": "Pacific/Tahiti", "MYG": "America/Nassau", "SML": "America/Nassau", "LGI": "America/Nassau", "IGA": "America/Nassau", "RSD": "America/Nassau", "BIM": "America/Nassau", "TCB": "America/Nassau", "AXP": "America/Nassau", "DAV": "America/Panama", "TAP": "America/Mexico_City", "UPN": "America/Mexico_City", "PDS": "America/Matamoros", "MTT": "America/Mexico_City", "MAM": "America/Matamoros", "LZC": "America/Mexico_City", "SLW": "America/Monterrey", "CVM": "America/Monterrey", "CPE": "America/Merida", "YYB": "America/Toronto", "XSC": "America/Grand_Turk", "YXX": "America/Vancouver", "DNZ": "Europe/Istanbul", "MZH": "Europe/Istanbul", "ACH": "Europe/Zurich", "LUG": "Europe/Zurich", "SUJ": "Europe/Bucharest", "OMR": "Europe/Bucharest", "CRA": "Europe/Bucharest", "BAY": "Europe/Bucharest", "SJZ": "Atlantic/Azores", "HFA": "Asia/Jerusalem", "PED": "Europe/Prague", "BZO": "Europe/Rome", "YVM": "America/Pangnirtung", "DEB": "Europe/Budapest", "JSI": "Europe/Athens", "IOA": "Europe/Athens", "LRT": "Europe/Paris", "DOL": "Europe/Paris", "YSY": "America/Yellowknife", "XCR": "Europe/Paris", "AVN": "Europe/Paris", "YRB": "America/Resolute", "PGX": "Europe/Paris", "AGF": "Europe/Paris", "YQY": "America/Glace_Bay", "BJZ": "Europe/Madrid", "PDV": "Europe/Sofia", "ELF": "Africa/Khartoum", "GDQ": "Africa/Addis_Ababa", "AXU": "Africa/Addis_Ababa", "SNE": "Atlantic/Cape_Verde", "YPY": "America/Edmonton", "YPR": "America/Vancouver", "OZZ": "Africa/Casablanca", "MLW": "Africa/Monrovia", "YPN": "America/Toronto", "MJM": "Africa/Lubumbashi", "KND": "Africa/Lubumbashi", "BKY": "Africa/Lubumbashi", "BUX": "Africa/Lubumbashi", "THU": "America/Thule", "ORX": "America/Santarem", "CHY": "Pacific/Guadalcanal", "SCM": "America/Nome", "SHD": "America/New_York", "QBC": "America/Vancouver", "FLS": "Australia/Hobart", "CUQ": "Australia/Brisbane", "BMY": "Pacific/Noumea", "AIU": "Pacific/Rarotonga", "BKW": "America/New_York", "ASV": "Africa/Nairobi", "EOI": "Europe/London", "ZBF": "America/Moncton", "YVZ": "America/Winnipeg", "FRE": "Pacific/Guadalcanal", "IVL": "Europe/Helsinki", "SAB": "America/Kralendijk", "BKQ": "Australia/Brisbane", "AAY": "Asia/Aden", "SPD": "Asia/Dhaka", "GAF": "Africa/Tunis", "LUQ": "America/Argentina/San_Luis", "MUW": "Africa/Algiers", "TID": "Africa/Algiers", "DJG": "Africa/Algiers", "HOI": "Pacific/Tahiti", "YYU": "America/Toronto", "PNA": "Europe/Madrid", "LOK": "Africa/Nairobi", "ASO": "Africa/Addis_Ababa", "JIM": "Africa/Addis_Ababa", "GMB": "Africa/Addis_Ababa", "BJR": "Africa/Addis_Ababa", "AMH": "Africa/Addis_Ababa", "ZIG": "Africa/Dakar", "PRI": "Indian/Mahe", "POG": "Africa/Libreville", "LUO": "Africa/Luanda", "KFS": "Europe/Istanbul", "WMR": "Indian/Antananarivo", "MJU": "Asia/Makassar", "THD": "Asia/Bangkok", "MFU": "Africa/Lusaka", "KZR": "Europe/Istanbul", "NGE": "Africa/Douala", "MVR": "Africa/Douala", "ZDY": "Asia/Dubai", "RRG": "Indian/Mauritius", "RHD": "America/Argentina/Cordoba", "MTS": "Africa/Mbabane", "DEE": "Asia/Ust-Nera", "GBB": "Asia/Baku", "RGK": "Asia/Barnaul", "UTT": "Africa/Johannesburg", "YLL": "America/Edmonton", "RCB": "Africa/Johannesburg", "PZB": "Africa/Johannesburg", "PTG": "Africa/Johannesburg", "PHW": "Africa/Johannesburg", "MGH": "Africa/Johannesburg", "BYO": "America/Campo_Grande", "VIN": "Europe/Kiev", "OBY": "America/Scoresbysund", "GHE": "America/Panama", "PUE": "America/Panama", "PVE": "America/Panama", "MYQ": "Asia/Kolkata", "YJT": "America/St_Johns", "LAM": "America/Denver", "ULO": "Asia/Hovd", "YES": "Asia/Tehran", "SJL": "America/Manaus", "LCX": "Asia/Shanghai", "ULG": "Asia/Hovd", "ILD": "Europe/Madrid", "PAF": "Africa/Kampala", "BAZ": "America/Manaus", "CIZ": "America/Manaus", "AAX": "America/Sao_Paulo", "GPB": "America/Sao_Paulo", "ROO": "America/Cuiaba", "VGZ": "America/Bogota", "LMC": "America/Bogota", "UYU": "America/La_Paz", "MLY": "America/Anchorage", "KAE": "America/Sitka", "IRC": "America/Anchorage", "OER": "Europe/Stockholm", "TCT": "America/Anchorage", "NIB": "America/Anchorage", "NLG": "America/Anchorage", "KFP": "America/Nome", "IKO": "America/Nome", "AKB": "America/Adak", "TNC": "America/Nome", "AKK": "America/Anchorage", "WSN": "America/Anchorage", "PIP": "America/Anchorage", "KPV": "America/Anchorage", "EGX": "America/Anchorage", "KCQ": "America/Anchorage", "HYG": "America/Sitka", "ELV": "America/Juneau", "AGN": "America/Juneau", "MCE": "America/Los_Angeles", "VIS": "America/Los_Angeles", "CXF": "America/Anchorage", "CEM": "America/Anchorage", "VEL": "America/Denver", "CNY": "America/Denver", "OLF": "America/Denver", "GDV": "America/Denver", "MCK": "America/Chicago", "SDY": "America/Denver", "MBL": "America/Detroit", "GUC": "America/Denver", "GDZ": "Europe/Moscow", "KID": "Europe/Stockholm", "TVF": "America/Chicago", "IAR": "Europe/Moscow", "THN": "Europe/Stockholm", "EAT": "America/Los_Angeles", "PDT": "America/Los_Angeles", "RIW": "America/Denver", "MTJ": "America/Denver", "MWA": "America/Chicago", "CPX": "America/Puerto_Rico", "OAG": "Australia/Sydney", "GFN": "Australia/Sydney", "HDM": "Asia/Tehran", "TEQ": "Europe/Istanbul", "CKZ": "Europe/Istanbul", "AOE": "Europe/Istanbul", "WLH": "Pacific/Efate", "TGC": "Asia/Kuching", "TOG": "America/Anchorage", "PTH": "America/Anchorage", "KVC": "America/Nome", "IGG": "America/Anchorage", "RGS": "Europe/Madrid", "LEN": "Europe/Madrid", "LGQ": "America/Guayaquil", "PFQ": "Asia/Tehran", "IIL": "Asia/Tehran", "GVR": "America/Sao_Paulo", "KVK": "Europe/Moscow", "CYZ": "Asia/Manila", "ARC": "America/Anchorage", "MYU": "America/Nome", "SKE": "Europe/Oslo", "RRS": "Europe/Oslo", "OLA": "Europe/Oslo", "TBW": "Europe/Moscow", "PVC": "America/New_York", "VDB": "Europe/Oslo", "BDU": "Europe/Oslo", "HVD": "Asia/Hovd", "LTI": "Asia/Hovd", "WYA": "Australia/Adelaide", "XTG": "Australia/Brisbane", "CCK": "Indian/Cocos", "PUG": "Australia/Adelaide", "OLP": "Australia/Adelaide", "MRZ": "Australia/Sydney", "MCV": "Australia/Darwin", "MGT": "Australia/Darwin", "LSY": "Australia/Sydney", "HID": "Australia/Brisbane", "ELC": "Australia/Darwin", "DPO": "Australia/Hobart", "CED": "Australia/Adelaide", "CPD": "Australia/Adelaide", "BCI": "Australia/Brisbane", "NTX": "Asia/Jakarta", "BKM": "Asia/Kuching", "KAW": "Asia/Yangon", "DIN": "Asia/Bangkok", "SGD": "Europe/Copenhagen", "MAQ": "Asia/Bangkok", "KEP": "Asia/Kathmandu", "BDP": "Asia/Kathmandu", "RNN": "Europe/Copenhagen", "BHR": "Asia/Kathmandu", "BZL": "Asia/Dhaka", "SHL": "Asia/Kolkata", "PEZ": "Europe/Moscow", "OSW": "Asia/Yekaterinburg", "URS": "Europe/Moscow", "SVC": "America/Denver", "GLH": "America/Chicago", "EAR": "America/Chicago", "ESL": "Europe/Moscow", "OGZ": "Europe/Moscow", "GRV": "Europe/Moscow", "KRP": "Europe/Copenhagen", "KYZ": "Asia/Krasnoyarsk", "PES": "Europe/Moscow", "UDJ": "Europe/Uzhgorod", "YGK": "America/Toronto", "NAJ": "Asia/Baku", "RIB": "America/La_Paz", "GYA": "America/La_Paz", "NQU": "America/Bogota", "LPD": "America/Bogota", "LQM": "America/Bogota", "LEC": "America/Bahia", "MBT": "Asia/Manila", "CYP": "Asia/Manila", "VRC": "Asia/Manila", "JOL": "Asia/Manila", "CGM": "Asia/Manila", "YNY": "Asia/Seoul", "WJU": "Asia/Seoul", "SYO": "Asia/Tokyo", "ONJ": "Asia/Tokyo", "IWJ": "Asia/Tokyo", "ADK": "America/Adak", "SAX": "America/Panama", "BFQ": "America/Panama", "KDU": "Asia/Karachi", "DBA": "Asia/Karachi", "AFZ": "Asia/Tehran", "BJB": "Asia/Tehran", "BXR": "Asia/Tehran", "KHD": "Asia/Tehran", "ILP": "Pacific/Noumea", "AUY": "Pacific/Efate", "VLS": "Pacific/Efate", "TGH": "Pacific/Efate", "MWF": "Pacific/Efate", "SSR": "Pacific/Efate", "EAE": "Pacific/Efate", "FUT": "Pacific/Wallis", "VBV": "Pacific/Fiji", "RTA": "Pacific/Fiji", "LKB": "Pacific/Fiji", "ICI": "Pacific/Fiji", "MOI": "Pacific/Rarotonga", "MUK": "Pacific/Rarotonga", "MGS": "Pacific/Rarotonga", "SYQ": "America/Costa_Rica", "TTQ": "America/Costa_Rica", "JQE": "America/Panama", "SLX": "America/Grand_Turk", "QUB": "Africa/Tripoli", "EDO": "Europe/Istanbul", "ISE": "Europe/Istanbul", "MPN": "Atlantic/Stanley", "RJL": "Europe/Madrid", "YKM": "America/Los_Angeles", "VCT": "America/Chicago", "UIN": "America/Chicago", "SLN": "America/Chicago", "SLK": "America/New_York", "SHR": "America/Denver", "RUT": "America/New_York", "PSM": "America/New_York", "PLN": "America/Detroit", "PIH": "America/Boise", "PIB": "America/Chicago", "MSL": "America/Chicago", "MKG": "America/Detroit", "LNS": "America/New_York", "LBF": "America/Chicago", "LAR": "America/Denver", "IRK": "America/Chicago", "GGW": "America/Denver", "EKO": "America/Los_Angeles", "EAU": "America/Chicago", "CMX": "America/Detroit", "CLM": "America/Los_Angeles", "CIU": "America/Detroit", "CGI": "America/Chicago", "BFF": "America/Denver", "ALW": "America/Los_Angeles", "AHN": "America/New_York", "ABR": "America/Chicago", "RUA": "Africa/Kampala", "BKZ": "Africa/Dar_es_Salaam", "LKG": "Africa/Nairobi", "GDE": "Africa/Addis_Ababa", "SFL": "Atlantic/Cape_Verde", "GMZ": "Atlantic/Canary", "OMD": "Africa/Windhoek", "OND": "Africa/Windhoek", "LUD": "Africa/Windhoek", "VPY": "Africa/Maputo", "MSZ": "Africa/Luanda", "CIP": "Africa/Lusaka", "SHC": "Africa/Addis_Ababa", "BRR": "Europe/London", "LEQ": "Europe/London", "CAL": "Europe/London", "ELU": "Africa/Algiers", "BMW": "Africa/Algiers", "CBH": "Africa/Algiers", "ZMT": "America/Vancouver", "YPW": "America/Vancouver", "YPO": "America/Toronto", "XGR": "America/Toronto", "YSG": "America/Yellowknife", "YLC": "America/Iqaluit", "YGZ": "America/Iqaluit", "YOG": "America/Nipigon", "SUR": "America/Toronto", "YAA": "America/Vancouver", "WBM": "Pacific/Port_Moresby", "MDU": "Pacific/Port_Moresby", "CMU": "Pacific/Port_Moresby", "TRE": "Europe/London", "RUS": "Pacific/Guadalcanal", "SCZ": "Pacific/Guadalcanal", "ATD": "Pacific/Guadalcanal", "DND": "Europe/London", "ILY": "Europe/London", "GLO": "Europe/London", "KUO": "Europe/Helsinki", "KGP": "Asia/Yekaterinburg", "KAO": "Europe/Helsinki", "NVK": "Europe/Oslo", "HDN": "America/Denver", "CEZ": "America/Denver", "MEI": "America/Chicago", "OGL": "America/Guyana", "CJM": "Asia/Bangkok", "JOE": "Europe/Helsinki", "BJI": "America/Chicago", "MCM": "Europe/Monaco", "TWF": "America/Boise", "EGE": "America/Denver", "YPC": "America/Yellowknife", "GCN": "America/Phoenix", "DHI": "Asia/Kathmandu", "TMI": "Asia/Kathmandu", "BWK": "Europe/Zagreb", "PYY": "Asia/Bangkok", "VKG": "Asia/Ho_Chi_Minh", "ODY": "Asia/Vientiane", "LXG": "Asia/Vientiane", "TDX": "Asia/Bangkok", "UNN": "Asia/Bangkok", "BFV": "Asia/Bangkok", "ROI": "Asia/Bangkok", "URE": "Europe/Tallinn", "SNV": "America/Caracas", "PAH": "America/Chicago", "PKB": "America/New_York", "CXH": "America/Vancouver", "RDD": "America/Los_Angeles", "KOS": "Asia/Phnom_Penh", "CLD": "America/Los_Angeles", "HGN": "Asia/Bangkok", "XKH": "Asia/Vientiane", "FUN": "Pacific/Funafuti", "KGC": "Australia/Adelaide", "RKD": "America/New_York", "BHB": "America/New_York", "BTM": "America/Denver", "APF": "America/New_York", "AXK": "Asia/Aden", "LWN": "Asia/Yerevan", "THS": "Asia/Bangkok", "WGP": "Asia/Makassar", "NAH": "Asia/Makassar", "FOE": "America/Chicago", "CDC": "America/Denver", "MOD": "America/Los_Angeles", "SCK": "America/Los_Angeles", "BLV": "America/Chicago", "HOB": "America/Denver", "AGB": "Europe/Berlin", "OGS": "America/New_York", "CIC": "America/Los_Angeles", "AUG": "America/New_York", "TBN": "America/Chicago", "HIB": "America/Chicago", "TEB": "America/New_York", "XFW": "Europe/Berlin", "HVR": "America/Denver", "CNM": "America/Denver", "JBR": "America/Chicago", "MHG": "Europe/Berlin", "MSS": "America/New_York", "MUE": "Pacific/Honolulu", "PUB": "America/Denver", "PRC": "America/Phoenix", "HNM": "Pacific/Honolulu", "PTU": "America/Anchorage", "ILI": "America/Anchorage", "TLJ": "America/Anchorage", "LUR": "America/Nome", "NTQ": "Asia/Tokyo", "TMW": "Australia/Sydney", "RCM": "Australia/Brisbane", "MEB": "Australia/Melbourne", "AVV": "Australia/Melbourne", "ABM": "Australia/Brisbane", "LDU": "Asia/Kuching", "LMN": "Asia/Kuching", "BXB": "Asia/Jayapura", "WMX": "Asia/Jayapura", "PBU": "Asia/Yangon", "KYP": "Asia/Yangon", "KET": "Asia/Yangon", "LOE": "Asia/Bangkok", "SNO": "Asia/Bangkok", "NAW": "Asia/Bangkok", "PRH": "Asia/Bangkok", "LPT": "Asia/Bangkok", "AGX": "Asia/Kolkata", "BIR": "Asia/Kathmandu", "PKR": "Asia/Kathmandu", "BWA": "Asia/Kathmandu", "LUH": "Asia/Kolkata", "KNU": "Asia/Kolkata", "OST": "Europe/Brussels", "YBR": "America/Winnipeg", "GWL": "Asia/Kolkata", "KUU": "Asia/Kolkata", "RJH": "Asia/Dhaka", "TRR": "Asia/Colombo", "HJR": "Asia/Kolkata", "JGA": "Asia/Kolkata", "IXG": "Asia/Kolkata", "PWE": "Asia/Anadyr", "EUX": "America/Kralendijk", "MAZ": "America/Puerto_Rico", "SOM": "America/Caracas", "SVZ": "America/Caracas", "PYH": "America/Caracas", "LFR": "America/Caracas", "CUM": "America/Caracas", "CZE": "America/Caracas", "CAJ": "America/Caracas", "TRU": "America/Lima", "TBP": "America/Lima", "ATA": "America/Lima", "ANS": "America/Lima", "CIX": "America/Lima", "YOL": "Africa/Lagos", "SKO": "Africa/Lagos", "RCH": "America/Bogota", "PVA": "America/Bogota", "PPN": "America/Bogota", "MZL": "America/Bogota", "IPI": "America/Bogota", "EJA": "America/Bogota", "TCO": "America/Bogota", "BSC": "America/Bogota", "KAD": "Africa/Lagos", "MEC": "America/Guayaquil", "XMS": "America/Guayaquil", "JOS": "Africa/Lagos", "ILR": "Africa/Lagos", "IBA": "Africa/Lagos", "ZOS": "America/Santiago", "BVH": "America/Porto_Velho", "URG": "America/Sao_Paulo", "PAV": "America/Bahia", "TUR": "America/Belem", "TBT": "America/Eirunepe", "LAZ": "America/Bahia", "CZS": "America/Rio_Branco", "CMG": "America/Campo_Grande", "AFL": "America/Cuiaba", "AQA": "America/Sao_Paulo", "CDJ": "America/Belem", "CPC": "America/Argentina/Salta", "RSA": "America/Argentina/Salta", "NYI": "Africa/Accra", "PMY": "America/Argentina/Catamarca", "VDM": "America/Argentina/Salta", "PSS": "America/Argentina/Cordoba", "FMA": "America/Argentina/Cordoba", "RES": "America/Argentina/Cordoba", "IRJ": "America/Argentina/La_Rioja", "SDE": "America/Argentina/Cordoba", "CTC": "America/Argentina/Catamarca", "SJI": "Asia/Manila", "TGR": "Africa/Algiers", "UEO": "Asia/Tokyo", "OIM": "Asia/Tokyo", "HAC": "Asia/Tokyo", "TTJ": "Asia/Tokyo", "IZO": "Asia/Tokyo", "MBE": "Asia/Tokyo", "SHM": "Asia/Tokyo", "TNN": "Asia/Taipei", "TTT": "Asia/Taipei", "TEE": "Africa/Algiers", "PJG": "Asia/Karachi", "GIL": "Asia/Karachi", "KHS": "Asia/Muscat", "FJR": "Asia/Dubai", "SDG": "Asia/Tehran", "EJH": "Asia/Riyadh", "TUI": "Asia/Riyadh", "RAH": "Asia/Riyadh", "ZFM": "America/Yellowknife", "WAG": "Pacific/Auckland", "WSZ": "Pacific/Auckland", "WHK": "Pacific/Auckland", "TIU": "Pacific/Auckland", "KAT": "Pacific/Auckland", "KKE": "Pacific/Auckland", "HKK": "Pacific/Auckland", "TOU": "Pacific/Noumea", "MEE": "Pacific/Noumea", "KNQ": "Pacific/Noumea", "YZR": "America/Nipigon", "AXR": "Pacific/Tahiti", "TKP": "Pacific/Tahiti", "MKP": "Pacific/Tahiti", "KKR": "Pacific/Tahiti", "YZP": "America/Vancouver", "GMR": "Pacific/Gambier", "PPG": "Pacific/Pago_Pago", "GAO": "America/Havana", "NOB": "America/Costa_Rica", "CHX": "America/Panama", "NLD": "America/Matamoros", "LTO": "America/Mazatlan", "YYF": "America/Vancouver", "CTM": "America/Cancun", "GJA": "America/Tegucigalpa", "YXH": "America/Edmonton", "CND": "Europe/Bucharest", "ARW": "Europe/Bucharest", "OMO": "Europe/Sarajevo", "GRW": "Atlantic/Azores", "BRQ": "Europe/Prague", "IFJ": "Atlantic/Reykjavik", "KSO": "Europe/Athens", "YUB": "America/Yellowknife", "DIJ": "Europe/Paris", "UIP": "Europe/Paris", "LAI": "Europe/Paris", "LEH": "Europe/Paris", "AUR": "Europe/Paris", "LPY": "Europe/Paris", "ANG": "Europe/Paris", "SLM": "Europe/Madrid", "EGS": "Atlantic/Reykjavik", "MYW": "Africa/Dar_es_Salaam", "ARK": "Africa/Dar_es_Salaam", "KME": "Africa/Kigali", "LTD": "Africa/Tripoli", "YQL": "America/Edmonton", "GHT": "Africa/Tripoli", "KTL": "Africa/Nairobi", "ABS": "Africa/Cairo", "MMO": "Atlantic/Cape_Verde", "AEY": "Atlantic/Reykjavik", "CSK": "Africa/Dakar", "TTU": "Africa/Casablanca", "AHU": "Africa/Casablanca", "TTA": "Africa/Casablanca", "YPL": "America/Toronto", "IRP": "Africa/Lubumbashi", "GMA": "Africa/Kinshasa", "MSU": "Africa/Maseru", "KYK": "America/Anchorage", "DLZ": "Asia/Ulaanbaatar", "PTJ": "Australia/Melbourne", "IUE": "Pacific/Niue", "LJA": "Africa/Lubumbashi", "UII": "America/Tegucigalpa", "MSW": "Africa/Asmara", "TUA": "America/Guayaquil", "VDA": "Asia/Jerusalem", "KZI": "Europe/Athens", "FMI": "Africa/Lubumbashi" }



const tzTime = (zone = "") => {
    const num = /^[+-]?\d{2}:\d{2}$/;
    const str = /^[A-Za-z]+\/[A-Za-z]+$/;
    const now = new Date((new Date().getTime())).toISOString()

    let time
    if (zone == "") {
        time = new Date()
    }
    else if (zone == undefined) {
        return "Please set the timezone"
    }
    else if (zone != "" && num.test(zone)) {
        time = new Date(now.replace("Z", zone))
    }
    else if (zone != "" && str.test(zone)) {
        const thisZone = tz[zone]
        if (thisZone == undefined) {
            return "Please set the timezone"
        }
        time = new Date(now.replace("Z", thisZone))
    } else {
        return "Please set the timezone"
    }

    return { str: time.toISOString(), time, TZ: (zone == "" ? "+00:00" : (tz[zone] || zone)) }
}

const timeDiff = (from, to) => {
    try {
        const t1 = new Date(from + "z")
        const t2 = new Date(to + "z")
        let diff = t1 - t2

        const diffTime = {
            diffDays: Math.floor(diff / (1000 * 60 * 60 * 24)),
            diffHours: Math.floor(diff / (1000 * 60 * 60)),
            diffMinutes: Math.floor(diff / (1000 * 60)),
            diffSeconds: Math.floor(diff / 1000),
            diffMilliseconds: diff,
            total: {}
        }
        diffTime.total.days = diffTime.diffDays
        diff -= diffTime.diffDays * 24 * 60 * 60 * 1000
        diffTime.total.hours = Math.floor(diff / (1000 * 60 * 60))
        diff -= diffTime.total.hours * 60 * 60 * 1000
        diffTime.total.minutes = Math.floor(diff / (1000 * 60))
        diff -= diffTime.total.minutes * 60 * 1000
        diffTime.total.seconds = Math.floor(diff / 1000)
        diff -= diffTime.total.seconds * 1000
        diffTime.total.milliseconds = diff

        return diffTime
    } catch (e) {
        return e
    }
}

const tzDiff = (from, fromTz, to, toTz) => {
    const t1 = tzTime(fromTz)
    const t2 = tzTime(toTz)
    const diff = timeDiff(t1.str.replace("Z", ""), t2.str.replace("Z", ""))
    const diffTime = timeDiff(from, to)
    diff.diffDays += diffTime.diffDays
    diff.diffHours += diffTime.diffHours
    diff.diffMinutes += diffTime.diffMinutes
    diff.diffSeconds += diffTime.diffSeconds
    diff.diffMilliseconds += diffTime.diffMilliseconds

    let diffm = diff.diffMilliseconds

    diff.total.days = Math.floor(diffm / (1000 * 60 * 60 * 24))
    diffm -= diff.total.days * 24 * 60 * 60 * 1000
    diff.total.hours = Math.floor(diffm / (1000 * 60 * 60))
    diffm -= diff.total.hours * 60 * 60 * 1000
    diff.total.minutes = Math.floor(diffm / (1000 * 60))
    diffm -= diff.total.minutes * 60 * 1000
    diff.total.seconds = Math.floor(diffm / 1000)
    diffm -= diff.total.seconds * 1000
    diff.total.milliseconds = diffm

    return diff
}

const tzDiffByAirports = (from, fromAirport, to, toAirport) => {
    const fromTz = airports[fromAirport] || "+00:00"
    const toTz = airports[toAirport] || "+00:00"
    const t1 = tzTime(fromTz)
    const t2 = tzTime(toTz)
    const diff = timeDiff(t1.str.replace("Z", ""), t2.str.replace("Z", ""))
    const diffTime = timeDiff(from, to)
    diff.diffDays += diffTime.diffDays
    diff.diffHours += diffTime.diffHours
    diff.diffMinutes += diffTime.diffMinutes
    diff.diffSeconds += diffTime.diffSeconds
    diff.diffMilliseconds += diffTime.diffMilliseconds

    let diffm = diff.diffMilliseconds

    diff.total.days = Math.floor(diffm / (1000 * 60 * 60 * 24))
    diffm -= diff.total.days * 24 * 60 * 60 * 1000
    diff.total.hours = Math.floor(diffm / (1000 * 60 * 60))
    diffm -= diff.total.hours * 60 * 60 * 1000
    diff.total.minutes = Math.floor(diffm / (1000 * 60))
    diffm -= diff.total.minutes * 60 * 1000
    diff.total.seconds = Math.floor(diffm / 1000)
    diffm -= diff.total.seconds * 1000
    diff.total.milliseconds = diffm

    return diff
}

const all = {
    tzTime, timeDiff, tzDiff, tzDiffByAirports, use: `
// console.log(tzTime("+06:00"))
// console.log(tzTime("Asia/Kolkata"))
// console.log(timeDiff("2023-10-11t10:20", "2023-10-10"))
// console.log(tzDiff("2023-10-12", "+06:00", "2023-10-12", "Asia/Kolkata"))
// console.log(tzDiffByAirports("2023-10-12", "DXB", "2023-10-11", "DAC"))
` }

module.exports = all
