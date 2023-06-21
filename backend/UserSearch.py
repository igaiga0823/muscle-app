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
from datetime import datetime, timedelta

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


def UserSearch(user_name):
    sql1 = "select USER_ID  from USER where ( USER_NAME =%s OR USER_NICKNAME = %s ) AND DELETE_FLAG = 0;"
    cur.execute(sql1, (str(user_name), str(user_name),))
    data = cur.fetchall()
    output = []
    for i in range(len(data)):
        output.append(data[i][0])

    conn.commit()
    cur.close()
    conn.close()
    return {"data": output}


if __name__ == "__main__":
    print(UserSearch("daidai"))
