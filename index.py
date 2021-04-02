from flask import Flask, request
from flask_cors import CORS
from funcoes1 import roleta10


app = Flask("Youtube")
CORS(app)

@app.route("/gacha", methods=["GET"])
def gachaSystem():

    chars = roleta10(10)

    return teste

if __name__ == "Youtube":
    app.run(debug=True)

app.run() # acessar como localhost:2000/gacha

