#!/usr/local/bin/python3.7
# coding: utf-8
import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
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


def FriendRequest(user_id,friend_id):
    sql1 = "INSERT INTO FRIEND (USER_ID1, USER_ID2) VALUES(%s,%s);"
    cur.execute(sql1,(user_id, friend_id, ))

    ans =  { "Success" : "True"}

    conn.commit()
    cur.close()
    conn.close()
    return ans


if __name__ == "__main__":
    print(FriendRequest("daidai"))
