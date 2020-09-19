"use strict";

let creditCard = {
    cardOwner: "P.S. Subramanya Bhat",
    cardName: "VISA",
    cardStandard: "Gold",
    bank: {
        bankName: "Corporation Bank",
        branch: "Konchady Branch",
        ifsc: "CORP0123456",
        accountNumber: "145234999645666"
    },
    validity: "12/09/2018 - 12/09/2023",
    countriesPermitted: "India, USA, Australia, Germany, UK",
    transactionPerDay: "Rs. 10,000",
    transaction: function() {
        let pin = prompt("Enter your pin number");
        console.log(pin);
        let withdrawalType = prompt("Choose method of withdrawal do you prefer?");
        switch (withdrawalType) {
        case "Fast Cash":
            let amount = prompt("Choose the amount");
            amount = parseInt(amount);
            switch (amount) {
            case 500: 
                console.log("You have successfully withdrawn Rs. 500");
                break;
            case 1000: 
                console.log("You have successfully withdrawn Rs. 1000");
                break;
            case 2000: 
                console.log("You have successfully withdrawn Rs. 2000");
                break;
            case 5000: 
                console.log("You have successfully withdrawn Rs. 5000");
                break;
            case 10000: 
                console.log("You have successfully withdrawn Rs. 10000");
                break;
            default:
                console.log("Something went wrong, Please try again");
                break;
            }
            break;
        case "Cash Withdrawal":
            let amountWithdrawal = prompt("Choosethe amount");
            console.log("You have successfully withdrawn Rs. "+amountWithdrawal);
            break;
        default:
            console.log("Something went wrong, Please try again");
            break;
        }   
    }
};

// let fileNameDetails = fileInfo.fileName + fileInfo.extension;
// console.log(creditCard.transaction());
console.log(creditCard.countriesPermitted);