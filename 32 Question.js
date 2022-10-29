

// Checking username

var currentusernames = ['Admin', 'Ali_Sher', 'Hassan', 'saim', 'Taha']
new_user = prompt("enter new user name");

let found = false;
var newuserName = new Array();

for (let i = 0; i < currentusernames.length; i++) {
    if (new_user === currentusernames[i]) {
        found = true;
        break;
    }
}

let j = 0;

if(found)
{
    console.log("Username is already existed try to choose another username");
}
else {
    console.log("Username Added");
    newuserName[j] = new_user; 
    j++;
}

console.log(newuserName);