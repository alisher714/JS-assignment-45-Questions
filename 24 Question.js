
//equality
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'civic')

//lowercase function
let name = 'ALI SHER';
console.log("Is name letter is in lower case?.")
console.log(name.toLowerCase() == 'ali sher')

//numerical test
let marks = 55;
console.log("Is marks greater than 100? ")
console.log(marks > 100);

//And 
let car_company = "honda";
let car_type = "SUV";
console.log("Is car honda sedan?")
console.log(car_company == 'honda' && car_type == 'sedan');

//or
console.log("Is car belongs to honda?")
console.log(car_company == 'honda' || car_type == 'sedan');

// searching in array
///found
let array = [1,3,6,8,4];
element = 3;
for (let i = 0; i < array.length; i++) {
    if(array[i] == element)
    {
        console.log('element found at', i, 'index' );
        break;
    }

}

//not found
var found = false;
for (let i = 0; i < array.length; i++) {
    if(array[i] == element)
    {
        var elem = i;
        found = true;
        break;
    }

}
if(found)
{
    console.log('element found at', elem, 'index' );
}
else
{
    console.log('element not found');
}

