const fixtureResult = {
    "get": "fixtures",
    "parameters": {
        "team": "33",
        "season": "2022",
        "last": "2"
    },
    "errors": [],
    "results": 2,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "fixture": {
                "id": 1023277,
                "referee": "Paul Tierney, England",
                "timezone": "UTC",
                "date": "2023-06-03T14:00:00+00:00",
                "timestamp": 1685800800,
                "periods": {
                    "first": 1685800800,
                    "second": 1685804400
                },
                "venue": {
                    "id": 489,
                    "name": "Wembley Stadium",
                    "city": "London"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 45,
                "name": "FA Cup",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/45.png",
                "flag": "https://media-2.api-sports.io/flags/gb.svg",
                "season": 2022,
                "round": "Final"
            },
            "teams": {
                "home": {
                    "id": 50,
                    "name": "Manchester City",
                    "logo": "https://media-3.api-sports.io/football/teams/50.png",
                    "winner": true
                },
                "away": {
                    "id": 33,
                    "name": "Manchester United",
                    "logo": "https://media-1.api-sports.io/football/teams/33.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 2,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 1
                },
                "fulltime": {
                    "home": 2,
                    "away": 1
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 868324,
                "referee": "R. Jones",
                "timezone": "UTC",
                "date": "2023-05-28T15:30:00+00:00",
                "timestamp": 1685287800,
                "periods": {
                    "first": 1685287800,
                    "second": 1685291400
                },
                "venue": {
                    "id": 556,
                    "name": "Old Trafford",
                    "city": "Manchester"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022,
                "round": "Regular Season - 38"
            },
            "teams": {
                "home": {
                    "id": 33,
                    "name": "Manchester United",
                    "logo": "https://media-2.api-sports.io/football/teams/33.png",
                    "winner": true
                },
                "away": {
                    "id": 36,
                    "name": "Fulham",
                    "logo": "https://media-1.api-sports.io/football/teams/36.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 2,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 1
                },
                "fulltime": {
                    "home": 2,
                    "away": 1
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        }
    ]
}