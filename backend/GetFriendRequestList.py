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


def GetFriendRequestList(user_id):
    sql1 = "select FRIEND_ID, USER_ID1  from FRIEND where (USER_ID2 =%s OR USER_ID2 =%s) AND DELETE_FLAG = 0 AND VALID_FLAG = 0;"
    cur.execute(sql1, (str(user_id), str(user_id),))
    datas = cur.fetchall()
    output = []
    friendIdList = []
    for data in datas:

        friendIdList.append(str(data[0]))
        output.append(str(data[1]))

    conn.commit()
    cur.close()
    conn.close()
    return {"requestUserList": list(output), "requestFriendIdList": list(friendIdList)}


if __name__ == "__main__":
    print(GetFriendRequestList(1))
