# Maven Configuration (Exercise 4)

## Objective
Configure a Spring Core project inside Maven, validating the build structure, configuring compile targets explicitly, and executing builds via Maven lifecycle goals.

## Project Structure
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

## Maven Configuration
The project uses the `maven-compiler-plugin` to target Java 8 compatibility and manages the `spring-context` dependency:
```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.3.29</version>
        </dependency>
    </dependencies>
```

## Build Instructions
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-2/Spring-Core-Maven/Exercise-1-Basic-Spring-Application
   ```
2. Clean and package the application:
   ```bash
   mvn clean package
   ```
3. Run the application:
   ```bash
   mvn exec:java -Dexec.mainClass="com.library.LibraryManagementApplication"
   ```

## Expected Output
```text
[INFO] Scanning for projects...
[INFO] -------------------< com.library:LibraryManagement >--------------------
[INFO] Building LibraryManagement 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
...
[INFO] BUILD SUCCESS
```
