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



conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
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

