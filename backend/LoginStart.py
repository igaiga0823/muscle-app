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




def LoginStart(ip):

    sql2 = "select SESSION_ID from LOGIN;"
    cur.execute(sql2)
    data = cur.fetchall()
    if len(data) == 0:
        maxID = 0
    else:
        maxID = max(data)[0]
    SESSION_ID = maxID + 1
    RANDOM_ID = random.randint(1,100000)
    sql3 = "INSERT INTO LOGIN (SESSION_ID, FROM_IP, RANDOM_ID) VALUES(%s,%s,%s);"
    cur.execute(sql3, (SESSION_ID, ip, RANDOM_ID, ))

    conn.commit()

    cur.close()
    conn.close()
    
    return SESSION_ID,RANDOM_ID

    # {
    #     id:dfsa,
    #     length:2,
    #     data:{
    #         [1,10],
    #         [1,14],
    #         [1,32],
    #     },
    # }
    
if __name__ == "__main__": 
    print(LoginStart(1234))
    