SELECT Products.ProductID, Products.ProductName,coalesce(sum(OrderDetails.Quantity),0) as totalsold from Products 
left join OrderDetails on Products.ProductID = OrderDetails.ProductID
GROUP by Products.ProductID 