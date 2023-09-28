import sqlite3
import pandas as pd
import matplotlib.pyplot as plt

conn = sqlite3.connect("Northwind.db")
# obteniendo productos
query = """
    SELECT ProductName, SUM(Price * Quantity) as Revenue
    FROM OrderDetails 
    JOIN Products ON Products.ProductID = OrderDetails.ProductID
    GROUP BY OrderDetails.ProductID
    ORDER BY Revenue DESC
    LIMIT 10
"""

top_products = pd.read_sql_query(query, conn)

top_products.plot(
    x="ProductName", y="Revenue", kind="bar", figsize=(10, 5), legend=False
)

plt.title("Los 10 productos más rentables")
plt.xlabel("Productos")
plt.xticks(rotation=90)
plt.show()
# obteniendo los empleados
query2 = """
    SELECT FirstName, LastName as Employee, COUNT(*) as Total
    FROM Orders 
    JOIN Employees ON Employees.EmployeeID = Orders.EmployeeID
    GROUP BY Orders.EmployeeID
    ORDER BY Total DESC
    LIMIT 10
"""
top_employees = pd.read_sql_query(query2, conn)
top_employees.plot(x="Employee", y="Total", kind="bar", figsize=(10, 5), legend=False)

plt.title("los 10 Empleados más efectivos")
plt.xlabel("Empleados")
plt.ylabel("Total vendido")
plt.xticks(rotation=45)
plt.show()

# obtenemos el total recaudado del empleado
query3 = """
SELECT 
    E.EmployeeID, 
    E.LastName AS EmployeeLastName, 
    COUNT(OD.ProductID) AS TotalProductsSold,
    SUM(OD.Quantity * P.Price) AS TotalRevenue
FROM 
    Employees E
JOIN 
    Orders O ON E.EmployeeID = O.EmployeeID
JOIN 
    OrderDetails OD ON O.OrderID = OD.OrderID
JOIN 
    Products P ON OD.ProductID = P.ProductID
GROUP BY 
    E.EmployeeID, E.LastName
ORDER BY 
    TotalRevenue DESC;
"""
top_employees = pd.read_sql_query(query3, conn)
top_employees.plot(
    x="EmployeeLastName", y="TotalRevenue", kind="bar", figsize=(10, 5), legend=False
)

plt.title(" top 10 total recaudado de empleados")
plt.xlabel("Empleados")
plt.ylabel("Total vendido")
plt.xticks(rotation=45)
plt.show()
