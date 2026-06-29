package com.cognizant.forecasting;

public class Main {
    public static void main(String[] args) {
        double principal = 10000;
        double rate = 0.10;
        int years = 5;

        double futureValue = FinancialForecast.calculateFutureValue(principal, rate, years);

        System.out.println("Financial Forecast");
        System.out.println("Initial Investment : " + principal);
        System.out.println("Growth Rate : " + (rate * 100) + "%");
        System.out.println("Years : " + years);
        System.out.printf("Future Value : %.2f\n", futureValue);
    }
}
