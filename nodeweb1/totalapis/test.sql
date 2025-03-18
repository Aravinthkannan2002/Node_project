update family set entereddate "2024-06-03"where userid="28";













 update tourpersons set entereddate "2023-12-05"where userid="21";



 update tourperson set joineddate = case when YEAR(entereddate)="2022"then"2022"end where YEAR(entereddate)in("2022");




    UPDATE tourpersons SET joiningdate = DATE_FORMAT(entereddate, '%Y-%m-%d')WHERE YEAR(entereddate) = 2022;






SELECT *
FROM tourpersons
WHERE status IS NULL;


SELECT CONCAT(UCASE(SUBSTRING(username, 1, 1)), SUBSTRING(username, 2)) AS username FROM tourpersons;




select tourpersons.entereddate,tourpersons.updateddate,family.name,family.address from tourpersons inner join family on tourpersons.userid =f
amily.userid;


select concat(ucase(substring(username,1,1)),substring(username,2))as username from tourpersons;


SELECT column_name(s) FROM table1 FULL OUTER JOIN table2 ON table1.column_name = table2.column_name WHERE condition;



SELECT TO_CHAR(your_date_column, 'YYYY-MM-DD') AS formatted_date FROM your_table;


SELECT COUNT(*) AS count_entries, DATE_FORMAT(entereddate, '%Y-%m-%d') AS formatted_date FROM tourpersons;



//////////////////
SELECT status,entereddate,COUNT(status), DATE_FORMAT(entereddate, '%Y-%M-%D')FROM tourpersons where year(entereddate)="2024" group by entereddate;




SELECT 
    entereddate, 
    username, 
    COUNT(*) AS user_count 
FROM 
    tourpersons 
WHERE 
    YEAR(entereddate) = 2024 
    AND MONTH(entereddate) BETWEEN 1 AND 3 
GROUP BY 
    username, 
    entereddate;
