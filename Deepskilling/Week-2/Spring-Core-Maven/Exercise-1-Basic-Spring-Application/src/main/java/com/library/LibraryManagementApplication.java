package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load Application Context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve Bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Verify Injection and Execution
        bookService.executeServiceMethod();
    }
}
