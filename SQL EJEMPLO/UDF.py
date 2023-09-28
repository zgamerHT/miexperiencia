import sqlite3

square = lambda n: n * n  # Creamos la función que enviaremos a la base de datos

conn = sqlite3.connect(
    "C:\\Users\\darkf\\OneDrive\\Escritorio\\DISEÑO WEB\\SQL\\SQL EJEMPLO\\Northwind.db"
)  # Instanciamos la base de datos
conn.create_function(
    "square", 1, square
)  # Creamos la función dentro de la base de datos ('nombre de la función a crear', cuántos parámetros al usuario, la función)

cursor = conn.cursor()
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print(tables)
