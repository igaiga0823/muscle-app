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

