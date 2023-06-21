#!/usr/local/bin/python3.7
# coding: utf-8

import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys


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


def Signup(email_address,user_name,origin_password):
    sql = "INSERT INTO USER (EMAIL_ADDRESS,PASSWORD,USER_NAME) VALUES(%s,%s,%s);"
    cur.execute(sql, (email_address,origin_password,user_name))
    conn.commit()
    cur.close()
    conn.close()


if __name__ == "__main__": 
    Signup("dai3258sa@gmail.com","b59c67bf196a4758191e42f76670ceba","dai")

