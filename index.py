from flask import Flask, request, jsonify
from funcoes1 import roleta10


app = Flask("Youtube")


@app.route("/gacha", methods=["GET"])
def gachaSystem():

    chars = roleta10(10)

    return jsonify(chars)

app.run() # acessar como localhost:2000/gacha

