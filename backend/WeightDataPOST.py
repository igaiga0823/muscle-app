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
from datetime import datetime

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


def WeightForm(user_id,weight_data):
    today = datetime.today().date().strftime('%Y-%m-%d')#今日の日付 
    sql3 = "INSERT INTO WEIGHT (USER_ID,WEIGHT_DATA,DATE) VALUES(%s,%s,%s);"
    cur.execute(sql3, (user_id,weight_data,today))
    conn.commit()
    cur.close()
    conn.close()

if __name__ == "__main__": 
    WeightForm(1,65)








