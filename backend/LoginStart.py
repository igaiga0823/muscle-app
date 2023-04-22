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



def LoginStart(ip):
    sql2 = "select SESSION_ID from LOGIN;"
    cur.execute(sql2)
    data = cur.fetchall()
    maxID = max(data)
    SESSION_ID = maxID + 1
    RANDOM_ID = random.randint(1,100000)
    sql3 = "INSERT INTO LOGIN from (SESSION_ID, FROM_IP, RANDOM_ID) VALUES(%s,%s,%s);"
    cur.execute(sql3, (SESSION_ID, ip, RANDOM_ID, ))
    conn.commit()

    cur.close()
    conn.close()
    return '{' + ' ' + 'SESSION_ID' + ' : '+f'{SESSION_ID} , ' + 'RANDOM_ID : ' + f'{RANDOM_ID} , '+'}' 
#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))
    