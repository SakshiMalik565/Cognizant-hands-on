# Verifying Interactions (Exercise 2)

## Objective
Demonstrate unit testing using Mockito to verify that dependencies' methods are actively invoked during execution.

## Folder Structure
```
Deepskilling/Week-1/Mockito/Exercise-2-Verifying-Interactions/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    ├── main/
    │   └── java/
    │       └── com/
    │           └── cognizant/
    │               └── mockito/
    │                   ├── ExternalApi.java
    │                   └── MyService.java
    └── test/
        └── java/
            └── com/
                └── cognizant/
                    └── mockito/
                        └── MyServiceTest.java
```

## Dependencies Used
* **JUnit**: version 4.13.2
* **Mockito Core**: version 3.12.4

## Files Included
* **pom.xml**: Maven configuration containing compilation and test dependency parameters.
* **ExternalApi.java**: Interface with `getData()` method representing external services.
* **MyService.java**: Implementation dependency wrapper executing `getData()`.
* **MyServiceTest.java**: Test suite implementing the `verify()` check confirming dependency methods are executed.

## What is Mockito Verify?
The `verify()` method in Mockito checks that a specific method on a mock object was called with exact parameters. It verifies behavior (method calls) rather than just values (state assertions).

## How to Run Tests
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/Mockito/Exercise-2-Verifying-Interactions
   ```
2. Execute the Maven test command:
   ```bash
   mvn test
   ```

## Expected Output
```text
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.cognizant.mockito.MyServiceTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 1.272 s - in com.cognizant.mockito.MyServiceTest

Results:

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
```
