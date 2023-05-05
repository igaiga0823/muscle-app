# -*- coding: utf-8 -*-
from flask import Flask , render_template, request, jsonify

from Signin import Signin
from Signup import Signup
import json
from LoginStart import LoginStart
from flask_cors import CORS
from flask_mail import Mail, Message


# MD5のハッシュ値

app = Flask(__name__)
CORS(app)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587                             # TLSは587、SSLなら465
app.config['MAIL_USERNAME'] = 'muscle15app@gmail.com'
app.config['MAIL_PASSWORD'] = 'wftbwbmuugljmrnn'        # GmailのApp用のmパスワード設定をしておく必要あり
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'muscle15app@gmail.com'    # これがあるとsender設定が不要になる
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
    return 'ok'


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
    Signup(email_address,user_name,origin_password)
    response = jsonify({"status":"successful"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/render')
def index():
    return render_template('render.html')

import os

if __name__ == '__main__':
    app.run(debug=True)