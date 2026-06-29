# Writing Basic JUnit Tests (Exercise 2)

## Objective
Implement and verify standard arithmetic calculator functions (`add`, `subtract`, `multiply`, and `divide`) using JUnit 4 test cases.

## Folder Structure
```
Deepskilling/Week-1/JUnit/Exercise-2-Writing-Basic-JUnit-Tests/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    ├── main/
    │   └── java/
    │       └── com/
    │           └── cognizant/
    │               └── junit/
    │                   └── Calculator.java
    └── test/
        └── java/
            └── com/
                └── cognizant/
                    └── junit/
                        └── CalculatorTest.java
```

## Files Included
* **pom.xml**: Maven configuration for build source target compiling.
* **Calculator.java**: Normal Java class with basic logic functions.
* **CalculatorTest.java**: Unit test suite using JUnit 4 assertions.

## Methods Tested
* `add(int a, int b)`
* `subtract(int a, int b)`
* `multiply(int a, int b)`
* `divide(double a, double b)`

## How to Run Tests
1. Navigate to the project folder:
   ```bash
   cd Deepskilling/Week-1/JUnit/Exercise-2-Writing-Basic-JUnit-Tests
   ```
2. Execute Maven test command:
   ```bash
   mvn test
   ```

## Expected Output
```text
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.cognizant.junit.CalculatorTest
Tests run: 4, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.051 s - in com.cognizant.junit.CalculatorTest

Results:

Tests run: 4, Failures: 0, Errors: 0, Skipped: 0
```
