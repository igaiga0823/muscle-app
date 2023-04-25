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



conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()



def Signin(user_name, after_password, session_id):
    sql1 = "select PASSWORD, USER_NAME,EMAIL_ADDRESS,USER_ID from USER where USER_NAME =%s;"
    cur.execute(sql1,(user_name,))
    data = cur.fetchall()
    if len(data)==0:#もしユーザーが存在しない
        return  { "loginStatus" : "Null" }
    sql2 = "select RANDOM_ID from LOGIN where SESSION_ID =%s;"
    cur.execute(sql2,(session_id, ))
    randomId=cur.fetchall()
    for i in range(len(data)):
        print(data[i][0])
        originPassword = data[i][0]+str(92271)
        print(originPassword)
        print(randomId[0][0])
        print(after_password)
        originPassword= hashlib.md5(originPassword.encode()).hexdigest()#ハッシュ化
        print(originPassword)
        user_name = data[i][1]
        user_id = data[i][3]
        #ここでrandomの変数をrand
        #passward hashか
        if after_password == originPassword:
            ans =  { "loginStatus" : "True", "userId" : user_id, "userName" : user_name }

            conn.commit()
            cur.close()
            conn.close()
            print(ans)
            return ans

    ans =  { "loginStatus" : "False"}

    conn.commit()
    cur.close()
    conn.close()
    print(ans)
    return ans
    
        #return "{"+"loginStatus"+":"+"False"+"}"

#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))

if __name__ == "__main__": 
    Signin("test","d361929a67002c408013674f0459441f",254)
    