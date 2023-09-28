SELECT Suppliers.SupplierName,Suppliers.SupplierID,Products.ProductName from Suppliers
LEFT join  Products on Suppliers.SupplierID = Products.SupplierID

UNION

SELECT Suppliers.SupplierName,Suppliers.SupplierID,Products.ProductName from Products
LEFT join  Suppliers on Products.SupplierID = Suppliers.SupplierID

ORDER by Suppliers.SupplierID