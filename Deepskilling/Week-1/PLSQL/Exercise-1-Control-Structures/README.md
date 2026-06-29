# PL/SQL Control Structures (Exercise 1)

## Objective
Practice PL/SQL conditional control structures (loops, IF-THEN statements) and cursor operations using three real-world banking database scenarios.

## Folder Structure
```
Deepskilling/Week-1/PLSQL/Exercise-1-Control-Structures/
├── README.md
├── schema.sql
├── sample_data.sql
└── solutions.sql
```

## Files Included
* **schema.sql**: Defines DDL commands for creating Customers, Accounts, Transactions, Loans, and Employees tables.
* **sample_data.sql**: Contains basic inserts to populate tables with qualifying customer, account, and loan profiles.
* **solutions.sql**: Contains the ALTER table statement and PL/SQL blocks for resolving Scenario 1 (senior loan discounts), Scenario 2 (VIP classification), and Scenario 3 (reminders on soon-due loans).

## Prerequisites
* Oracle Database SQL*Plus, SQL Developer, or an Oracle Database Express Edition (XE) instance.
* Enabled output display (`SET SERVEROUTPUT ON;`).

## How to Execute
1. Navigate to the SQL folder:
   ```bash
   cd Deepskilling/Week-1/PLSQL/Exercise-1-Control-Structures
   ```
2. Open your Oracle command-line utility (e.g., SQL*Plus) and log in.
3. Turn on screen display:
   ```sql
   SET SERVEROUTPUT ON;
   ```
4. Run the scripts in sequence:
   ```sql
   @schema.sql
   @sample_data.sql
   @solutions.sql
   ```

## Expected Output
```text
Discount applied: Customer 1 (Loan ID: 201) new interest rate: 7.5%

PL/SQL procedure successfully completed.

Table altered.

Customer 1 marked as VIP.
Customer 3 marked as VIP.

PL/SQL procedure successfully completed.

Reminder: Customer Alice Smith (Loan ID: 201) is due on 2026-07-15.

PL/SQL procedure successfully completed.
```
