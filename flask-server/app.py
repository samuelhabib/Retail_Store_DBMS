from flask import Flask, request, jsonify, session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from flask_cors import CORS
from functools import wraps
import json
import random

app = Flask(__name__)
app.secret_key = "12345"
CORS(app)
engine=create_engine("postgresql://ctewezrnhgjcor:a9fcd923e2a442383804b7a7c18bbe5d12a62546765b5eb69d1a1564a5b08826@ec2-3-94-232-234.compute-1.amazonaws.com:5432/d1mq2rb5g15j7")
db = scoped_session(sessionmaker(bind=engine))


def logged_in(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'loggedIn' in session:
            return f(*args, **kwargs)
        else:
            return '<h1>Must be logged in to access this page</h1>'
    return wrap


@app.route('/register', methods = ['POST'])
def register():
    if request.method == 'POST':
        data = request.json
        random_id = random.randint(0, 1000)
        username = str(data['username'])
        password = str(data['password'])
        admin_address = str(data['address'])
        try:
            phone = int(data['phone'])
        except:
            phone = 0

        if data['userType'] == 'customer':
            db.execute("INSERT INTO customers(customer_id, username, password, customer_address, phone) VALUES(:id, :username, :password, :address, :phone)", {"id":random_id, "username":username, "password":password, "address":admin_address, "phone":phone})
            db.commit()
        else:
            db.execute("INSERT INTO admins(admin_id, username, password, admin_address, phone) VALUES(:id, :username, :password, :address, :phone)", {"id":random_id, "username":username, "password":password, "address":admin_address, "phone":phone})
            db.commit()

        session['loggedIn'] = True
        session['username'] = username
        session['userType'] = str(data['userType'])
        return jsonify(alert="success")



@app.route('/login', methods = ['POST'])
def login():
    if request.method == 'POST':
        data = request.json
        username = str(data['username'])
        password = str(data['password'])

        admin_attempt = db.execute("SELECT * FROM admins WHERE username = :username AND password = :password", {"username":username, "password":password}).fetchone()
        if admin_attempt is None:
            customer_attempt = db.execute("SELECT * FROM customers WHERE username = :username AND password = :password", {"username":username, "password":password}).fetchone()
            if customer_attempt is None:
                return jsonify(alert="error")
            else:
                session['loggedIn'] = True
                session['username'] = username
                session['userType'] = 'customer'
                return jsonify(alert="customer")
        else:
            session['loggedIn'] = True
            session['username'] = username
            session['userType'] = 'admin'
            return jsonify(alert="admin")

    return jsonify(alert="error")



@app.route("/getusertype")
def getUserType():
    return jsonify(type = str(session['userType']))



@app.route("/getallproducts")
def getAllProducts():
    rv = db.execute("SELECT * FROM inventory INNER JOIN products USING(product_id) WHERE quantity > 0").fetchall()
    all_categories = {
        0: 'Tshirt',
        1: 'Pants',
        2: 'Jacket',
        3: 'Sweater',
        4: 'Socks'
    }
    payload = []
    content = {}
    for result in rv:
        content = {'id': result[0], 'quantity': result[2], 'productName': result[3], 'productDesc': result[4], 'category': all_categories[int(result[5])], 'price':result[6], 'picture':result[7]}
        payload.append(content)
        content = {}
    return jsonify(payload)







@app.route("/addproduct", methods = ['POST'])
def addproduct():
    if request.method == 'POST':
        data = request.json

        random_id = random.randint(0, 1000)
        inv_id = random.randint(0, 1000)
        productName = str(data['productName'])
        productDescription = str(data['productDescription'])
        category = int(data['category'])
        price = float(data['price'])
        picture = str(data['picture'])

        if session['userType'] == 'admin':
            db.execute("INSERT INTO products(product_id, product_name, product_description, category_id, price, picture) VALUES(:id, :name, :desc, :category, :price, :picture)", {"id":random_id, "name":productName, "desc":productDescription, "category":category, "price":price, "picture":picture})
            db.execute("INSERT INTO inventory(inventory_id, product_id, quantity) VALUES(:inv_id, :prod_id, :quantity)", {"inv_id":inv_id, "prod_id":random_id, "quantity":1})
            db.commit()
            return jsonify(alert="success")

        return jsonify(alert="error")



@app.route("/existingproduct", methods = ['POST'])
def existingProduct():
    if request.method == 'POST':
        data = request.json
        id = int(data['productID'])

        if session['userType'] == 'admin':
            db.execute("UPDATE inventory SET quantity = quantity + 1 WHERE product_id = :id", {"id":id})
            db.commit()
            return jsonify(alert="success")

        return jsonify(alert="error")




@app.route("/alterfilter", methods = ['POST'])
def alterFilter():
    if request.method == 'POST':
        data = request.json
        try:
            category_id = int(data['categoryID'])
            rv = db.execute(f"SELECT * FROM inventory INNER JOIN products USING(product_id) WHERE quantity > 0 AND category_id = {category_id}").fetchall()
        except:
            rv = db.execute("SELECT * FROM inventory INNER JOIN products USING(product_id) WHERE quantity > 0").fetchall()

        all_categories = {
        0: 'Tshirt',
        1: 'Pants',
        2: 'Jacket',
        3: 'Sweater',
        4: 'Socks'
    }
    payload = []
    content = {}
    for result in rv:
        content = {'id': result[0], 'quantity': result[2], 'productName': result[3], 'productDesc': result[4], 'category': all_categories[int(result[5])], 'price':result[6], 'picture':result[7]}
        payload.append(content)
        content = {}
    return jsonify(payload)




@app.route("/logout", methods = ['GET'])
@logged_in
def logout():
    session.clear()
    return jsonify(alert="success")


if __name__ == "__main__":
    app.run(debug=True)