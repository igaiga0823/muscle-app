# -*- coding: utf-8 -*-
from flask import Flask , render_template, request, jsonify,current_app
import json
from flask_cors import CORS
from flask_mail import  Message,Mail


from Signin import Signin
from Signup import Signup
from Email import Email
from Check import Check
from Config import Config
from LoginStart import LoginStart
from TrainDataPOST import TrainDataPOST

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
mail = Mail(app)


# @api.after_request
# def after_request(response):
#   response.headers.add('Access-Control-Allow-Origin', '*')
#   response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#   response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
#   return response
# import json

@app.route('/')
def hello():
    return 'あ'


@app.route('/confirm')
def confirm():
    response = jsonify({"SESSION_ID": 11232, "name": "admin"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/loginstart',methods=["GET","POST"])
def loginstart():
    
    ip = request.remote_addr
    SESSION_ID,RANDOM_ID = LoginStart(ip)
    response = jsonify({"SESSION_ID": SESSION_ID, "RANDOM_ID": RANDOM_ID})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/signin',methods=["GET","POST"])
def signin():
    req = request.args
    user_name = req.get("user_name")
    after_password = req.get("after_password")
    session_id = req.get("session_id")
    # response = {"user_name": user_name, "after_password": after_password, "session_id": session_id }
    response = Signin(user_name,after_password,session_id)
    response=jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    
    try:
        req = request.args
        user_name = req.get("user_name")
        after_password = req.get("after_password")
        session_id = req.get("session_id")
        # response = {"user_name": user_name, "after_password": after_password, "session_id": session_id }

        response = signin(user_name, after_password, session_id)
        response = jsonify(response)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except:
        response = {"Message":"ok"}
        response=jsonify(response)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

@app.route('/signup',methods=["GET","POST"])
def signup():
    req = request.args
    email_address = req.get("email_address")
    user_name = req.get("user_name")
    origin_password = req.get("origin_password")
    try:
        Signup(email_address,user_name,origin_password)
        # 'https:url/validate?email_address=ooo'   
        mail_message=f"{user_name}ご登録ありがとうございます\nhttps://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/check/{email_address}"
        with app.app_context():
            msg = Message('muscle-app', recipients=[email_address])
            msg.body = mail_message.encode("utf-8")
            mail.send(msg)
        response = jsonify({"status":"successful"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    
    except:
        response = jsonify({"status":"failed"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

@app.route('/render')
def index():
    return render_template('render.html')

@app.route('/check/<email_address>')
def check(email_address):
    response=Check(email_address)
    return response

#メールが正常に機能しているかどうか
@app.route('/emailtest')
def email():
    data=Email()
    mail_message="ああ\nあ"
    with app.app_context():
        for email_address in data:
            msg = Message('muscle-app', recipients=["daidevelop289@gmail.com"])
            msg.body = mail_message.encode("utf-8")
            mail.send(msg)
    return "OK"

@app.route("/test", methods=["POST","GET"])
def test():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request"}), 400

    data = request.json # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
    return jsonify(data) # サンプルのためそのまま返す
   
    
@app.route("/traindata/post", methods=["POST","GET"])
def traindatapost():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request"}), 400

    try:
        data = request.json # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        output = TrainDataPOST(data)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    
    except:
        return jsonify({"error": "Missing JSON in request"}), 400
import os

if __name__ == '__main__':
    app.run(debug=True)


    
    

