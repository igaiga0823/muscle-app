#!/usr/local/bin/python3.7
# coding: utf-8
import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
from flask import Flask, current_app
from flask_mail import Message, Mail

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


def Weight(user_id, weight_data, date):
    sql3 = "INSERT INTO TRAINDATA (USER_ID,WEIGHT_DATA,DATE) VALUES(%s,%s,%s);"
    cur.execute(sql3, (user_id, weight_data, date))
    conn.commit()
    cur.close()
    conn.close()
