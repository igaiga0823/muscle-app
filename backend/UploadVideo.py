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
import hashlib


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




def UploadVideo(user_id, filename, comment):
    sql1 = "INSERT INTO USERVIDEO (VIDEO_NAME, USER_ID, COMMENT) VALUES(%s,%s,%s);"
    cur.execute(sql1,(filename, user_id, comment, ))

    ans =  { "Success" : "True"}

    conn.commit()
    cur.close()
    conn.close()
    return ans
    
        #return "{"+"loginStatus"+":"+"False"+"}"

#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))

if __name__ == "__main__": 
    UploadVideo("1","aaaa")
    