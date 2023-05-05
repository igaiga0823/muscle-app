# -*- coding: utf-8 -*-
from flask import Flask , render_template, request, jsonify
from flask_cors import CORS, cross_origin
from Signin import signin
import json
from LoginStart import LoginStart


app = Flask(__name__)
CORS(app)

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
@cross_origin()
def confirm():
    return  '{ "sessionId": 1232, "name": "admin" }'

@app.route('/loginstart',methods=["GET","POST"])
@cross_origin()
def loginstart():
    ip = request.remote_addr
    SESSION_ID,RANDOM_ID = LoginStart(ip)
    response = jsonify({"SESSION_ID": SESSION_ID, "RANDOM_ID": RANDOM_ID})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/signin',methods=["GET","POST"])
def signip():
    #request_data = request.get_json()
    response=signin(1,"daidai")
    json_response=jsonify(response)
    return json_response


@app.route('/render')
def index():
    return render_template('render.html')

import os

if __name__ == '__main__':
    app.run(debug=True)