package com.cognizant.ecommerce;

public class Main {
    public static void main(String[] args) {
        // Unsorted array for Linear Search
        Product[] unsortedProducts = {
            new Product("P101", "Laptop", "Electronics"),
            new Product("P102", "Mouse", "Accessories"),
            new Product("P103", "Keyboard", "Accessories"),
            new Product("P104", "Monitor", "Electronics"),
            new Product("P105", "Printer", "Office")
        };

        // Sorted array (alphabetically by name) for Binary Search
        Product[] sortedProducts = {
            new Product("P103", "Keyboard", "Accessories"),
            new Product("P101", "Laptop", "Electronics"),
            new Product("P102", "Mouse", "Accessories"),
            new Product("P104", "Monitor", "Electronics"),
            new Product("P105", "Printer", "Office")
        };

        System.out.println("Searching using Linear Search...");
        Product foundLinear = SearchService.linearSearch(unsortedProducts, "Mouse");
        if (foundLinear != null) {
            System.out.println("Product Found: " + foundLinear);
        } else {
            System.out.println("Product Not Found");
        }
        System.out.println();

        System.out.println("Searching using Binary Search...");
        Product foundBinary = SearchService.binarySearch(sortedProducts, "Mouse");
        if (foundBinary != null) {
            System.out.println("Product Found: " + foundBinary);
        } else {
            System.out.println("Product Not Found");
        }
        System.out.println();

        System.out.println("Searching for non-existent product (Camera)...");
        Product notFound = SearchService.binarySearch(sortedProducts, "Camera");
        if (notFound != null) {
            System.out.println("Product Found: " + notFound);
        } else {
            System.out.println("Product Not Found");
        }
    }
}
