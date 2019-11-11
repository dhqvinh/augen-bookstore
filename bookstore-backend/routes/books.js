import express from 'express';
import booksController from "../controllers/BooksController";

const router = express.Router();

/* GET delivery-costs */
router.get('/delivery-costs', booksController.getDeliveryCost);

/* POST buy-book */
router.post('/buy-book', booksController.buyBook);

module.exports = router;
