-- Exercise 3 : Stored Procedures

---------------------------------------------------------
-- Scenario 1
---------------------------------------------------------

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType='Savings';

    COMMIT;

END;
/

---------------------------------------------------------
-- Execute
---------------------------------------------------------

BEGIN
    ProcessMonthlyInterest;
END;
/

---------------------------------------------------------
-- Scenario 2
---------------------------------------------------------

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_department VARCHAR2,
    p_bonus NUMBER
)
AS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary*p_bonus/100)
    WHERE Department=p_department;

    COMMIT;

END;
/

---------------------------------------------------------
-- Execute
---------------------------------------------------------

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/