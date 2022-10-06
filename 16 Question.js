
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