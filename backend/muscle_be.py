# -*- coding: utf-8 -*-
from flask import Flask , render_template, request, jsonify

from Signin import signin
import json
from LoginStart import LoginStart


app = Flask(__name__)


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
    #request_data = request.get_json()
    response=signin(1,"daidai")
    print(response)
    json_response=jsonify(response)
    return json_response

@app.route('/signup/',methods=["GET","POST"])
def signup():
    req = request.args
    user_id = req.get("user_id")
    return 

@app.route('/render')
def index():
    return render_template('render.html')

import os

if __name__ == '__main__':
    app.run(debug=True)