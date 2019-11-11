<template>
  <div class="container main">
    <!-- Modal -->
    <div ref="bookDetailsModalEl"  class="modal fade" id="bookDetailsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Book Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <book-details v-if="selectedBook" :book="selectedBook" :deliveryCosts="deliveryCosts" @buyBook="onBuyBook"></book-details>
          </div>
        </div>
      </div>
    </div>

    <div ref="messageModalEl"  class="modal fade" id="messageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{message}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>

    <!--Search Form-->
    <form class="search-form">
      <div class="form-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-input"><i class="fa fa-search" aria-hidden="true"></i></span>
          </div>
          <input type="text" class="form-control" placeholder="Search by book title or author"
                 aria-label="Search by book title or author" aria-describedby="search-input"
                 v-model="query"
          >
        </div>
      </div>
    </form>
    <!--Search Result-->
    <div class="container search-result">
      <template v-for="book in getBooks">
        <book-item class="clickable" :book="book" :key="book.id" @viewBook="onViewBook"></book-item>
      </template>
    </div>
  </div>
</template>

<script src="./BooksView.js"></script>

<style lang="scss" src="./BooksView.scss"></style>
