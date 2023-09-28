import sqlite3
import pandas as pd
import matplotlib.pyplot as plt

conn = sqlite3.connect("Northwind.db")
# obteniendo productos
query = """
SELECT FirstName, LastName,
    (SELECT SUM(od.Quantity) 
     FROM Orders o, OrderDetails od
     WHERE o.EmployeeID = e.EmployeeID AND od.OrderID = o.OrderID
    ) AS Promedio
FROM Employees e
WHERE (SELECT SUM(od.Quantity) 
       FROM Orders o, OrderDetails od
       WHERE o.EmployeeID = e.EmployeeID AND od.OrderID = o.OrderID
      ) > (SELECT AVG(Promedio)
           FROM (SELECT (SELECT SUM(od.Quantity)
                         FROM Orders o, OrderDetails od
                         WHERE o.EmployeeID = e2.EmployeeID AND od.OrderID = o.OrderID
                        ) AS Promedio
                 FROM Employees e2
                 GROUP BY e2.EmployeeID
                )
          )
                 ORDER BY Promedio desc
;

"""

top_products = pd.read_sql_query(query, conn)

top_products.plot(x="LastName", y="Promedio", kind="bar", figsize=(10, 5), legend=False)

plt.title("TOP 3 EMPLEADOS DE MAYOR PROMEDIO")
plt.xlabel("EMLPEADOS")
plt.xticks(rotation=45)
plt.show()
