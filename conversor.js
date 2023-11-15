let c = 1;
let k = 1;
let f = 1;
let kc = k - 273.15;
let kf = (9 / 5) * (k - 273.15) + 32;
let cf = (9 / 5) * c + 32;
let ck = c + 273.15;
let fk = (5 / 9) * (f - 32) + 273.15;
let fc = (5 / 9) * (f - 32);

alert("K para °C é " + kc + "°C");
alert("K para °F é " + kf + "°F");
alert("°C para °F é " + cf + "°F");
alert("°C para K é " + ck + "K");
alert("°F para K é " + fk + "K");
alert("°F para °C é " + fc + "°C");
