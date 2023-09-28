SELECT c.CustomerName,c.CustomerID,coalesce(count(o.OrderID),0)as stack from Customers c
left JOIN orders o on c.CustomerID = o.CustomerID
GROUP by c.CustomerID 