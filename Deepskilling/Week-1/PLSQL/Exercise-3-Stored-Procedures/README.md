# PL/SQL Stored Procedures (Exercise 3)

## Objective
Implement stored procedures in Oracle PL/SQL to handle bank processes: interest calculations, department-wide bonus updates, and fund transfers.

## Folder Structure
```
Deepskilling/Week-1/PLSQL/Exercise-3-Stored-Procedures/
├── README.md
└── procedures.sql
```

## Files Included
* **procedures.sql**: Defines the three PL/SQL stored procedures: `ProcessMonthlyInterest`, `UpdateEmployeeBonus`, and `TransferFunds`.

## Stored Procedures Implemented
1. **ProcessMonthlyInterest**: Selects all savings accounts and updates their balance by adding 1% interest.
2. **UpdateEmployeeBonus**: Updates employee salaries in a specified department by a given percentage.
3. **TransferFunds**: Safely transfers a given amount between source and destination accounts, checking for balance sufficiency and ID existence.

## How to Execute
1. Navigate to the project directory:
   ```bash
   cd Deepskilling/Week-1/PLSQL/Exercise-3-Stored-Procedures
   ```
2. Log into your Oracle SQL client (SQL*Plus, SQL Developer, XE).
3. Ensure server output is enabled:
   ```sql
   SET SERVEROUTPUT ON;
   ```
4. Compile the procedures file:
   ```sql
   @procedures.sql
   ```
5. Run test calls:
   ```sql
   -- Test interest calculation
   EXEC ProcessMonthlyInterest;
   
   -- Test bonus update
   EXEC UpdateEmployeeBonus('Finance', 5);
   
   -- Test successful transfer
   EXEC TransferFunds(101, 102, 500);
   
   -- Test insufficient balance failure
   EXEC TransferFunds(102, 101, 99999);
   ```

## Expected Output
```text
Monthly interest of 1% applied to all Savings accounts.

PL/SQL procedure successfully completed.

Updated salary with 5% bonus for department: Finance

PL/SQL procedure successfully completed.

Transfer Successful: $500 transferred from Account 101 to Account 102.

PL/SQL procedure successfully completed.

Transfer Failed: Account 102 has insufficient balance ($9000) for the transfer of $99999.

PL/SQL procedure successfully completed.
```
