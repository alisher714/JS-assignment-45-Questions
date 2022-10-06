
 invitation = ['Ali Sher', 'Hassan', 'Taha']
 
 for (let i = 0; i < invitation.length; i++) {
    console.log(invitation[i])
 }

//one person is not able to join 
 console.log('These people are invited to dinner, but Mr', invitation[0],'is not able to attend.');

//replace one person
 invitation[0] = "Saim";

//print list of guests after replace of one guest
console.log("final list after updation")

 for (let i = 0; i < invitation.length; i++) {
    console.log('hello Mr.', invitation[i], 'You are cordially invited to share the joy with us at my table for dinner')
    
 }

 
