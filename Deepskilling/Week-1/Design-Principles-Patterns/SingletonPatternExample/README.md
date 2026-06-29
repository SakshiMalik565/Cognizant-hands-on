# Singleton Pattern Example

## Objective
Implement the Singleton design pattern using a `Logger` class to ensure that only one instance of the logger is created and reused across the application.

## Folder Structure
```
Deepskilling/Week-1/Design-Principles-Patterns/SingletonPatternExample/
├── README.md
└── src/
    └── com/
        └── cognizant/
            └── singleton/
                ├── Logger.java
                └── Main.java
```

## Files Used
* **Logger.java**: Singleton logger class containing a private constructor, static instance, `getInstance()` method, and a `log()` method.
* **Main.java**: Test runner verifying that only a single instance of `Logger` is instantiated and reused.

## How to Run
1. Navigate to the project folder:
   ```bash
   cd Deepskilling/Week-1/Design-Principles-Patterns/SingletonPatternExample
   ```
2. Compile the Java files:
   ```bash
   javac src/com/cognizant/singleton/*.java -d bin
   ```
3. Run the project:
   ```bash
   java -cp bin com.cognizant.singleton.Main
   ```

## Expected Output
```text
[LOG]: First log message from logger1.
[LOG]: Second log message from logger2.
Success: Both logger1 and logger2 point to the same Logger instance.
```
