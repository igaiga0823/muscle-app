#!/usr/local/bin/python3.7
# coding: utf-8

import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys


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


def Menu_add(user_id, events):
    sql = "SELECT MENU_ID FROM MENU WHERE USER_ID = %s AND MENU_NAME = %s;"
    cur.execute(sql, (user_id, events))
    result = cur.fetchall()
    if result:
        return False
    sql = "INSERT INTO MENU (USER_ID, MENU_NAME) VALUES(%s,%s);"
    cur.execute(sql, (user_id, events))
    return True

def events_add(user_id, events, body_parts):
    sql = "SELECT MENU_ID FROM MENU WHERE USER_ID = %s AND MENU_NAME = %s;"
    cur.execute(sql, (user_id, events))
    result = cur.fetchall()
    y = result[0][0]
    events_num = len(body_parts)
    for i in range(events_num):
        sql = "SELECT MUSCLE_PART_ID FROM MUSCLE_PART WHERE USER_ID = %s AND MUSCLE_PART = %s;"
        cur.execute(sql, (user_id, body_parts[i]))
        result = cur.fetchall()
        z = result[0][0]
        sql1 = "INSERT INTO MENU_PARTS (USER_ID, MENU_ID, MUSCLE_PART_ID) VALUES(%s,%s,%s);"
        cur.execute(sql1, (user_id, y, z))

def menu_add(user_id, events, body_parts):
    x = Menu_add(user_id, events)
    if x == True:
        events_add(user_id, events, body_parts)
    conn.commit()
    cur.close()
    conn.close()
    if x == False:
        return False
    return True


if __name__ == "__main__": 
    print(menu_add( 1, "o", ["大胸筋", "大東キン"]))

