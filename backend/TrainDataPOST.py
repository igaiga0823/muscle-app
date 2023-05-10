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

conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()



def TrainDataPOST(json):
    menu = json["menu"]
    user_id = json["user_id"]
    length = json["length"]
    kgData = json["kgData"]
    repData = json["repData"]
    date = json["date"]
    time = json["date"]
    status = True
    user_name = json["user_name"]
    
    # ID計算
    sql1 = "select * from TRAINDATA where 1;"
    cur.execute(sql1,())
    data = cur.fetchall()
    start_ID = len(data) + 1
    
    # 当日のその種目のセット数を取得する
    sql1 = "select * from TRAINDATA where USER_ID =%s and DATE=%s and MENU=%s;"
    cur.execute(sql1,(user_id,date,menu,))
    data = cur.fetchall()
    start_set = len(data) + 1

    for i in range(int(length)):
        sql3 = "INSERT INTO TRAINDATA (ID, USER_ID, MENU_ID, MENU, KG, REPS, DATE, SET_NUMBER) VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"
        cur.execute(sql3, (start_set + i, json["user_id"], json["menu_id"], json["menu"], json["kgData"][i], json["repData"][i], json["date"], start_set + i))
    
        

    
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
        "kgData": ['1','2','3'],
        "repData":['4','5','6'],
        "date":"2023-05-10",
        "time":"30"
    }
    TrainDataPOST(postData)