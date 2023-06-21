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



def GetFriendTimeLapse(user_id, start_date, end_date):
    sql1 = "select USER_ID1, USER_ID2  from FRIEND where (USER_ID1 =%s OR USER_ID2 =%s) AND DELETE_FLAG = 0 AND VALID_FLAG = 1;"
    cur.execute(sql1, (str(user_id), str(user_id),))
    datas = cur.fetchall()
    friendSet = set()
    for data in datas:
        if str(data[0]) != str(user_id):
            friendSet.add(str(data[0]))
        if str(data[1]) != str(user_id):
            friendSet.add(str(data[1]))
    friendList = list(friendSet)


    dataTimeLapse = []
    for friend in friendList:
        sql2 = "SELECT VIDEO_ID, VIDEO_NAME, USER_ID, COMMENT, LIKE_COUNT, DATETIME FROM USERVIDEO WHERE (USER_ID = %s AND DATETIME >= %s AND DATETIME <= %s) AND DELETE_FLAG = 0;"
        cur.execute(sql2, (str(friend),str(start_date),str(end_date),))
        datas = cur.fetchall()
        for data in datas:
            dataTimeLapse.append(data)
    dataTimeLapse.sort(key=lambda x: x[5]) #x[i]:iはとってきたSQLの中でキーとしたい位置　今回はDATETIME
    
    # datetime.datetimeオブジェクトを文字列に変換
    for data in dataTimeLapse:
        data[5] = data[5]
    output = {"Status":"Successfully", "datas":dataTimeLapse}

    conn.commit()
    cur.close()
    conn.close()
    return output


if __name__ == "__main__":
    print(GetFriendTimeLapse(28,"2020-06-17","2024-05-12"))
