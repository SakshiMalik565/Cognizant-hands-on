# Employee Management System - Setup (Exercise 1)

## Objective
Establish a basic Spring Boot application configured with Spring Data JPA, Web, H2 memory database, and Lombok capabilities.

## Technologies Used
* **Java**: Version 17 (Source/Target Java 8 for compatibility)
* **Spring Boot**: Version 2.7.18
* **H2 Database**: In-memory database
* **Maven**: Build tool

## Dependencies
* `spring-boot-starter-data-jpa`
* `spring-boot-starter-web`
* `h2` (runtime)
* `lombok`

## Folder Structure
```
Deepskilling/Week-2/Spring-Data-JPA-Hibernate/Exercise-1-Employee-Management-System-Setup/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── cognizant/
        │           └── employeemanagement/
        │               └── EmployeeManagementSystemApplication.java
        └── resources/
            └── application.properties
```

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-2/Spring-Data-JPA-Hibernate/Exercise-1-Employee-Management-System-Setup
   ```
2. Compile and run the Spring Boot app:
   ```bash
   mvn spring-boot:run
   ```

## Expected Output
```text
[INFO] Scanning for projects...
[INFO] -----------------< com.cognizant:EmployeeManagementSystem >-----------------
[INFO] Building EmployeeManagementSystem 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
...
INFO 12345 --- [           main] c.c.e.EmployeeManagementSystemApplication : Started EmployeeManagementSystemApplication in 2.456 seconds (JVM running for 2.9)
```
