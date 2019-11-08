let kelvin = 293; //prints today's forcast in Kelvin
console.log(kelvin); //prints 293
let celsius = kelvin -= 273; //prints today's forcast in Celsius converted from Kelvin
console.log(celsius); //prints 20
let fahrenheit = celsius * (9/5) + 32; //prints today's forcast in Fahrenheit converted from Celsius
fahrenheit = Math.floor(fahrenheit); //rounds decimal down
console.log(fahrenheit); //prints 68
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); //prints interpolation to log temperature in fahrenheit