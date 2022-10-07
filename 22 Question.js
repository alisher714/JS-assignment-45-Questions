//from question no 15


invitation = ['Ali Sher', 'Hassan', 'Taha']
 
for (let i = 0; i < invitation.length; i++) {
   console.log(invitation[i])
}

//one person is not able to join 
// this will produce index error because -15 is not present in array
console.log('These people are invited to dinner, but Mr', invitation[-15],'is not able to attend.');


