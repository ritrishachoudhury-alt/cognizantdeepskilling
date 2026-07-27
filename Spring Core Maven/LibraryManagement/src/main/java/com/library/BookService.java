package com.library;

public class BookService {

    private BookRepository repository;

    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void service() {
        repository.display();
        System.out.println("Book Service Running");
    }
}