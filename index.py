from flask import Flask, request, jsonify
from flask_cors import CORS
from funcoes1 import roleta10


app = Flask("__name__")
CORS(app)

@app.route()
def index():

    chars = roleta10(10)

    return jsonify(chars)


if __name__ == "__main__":
    app.run(debug=True)
    

#app.run() # acessar como localhost:2000/gacha

