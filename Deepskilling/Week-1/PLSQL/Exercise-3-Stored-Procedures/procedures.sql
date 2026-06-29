-- Scenario 1: Calculate and update savings account balances with 1% interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance * 1.01
    WHERE AccountType = 'Savings';
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% applied to all Savings accounts.');
END;
/

-- Scenario 2: Apply bonus percentage to employee salary in a specific department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_dept IN VARCHAR2,
    p_bonus IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary * (1 + p_bonus / 100)
    WHERE Department = p_dept;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Updated salary with ' || p_bonus || '% bonus for department: ' || p_dept);
END;
/

-- Scenario 3: Safe fund transfer between two account IDs
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_src_acc IN NUMBER,
    p_dest_acc IN NUMBER,
    p_amount IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_src_acc;

    IF v_balance >= p_amount THEN
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_src_acc;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_dest_acc;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer Successful: $' || p_amount || ' transferred from Account ' || p_src_acc || ' to Account ' || p_dest_acc || '.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer Failed: Account ' || p_src_acc || ' has insufficient balance ($' || v_balance || ') for the transfer of $' || p_amount || '.');
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Transfer Failed: One or both Account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer Failed: ' || SQLERRM);
END;
/
