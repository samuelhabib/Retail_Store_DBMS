from flask import Flask
from sqlalchemy import create_engine
from datetime import datetime

app = Flask(__name__)

engine = create_engine('postgres://ctewezrnhgjcor:a9fcd923e2a442383804b7a7c18bbe5d12a62546765b5eb69d1a1564a5b08826@ec2-3-94-232-234.compute-1.amazonaws.com:5432/d1mq2rb5g15j7')

@app.route("/tshirts")
def tshirts():
    return{"tshirts" : ["tshirt1","tshirt2","tshirt3"]}


if __name__ == "__main__":
    app.run(debug=True)