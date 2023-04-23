#!/usr/local/bin/python3.7
# coding: utf-8

import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys



conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()

def signin(user_id,after_password):
    sql = "select PASSWORD,NICK_NAME from USER where USER_ID =%s;"
    cur.execute(sql,(user_id,))
    data = cur.fetchall()
    if len(data)==0:#もしユーザーが存在しない
        return "{"+"loginStatus"+":"+"Null"+"}"
    password=data[0][0]
    nick_name=data[0][1]
 
    #ここでrandomの変数をrand
    #passward hashか
    if after_password==password:
        return "{"+"loginStatus"+":"+"True"+"}"
    else:
        return "{"+"loginStatus"+":"+"False"+"}"
    
        #return "{"+"loginStatus"+":"+"False"+"}"

#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))

if __name__ == "__main__": 
    signin(1,"daidai")
    