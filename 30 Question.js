

var usernames = ['Admin', 'Ali_Sher', 'Hassan', 'saim', 'Taha']
 for (let i = 0; i < usernames.length; i++) {
    if(usernames[i] == 'Admin'){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log("Hello",usernames[i]+', thank you for logging in again.');
    }
 }

