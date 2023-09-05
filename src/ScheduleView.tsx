import ScheduleDay from "./ScheduleDay";
import { useState, useEffect } from "react";
import { Schedule } from "../types/Schedule";
import { GameData } from "../types/GameData";
import { Player } from "../types/Player";



export default function ScheduleView() {
    const [schedule, setSchedule] = useState<Schedule | null>(null);

    const scheduleData: Schedule = {
        games: [
            {
            gamePk: 1,
            link: 'no link',
            gameData: {
                datetime: {
                    dateTime: "2023-08-17T20:05:00Z",
                    originalDate: "2023-08-17",
                    time: "4:05",
                    ampm: "PM",
                },
                status: {
                    abstractGameState: "Final",
                    codedGameState: "F",
                    detailedState: "Final",
                    statusCode: "F",
                    startTimeTBD: false,
                    abstractGameCode: "F",
                },
                teams: {
                    away: {
                        id: 111,
                        name: "Boston Red Sox",
                        link: "no link",
                        season: 2023,
                        teamCode: "bos",
                        abbreviation: "BOS",
                        teamName: "Red Sox",
                        shortName: "Boston",
                        record: {
                            gamesPlayed: 121,
                            leagueGamesBack: "-",
                            leagueRecord: {
                                wins: 63,
                                losses: 58,
                                ties: 0,
                                pct: ".521",
                            },
                            wins: 63,
                            losses: 58,
                            winningPercentage: ".521",
                            streak: {
                                streakType: "losses",
                                streakNumber: 9,
                                streakCode: "L",
                            },
                        }
                    },
                    
                    home: {
                        id: 120,
                        name: "Washington Nationals",
                        link: "none",
                        season: 2023,
                        teamCode: "was",
                        abbreviation: "WSH",
                        teamName: "Nationals",
                        shortName: "Washington",
                        record: {
                            gamesPlayed: 122,
                            leagueGamesBack: "-",
                            leagueRecord: {
                                wins: 55,
                                losses: 67,
                                ties: 0,
                                pct: ".451",
                            },
                            wins: 55,
                            losses: 67,
                            winningPercentage: ".451",
                            streak: {
                                streakType: "wins",
                                streakNumber: 2,
                                streakCode: "W",
                            },
                        }
                    },
                },
                players: [
                    {
                        id: 1,
                        fullName: "James Creel",
                        link: "no link",
                        firstName: "James",
                        lastName: "Creel",
                        primaryNumber: "6",
                        birthDate: "2013-04-04",
                        currentAge: 10,
                        useName: "James",
                        middleName: "Wright",
                        boxscoreName: "Creel",
                        nickName: "James",
                        gender: "M",
                        isPlayer: true,
                        isVerified: true,
                        batSide: {
                            code: "R",
                            description: "Right",
                        },
                        pitchHand: {
                            code: "R",
                            description: "Right",
                        },
                        nameFirstLast: "James Creel",
                        nameSlug: "james-creel",
                        firstLastName: "James Creel",
                        lastFirstName: "Creel James",
                        lastInitName: "Creel J",
                        initLastName: "J Creel",
                    }
                ],
                venue: {
                    location: {
                        address1: "1500 South Capitol Street, SE",
                        address2: "",
                        city: "Washington",
                        state: "District of Columbia",
                        stateAbbrev: "DC",
                        field: "1",
                    },
                },
                weather: {
                    condition: "Partly Cloudy",
                    temp: "90",
                    wind: "4 mph, Out To CF",
                },
                }
            
            },
        {
            "gamePk": 2,
            "link": "no link",
            "gameData": {
              "datetime": {
                "dateTime": "2023-08-18T19:35:00Z",
                "originalDate": "2023-08-18",
                "time": "3:35",
                "ampm": "PM"
              },
              "status": {
                "abstractGameState": "Final",
                "codedGameState": "F",
                "detailedState": "Final",
                "statusCode": "F",
                "startTimeTBD": false,
                "abstractGameCode": "F"
              },
              "teams": {
                "away": {
                  "id": 112,
                  "name": "New York Yankees",
                  "link": "no link",
                  "season": 2023,
                  "teamCode": "nyy",
                  "abbreviation": "NYY",
                  "teamName": "Yankees",
                  "shortName": "New York",
                  "record": {
                    "gamesPlayed": 123,
                    "leagueGamesBack": "-",
                    "leagueRecord": {
                      "wins": 68,
                      "losses": 55,
                      "ties": 0,
                      "pct": ".553"
                    },
                    "wins": 68,
                    "losses": 55,
                    "winningPercentage": ".553",
                    "streak": {
                      "streakType": "wins",
                      "streakNumber": 3,
                      "streakCode": "W"
                    }
                  }
                },
                "home": {
                  "id": 121,
                  "name": "Toronto Blue Jays",
                  "link": "no link",
                  "season": 2023,
                  "teamCode": "tor",
                  "abbreviation": "TOR",
                  "teamName": "Blue Jays",
                  "shortName": "Toronto",
                  "record": {
                    "gamesPlayed": 121,
                    "leagueGamesBack": "-",
                    "leagueRecord": {
                      "wins": 60,
                      "losses": 61,
                      "ties": 0,
                      "pct": ".496"
                    },
                    "wins": 60,
                    "losses": 61,
                    "winningPercentage": ".496",
                    "streak": {
                      "streakType": "losses",
                      "streakNumber": 2,
                      "streakCode": "L"
                    }
                  }
                }
              },
              "players": [
                {
                  "id": 2,
                  "fullName": "Sarah Johnson",
                  "link": "no link",
                  "firstName": "Sarah",
                  "lastName": "Johnson",
                  "primaryNumber": "12",
                  "birthDate": "1990-07-15",
                  "currentAge": 33,
                  "useName": "Sarah",
                  "middleName": "Marie",
                  "boxscoreName": "Johnson",
                  "nickName": "Sarah",
                  "gender": "F",
                  "isPlayer": true,
                  "isVerified": true,
                  "batSide": {
                    "code": "R",
                    "description": "Right"
                  },
                  "pitchHand": {
                    "code": "R",
                    "description": "Right"
                  },
                  "nameFirstLast": "Sarah Johnson",
                  "nameSlug": "sarah-johnson",
                  "firstLastName": "Sarah Johnson",
                  "lastFirstName": "Johnson Sarah",
                  "lastInitName": "Johnson S",
                  "initLastName": "S Johnson"
                }
            ],
              "venue": {
                "location": {
                  "address1": "123 Main Street",
                  "address2": "",
                  "city": "Toronto",
                  "state": "Ontario",
                  "stateAbbrev": "ON",
                  "field": "2"
                }
              },
              "weather": {
                "condition": "Clear",
                "temp": "75",
                "wind": "8 mph, In From LF"
              }
            }
          }
        ]
        }
        
    
    
       
    
    useEffect(() => {
        setSchedule(scheduleData);

        
    }, []);
    let week = [];
    if (schedule) {
        for (let i = 0; i < schedule.games.length; i++) {
            week.push(<ScheduleDay key={schedule.games[i].gamePk} game={schedule.games[i]} />)
        }
    }
    
    return (
        <div className="flex justify-between m-5">
            {week}       
        </div>
    );
}
