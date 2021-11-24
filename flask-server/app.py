from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)
engine=create_engine("postgresql://ctewezrnhgjcor:a9fcd923e2a442383804b7a7c18bbe5d12a62546765b5eb69d1a1564a5b08826@ec2-3-94-232-234.compute-1.amazonaws.com:5432/d1mq2rb5g15j7")
db = scoped_session(sessionmaker(bind=engine))


@app.route("/Main")
def Main():
    return('<h1>lol</h1>')



@app.route("/tshirts")
def tshirts():
    userid = 0
    username = 'Sam'
    user_pass = '123'
    admin_address = 'Haytham Street'
    phone = 123123123

    # db.execute("INSERT INTO admins(admin_id, username, user_pass, admin_address, phone) VALUES(:id, :username, :user_pass, :admin_address, :phone)", {"id":userid, "username":username, "user_pass":user_pass, "admin_address":admin_address, "phone":phone})
    # db.commit()
    return{"tshirts" : ["tshirt1","tshirt2","tshirt3"]}


if __name__ == "__main__":
    app.run(debug=True)