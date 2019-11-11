import _ from 'lodash'
import $ from 'jquery'
import { createNamespacedHelpers } from 'vuex'
import BookItem from "./book-item/BookItem";
import BookDetails from "./book-details/BookDetails";
import BuyBookModel from "../../store/models/BuyBookModel";
import ConfirmModal from "./confirm-modal/ConfirmModal.vue";

const { mapGetters, mapActions } = createNamespacedHelpers('books')

export default {
    name: 'BooksView',
    components: {
        BookItem,
        BookDetails,
        ConfirmModal
    },

    computed: {
        ...mapGetters(['getBooks', 'getTotalItems']),
    },

    data() {
        return {
            query: '',
            startIndex: 0,
            maxResults: 10,
            selectedBook: undefined,
            deliveryCosts: undefined,
            confirmMessage: undefined
        }
    },

    watch: {
        query() {
            this.debouncedOnSearch()
        }
    },

    created() {
        this.debouncedOnSearch = _.debounce(this.onSearch, 500)
    },

    mounted() {
        // Get delivery costs
        this.getDeliveryCosts()
            .then(deliveryCosts => {
                this.deliveryCosts = deliveryCosts
            })

        // Do the default search with an empty query (keyword)
        this.onSearch()
    },

    methods: {
        // Methods
        ...mapActions(['searchBooks', 'getDeliveryCosts', 'buyBook']),

        showBookDetailsModal() {
            $(this.$refs.bookDetailsModalEl).modal('show')
        },

        hideBookDetailsModal() {
            $(this.$refs.bookDetailsModalEl).modal('hide')
        },

        showMessageModal(confirmMessage) {
            this.confirmMessage = confirmMessage
            $(this.$refs.confirmModal.$el).modal('show')
        },

        hideMessageModal() {
            $(this.$refs.confirmModal.$el).modal('hide')
        },

        // Handlers
        onSearch() {
            console.log('onSearch', this.query)
            this.searchBooks({
                query: this.query,
                startIndex: this.startIndex,
                maxResults: this.maxResults
            })
        },

        onViewBook(book) {
            this.selectedBook = book
            // Show modal
            this.showBookDetailsModal()
        },

        onBuyBook({ book, deliveryService}) {
            console.log('deliveryService', this.deliveryService)
            // let buyBookModel = new BuyBookModel(deliveryService, this.deliveryCosts[deliveryService])
            let buyBookModel = new BuyBookModel('M', this.deliveryCosts['M'])
            this.buyBook(buyBookModel)
                .then(res => {
                    // Close popup
                    this.hideBookDetailsModal()

                    // Show confirmation
                    this.showMessageModal(res)
                })
        }
    }
}
