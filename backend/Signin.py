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




def Signin(user_name, after_password, session_id):
    sql1 = "select PASSWORD, USER_NAME,EMAIL_ADDRESS,USER_ID,VALID_ACCOUNT from USER where USER_NAME =%s;"
    cur.execute(sql1,(user_name,))
    data = cur.fetchall()
    if len(data)==0:#もしユーザーが存在しない
        return  { "loginStatus" : "Null" }
    sql2 = "select RANDOM_ID from LOGIN where SESSION_ID =%s;"
    cur.execute(sql2,(session_id, ))
    randomId=cur.fetchall()
    for i in range(len(data)):
        originPassword = f"{data[i][0]}{randomId[0][0]}"
        user_name = data[i][1]
        user_id = data[i][3]
        valid_account=data[i][4]
        originPassword= hashlib.md5(originPassword.encode('utf-8')).hexdigest()#ハッシュ化
        #ここでrandomの変数をrand
        #passward hashか
        if after_password == originPassword and valid_account==1:
            ans =  { "loginStatus" : "True", "userId" : user_id, "userName" : user_name }

            conn.commit()
            cur.close()
            conn.close()
            return ans

    ans =  { "loginStatus" : "False"}

    conn.commit()
    cur.close()
    conn.close()
    return ans
    
        #return "{"+"loginStatus"+":"+"False"+"}"

#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))

if __name__ == "__main__": 
    Signin("test","b59c67bf196a4758191e42f76670ceba",4)
    