from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Bienvenido a Tienda Online – Catálogo y ofertas"

@app.route("/producto/<nombre>")
def producto(nombre):
    return f"Producto: {nombre} – disponible."

@app.route("/categoria/<nombre>")
def categoria(nombre):
    return f"Categoría: {nombre} – explora nuestros productos."

@app.route("/carrito/<usuario>")
def carrito(usuario):
    return f"Carrito de {usuario} – revisa tus productos seleccionados."

if __name__ == "__main__":
    app.run(debug=True)
