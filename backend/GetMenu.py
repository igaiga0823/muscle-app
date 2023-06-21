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



def GetMenu(user_id):
    sql1 = "select MENU_ID, USER_ID, MENU_NAME from MENU where USER_ID =%s AND DELETE_FLAG = 0;"
    cur.execute(sql1, (str(user_id)))
    data = cur.fetchall()
    output = {"menuId": [], "userId": [], "menu": []}
    for i in data:
        output["menuId"].append(i[0])
        output["userId"].append(i[1])
        output["menu"].append(i[2])

    conn.commit()
    cur.close()
    conn.close()
    return output


if __name__ == "__main__":
    print(GetMenu(1))
