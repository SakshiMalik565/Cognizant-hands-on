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

## Algorithm Complexities (Big O Notation)

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Linear Search** | $\mathcal{O}(1)$ | $\mathcal{O}(N)$ | $\mathcal{O}(N)$ | $\mathcal{O}(1)$ |
| **Binary Search** | $\mathcal{O}(1)$ | $\mathcal{O}(\log N)$ | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ |

## Comparison of Linear vs Binary Search
1. **Ordering Requirement**: Linear Search can operate on unsorted datasets. Binary Search strictly requires the dataset to be sorted beforehand.
2. **Operations Count**: Linear Search scans elements sequentially. Binary Search repeatedly halves the remaining search area, drastically reducing checks.

## Which Search is Better and Why?
**Binary Search** is significantly better for searching large datasets because of its logarithmic time complexity ($\mathcal{O}(\log N)$). For example, finding an item in a list of 1,000,000 products:
* **Linear Search** requires up to **1,000,000 comparisons**.
* **Binary Search** requires at most **20 comparisons**.

However, if the array is unsorted and we only need to perform a single search, Linear Search may be preferred to avoid the overhead of sorting first ($\mathcal{O}(N \log N)$). For lookup-heavy systems, keeping a sorted array and using Binary Search is much more efficient.

## How to Run
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/Data-Structures-Algorithms/Ecommerce-Platform-Search
   ```
2. Compile the Java files:
   ```bash
   javac src/com/cognizant/ecommerce/*.java -d bin
   ```
3. Run the application:
   ```bash
   java -cp bin com.cognizant.ecommerce.Main
   ```

## Expected Output
```text
Searching using Linear Search...
Product Found: Product [ID=P102, Name=Mouse, Category=Accessories]

Searching using Binary Search...
Product Found: Product [ID=P102, Name=Mouse, Category=Accessories]

Searching for non-existent product (Camera)...
Product Not Found
```
