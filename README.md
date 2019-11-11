# Bookstore Application

## Getting started
###1. bookstore-backend
+ **Technologies:** NodeJS, Express, Babel, ESLint...

+ **Requirements:**
  - Have [NodeJS](https://nodejs.org) installed.
 
+ **Getting started:**
```
cd bookstore-backend
npm install
npm start
```
It will start the REST api at http://localhost:8081

###2. bookstore-frontend
+ **Technologies:** VueJS, Babel, ESLint, Sass, Bootstrap, Axios...

+ **Requirements:**
  - Have [NodeJS](https://nodejs.org) installed.
 
+ **Getting started:**
```
cd bookstore-frontend
npm install
npm run serve
```
Open a browser and enter this url: http://localhost:8080

## Design
The design of the system looks like below
![Bookstore Architecture](./docs/images/architecture.png?raw=true)
### 1. Frontend
#### Components
 + **BooksView:** the main page containing a search, book list, book items...  
   - **BookItem:** display info of each book (thumbnail, title, authors, published date).  
   - **BookDetails:** display detailed info of a book, delivery cost and allow users to buy a book.
   - **ConfirmModal:** display the confirmation when buying a book.
 + ...
 
#### Store
 + **BooksStore:** contains state (books retrieved from Google API), and actions such as `searchBooks()`, `getDeliveryCosts()`, `buyBook()`... 
 When it comes to another books API, e.g Amazon, we can switch to another implementation of the BooksStore, or refactor it to support multiple API provider.  
#### Models
 + **BookModel:** information about a book (id, title, thumbnail...), to make it loosely coupling, not depending on the info retrieved from Google Books API.   
 + **BuyBookModel**

### 2. Backend
The backend is developed to provide a REST API to the frontend.
 + **BooksController:** 
   - Endpoint: /api/v1/books
   - Actions: 
     - getDeliveryCosts => route: GET /delivery-costs
     - buyBook => route: GET /buy-book
 + **DeliveryInfoGeneratorFactory:** responsible for creating the correspondent `*DeliveryInfoGenerator`
 + **DeliveryInfoGenerator:** base class for `*DeliveryInfoGenerator`, has the abstract method `generateInfo()` which will be implemented by a concrete class, as well as some common methods e.g. `generateRandomDate()`... 
 + **MotobikeDeliveryInfoGenerator:** extends `DeliveryInfoGenerator`, implements the `generateInfo()` to generate info for Motobike delivery.
 + **TrainDeliveryInfoGenerator:** extends `DeliveryInfoGenerator`, implements the `generateInfo()` to generate info for Train delivery.
 + **AircraftDeliveryInfoGenerator:** extends `DeliveryInfoGenerator`, implements the `generateInfo()` to generate info for Aircraft delivery.

## Time Summary
+ Preparation: 1 hour (studying requirements & project setup)
+ Coding: 7 hours (frontend: 5 hours, backend: 2 hours)
+ Styling 1 hour
+ Building, testing and fixing issues: 1 hour

Grand total: 10 hours
