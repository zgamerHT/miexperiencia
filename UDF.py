import sqlite3

square = lambda n: n * n  # creamos la funcion que enviaremos a la base de datos


conn = sqlite3.connect("Northwind.db")  # instanciamos la base de datos
conn.create_function(
    "square", 1, square
)  # creamos la funcion dentro de la base  de datos("nombre de la funcion a crear",cuantos parametros al usuario,la funcion)

cursor = conn.cursor()
cursor.execute(
    """
               SELECT * FROM Products
               GROUP BY ProductID
               ORDER BY ProductID
               """
)

results = cursor.fetchall()
print(results)
