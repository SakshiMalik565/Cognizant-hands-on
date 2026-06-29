# Basic Spring Application & Dependency Injection (Exercise 1 & 2)

## Objective
Establish a basic Spring Core configuration using XML bean definition files and demonstrate both constructor injection and setter injection methods to wire repository dependencies into service classes.

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

## Dependency Injection Modes
* **Constructor Injection**: Injects dependencies through class constructors (`<constructor-arg ref="..."/>`).
* **Setter Injection**: Injects dependencies through setter methods (`<property name="..." ref="..."/>`).

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
--- Testing Constructor Injection ---
BookService method executed: Delegating to repository.
BookRepository method executed: Accessing book database.

--- Testing Setter Injection ---
BookService method executed: Delegating to repository.
BookRepository method executed: Accessing book database.
```
