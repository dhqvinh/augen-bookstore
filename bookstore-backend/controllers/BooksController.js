import DeliveryInfoGeneratorFactory from "../utils/DeliveryInfoGenerator";

const JUNE = 6,
    AUG = 8,
    SEP = 9
class BooksController {

    getDeliveryCost(req, res) {
        let baseCosts = {
                M: 5,
                T: 10,
                A: 20
            },
            deliveryCosts;

        // Calculate cost by months
        let currentMonth = new Date().getMonth() + 1 // as JS month start from 0
        if (JUNE <= currentMonth && currentMonth <= AUG ) {
            // June to Aug
            deliveryCosts = {
                M: baseCosts.M * 0.5,
                T: baseCosts.T * 0.8,
                A: baseCosts.A * 0.8
            }
        } else if (currentMonth === SEP) {
            // Sep
            deliveryCosts = {
                M: baseCosts.M * 1.5,
                T: baseCosts.T * 1.8,
                A: baseCosts.A * 2
            }
        } else {
            // Other months
            deliveryCosts = baseCosts
        }

        res.send(deliveryCosts)
    }

    buyBook(req, res) {
        console.log('req.body: ', req.body)

        // Validation
        if(!req.body.deliveryService) {
            return res.status(400).send('deliveryService is required');
        } else if(!req.body.deliveryCost) {
            return res.status(400).send('deliveryCost is required');
        }

        const buyBookModel = req.body
        // Use DeliveryInfoGenerator to generate delivery info
        let deliveryInfoGenerator = DeliveryInfoGeneratorFactory.createGenerator(buyBookModel.deliveryService, buyBookModel.deliveryCost);

        return res.status(201).send(deliveryInfoGenerator.generateInfo())
    }

}
const booksController = new BooksController();
export default booksController;
