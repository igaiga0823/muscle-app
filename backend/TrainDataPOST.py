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
    
    print(json)
    
    # 当日のその種目のセット数を取得する
    sql1 = "select * from TRAINDATA where USER_ID =%s and DATE=%s and MENU=%s;"
    cur.execute(sql1,(user_id,date,menu,))
    data = cur.fetchall()
    print(len(data))
    

    
    conn.commit()
    cur.close()
    conn.close()
    
    
    output = {"status":status, "menu":menu, "user_name":user_name }
    return output


if __name__ == "__main__": 
    data = {
   "user_id": "1",
   "user_name":"1",
   "length":"2",
   "menu":"ベンチプレス",
   "kgData": "23",
   "repData":"10",
   "date":"2023-05-10",
   "time":"30"
    }
    TrainDataPOST(data)