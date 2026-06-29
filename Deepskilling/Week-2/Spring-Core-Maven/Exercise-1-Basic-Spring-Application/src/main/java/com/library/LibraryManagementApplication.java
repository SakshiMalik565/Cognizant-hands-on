package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load Application Context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("--- Testing Constructor Injection ---");
        BookService serviceConstructor = (BookService) context.getBean("bookServiceConstructor");
        serviceConstructor.executeServiceMethod();

        System.out.println("\n--- Testing Setter Injection ---");
        BookService serviceSetter = (BookService) context.getBean("bookServiceSetter");
        serviceSetter.executeServiceMethod();
    }
}
