-- Scenario 1: Apply 1% interest rate discount to loans of customers over 60 years old
DECLARE
    CURSOR c_customers_loans IS
        SELECT c.CustomerID, c.DOB, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID;
        
    v_age NUMBER;
BEGIN
    FOR r IN c_customers_loans LOOP
        v_age := MONTHS_BETWEEN(SYSDATE, r.DOB) / 12;
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = r.LoanID;
            DBMS_OUTPUT.PUT_LINE('Discount applied: Customer ' || r.CustomerID || ' (Loan ID: ' || r.LoanID || ') new interest rate: ' || (r.InterestRate - 1) || '%');
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Scenario 2: Add IsVIP column if not exists, and mark customers with balance > 10000 as VIP
ALTER TABLE Customers ADD (IsVIP VARCHAR2(5) DEFAULT 'FALSE');

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Balance
        FROM Customers;
BEGIN
    FOR r IN c_customers LOOP
        IF r.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = r.CustomerID;
            DBMS_OUTPUT.PUT_LINE('Customer ' || r.CustomerID || ' marked as VIP.');
        ELSE
            UPDATE Customers
            SET IsVIP = 'FALSE'
            WHERE CustomerID = r.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Scenario 3: Print a loan due date reminder for loans ending in the next 30 days
DECLARE
    CURSOR c_loans_due IS
        SELECT c.Name, l.LoanID, l.EndDate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR r IN c_loans_due LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || r.Name || ' (Loan ID: ' || r.LoanID || ') is due on ' || TO_CHAR(r.EndDate, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
