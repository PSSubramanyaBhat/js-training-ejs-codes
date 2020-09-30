"use strict";

let game = {
    typeOfGame: "Cricekt",
    gameName: "EA Cricket 07",
    gameMode: "Single Player",
    playerName: "P.S. Subramanya Bhat",
    gameState: {
        initial: "menu",
        events: {
            play: true,
            quit: false,
            lost: false,
            won: false
        }
    },
    currentRole: "Batting",
    teamInfo: {
        myTeam: "India",
        opponentTeam: "Australia"
    },
    typeOfCricket: {
        odi: {
            series: {
                seriesName: false,
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
            seriesName: false,
            numberOfMatches: false,
            opponentTeam: false,
            currentVenue: false,
            stadiumName: false,
            previousMatchStatus: false
        },
        t20i:{
            series: {
                seriesName: false,
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
            seriesName: false,
            numberOfMatches: false,
            currentState: false,
            opponentTeam: false,
            currentVenue: false,
            stadiumName: false,
            previousOpponent: false,
            previousMatchStatus: false
        },
        oneDay: {
            seriesName: false,
            numberOfMatches: false,
            currentState: false,
            opponentTeam: false,
            currentVenue: false,
            stadiumName: false,
            previousOpponent: false,
            previousMatchStatus: false
        },
        firstClass: {
            seriesName: false,
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
