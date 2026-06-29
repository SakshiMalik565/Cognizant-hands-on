-- Insert Customers
INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'Alice Smith', TO_DATE('1955-05-12', 'YYYY-MM-DD'), 12000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Bob Jones', TO_DATE('1978-10-23', 'YYYY-MM-DD'), 8500, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (3, 'Charlie Brown', TO_DATE('1960-03-15', 'YYYY-MM-DD'), 15000, SYSDATE);

-- Insert Accounts
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastOpened)
VALUES (101, 1, 'Savings', 12000, TO_DATE('2020-01-15', 'YYYY-MM-DD'));

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastOpened)
VALUES (102, 2, 'Savings', 8500, TO_DATE('2021-06-20', 'YYYY-MM-DD'));

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastOpened)
VALUES (103, 3, 'Checking', 15000, TO_DATE('2019-11-05', 'YYYY-MM-DD'));

-- Insert Loans
-- Alice Smith (ID: 1) is over 60, EndDate is set to 2026-07-15 (within 30 days from June 2026).
INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, DurationYears, StartDate, EndDate)
VALUES (201, 1, 50000, 8.5, 5, TO_DATE('2021-07-15', 'YYYY-MM-DD'), TO_DATE('2026-07-15', 'YYYY-MM-DD'));

-- Charlie Brown (ID: 3) has a loan.
INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, DurationYears, StartDate, EndDate)
VALUES (202, 3, 30000, 7.0, 3, TO_DATE('2023-08-01', 'YYYY-MM-DD'), TO_DATE('2026-08-01', 'YYYY-MM-DD'));

-- Insert Employees
INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (301, 'John Doe', 'Manager', 75000, 'Finance', TO_DATE('2015-04-10', 'YYYY-MM-DD'));

COMMIT;
