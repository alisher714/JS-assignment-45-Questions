
let places_to_be_vist = ['maldives', 'saudi arabia ', 'Amrica', 'europe', 'Pakistan'];
//orignal array
    console.log(places_to_be_vist);


//sorting without changing orignal array
console.log('----------------------------------------sorted array-------------------------------')
copy_array = new Array;
for (let i = 0; i < places_to_be_vist.length; i++) {
    copy_array[i] = places_to_be_vist[i];
}

copy_array.sort();
console.log(copy_array);



// verifing that its still in its orignal order
console.log('----------------------------------------orignal Array-------------------------------')
console.log(places_to_be_vist);

//reversing the list
places_to_be_vist.reverse();
console.log('----------------------------------------reverse Array-------------------------------')
console.log(places_to_be_vist);

// again reversing
places_to_be_vist.reverse();
console.log('-------------------------------------again reverse Array-------------------------------')
console.log(places_to_be_vist);


//array sorting
places_to_be_vist.sort();
console.log('----------------------------------------sorted array-------------------------------')
console.log(places_to_be_vist);

places_to_be_vist.sort().reverse();
console.log('----------------------------------------reverse sorted array-------------------------------')
console.log(places_to_be_vist);