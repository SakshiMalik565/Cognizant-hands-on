# Spring REST Web Services (Hello World & Country Services)

## Objective
Establish a basic Spring Web Maven project and expose simple RESTful endpoints for retrieving greeting text and country resource details in JSON format.

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
        │               ├── controller/
        │               │   ├── HelloController.java
        │               │   └── CountryController.java
        │               └── model/
        │                   └── Country.java
        └── resources/
            └── application.properties
```

## REST Endpoints Configuration

### 1. Hello Endpoint
* **Endpoint:** `/hello`
* **HTTP Method:** `GET`
* **Sample Response:** `Hello World!!`

### 2. Country Endpoint
* **Endpoint:** `/country`
* **HTTP Method:** `GET`
* **Sample JSON Response:**
  ```json
  {
    "code": "IN",
    "name": "India"
  }
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
3. Open a browser or use a tool like curl to access:
   * Greeting: `http://localhost:8080/hello`
   * Country: `http://localhost:8080/country`
