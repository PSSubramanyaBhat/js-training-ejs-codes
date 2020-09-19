"use strict";

let bank = {
    accountHolder: "P.S. Subramanya Bhat",
    bankName: "Corporation Bank",
    branch: "Konchady Branch",
    accountStartedDate: "03/09/2020",
    dob: "28/12/1998",
    ifsc: "CORP0123456",
    accountNumber: "145234999645666",
    age: 22,
    guardian: false,
    nominee: "Suryanarayana Bhat P.S.",
    card: {
        haveCard: true,
        cardName: "VISA",
        cardStandard: "Gold",
        validity: "12/09/2018 - 12/09/2023",
        countriesPermitted: "India, USA, Australia, Germany, UK",
        transactionPerDay: "Rs. 10,000",
    },
    internetBankingLinked: true,
    balance: "Rs. 1,20,000"
};

// let fileNameDetails = fileInfo.fileName + fileInfo.extension;
console.log(bank.card);