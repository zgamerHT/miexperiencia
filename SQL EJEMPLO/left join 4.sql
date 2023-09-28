SELECT Products.ProductID, Products.ProductName,sum(OrderDetails.Quantity) as totalsold from Products 
left join OrderDetails on Products.ProductID = OrderDetails.ProductID
GROUP by Products.ProductID 
HAVING sum(OrderDetails.Quantity) > 0