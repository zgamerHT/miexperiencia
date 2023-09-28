SELECT Employees.FirstName,Employees.EmployeeId,coalesce(count(Employees.EmployeeId),0)as toatl from Employees
left join Orders on Employees.EmployeeID = ORDERs.EmployeeId
GROUP by Employees.EmployeeId