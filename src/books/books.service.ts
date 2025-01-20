import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks() {
    return 'we received all books';
  }

  getBookById(id: string) {
    return `we received book with id ${id}`;
  }
}
