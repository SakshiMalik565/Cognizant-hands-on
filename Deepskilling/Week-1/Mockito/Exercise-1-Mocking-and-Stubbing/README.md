# Mocking and Stubbing (Exercise 1)

## Objective
Demonstrate unit testing using Mockito to mock and stub dependencies, verifying service integration with an external API interface.

## Folder Structure
```
Deepskilling/Week-1/Mockito/Exercise-1-Mocking-and-Stubbing/
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
* **pom.xml**: Configuration setup detailing core testing dependencies.
* **ExternalApi.java**: Interface with `getData()` declaration representing external systems.
* **MyService.java**: Implementation invoking `ExternalApi` to retrieve data.
* **MyServiceTest.java**: Test suite utilizing Mockito to mock `ExternalApi` and assert returned data matches stubbed value.

## How to Run Tests
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/Mockito/Exercise-1-Mocking-and-Stubbing
   ```
2. Execute the Maven command to run tests:
   ```bash
   mvn test
   ```

## Expected Output
```text
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.cognizant.mockito.MyServiceTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 1.258 s - in com.cognizant.mockito.MyServiceTest

Results:

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
```
