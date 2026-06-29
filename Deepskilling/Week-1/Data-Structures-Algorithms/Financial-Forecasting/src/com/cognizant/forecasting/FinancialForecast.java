package com.cognizant.forecasting;

public class FinancialForecast {
    public static double calculateFutureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return calculateFutureValue(principal * (1 + rate), rate, years - 1);
    }
}
