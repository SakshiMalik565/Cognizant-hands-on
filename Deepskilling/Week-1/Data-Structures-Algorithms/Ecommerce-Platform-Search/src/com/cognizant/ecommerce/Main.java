package com.cognizant.ecommerce;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product("P101", "Laptop", "Electronics", 999.99),
            new Product("P102", "Mouse", "Accessories", 25.50),
            new Product("P103", "Keyboard", "Accessories", 45.00),
            new Product("P104", "Monitor", "Electronics", 150.00),
            new Product("P105", "Printer", "Office", 120.00)
        };

        System.out.println("Searching using Linear Search...");
        Product foundLinear = SearchService.linearSearch(products, "Mouse");
        if (foundLinear != null) {
            System.out.println("Product Found: " + foundLinear);
        } else {
            System.out.println("Product Not Found");
        }
        System.out.println();

        SearchService.sortProductsByName(products);

        System.out.println("Searching using Binary Search...");
        Product foundBinary = SearchService.binarySearch(products, "Mouse");
        if (foundBinary != null) {
            System.out.println("Product Found: " + foundBinary);
        } else {
            System.out.println("Product Not Found");
        }
        System.out.println();

        System.out.println("Searching for non-existent product (Camera) using Binary Search...");
        Product notFound = SearchService.binarySearch(products, "Camera");
        if (notFound != null) {
            System.out.println("Product Found: " + notFound);
        } else {
            System.out.println("Product Not Found");
        }
    }
}
