teams = require('./teams').teams

exports.games = [
    {
        "id": "W01G01",
        "week_id": "1",
        "home_team_id": teams.UT.id,
        "home_team": teams.UT,
        "away_team_id": teams.NMSU.id,
        "away_team": teams.NMSU,
        "game_date": new Date('Aug 31, 2013'),
        "spread": 30,
        "wasSpreadCovered": null,
        "home_team_score": null,
        "away_team_score": null
    },
    {
        "id": "W01G02",
        "week_id": "1",
        "home_team_id": teams.TAMU.id,
        "home_team": teams.TAMU,
        "away_team_id": teams.RICE.id,
        "away_team": teams.RICE,
        "game_date": new Date('Aug 31, 2013'),
        "spread": 7,
        "wasSpreadCovered": null,
        "home_team_score": null,
        "away_team_score": null
    },
    {
        "id": "W02G01",
        "week_id": "2",
        "home_team_id": teams.BYU.id,
        "home_team": teams.BYU,
        "away_team_id": teams.UT.id,
        "away_team": teams.UT,
        "game_date": new Date('Sept 7, 2013'),
        "spread": -10,
        "wasSpreadCovered": null,
        "home_team_score": null,
        "away_team_score": null
    },
    {
        "id": "W02G02",
        "week_id": "2",
        "home_team_id": teams.TAMU.id,
        "home_team": teams.TAMU,
        "away_team_id": teams.SHOUSTONST.id,
        "away_team": teams.SHOUSTONST,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 20,
        "wasSpreadCovered": null,
        "home_team_score": null,
        "away_team_score": null
    }
]