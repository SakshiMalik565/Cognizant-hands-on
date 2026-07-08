# Spring REST Web Service (Hello World)

## Objective
Establish a basic Spring Web Maven project and expose a simple "Hello World" RESTful Web Service endpoint.

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
        │               ├── SpringLearnApplication.java
        │               └── controller/
        │                   └── HelloController.java
        └── resources/
            └── application.properties
```

## REST Endpoint Configuration
* **Endpoint:** `/hello`
* **HTTP Method:** `GET`
* **Sample Response:** `Hello World!!`

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-3/Spring-REST/Hands-on-1-Create-Spring-Web-Project
   ```
2. Compile and run the Spring Boot app:
   ```bash
   mvn spring-boot:run
   ```
3. Open a browser or use a tool like curl to access:
   `http://localhost:8080/hello`

## Expected Output
```text
Hello World!!
```
