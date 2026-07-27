-- Exercise 1 : Control Structures

SET SERVEROUTPUT ON;

---------------------------------------------------------
-- Scenario 1
-- Apply 1% discount to loan interest for customers above 60
---------------------------------------------------------

BEGIN
    FOR rec IN (
        SELECT c.CustomerID, l.LoanID
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE c.Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = rec.LoanID;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Loan interest updated successfully.');
END;
/

---------------------------------------------------------
-- Scenario 2
-- Set VIP flag for balance greater than 10000
---------------------------------------------------------

BEGIN
    FOR rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP='TRUE'
        WHERE CustomerID=rec.CustomerID;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('VIP customers updated.');
END;
/

---------------------------------------------------------
-- Scenario 3
-- Loan reminders
---------------------------------------------------------

BEGIN
    FOR rec IN (
        SELECT CustomerName, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE+30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan due for '
            || rec.CustomerName
            || ' on '
            || rec.DueDate
        );
    END LOOP;
END;
/