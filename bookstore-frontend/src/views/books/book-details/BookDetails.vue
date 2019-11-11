<template>
    <div class="container book-detail-container">
        <div class="row flex-nowrap">
            <div>
                <book-item v-if="book" :book="book"></book-item>
            </div>
            <div class="flex-shrink-1 flex-grow-1 text-left">{{book ? book.description : ''}}</div>
        </div>
        <div class="row ship-label-wrap">
            <label>Ship via</label>
        </div>
        <div v-if="this.deliveryCosts" class="btn-group mt-2">
            <label class="btn btn-success active">
                <input v-model="deliveryService" type="radio" name="deliveryServices" value="M" checked> MOTOBIKE ${{motobikeDeliveryCost}}
            </label>
            <label class="btn btn-primary ml-4">
                <input v-model="deliveryService" type="radio" name="deliveryServices" value="T"> TRAIN ${{trainDeliveryCost}}
            </label>
            <label class="btn btn-warning ml-4">
                <input v-model="deliveryService" type="radio" name="deliveryServices" value="A"> AIRCRAFT ${{aircraftDeliveryCost}}
            </label>
        </div>
        <div class="row justify-content-center mt-5">
            <button type="button" class="btn btn-danger btn-lg buy-btn" @click="onBuyBook">BUY</button>
        </div>
    </div>
</template>

<script>
import BookItem from "../book-item/BookItem";
import { DELIVERY_SERVICES } from '@/constants'

export default {
    name: "BookDetails",
    components: {
        BookItem
    },

    props: {
        book: Object,
        deliveryCosts: Object
    },

    computed: {
        motobikeDeliveryCost() {
            return this.deliveryCosts[DELIVERY_SERVICES.MOTOBIKE]
        },
        trainDeliveryCost() {
            return this.deliveryCosts[DELIVERY_SERVICES.TRAIN]
        },
        aircraftDeliveryCost() {
            return this.deliveryCosts[DELIVERY_SERVICES.AIRCRAFT]
        }
    },

    data() {
        return {
            deliveryService: DELIVERY_SERVICES.MOTOBIKE
        }
    },

    mounted() {
    },

    methods: {
        // Handlers
        onBuyBook() {
            this.$emit('buyBook', {
                book: this.book,
                deliveryService: this.deliveryService
            })
        }
    }
}
</script>

<style scoped lang="scss">
.book-detail-container {
    .ship-label-wrap {
        margin-top: 10px;
        border-bottom: 1px solid #333;
    }
    .buy-btn {
        width: 400px;
    }
}
</style>
