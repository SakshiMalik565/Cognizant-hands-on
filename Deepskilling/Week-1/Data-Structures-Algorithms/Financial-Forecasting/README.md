# Financial Forecasting

## Objective
Implement a simple financial forecasting calculator using recursion in Java to estimate the future value of an investment over a number of years.

## Folder Structure
```
Deepskilling/Week-1/Data-Structures-Algorithms/Financial-Forecasting/
├── README.md
└── src/
    └── com/
        └── cognizant/
            └── forecasting/
                ├── FinancialForecast.java
                └── Main.java
```

## Algorithm & Complexity

### Recursive Future Value Algorithm
* **Base Case**: If years is 0, return the current principal amount.
* **Recursive Case**: If years > 0, return the result of the function called with the new principal increased by the interest rate, and years decremented by 1.

### Complexity
* **Time Complexity**: $\mathcal{O}(N)$ where $N$ is the number of years, as the method calls itself once for each year.
* **Space Complexity**: $\mathcal{O}(N)$ due to the call stack depth built by recursive execution.

## How to Run
1. Open the terminal and navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/Data-Structures-Algorithms/Financial-Forecasting
   ```
2. Compile the Java files:
   ```bash
   javac src/com/cognizant/forecasting/*.java -d bin
   ```
3. Run the application:
   ```bash
   java -cp bin com.cognizant.forecasting.Main
   ```

## Expected Output
```text
Financial Forecast
Initial Investment : 10000.0
Growth Rate : 10.0%
Years : 5
Future Value : 16105.10
```
