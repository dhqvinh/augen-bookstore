export default class BookModel {
    constructor({ id, title, description, authors, publisher, publishedDate, thumbnail }) {
        this.id = id
        this.title = title
        this.description = description
        this.authors = authors
        this.publisher = publisher
        this.publishedDate = publishedDate
        this.thumbnail = thumbnail
    }
}
