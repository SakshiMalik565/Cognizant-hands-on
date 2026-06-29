# SLF4J Logging Framework (Exercise 1)

## Objective
Configure the SLF4J Logging Framework using a simple provider dependency and output logs representing `info()`, `warn()`, and `error()` scenarios.

## Folder Structure
```
Deepskilling/Week-1/SLF4J/Exercise-1-Logging-Error-Messages-and-Warning-Levels/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    └── main/
        └── java/
            └── com/
                └── cognizant/
                    └── logging/
                        └── LoggingExample.java
```

## Dependencies Used
* **SLF4J API**: version 1.7.36
* **SLF4J Simple**: version 1.7.36

## Files Included
* **pom.xml**: Maven compiler configuration referencing standard slf4j logging dependencies.
* **LoggingExample.java**: Java class invoking LoggerFactory logger and outputting trace details.

## Logging Levels Demonstrated
* **INFO**: Standard informational runtime status messages.
* **WARN**: Unexpected path alert notices that do not halt system functionality.
* **ERROR**: Execution failures denoting problematic conditions.

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/SLF4J/Exercise-1-Logging-Error-Messages-and-Warning-Levels
   ```
2. Compile and run using Maven exec plugin:
   ```bash
   mvn compile exec:java -Dexec.mainClass="com.cognizant.logging.LoggingExample"
   ```

## Expected Output
```text
[main] INFO com.cognizant.logging.LoggingExample - Application started
[main] WARN com.cognizant.logging.LoggingExample - This is a warning message
[main] ERROR com.cognizant.logging.LoggingExample - An error occurred while processing data
```
