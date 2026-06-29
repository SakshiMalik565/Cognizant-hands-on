# E-commerce Platform Search Function

## Objective
Implement and compare Linear Search and Binary Search algorithms to find products within an e-commerce platform product list.

## Folder Structure
```
Deepskilling/Week-1/Data-Structures-Algorithms/Ecommerce-Platform-Search/
├── README.md
└── src/
    └── com/
        └── cognizant/
            └── ecommerce/
                ├── Product.java
                ├── SearchService.java
                └── Main.java
```

## Algorithm & Complexity

### Linear Search
* **Description**: Iterates through the list of products one-by-one from beginning to end to locate the target.
* **Time Complexity**: 
  * Best Case: $\mathcal{O}(1)$ (element found at index 0)
  * Average/Worst Case: $\mathcal{O}(N)$ (element at the end or not present)
* **Space Complexity**: $\mathcal{O}(1)$ (no additional memory used)

### Binary Search
* **Description**: Divides a sorted list of products in half repeatedly until the target is found.
* **Time Complexity**: 
  * Best Case: $\mathcal{O}(1)$ (element is at the middle)
  * Average/Worst Case: $\mathcal{O}(\log N)$
* **Space Complexity**: $\mathcal{O}(1)$ (iterative approach uses constant space)

### Difference between Linear Search and Binary Search
1. **Sort Requirement**: Linear Search works on unsorted arrays. Binary Search requires the array to be sorted alphabetically/numerically beforehand.
2. **Speed on Large Data**: Binary Search is exponentially faster for large datasets due to its logarithmic complexity, whereas Linear Search scales linearly.

## How to Run
1. Navigate to the project folder:
   ```bash
   cd Deepskilling/Week-1/Data-Structures-Algorithms/Ecommerce-Platform-Search
   ```
2. Compile the Java files:
   ```bash
   javac src/com/cognizant/ecommerce/*.java -d bin
   ```
3. Run the Main file:
   ```bash
   java -cp bin com.cognizant.ecommerce.Main
   ```

## Expected Output
```text
Searching using Linear Search...
Product Found: Product [ID=P102, Name=Mouse, Category=Accessories, Price=$25.5]

Searching using Binary Search...
Product Found: Product [ID=P102, Name=Mouse, Category=Accessories, Price=$25.5]

Searching for non-existent product (Camera) using Binary Search...
Product Not Found
```
