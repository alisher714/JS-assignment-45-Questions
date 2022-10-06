invitation = ['Ali Sher', 'Hassan', 'Taha']
 
for (let i = 0; i < invitation.length; i++) {
   console.log(invitation[i])
}


//we have three more guest 
invitation.unshift('ikram', 'nabeel', 'john')

console.log("List after adding more guest")
for (let i = 0; i < invitation.length; i++) {
  console.log(invitation[i])
}

//Adding in the middle of array
console.log("after adding element at middle of list")
invitation.splice(3, 0, "Arham");
for (let i = 0; i < invitation.length; i++) {
   console.log('hello Mr.', invitation[i], 'You are cordially invited to share the joy with us at my table for dinner')
   
}


//removing the person from list

console.log("sorry we only have space for two person only")

not_invited = new Array;

for (let i = 0; i < 5; i++) {
    not_invited[i]=invitation.pop();
    console.log(not_invited[i], "Sorry you\'re not invited, better Luck next time")
 }
 
 

//our final list with 2 Guest is ready
console.log("final list")
for (let i = 0; i < invitation.length; i++) {
  console.log(invitation[i])
  
}


//from question no 14 to 17
console.log("total number of Guest are ", invitation.length)


