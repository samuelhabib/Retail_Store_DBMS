from flask import Flask

app = Flask(__name__)


@app.route("/tshirts")
def tshirts():
    return{"tshirts" : ["tshirt1","tshirt2","tshirt3"]}


if __name__ == "__main__":
    app.run(debug=True)