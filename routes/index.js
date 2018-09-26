const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login');
    res.end();
});

router.get('/dashboard', function (req, res, next) {
    let flightList = [
        {
            'flightId': 'SQ8173', //Flight ID
            'timeLeft': '13:45', //Time left to flight
            'phase': 'approach', //Overbooking phase
            'departure': 'Singapore Changi Airport', //Add whatever API can call 
            'destination': 'Toronto Airport',
            'overBookStatus': { //Details of overbooking seats
                'R34': { //Seat Number
                    'seatStatus': 'ACCEPTED',
                    'passengerId': 'P214', //Pooled passenger
                    'selectedPassengerId': 'P123' //Original selected passenger
                },
                'R12': {
                    'seatStatus': 'PENDING',
                    'selectedPassengerId': 'P123'
                },
                'R24': {
                    'seatStatus': 'REJECTED', //Seat rejected by original selected passenger
                    'selectedPassengerId': 'P123'
                }
            },
        },
        {
            'flightId': 'SQ8173', //Flight ID
            'timeLeft': '13:45', //Time left to flight
            'phase': 'approach', //Overbooking phase
            'departure': 'Singapore Changi Airport', //Add whatever API can call 
            'destination': 'Toronto Airport',
            'overBookStatus': { //Details of overbooking seats
                'R34': { //Seat Number
                    'seatStatus': 'ACCEPTED',
                    'passengerId': 'P214', //Pooled passenger
                    'selectedPassengerId': 'P123' //Original selected passenger
                },
                'R12': {
                    'seatStatus': 'PENDING',
                    'selectedPassengerId': 'P123'
                },
                'R24': {
                    'seatStatus': 'REJECTED', //Seat rejected by original selected passenger
                    'selectedPassengerId': 'P123'
                }
            },
        }
    ]

    res.render('dashboard', {
        list: flightList,
    });
    res.end();
});

router.get('/flight', function (req, res, next) {

    //Dummy info
    let flightInfo = {
        'flightId': 'SQ8173', //Flight ID
        'timeLeft': '13:45', //Time left to flight
        'phase': 'approach', //Overbooking phase
        'departure': 'Singapore Changi Airport', //Add whatever API can call 
        'destination': 'Toronto Airport',
        'overBookStatus': { //Details of overbooking seats
            'R34': { //Seat Number
                'seatStatus': 'VOLUNTEER', //If passenger takes up package
                'passengerId': 'P214', //Pooled passenger
                'selectedPassengerId': 'P123' //Original selected passenger
            },
            'R12': {
                'seatStatus': 'PENDING',
                'selectedPassengerId': 'P123'
            },
            'R24': {
                'seatStatus': 'REJECTED', //Seat rejected by original selected passenger
                'selectedPassengerId': 'P123'
            },
            'R14': {
                'seatStatus': 'ACCEPTED', //Selected passenger accepts package
                'selectedPassengerId': 'P123'
            }
        },
    };
    res.render('flight', {
        flight: flightInfo,
    });
    res.end();
});

module.exports = router;