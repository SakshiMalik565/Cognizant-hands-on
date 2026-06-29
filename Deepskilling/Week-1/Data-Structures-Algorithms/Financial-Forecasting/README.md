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

## Explanation of Recursion
Recursion is a programming technique where a method calls itself to solve a smaller sub-problem of the original problem.

### Base Case
The condition that terminates the recursive calls. In this project, the base case is:
```java
if (years == 0) {
    return principal;
}
```
This stops the recursion when we have calculated the growth for all target years.

### Recursive Case
The part where the method calls itself with modified parameters that bring it closer to the base case:
```java
return calculateFutureValue(principal * (1 + rate), rate, years - 1);
```
It compounds the principal for one year and calls the method again with one less year remaining.

## Complexities
* **Time Complexity**: $\mathcal{O}(N)$ where $N$ is the number of years, since the function calls itself exactly $N$ times.
* **Space Complexity**: $\mathcal{O}(N)$ because each nested function call builds another stack frame on the call stack.

## How to Optimize Recursion
To avoid excessive computation or stack overflow errors in deep recursion:
1. **Memoization (Top-down caching)**: Store the results of expensive function calls in a lookup table (e.g., an array or Map) and return the cached result when the same inputs occur again. This is extremely useful for overlapping sub-problems (like calculating Fibonacci numbers).
2. **Iterative Approach (Bottom-up)**: Rewrite the logic using standard loops (`for` or `while`). This runs in $\mathcal{O}(1)$ space complexity as it does not grow the call stack.
3. **Tail Call Optimization (TCO)**: In languages that support it, tail recursion allows compilers to reuse the current stack frame, reducing space complexity to $\mathcal{O}(1)$. (Note: Java compiler does not support TCO natively).

## How to Run
1. Navigate to the project directory:
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
