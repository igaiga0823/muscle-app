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


def GetFriendList(user_id):
    sql1 = "select USER_ID1, USER_ID2  from FRIEND where (USER_ID1 =%s OR USER_ID2 =%s) AND DELETE_FLAG = 0 AND VALID_FLAG = 1;"
    cur.execute(sql1, (str(user_id), str(user_id),))
    datas = cur.fetchall()
    output = set()
    for data in datas:
        if str(data[0]) != str(user_id):
            output.add(str(data[0]))
        if str(data[1]) != str(user_id):
            output.add(str(data[1]))

    conn.commit()
    cur.close()
    conn.close()
    return {"friendList": list(output)}


if __name__ == "__main__":
    print(GetFriendList(1))
