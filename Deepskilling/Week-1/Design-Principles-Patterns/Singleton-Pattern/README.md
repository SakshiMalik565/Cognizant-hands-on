# Singleton Pattern

## Objective
Implement the Singleton design pattern to ensure that a class has only one instance and provides a global point of access to it.

## Folder Structure
```
Deepskilling/Week-1/Design-Principles-Patterns/Singleton-Pattern/
├── README.md
└── src/
    └── com/
        └── cognizant/
            └── singleton/
                ├── Singleton.java
                └── Main.java
```

## Files Used
* **Singleton.java**: Defines the Singleton class with a private constructor, a private static instance variable, and the `getInstance()` method.
* **Main.java**: The test class that verifies the instances retrieved point to the exact same object.

## How to Run
1. Open the terminal and navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/Design-Principles-Patterns/Singleton-Pattern
   ```
2. Compile the Java files:
   ```bash
   javac src/com/cognizant/singleton/*.java -d bin
   ```
3. Run the application:
   ```bash
   java -cp bin com.cognizant.singleton.Main
   ```

## Expected Output
```text
Hello, this is a message from the Singleton instance!
Hello, this is a message from the Singleton instance!
Success: Both references point to the same object instance.
```
