package com.cognizant.singleton;

public class Main {
    public static void main(String[] args) {
        Singleton first = Singleton.getInstance();
        Singleton second = Singleton.getInstance();

        first.showMessage();
        second.showMessage();

        if (first == second) {
            System.out.println("Success: Both references point to the same object instance.");
        } else {
            System.out.println("Error: The references point to different instances.");
        }
    }
}
