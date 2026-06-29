# Factory Method Pattern

## Objective
Implement the Factory Method design pattern to instantiate different types of Document objects (Word, PDF, Excel) without exposing the instantiation logic to the client.

## Folder Structure
```
Deepskilling/Week-1/Design-Principles-Patterns/Factory-Method-Pattern/
├── README.md
└── src/
    └── com/
        └── cognizant/
            └── factory/
                ├── Document.java
                ├── WordDocument.java
                ├── PdfDocument.java
                ├── ExcelDocument.java
                ├── DocumentFactory.java
                └── Main.java
```

## Files Used
* **Document.java**: An interface defining the `open()` method contract.
* **WordDocument.java / PdfDocument.java / ExcelDocument.java**: Concrete classes implementing the `Document` interface.
* **DocumentFactory.java**: The factory class that handles document creation logic based on text inputs.
* **Main.java**: The client driver class demonstrating object creation and testing invalid input handling.

## How to Run
1. Open the terminal and navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/Design-Principles-Patterns/Factory-Method-Pattern
   ```
2. Compile the Java files:
   ```bash
   javac src/com/cognizant/factory/*.java -d bin
   ```
3. Run the application:
   ```bash
   java -cp bin com.cognizant.factory.Main
   ```

## Expected Output
```text
Opening Word Document
Opening PDF Document
Opening Excel Document
Invalid document type
```
