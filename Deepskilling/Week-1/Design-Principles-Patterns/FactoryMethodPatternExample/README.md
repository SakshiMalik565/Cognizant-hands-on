# Factory Method Pattern Example

## Objective
Implement the Factory Method design pattern to instantiate different types of Document objects (Word, PDF, Excel) using separate concrete factory classes.

## Folder Structure
```
Deepskilling/Week-1/Design-Principles-Patterns/FactoryMethodPatternExample/
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
                ├── WordDocumentFactory.java
                ├── PdfDocumentFactory.java
                ├── ExcelDocumentFactory.java
                └── Main.java
```

## Files Used
* **Document.java**: Interface defining the `open()` method contract.
* **WordDocument.java / PdfDocument.java / ExcelDocument.java**: Concrete implementations of `Document`.
* **DocumentFactory.java**: Abstract factory class declaring the `createDocument()` method.
* **WordDocumentFactory.java / PdfDocumentFactory.java / ExcelDocumentFactory.java**: Concrete factory subclasses returning their respective document types.
* **Main.java**: Test runner demonstrating document creation via concrete factories.

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/Design-Principles-Patterns/FactoryMethodPatternExample
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
```
