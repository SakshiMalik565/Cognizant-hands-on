# Spring REST Web Services (Hello World, Country & Authentication Services)

## Objective
Establish a basic Spring Web Maven project and expose simple RESTful endpoints for greeting, country resource retrieval, and JWT authentication token generation.

## Technologies Used
* **Java**: Version 17 (Source/Target Java 8 for compatibility)
* **Spring Boot**: Version 2.7.18
* **Maven**: Build tool

## Dependencies
* `spring-boot-starter-web`
* `spring-boot-devtools`
* `jjwt` (JWT Generation Library)
* `jaxb-api` (JAXB base64 support for Java 9+)

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
        │               │   ├── CountryController.java
        │               │   └── AuthenticationController.java
        │               ├── model/
        │               │   ├── Country.java
        │               │   ├── AuthRequest.java
        │               │   └── AuthResponse.java
        │               └── util/
        │                   └── JwtUtil.java
        └── resources/
            └── application.properties
```

## REST Endpoints Configuration

### 1. Hello Endpoint
* **Endpoint:** `/hello`
* **HTTP Method:** `GET`
* **Sample Response:** `Hello World!!`

### 2. Country Endpoint (Default)
* **Endpoint:** `/country`
* **HTTP Method:** `GET`
* **Sample JSON Response:**
  ```json
  {
    "code": "IN",
    "name": "India"
  }
  ```

### 3. Get Country By Code Endpoint
* **Endpoint:** `/country/{code}`
* **HTTP Method:** `GET`
* **Path Variable:** `code` (e.g., `IN`, `US`, `JP`, `DE`)
* **Sample Request:** `GET http://localhost:8080/country/US`
* **Sample JSON Response:**
  ```json
  {
    "code": "US",
    "name": "United States"
  }
  ```

### 4. Authentication Endpoint
* **Endpoint:** `/authenticate`
* **HTTP Method:** `POST`
* **Sample Request Payload:**
  ```json
  {
    "username": "admin",
    "password": "admin"
  }
  ```
* **Sample Success Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5..."
  }
  ```
* **Sample Failure Response (Invalid credentials):**
  * HTTP Status: `401 Unauthorized`

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-3/Spring-REST/Hands-on-1-Create-Spring-Web-Project
   ```
2. Compile and run the Spring Boot app:
   ```bash
   mvn spring-boot:run
   ```
3. Test using a tool like Postman, curl, or any API client.
