"use strict";

let game = {
    typeOfGame: "Cricekt",
    gameName: "EA Cricket 07",
    gameMode: "Single or Dual Player",
    playerName: "P.S. Subramanya Bhat",
    currentRole: "Batting",
    teamInfo: {
        myTeam: "India",
        opponentTeam: "Australia"
    },
    typeOfCricket: {
        odi: {
            series: {
                numberOfMatches: false,
                opponentTeam: false,
                currentVenue: false,
                stadiumName: false
            },
            knockout: {
                currentState: false,
                opponentTeam: false,
                currentVenue: false,
                stadiumName: false,
                previousOpponent: false
            },
            worldcup: {
                currentState: "Semi-Finals",
                opponentTeam: "South Africa",
                currentVenue: "Johannasberg",
                stadiumName: "Ellis Park Stadium",
                previousOpponent: "Newzeland",
                previousMatchStatus: "Won"
            }
        },
        test: {
            numberOfMatches: false,
            opponentTeam: false,
            currentVenue: false,
            stadiumName: false,
            previousMatchStatus: false
        },
        t20i:{
            series: {
                numberOfMatches: false,
                opponentTeam: false,
                currentVenue: false,
                stadiumName: false

            },
            knockout: {
                currentState: false,
                opponentTeam: false,
                currentVenue: false,
                stadiumName: false,
                previousOpponent: false
            },
            worldcup: {
                currentState: false,
                opponentTeam: false,
                currentVenue: false,
                stadiumName: false,
                previousOpponent: false,
                previousMatchStatus: false
            }
        },
        t20: {
            series: {
                numberOfMatches: false,
                currentState: false,
                opponentTeam: false,
                currentVenue: false,
                stadiumName: false,
                previousOpponent: false,
                previousMatchStatus: false
            }
        },
        oneDay: {
            series: {
                numberOfMatches: false,
                currentState: false,
                opponentTeam: false,
                currentVenue: false,
                stadiumName: false,
                previousOpponent: false,
                previousMatchStatus: false
            }
        },
        firstClass: {
            currentState: false,
            opponentTeam: false,
            currentVenue: false,
            stadiumName: false,
            previousOpponent: false,
            previousMatchStatus: false
        },
    },

};

// let fileNameDetails = fileInfo.fileName + fileInfo.extension;
// console.log(game.typeOfCricket.odi.worldcup["currentState"]);
console.log(game.typeOfCricket.odi.worldcup);
