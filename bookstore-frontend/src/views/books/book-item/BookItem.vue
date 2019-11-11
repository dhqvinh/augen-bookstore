<template>
    <div  v-if="book" class="card book-item" @click="$emit('viewBook', book)">
        <img class="book-thumbnail" :src="book.thumbnail" :alt="book.title" >
        <div class="card-body">
            <p class="book-title" :title="book.title">{{book.title}}</p>
            <p class="book-authors-wrap"><span class="book-authors" :title="authors">{{authors}}</span> <span class="separator">-</span><span class="book-published-date">{{book.publishedDate}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookItem',

    props: {
        book: Object
    },

    computed: {
        authors() {
            return this.book ? this.book.authors.join(', ') : ''
        }
    }
}
</script>

<style lang="scss">
.book-item {
    width: 300px;
    margin: 10px;
    display: inline-block;

    .book-thumbnail {
        margin-top: 20px;
        width: 128px;
    }

    .book-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
    }

    .book-authors-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;

        .book-authors {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 160px;
            display: inline-block;
        }

        .separator {
            margin: 0 5px;
        }

        .book-published-date {
        }
    }
}
</style>
