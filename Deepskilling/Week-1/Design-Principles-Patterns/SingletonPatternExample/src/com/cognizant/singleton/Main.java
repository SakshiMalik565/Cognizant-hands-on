package com.cognizant.singleton;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First log message from logger1.");
        logger2.log("Second log message from logger2.");

        if (logger1 == logger2) {
            System.out.println("Success: Both logger1 and logger2 point to the same Logger instance.");
        } else {
            System.out.println("Error: Different Logger instances exist.");
        }
    }
}
