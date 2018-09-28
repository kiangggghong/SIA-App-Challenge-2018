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
            'phase': 'Approach', //Overbooking phase
            'departure': 'Singapore Changi Airport', //Add whatever API can call 
            'destination': 'Toronto Airport',
            'overBookStatus': [
                { //Details of overbooking seats
                    'status': 'Pending',
                    'passengerId': 'P214', //Pooled passenger
                }
            ]
        },
        {
            'flightId': 'SQ24', //Flight ID
            'timeLeft': '13:45', //Time left to flight
            'phase': 'Pooling', //Overbooking phase
            'departure': 'Japah Airport', //Add whatever API can call 
            'destination': 'Toronto Airport',
            'overBookStatus': [
                { //Details of overbooking seats
                    'status': 'Rejected',
                    'passengerId': 'P214', //Pooled passenger
                },
                { //Details of overbooking seats
                    'status': 'Rejected',
                    'passengerId': 'P214', //Pooled passenger
                }
            ]
        }
    ]

    res.render('dashboard', {
        list: flightList,
    });
    res.end();
});

router.get('/flight', function (req, res, next) {
    var id = req.query.id;
    //Get API using id;

    //Dummy info
    let flightDetails = {
        'flightId': 'SQ8173', //Flight ID
        'timeLeft': '13:45', //Time left to flight
        'phase': 'approach', //Overbooking phase
        'departure': 'Singapore Changi Airport', //Add whatever API can call 
        'destination': 'Toronto Airport',
        'passengers': [
            { //Details of overbooking seats
                'passengerId': 'P214',
                'status': 'Pending',
                'name': 'John Smith',
                'ticket': 'P214',
                'checkInTime': '23-12-2018 15:34'
            },
            {
                'passengerId': 'P214',
                'status': 'Rejected',
                'name': 'Baba',
                'ticket': 'P214',
                'checkInTime': '23-12-2018 15:34'
            },
            {
                'passengerId': 'P214',
                'status': 'Accepted',
                'name': 'Ddudu',
                'ticket': 'P214',
                'checkInTime': '23-12-2018 15:34'
            },
            {
                'passengerId': 'P214',
                'status': 'Selected',
                'name': 'Ddudu',
                'ticket': 'P214',
                'checkInTime': '23-12-2018 15:34'
            }
        ],
        'overBookStatus': [
            { //Details of overbooking seats
                'status': 'Accepted',
                'passengerId': 'P214', //Pooled passenger
            },
            { //Details of overbooking seats
                'status': 'Rejected',
                'passengerId': 'P214', //Pooled passenger
            },
            { //Details of overbooking seats
                'status': 'Pending',
                'passengerId': 'P214', //Pooled passenger
            }
        ]
    }
    res.render('flight', {
        flight: flightDetails,
    });
    res.end();
});

router.get('/passenger', function (req, res, next) {
    var id = req.query.id;
    //Get API using id;

    //Dummy info
    let passengerDetails = {
        'passengerId': 'P214',
        'name': 'John Wayne',
        'checkInTime': '2015-03-25T12:00:00-06:30',
        'ticketNumber': 'R219873',
        'status': 'Selected',

        //All passenger details from API 
        'passportNo': 'aoweij12',
        'Nationaility': 'Singaporean',
        'packageList': [
            {
                'packageTitle': 'Fly Higher',
                'packagePerks': [
                    '$200 worth of meal vouchers at the airport.',
                    '1500 Kris Flyer Miles awarded.',
                    '$200 discount on next flight purchase.'
                ]
            },
            {
                'packageTitle': 'Enjoy your stay',
                'packagePerks': [
                    '$200 worth of meal vouchers at the airport.',
                    '1500 Kris Flyer Miles awarded.',
                    '$200 discount on next flight purchase.'
                ]
            },
            {
                'packageTitle': 'Some Package',
                'packagePerks': [
                    '$200 worth of meal vouchers at the airport.',
                    '1500 Kris Flyer Miles awarded.',
                    '$200 discount on next flight purchase.'
                ]
            }
        ]
    }
    res.render('passenger', {
        passenger: passengerDetails,
    });
    res.end();
});


router.get('/package', function (req, res, next) {
    var id = req.query.id;
    //Get API using id;

    //Dummy info
    let passengerDetails = {
        'passengerId': 'P214',
        'name': 'John Wayne',
        'checkInTime': '2015-03-25T12:00:00-06:30',
        'ticketNumber': 'R219873',
        'status': 'Selected',

        //All passenger details from API 
        'passportNo': 'aoweij12',
        'Nationaility': 'Singaporean',
        'packageList': [
            {
                'packageTitle': 'Fly Higher',
                'packagePerks': [
                    '$200 worth of meal vouchers at the airport.',
                    '1500 Kris Flyer Miles awarded.',
                    '$200 discount on next flight purchase.'
                ]
            },
            {
                'packageTitle': 'Enjoy your stay',
                'packagePerks': [
                    '$200 worth of meal vouchers at the airport.',
                    '1500 Kris Flyer Miles awarded.',
                    '$200 discount on next flight purchase.'
                ]
            },
            {
                'packageTitle': 'Some Package',
                'packagePerks': [
                    '$200 worth of meal vouchers at the airport.',
                    '1500 Kris Flyer Miles awarded.',
                    '$200 discount on next flight purchase.'
                ]
            }
        ]
    }
    res.render('package', {
        passenger: passengerDetails,
    });
    res.end();
});
module.exports = router;