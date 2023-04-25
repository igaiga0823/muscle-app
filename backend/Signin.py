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



def signin(user_name, after_password, session_id):
    sql = "select PASSWORD, USER_NAME,EMAIL_ADDRESS,USER_ID from USER where USER_NAME =%s;"
    cur.execute(sql,(user_name,))
    data = cur.fetchall()
    

    if len(data)==0:#もしユーザーが存在しない
        return "{"+"loginStatus"+":"+"Null"+"}"
    for i in range(len(data)):
        originPassword = data[i][0]
        user_name = data[i][1]
        user_id = data[i][3]
        #ここでrandomの変数をrand
        #passward hashか
        if after_password == originPassword:
            ans = { "loginStatus" : "True", "userId" : user_id, "userName" : user_name }

            conn.commit()

            cur.close()
            conn.close()
            return ans

    ans = { "loginStatus" : "False" }

    conn.commit()

    cur.close()
    conn.close()
    return ans
    
        #return "{"+"loginStatus"+":"+"False"+"}"

#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))

if __name__ == "__main__": 
    signin("test","b59c67bf196a4758191e42f76670ceba",11)
    