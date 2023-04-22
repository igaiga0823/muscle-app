# -*- coding: utf-8 -*-
from flask import Flask , render_template, request
from flask_cores import CORS

from LoginStart import LoginStart

app = Flask(__name__)
CORS(app)

@api.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
import json

app = Flask(__name__)


@app.route('/')
def hello():
    
    return 'ok'


@app.route('/confirm')
def confirm():
    return  '{ "sessionId": 12, "name": "admin",}'


@app.route('/loginstart', methods=["GET","POST"])
def loginstart():
    fromip = request.remote_addr
    responce = LoginStart(fromip)
    return responce

@app.route('/id', methods=["GET"])
def hello1():
    return '{id:1;}'

@app.route('/signup',methods=["GET","POST"])
def signup():
    return "hello"

@app.route('/signin',methods=["GET","POST"])
def signup():
    return 'ok'



@app.route('/render')
def index():
    return render_template('render.html')



import os


if __name__ == '__main__':
    app.run(debug=True)