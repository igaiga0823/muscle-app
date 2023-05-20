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



def TrainDataPOST(json_data):
    
    menu = json_data["menu"]
    menu_id = json_data["menu_id"]
    user_id = json_data["user_id"]
    length = json_data["length"]
    kgData = json_data["kgData"]
    repData = json_data["repData"]
    date = json_data["date"]
    time = json_data["time"]
    status = True
    user_name = json_data["user_name"]
    # output = {"status":status, "menu":menu, "user_name":user_name }
    # return output
    
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
        sql3 = "INSERT INTO TRAINDATA (ID, USER_ID, MENU_ID, MENU, KG, REPS, DATE, SET_NUMBER) VALUES(%s,%s,%s,%s,%s,%s,%s,%s);"
        cur.execute(sql3, (start_set + i, user_id, menu_id, menu, kgData[i], repData[i], date, start_set + i))
    
        

    
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