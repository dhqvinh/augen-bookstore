var express = require('express');
var router = express.Router();

/* GET delivery-costs */
router.get('/delivery-costs', (req, res) => {
    res.send({
        M: 5,
        T: 10,
        A: 20
    })
});

/* POST buy-book */
router.post('/buy-book', (req, res) => {
    console.log('req.body: ', req.body)

    // Validation
    if(!req.body.deliveryService) {
        return res.status(400).send('deliveryService is required');
    } else if(!req.body.deliveryCost) {
        return res.status(400).send('deliveryCost is required');
    }

    // Use DeliveryInfoGenerator to generate delivery info
    const buyBookModel = req.body
    let deliveryInfo = {
        deliveryService: 'M',
        driverName: 'Vinh',
        mobilePhone: '34124',
        deliveryDate: '15/11/2019',
        cost: 10
    }

    return res.status(201).send(deliveryInfo)
});

module.exports = router;
