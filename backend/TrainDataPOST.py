#!/usr/local/bin/python3.7
# coding: utf-8

import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
import random

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


def time_chenge(time):
    # ":" を区切り文字として時間と分に分割
    hours, minutes = time.split(":")
    # 分を整数に変換
    hours = int(hours)
    minutes = int(minutes)

    # 時間と分を結合して合計分数を計算
    total_minutes = hours * 60 + minutes
    return total_minutes

def TrainDataPOST(json_data):
    
    menu = json_data["menu"]
    menu_id = json_data["menu_id"]
    user_id = json_data["user_id"]
    length = json_data["length"]
    kgData = json_data["kgData"]
    repData = json_data["repData"]
    date = json_data["date"]
    x = time_chenge(json_data["time"])
    time = float(x)/float(length)
    status = True
    user_name = json_data["user_name"]
    
    # ID計算
    sql1 = "select count(*) from TRAINDATA where 1;"
    cur.execute(sql1,())
    data = cur.fetchall()
    start_ID = data[0][0]+1
    
    # 当日のその種目のセット数を取得する
    sql1 = "select * from TRAINDATA where USER_ID =%s and DATE=%s and MENU=%s;"
    cur.execute(sql1,(user_id,date,menu,))
    data = cur.fetchall()
    start_set = len(data) + 1

    for i in range(int(length)):
        sql3 = "INSERT INTO TRAINDATA (USER_ID, MENU_ID, MENU, TIME, KG, REPS, DATE, SET_NUMBER) VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"
        cur.execute(sql3, (user_id, menu_id, menu, time, kgData[i], repData[i], date, start_set + i))
    
        

    
    conn.commit()
    cur.close()
    conn.close()
    
    
    output = {"status":status, "menu":menu, "user_name":user_name}
    return output


if __name__ == "__main__": 
    postData = {
        "user_id": "1",
        "user_name":"並木",
        "length":"3",
        "menu_id":"3",
        "menu":"ベンチプレス",
        "kgData": ['1','12','3'],
        "repData":['4','123','6'],
        "date":"2023/05/13",
        "time":"00:30"
    }
    TrainDataPOST(postData)