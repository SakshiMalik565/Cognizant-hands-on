# Setting Up JUnit (Exercise 1)

## Objective
Set up JUnit 4 testing framework inside a Maven Java project and write simple unit test cases to verify the calculations of a basic calculator class.

## Folder Structure
```
Deepskilling/Week-1/JUnit/Exercise-1-Setting-Up-JUnit/
├── pom.xml
├── README.md
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

## Dependency Used
* **JUnit**: version 4.13.2

## Files Included
* **pom.xml**: Maven build file with the JUnit dependency declarations.
* **Calculator.java**: Normal Java class defining `add()` and `subtract()` methods.
* **CalculatorTest.java**: Test class utilizing `@Test` annotation and `assertEquals()` assertion.

## How to Run Tests
1. Open the terminal and navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/JUnit/Exercise-1-Setting-Up-JUnit
   ```
2. Run Maven test command:
   ```bash
   mvn test
   ```

## Expected Output
```text
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.cognizant.junit.CalculatorTest
Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.05 s - in com.cognizant.junit.CalculatorTest

Results:

Tests run: 2, Failures: 0, Errors: 0, Skipped: 0
```
