#!/usr/local/bin/python3.7
# coding: utf-8

import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
imoprt session

conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()

def signin(user_id,after_password):
    sql = "select PASSWORD from USER where USI_ID =%s;"
    cur.execute(sql,(user_id))
    #ここでrandomの変数をrand
    cur=cur
    #hashか
    if after_password==cur:
        session["user_id"]=user_id
        return {}
    else:
        return 




#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))

