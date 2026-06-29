# Basic Spring Application (Exercise 1)

## Objective
Establish a basic Spring Core configuration with XML bean wiring, implementing setter injection to connect a Service layer bean to a Repository layer bean.

## Technologies Used
* **Java**: Version 17 (Source/Target Java 8 for compatibility)
* **Spring Framework**: Core, Beans, Context (version 5.3.29)
* **Maven**: Dependency resolution and build system

## Folder Structure
```
Deepskilling/Week-2/Spring-Core-Maven/Exercise-1-Basic-Spring-Application/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── library/
        │           ├── LibraryManagementApplication.java
        │           ├── repository/
        │           │   └── BookRepository.java
        │           └── service/
        │               └── BookService.java
        └── resources/
            └── applicationContext.xml
```

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-2/Spring-Core-Maven/Exercise-1-Basic-Spring-Application
   ```
2. Compile and run the main class using Maven:
   ```bash
   mvn compile exec:java -Dexec.mainClass="com.library.LibraryManagementApplication"
   ```

## Expected Output
```text
BookService method executed: Delegating to repository.
BookRepository method executed: Accessing book database.
```
