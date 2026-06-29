# Create Spring Web Project (Hands-on 1)

## Objective
Establish a basic Spring Web Maven-based project using Spring Boot containing Web and DevTools capabilities.

## Technologies Used
* **Java**: Version 17 (Source/Target Java 8 for compatibility)
* **Spring Boot**: Version 2.7.18
* **Maven**: Build tool

## Dependencies
* `spring-boot-starter-web`
* `spring-boot-devtools`

## Folder Structure
```
Deepskilling/Week-3/Spring-REST/Hands-on-1-Create-Spring-Web-Project/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── cognizant/
        │           └── springlearn/
        │               └── SpringLearnApplication.java
        └── resources/
            └── application.properties
```

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-3/Spring-REST/Hands-on-1-Create-Spring-Web-Project
   ```
2. Compile and run the Spring Boot app:
   ```bash
   mvn spring-boot:run
   ```

## Expected Output
```text
[INFO] Scanning for projects...
[INFO] -----------------------< com.cognizant:spring-learn >-----------------------
[INFO] Building spring-learn 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
...
INFO 12345 --- [           main] c.c.s.SpringLearnApplication             : Starting SpringLearnApplication...
INFO 12345 --- [           main] c.c.s.SpringLearnApplication             : Started SpringLearnApplication in 2.253 seconds (JVM running for 2.8)
INFO 12345 --- [           main] c.c.s.SpringLearnApplication             : SpringLearnApplication started successfully!
```
