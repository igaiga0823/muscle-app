#!/usr/local/bin/python3.7
# coding: utf-8
import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
from flask import Flask,current_app
from flask_mail import  Message,Mail



import os
from dotenv import load_dotenv

load_dotenv('.env') 

# 環境変数の情報

DB_HOST = os.environ.get("DB_HOST")
DB_USER = os.environ.get("DB_USER")
DB_PASSWORD = os.environ.get("DB_PASSWORD")
DB = os.environ.get("DB")

conn = MySQLdb.connect(
    host=DB_HOST,
    user=DB_USER,
    passwd=DB_PASSWORD,
    db=DB,
    charset='utf8')
cur = conn.cursor()

def MyPage(user_id):
    sql1 = "select USER_NAME from USER where USER_ID=%s"
    cur.execute(sql1,(user_id,))
    data = cur.fetchall()
    return data
@app.route("/mypage", methods=["GET","POST"])
def mypage():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request"}), 400
    data=request.json
    response="aa"
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

