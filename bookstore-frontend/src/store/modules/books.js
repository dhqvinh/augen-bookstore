import axios from 'axios'
import BookModel from "../models/BookModel";

// const API_KEY = ''

// state
const state = {
    books: [],
    totalItems: 0
}

// getters
const getters = {
    getBooks: state => state.books,
    getTotalItems: state => state.totalItems
}

// mutations
export const SET_BOOKS = 'SET_BOOKS'
export const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS'
const mutations = {
    [SET_BOOKS](state, books) {
        state.books = books
    },
    [SET_TOTAL_ITEMS](state, totalItems) {
        state.totalItems = totalItems
    }
}

// actions
const actions = {
    /**
     * Search for books with given params
     * @param params {Object} E.g. { query: 'IoT' }
     * @returns {Promise<T>}
     */
    searchBooks({ commit }, params) {
        return axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: `+intitle:${params.query}+inauthor:${params.query}`,
                startIndex: params.startIndex || 0,
                maxResults: params.maxResults || 10,
                projection: 'lite',
                // key: API_KEY
            }
        }).then((res) => {
            let data = res.data,
                books
            console.log('Found books', data)
            books = data.items.map(item => {
                const volumeInfo = item.volumeInfo
                return new BookModel({
                    id: item.id,
                    title: volumeInfo.title,
                    description: volumeInfo.description,
                    authors: volumeInfo.authors,
                    publisher: volumeInfo.publisher,
                    publishedDate: volumeInfo.publishedDate,
                    thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : '',
                })
            })

            // Commit data
            commit(SET_BOOKS, books)
            commit(SET_TOTAL_ITEMS, data.totalItems)

            return res.data
        })
    },

    /**
     * Get delivery costs.
     * @param deliveryService
     * @return {Promise<T>}
     */
    getDeliveryCosts({ commit }) {
        return axios.get('/api/v1/books/delivery-costs')
            .then(res => {
                return res.data
            })
    },

    /**
     * Buy a book and get delivery information.
     * @param buyBookModel
     * @returns {Promise<BuyBookModel>}
     */
    buyBook({ commit }, buyBookModel) {
        return axios.post('/api/v1/books/buy-book', buyBookModel)
            .then(res => {
                return res.data
            })
    }
}

// store
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
