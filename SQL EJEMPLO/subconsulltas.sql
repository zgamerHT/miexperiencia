SELECT FirstName, LastName,
    (SELECT SUM(od.Quantity) 
     FROM Orders o, OrderDetails od
     WHERE o.EmployeeID = e.EmployeeID AND od.OrderID = o.OrderID
    ) AS unidad_vendida
FROM Employees e
WHERE (SELECT SUM(od.Quantity) 
       FROM Orders o, OrderDetails od
       WHERE o.EmployeeID = e.EmployeeID AND od.OrderID = o.OrderID
      ) > (SELECT AVG(unidad_vendida)
           FROM (SELECT (SELECT SUM(od.Quantity)
                         FROM Orders o, OrderDetails od
                         WHERE o.EmployeeID = e2.EmployeeID AND od.OrderID = o.OrderID
                        ) AS unidad_vendida
                 FROM Employees e2
                 GROUP BY e2.EmployeeID
                )
          );
