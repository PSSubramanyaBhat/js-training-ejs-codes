"use strict";
/*
Model a person using javascript object. It can have properties like firstName, lastName, age..
*/
let subramanya = {
    firstName: "P.S.",
    middleName: "Subramanya",
    lastName: "Bhat",
    age: 22,
    address:{
        addressLocality: "Bondel",
        addressRegion: "Mangalore",
        state: "Karnatka",
        postalCode: "575008"
    },
    email: "subramanya@gmail.com",
    jobTitle: "Trainee Software Engineer",
    birthDate: "28/12/1998",
    gender: "male",
    telephone:"+91 9876543210",
    socialMediaAccounts: [
        "www.facebook.com/subba",
        "www.linkedin.com/subba",
        "www.twitter.com/subba"
    ],
    favouriteGame: "EA Cricket Sports",
    favouriteAnime: "Naruto",
    favouriteColor: "Orange"
};

console.log(subramanya.address.addressLocality);
