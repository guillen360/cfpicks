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
        "spread": 42,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UT.id,
        "home_team_score": 56,
        "away_team_score": 7
    },
    {
        "id": "W01G02",
        "week_id": "1",
        "home_team_id": teams.TAMU.id,
        "home_team": teams.TAMU,
        "away_team_id": teams.RICE.id,
        "away_team": teams.RICE,
        "game_date": new Date('Aug 31, 2013'),
        "spread": 28,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.RICE.id,
        "home_team_score": 52,
        "away_team_score": 31
    },
    {
        "id": "W01G03",
        "week_id": "1",
        "home_team_id": teams.SMU.id,
        "home_team": teams.SMU,
        "away_team_id": teams.TECH.id,
        "away_team": teams.TECH,
        "game_date": new Date('Aug 30, 2013'),
        "spread": -6,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.TECH.id,
        "home_team_score": 23,
        "away_team_score": 41
    },
    {
        "id": "W01G04",
        "week_id": "1",
        "home_team_id": teams.AZ.id,
        "home_team": teams.AZ,
        "away_team_id": teams.NAU.id,
        "away_team": teams.NAU,
        "game_date": new Date('Aug 30, 2013'),
        "spread": 35,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.AZ.id,
        "home_team_score": 35,
        "away_team_score": 0
    },
    {
        "id": "W01G05",
        "week_id": "1",
        "home_team_id": teams.ND.id,
        "home_team": teams.ND,
        "away_team_id": teams.TEMPL.id,
        "away_team": teams.TEMPL,
        "game_date": new Date('Aug 31, 2013'),
        "spread": 30,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.TEMPL.id,
        "home_team_score": 28,
        "away_team_score": 6
    },
    {
        "id": "W01G06",
        "week_id": "1",
        "home_team_id": teams.VTECH.id,
        "home_team": teams.VTECH,
        "away_team_id": teams.ALA.id,
        "away_team": teams.ALA,
        "game_date": new Date('Aug 31, 2013'),
        "spread": -20,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.ALA.id,
        "home_team_score": 10,
        "away_team_score": 35
    },
    {
        "id": "W01G07",
        "week_id": "1",
        "home_team_id": teams.OU.id,
        "home_team": teams.OU,
        "away_team_id": teams.ULM.id,
        "away_team": teams.ULM,
        "game_date": new Date('Aug 31, 2013'),
        "spread": 22,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.OU.id,
        "home_team_score": 34,
        "away_team_score": 0
    },
    {
        "id": "W01G08",
        "week_id": "1",
        "home_team_id": teams.CLEM.id,
        "home_team": teams.CLEM,
        "away_team_id": teams.UGA.id,
        "away_team": teams.UGA,
        "game_date": new Date('Aug 31, 2013'),
        "spread": -2,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.CLEM.id,
        "home_team_score": 38,
        "away_team_score": 35
    },
    {
        "id": "W01G09",
        "week_id": "1",
        "home_team_id": teams.TCU.id,
        "home_team": teams.TCU,
        "away_team_id": teams.LSU.id,
        "away_team": teams.LSU,
        "game_date": new Date('Aug 31, 2013'),
        "spread": -4,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.LSU.id,
        "home_team_score": 27,
        "away_team_score": 37
    },
    {
        "id": "W01G10",
        "week_id": "1",
        "home_team_id": teams.SOMISS.id,
        "home_team": teams.SOMISS,
        "away_team_id": teams.TSU.id,
        "away_team": teams.TSU,
        "game_date": new Date('Aug 31, 2013'),
        "spread": 9,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.TSU.id,
        "home_team_score": 15,
        "away_team_score": 22
    },
    {
        "id": "W02G01",
        "week_id": "2",
        "home_team_id": teams.BYU.id,
        "home_team": teams.BYU,
        "away_team_id": teams.UT.id,
        "away_team": teams.UT,
        "game_date": new Date('Sept 7, 2013'),
        "spread": -7,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.BYU.id,
        "home_team_score": 40,
        "away_team_score": 21
    },
    {
        "id": "W02G02",
        "week_id": "2",
        "home_team_id": teams.TAMU.id,
        "home_team": teams.TAMU,
        "away_team_id": teams.SHOUSTONST.id,
        "away_team": teams.SHOUSTONST,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 48,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.SHOUSTONST.id,
        "home_team_score": 28,
        "away_team_score": 65
    },
    {
        "id": "W02G03",
        "week_id": "2",
        "home_team_id": teams.UVA.id,
        "home_team": teams.UVA,
        "away_team_id": teams.UO.id,
        "away_team": teams.UO,
        "game_date": new Date('Sept 7, 2013'),
        "spread": -22,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UO.id,
        "home_team_score": 10,
        "away_team_score": 59
    },
    {
        "id": "W02G04",
        "week_id": "2",
        "home_team_id": teams.UGA.id,
        "home_team": teams.UGA,
        "away_team_id": teams.USCAR.id,
        "away_team": teams.USCAR,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 3,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UGA.id,
        "home_team_score": 41,
        "away_team_score": 30
    },
    {
        "id": "W02G05",
        "week_id": "2",
        "home_team_id": teams.MIA.id,
        "home_team": teams.MIA,
        "away_team_id": teams.UFL.id,
        "away_team": teams.UFL,
        "game_date": new Date('Sept 7, 2013'),
        "spread": -3,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.MIA.id,
        "home_team_score": 16,
        "away_team_score": 21
    },
    {
        "id": "W02G06",
        "week_id": "2",
        "home_team_id": teams.MICH.id,
        "home_team": teams.MICH,
        "away_team_id": teams.ND.id,
        "away_team": teams.ND,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 4,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.MICH.id,
        "home_team_score": 41,
        "away_team_score": 30
    },
    {
        "id": "W02G07",
        "week_id": "2",
        "home_team_id": teams.OU.id,
        "home_team": teams.OU,
        "away_team_id": teams.WVU.id,
        "away_team": teams.WVU,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 21,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.WVU.id,
        "home_team_score": 16,
        "away_team_score": 7
    },
    {
        "id": "W02G08",
        "week_id": "2",
        "home_team_id": teams.USC.id,
        "home_team": teams.USC,
        "away_team_id": teams.WSU.id,
        "away_team": teams.WSU,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 15,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.WSU.id,
        "home_team_score": 7,
        "away_team_score": 10
    },
    {
        "id": "W02G09",
        "week_id": "2",
        "home_team_id": teams.TCU.id,
        "home_team": teams.TCU,
        "away_team_id": teams.SELS.id,
        "away_team": teams.SELS,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 44,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.SELS.id,
        "home_team_score": 38,
        "away_team_score": 17
    },
    {
        "id": "W02G10",
        "week_id": "2",
        "home_team_id": teams.TSU.id,
        "home_team": teams.TSU,
        "away_team_id": teams.PVAMU.id,
        "away_team": teams.PVAMU,
        "game_date": new Date('Sept 7, 2013'),
        "spread": 30,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.PVAMU.id,
        "home_team_score": 28,
        "away_team_score": 3
    },
//
//    WEEK 3
//
    {
        "id": "W03G01",
        "week_id": "3",
        "away_team_id": teams.OLEMISS.id,
        "away_team": teams.OLEMISS,
        "home_team_id": teams.UT.id,
        "home_team": teams.UT,
        "game_date": new Date('Sept 14, 2013'),
        "spread": 3,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.OLEMISS.id,
        "away_team_score": 44,
        "home_team_score": 23

    },
    {
        "id": "W03G02",
        "week_id": "3",
        "away_team_id": teams.TCU.id,
        "away_team": teams.TCU,
        "home_team_id": teams.TECH.id,
        "home_team": teams.TECH,
        "game_date": new Date('Sept 12, 2013'),
        "spread": -3,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.TECH.id,
        "away_team_score": 10,
        "home_team_score": 20

    },
    {
        "id": "W03G03",
        "week_id": "3",
        "away_team_id": teams.TUL.id,
        "away_team": teams.TUL,
        "home_team_id": teams.OU.id,
        "home_team": teams.OU,
        "game_date": new Date('Sept 14, 2013'),
        "spread": 24,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.OU.id,
        "away_team_score": 20,
        "home_team_score": 51
    },
    {
        "id": "W03G04",
        "week_id": "3",
        "away_team_id": teams.ALA.id,
        "away_team": teams.ALA,
        "home_team_id": teams.TAMU.id,
        "home_team": teams.TAMU,
        "game_date": new Date('Sept 14, 2013'),
        "spread": -7,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.ALA.id,
        "away_team_score": 49,
        "home_team_score": 42
    },
    {
        "id": "W03G05",
        "week_id": "3",
        "away_team_id": teams.TEN.id,
        "away_team": teams.TEN,
        "home_team_id": teams.UO.id,
        "home_team": teams.UO,
        "game_date": new Date('Sept 14, 2013'),
        "spread": 27,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UO.id,
        "away_team_score": 14,
        "home_team_score": 59
    },
    {
        "id": "W03G06",
        "week_id": "3",
        "away_team_id": teams.KAN.id,
        "away_team": teams.KAN,
        "home_team_id": teams.RICE.id,
        "home_team": teams.RICE,
        "game_date": new Date('Sept 14, 2013'),
        "spread": 7,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.RICE.id,
        "away_team_score": 14,
        "home_team_score": 23
    },
    {
        "id": "W03G07",
        "week_id": "3",
        "away_team_id": teams.LAM.id,
        "away_team": teams.LAM,
        "home_team_id": teams.OSU.id,
        "home_team": teams.OSU,
        "game_date": new Date('Sept 14, 2013'),
        "spread": 47,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.OSU.id,
        "away_team_score": 3,
        "home_team_score": 59
    },
    {
        "id": "W03G08",
        "week_id": "3",
        "away_team_id": teams.ND.id,
        "away_team": teams.ND,
        "home_team_id": teams.PURD.id,
        "home_team": teams.PURD,
        "game_date": new Date('Sept 14, 2013'),
        "spread": -21,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.PURD.id,
        "away_team_score": 31,
        "home_team_score": 24
    },
    {
        "id": "W03G09",
        "week_id": "3",
        "away_team_id": teams.WISC.id,
        "away_team": teams.WISC,
        "home_team_id": teams.ASU.id,
        "home_team": teams.ASU,
        "game_date": new Date('Sept 14, 2013'),
        "spread": 6,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.WISC.id,
        "away_team_score": 30,
        "home_team_score": 32
    },
    {
        "id": "W03G10",
        "week_id": "3",
        "away_team_id": teams.UCLA.id,
        "away_team": teams.UCLA,
        "home_team_id": teams.NEB.id,
        "home_team": teams.NEB,
        "game_date": new Date('Sept 14, 2013'),
        "spread": 4,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.UCLA.id,
        "away_team_score": 41,
        "home_team_score": 21
    },
    {
        "id": "W04G01",
        "week_id": "4",
        "away_team_id": teams.WVU.id,
        "away_team": teams.WVU,
        "home_team_id": teams.MARY.id,
        "home_team": teams.MARY,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 6,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.MARY.id,
        "away_team_score": 0,
        "home_team_score": 37
    },
    {
        "id": "W04G02",
        "week_id": "4",
        "away_team_id": teams.ASU.id,
        "away_team": teams.ASU,
        "home_team_id": teams.STAN.id,
        "home_team": teams.STAN,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 8,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.STAN.id,
        "away_team_score": 28,
        "home_team_score": 42
    },
    {
        "id": "W04G03",
        "week_id": "4",
        "away_team_id": teams.AUB.id,
        "away_team": teams.AUB,
        "home_team_id": teams.LSU.id,
        "home_team": teams.LSU,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 18,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.AUB.id,
        "away_team_score": 21,
        "home_team_score": 35
    },
    {
        "id": "W04G04",
        "week_id": "4",
        "away_team_id": teams.SMU.id,
        "away_team": teams.SMU,
        "home_team_id": teams.TAMU.id,
        "home_team": teams.TAMU,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 29,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.TAMU.id,
        "away_team_score": 13,
        "home_team_score": 42
    },
    {
        "id": "W04G05",
        "week_id": "4",
        "away_team_id": teams.TEN.id,
        "away_team": teams.TEN,
        "home_team_id": teams.UFL.id,
        "home_team": teams.UFL,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 17,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.TEN.id,
        "away_team_score": 17,
        "home_team_score": 31
    },
    {
        "id": "W04G06",
        "week_id": "4",
        "away_team_id": teams.MICHST.id,
        "away_team": teams.MICHST,
        "home_team_id": teams.ND.id,
        "home_team": teams.ND,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 7,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.MICHST.id,
        "away_team_score": 13,
        "home_team_score": 17
    },
    {
        "id": "W04G07",
        "week_id": "4",
        "away_team_id": teams.TSU.id,
        "away_team": teams.TSU,
        "home_team_id": teams.TECH.id,
        "home_team": teams.TECH,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 26,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.TECH.id,
        "away_team_score": 7,
        "home_team_score": 33
    },
    {
        "id": "W04G08",
        "week_id": "4",
        "away_team_id": teams.UTAH.id,
        "away_team": teams.UTAH,
        "home_team_id": teams.BYU.id,
        "home_team": teams.BYU,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 7,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.UTAH.id,
        "away_team_score": 20,
        "home_team_score": 13
    },
    {
        "id": "W04G09",
        "week_id": "4",
        "away_team_id": teams.COLOST.id,
        "away_team": teams.COLOST,
        "home_team_id": teams.ALA.id,
        "home_team": teams.ALA,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 40,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.COLOST.id,
        "away_team_score": 6,
        "home_team_score": 31
    },
    {
        "id": "W04G10",
        "week_id": "4",
        "away_team_id": teams.KSU.id,
        "away_team": teams.KSU,
        "home_team_id": teams.UT.id,
        "home_team": teams.UT,
        "game_date": new Date('Sept 21, 2013'),
        "spread": 5,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UT.id,
        "away_team_score": 21,
        "home_team_score": 31
    },
    {
        "id": "W05G01",
        "week_id": "5",
        "away_team_id": teams.TAMU.id,
        "away_team": teams.TAMU,
        "home_team_id": teams.ARK.id,
        "home_team": teams.ARK,
        "game_date": new Date('Sept 28, 2013'),
        "spread": -3,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.TAMU.id,
        "away_team_score": 45,
        "home_team_score": 33
    },
    {
        "id": "W05G02",
        "week_id": "5",
        "away_team_id": teams.OLEMISS.id,
        "away_team": teams.OLEMISS,
        "home_team_id": teams.ALA.id,
        "home_team": teams.ALA,
        "game_date": new Date('Sept 28, 2013'),
        "spread": 16,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.ALA.id,
        "away_team_score": 0,
        "home_team_score": 25
    },
    {
        "id": "W05G03",
        "week_id": "5",
        "away_team_id": teams.CAL.id,
        "away_team": teams.CAL,
        "home_team_id": teams.UO.id,
        "home_team": teams.UO,
        "game_date": new Date('Sept 28, 2013'),
        "spread": 36,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UO.id,
        "away_team_score": 16,
        "home_team_score": 55
    },
    {
        "id": "W05G04",
        "week_id": "5",
        "away_team_id": teams.WAKE.id,
        "away_team": teams.WAKE,
        "home_team_id": teams.CLEM.id,
        "home_team": teams.CLEM,
        "game_date": new Date('Sept 28, 2013'),
        "spread": 29,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.CLEM.id,
        "away_team_score": 7,
        "home_team_score": 56
    },
    {
        "id": "W05G05",
        "week_id": "5",
        "away_team_id": teams.WISC.id,
        "away_team": teams.WISC,
        "home_team_id": teams.OHS.id,
        "home_team": teams.OHS,
        "game_date": new Date('Sept 28, 2013'),
        "spread": 8,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.WISC.id,
        "away_team_score": 24,
        "home_team_score": 31
    },
    {
        "id": "W05G06",
        "week_id": "5",
        "away_team_id": teams.STAN.id,
        "away_team": teams.STAN,
        "home_team_id": teams.WSU.id,
        "home_team": teams.WSU,
        "game_date": new Date('Sept 28, 2013'),
        "spread": -10,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.STAN.id,
        "away_team_score": 55,
        "home_team_score": 17
    },
    {
        "id": "W05G07",
        "week_id": "5",
        "away_team_id": teams.LSU.id,
        "away_team": teams.LSU,
        "home_team_id": teams.UGA.id,
        "home_team": teams.UGA,
        "game_date": new Date('Sept 28, 2013'),
        "spread": 3,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UGA.id,
        "away_team_score": 41,
        "home_team_score": 44
    },
    {
        "id": "W05G08",
        "week_id": "5",
        "away_team_id": teams.OSU.id,
        "away_team": teams.OSU,
        "home_team_id": teams.WVU.id,
        "home_team": teams.WVU,
        "game_date": new Date('Sept 28, 2013'),
        "spread": -19,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.WVU.id,
        "away_team_score": 21,
        "home_team_score": 30
    },
    {
        "id": "W05G09",
        "week_id": "5",
        "away_team_id": teams.OU.id,
        "away_team": teams.OU,
        "home_team_id": teams.ND.id,
        "home_team": teams.ND,
        "game_date": new Date('Sept 28, 2013'),
        "spread": -4,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.OU.id,
        "away_team_score": 35,
        "home_team_score": 21
    },
    {
        "id": "W05G10",
        "week_id": "5",
        "away_team_id": teams.AZ.id,
        "away_team": teams.AZ,
        "home_team_id": teams.WASH.id,
        "home_team": teams.WASH,
        "game_date": new Date('Sept 28, 2013'),
        "spread": 10,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.WASH.id,
        "away_team_score": 13,
        "home_team_score": 31
    },
    {
        "id": "W06G01",
        "week_id": "6",
        "away_team_id": teams.UT.id,
        "away_team": teams.UT,
        "home_team_id": teams.ISU.id,
        "home_team": teams.ISU,
        "game_date": new Date('Oct 3, 2013'),
        "spread": -9,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.ISU.id,
        "away_team_score": 31,
        "home_team_score": 30
    },
    {
        "id": "W06G02",
        "week_id": "6",
        "away_team_id": teams.UO.id,
        "away_team": teams.UO,
        "home_team_id": teams.COLO.id,
        "home_team": teams.COLO,
        "game_date": new Date('Oct 5, 2013'),
        "spread": -39,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UO.id,
        "away_team_score": 57,
        "home_team_score": 16
    },
    {
        "id": "W06G03",
        "week_id": "6",
        "away_team_id": teams.OHS.id,
        "away_team": teams.OHS,
        "home_team_id": teams.NWEST.id,
        "home_team": teams.NWEST,
        "game_date": new Date('Oct 5, 2013'),
        "spread": -7,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.OHS.id,
        "away_team_score": 40,
        "home_team_score": 30
    },
    {
        "id": "W06G04",
        "week_id": "6",
        "away_team_id": teams.WASH.id,
        "away_team": teams.WASH,
        "home_team_id": teams.STAN.id,
        "home_team": teams.STAN,
        "game_date": new Date('Oct 5, 2013'),
        "spread": 8,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.WASH.id,
        "away_team_score": 28,
        "home_team_score": 31
    },
    {
        "id": "W06G05",
        "week_id": "6",
        "away_team_id": teams.UGA.id,
        "away_team": teams.UGA,
        "home_team_id": teams.TEN.id,
        "home_team": teams.TEN,
        "game_date": new Date('Oct 5, 2013'),
        "spread": -11,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.TEN.id,
        "away_team_score": 34,
        "home_team_score": 31
    },
    {
        "id": "W06G06",
        "week_id": "6",
        "away_team_id": teams.MARY.id,
        "away_team": teams.MARY,
        "home_team_id": teams.UFLST.id,
        "home_team": teams.UFLST,
        "game_date": new Date('Oct 5, 2013'),
        "spread": 16,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UFLST.id,
        "away_team_score": 0,
        "home_team_score": 63
    },
    {
        "id": "W06G07",
        "week_id": "6",
        "away_team_id": teams.TCU.id,
        "away_team": teams.TCU,
        "home_team_id": teams.OU.id,
        "home_team": teams.OU,
        "game_date": new Date('Oct 5, 2013'),
        "spread": 11,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.TCU.id,
        "away_team_score": 17,
        "home_team_score": 20
    },
    {
        "id": "W06G08",
        "week_id": "6",
        "away_team_id": teams.WVU.id,
        "away_team": teams.WVU,
        "home_team_id": teams.BU.id,
        "home_team": teams.BU,
        "game_date": new Date('Oct 5, 2013'),
        "spread": 28,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.BU.id,
        "away_team_score": 42,
        "home_team_score": 73
    },
    {
        "id": "W06G09",
        "week_id": "6",
        "away_team_id": teams.ASU.id,
        "away_team": teams.ASU,
        "home_team_id": teams.ND.id,
        "home_team": teams.ND,
        "game_date": new Date('Oct 5, 2013'),
        "spread": -6,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.ND.id,
        "away_team_score": 34,
        "home_team_score": 37
    },
    {
        "id": "W06G10",
        "week_id": "6",
        "away_team_id": teams.TECH.id,
        "away_team": teams.TECH,
        "home_team_id": teams.KAN.id,
        "home_team": teams.KAN,
        "game_date": new Date('Oct 5, 2013'),
        "spread": -18,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.TECH.id,
        "away_team_score": 54,
        "home_team_score": 16
    },
    {
        "id": "W06G11",
        "week_id": "6",
        "away_team_id": teams.KSU.id,
        "away_team": teams.KSU,
        "home_team_id": teams.OSU.id,
        "home_team": teams.OSU,
        "game_date": new Date('Oct 5, 2013'),
        "spread": 14,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.KSU.id,
        "away_team_score": 29,
        "home_team_score": 33
    },
    {
        "id": "W06G12",
        "week_id": "6",
        "away_team_id": teams.OLEMISS.id,
        "away_team": teams.OLEMISS,
        "home_team_id": teams.AUB.id,
        "home_team": teams.AUB,
        "game_date": new Date('Oct 5, 2013'),
        "spread": -3,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.AUB.id,
        "away_team_score": 22,
        "home_team_score": 30
    },
    {
        "id": "W06G13",
        "week_id": "6",
        "away_team_id": teams.UCLA.id,
        "away_team": teams.UCLA,
        "home_team_id": teams.UTAH.id,
        "home_team": teams.UTAH,
        "game_date": new Date('Oct 5, 2013'),
        "spread": -6,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UCLA.id,
        "away_team_score": 34,
        "home_team_score": 27
    },
    {
        "id": "W06G14",
        "week_id": "6",
        "away_team_id": teams.ARK.id,
        "away_team": teams.ARK,
        "home_team_id": teams.UFL.id,
        "home_team": teams.UFL,
        "game_date": new Date('Oct 5, 2013'),
        "spread": 11,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UFL.id,
        "away_team_score": 10,
        "home_team_score": 30
    },
    {
        "id": "W07G01",
        "week_id": "7",
        "away_team_id": teams.OU.id,
        "away_team": teams.OU,
        "home_team_id": teams.UT.id,
        "home_team": teams.UT,
        "game_date": new Date('Oct 12, 2013'),
        "spread": -14,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.UT.id,
        "away_team_score": 20,
        "home_team_score": 36
    },
    {
        "id": "W07G02",
        "week_id": "7",
        "away_team_id": teams.UO.id,
        "away_team": teams.UO,
        "home_team_id": teams.WASH.id,
        "home_team": teams.WASH,
        "game_date": new Date('Oct 12, 2013'),
        "spread": -14,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.UO.id,
        "away_team_score": 45,
        "home_team_score": 24
    },
    {
        "id": "W07G03",
        "week_id": "7",
        "away_team_id": teams.STAN.id,
        "away_team": teams.STAN,
        "home_team_id": teams.UTAH.id,
        "home_team": teams.UTAH,
        "game_date": new Date('Oct 12, 2013'),
        "spread": -9,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.UTAH.id,
        "away_team_score": 21,
        "home_team_score": 27
    },
    {
        "id": "W07G04",
        "week_id": "7",
        "away_team_id": teams.MIZZ.id,
        "away_team": teams.MIZZ,
        "home_team_id": teams.UGA.id,
        "home_team": teams.UGA,
        "game_date": new Date('Oct 12, 2013'),
        "spread": 8,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.MIZZ.id,
        "away_team_score": 41,
        "home_team_score": 26
    },
    {
        "id": "W07G05",
        "week_id": "7",
        "away_team_id": teams.TAMU.id,
        "away_team": teams.TAMU,
        "home_team_id": teams.OLEMISS.id,
        "home_team": teams.OLEMISS,
        "game_date": new Date('Oct 12, 2013'),
        "spread": -6,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.OLEMISS.id,
        "away_team_score": 41,
        "home_team_score": 38
    },
    {
        "id": "W07G06",
        "week_id": "7",
        "away_team_id": teams.UFL.id,
        "away_team": teams.UFL,
        "home_team_id": teams.LSU.id,
        "home_team": teams.LSU,
        "game_date": new Date('Oct 12, 2013'),
        "spread": 7,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.LSU.id,
        "away_team_score": 6,
        "home_team_score": 17
    },
    {
        "id": "W07G07",
        "week_id": "7",
        "away_team_id": teams.BU.id,
        "away_team": teams.BU,
        "home_team_id": teams.KSU.id,
        "home_team": teams.KSU,
        "game_date": new Date('Oct 12, 2013'),
        "spread": -17,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.KSU.id,
        "away_team_score": 35,
        "home_team_score": 25
    },
    {
        "id": "W07G08",
        "week_id": "7",
        "away_team_id": teams.MICH.id,
        "away_team": teams.MICH,
        "home_team_id": teams.PENNST.id,
        "home_team": teams.PENNST,
        "game_date": new Date('Oct 12, 2013'),
        "spread": -3,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.PENNST.id,
        "away_team_score": 40,
        "home_team_score": 43
    },
    {
        "id": "W07G09",
        "week_id": "7",
        "away_team_id": teams.ISU.id,
        "away_team": teams.ISU,
        "home_team_id": teams.TECH.id,
        "home_team": teams.TECH,
        "game_date": new Date('Oct 12, 2013'),
        "spread": 14,
        "wasSpreadCovered": false,
        "spread_winning_team_id": teams.ISU.id,
        "away_team_score": 35,
        "home_team_score": 42
    },
    {
        "id": "W07G10",
        "week_id": "7",
        "away_team_id": teams.ALA.id,
        "away_team": teams.ALA,
        "home_team_id": teams.KEN.id,
        "home_team": teams.KEN,
        "game_date": new Date('Oct 12, 2013'),
        "spread": -28,
        "wasSpreadCovered": true,
        "spread_winning_team_id": teams.ALA.id,
        "away_team_score": 48,
        "home_team_score": 7
    },
    {
        "id": "W08G01",
        "week_id": "8",
        "away_team_id": teams.ARK.id,
        "away_team": teams.ARK,
        "home_team_id": teams.ALA.id,
        "home_team": teams.ALA,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 28,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G02",
        "week_id": "8",
        "away_team_id": teams.WSU.id,
        "away_team": teams.WSU,
        "home_team_id": teams.UO.id,
        "home_team": teams.UO,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 38,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G04",
        "week_id": "8",
        "away_team_id": teams.UFLST.id,
        "away_team": teams.UFLST,
        "home_team_id": teams.CLEM.id,
        "home_team": teams.CLEM,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 3,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G05",
        "week_id": "8",
        "away_team_id": teams.IOWA.id,
        "away_team": teams.IOWA,
        "home_team_id": teams.OHS.id,
        "home_team": teams.OHS,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 17,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G06",
        "week_id": "8",
        "away_team_id": teams.LSU.id,
        "away_team": teams.LSU,
        "home_team_id": teams.OLEMISS.id,
        "home_team": teams.OLEMISS,
        "game_date": new Date('Oct 19, 2013'),
        "spread": -8,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G07",
        "week_id": "8",
        "away_team_id": teams.AUB.id,
        "away_team": teams.AUB,
        "home_team_id": teams.TAMU.id,
        "home_team": teams.TAMU,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 14,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G08",
        "week_id": "8",
        "away_team_id": teams.UCLA.id,
        "away_team": teams.UCLA,
        "home_team_id": teams.STAN.id,
        "home_team": teams.STAN,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 6,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    }, 
    {
        "id": "W08G09",
        "week_id": "8",
        "away_team_id": teams.ISU.id,
        "away_team": teams.ISU,
        "home_team_id": teams.BU.id,
        "home_team": teams.BU,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 31,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G10",
        "week_id": "8",
        "away_team_id": teams.UFL.id,
        "away_team": teams.UFL,
        "home_team_id": teams.MIZZ.id,
        "home_team": teams.MIZZ,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 3,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G11",
        "week_id": "8",
        "away_team_id": teams.TECH.id,
        "away_team": teams.TECH,
        "home_team_id": teams.WVU.id,
        "home_team": teams.WVU,
        "game_date": new Date('Oct 19, 2013'),
        "spread": -8,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    },
    {
        "id": "W08G12",
        "week_id": "8",
        "away_team_id": teams.OU.id,
        "away_team": teams.OU,
        "home_team_id": teams.KAN.id,
        "home_team": teams.KAN,
        "game_date": new Date('Oct 19, 2013'),
        "spread": -24,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    }, 
    {
        "id": "W08G13",
        "week_id": "8",
        "away_team_id": teams.WASH.id,
        "away_team": teams.WASH,
        "home_team_id": teams.ASU.id,
        "home_team": teams.ASU,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 3,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    }, 
    {
        "id": "W08G14",
        "week_id": "8",
        "away_team_id": teams.TCU.id,
        "away_team": teams.TCU,
        "home_team_id": teams.OSU.id,
        "home_team": teams.OSU,
        "game_date": new Date('Oct 19, 2013'),
        "spread": 8,
        "wasSpreadCovered": null,
        "spread_winning_team_id": null,
        "away_team_score": null,
        "home_team_score": null
    }, 
]