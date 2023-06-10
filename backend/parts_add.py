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

def Parts_add(user_id, events):
    sql = "SELECT MUSCLE_PART_ID FROM MUSCLE_PART WHERE USER_ID = %s AND MUSCLE_PART = %s;"
    cur.execute(sql, (user_id, events))
    result = cur.fetchall()
    if result:
        return False
    sql = "INSERT INTO MUSCLE_PART (USER_ID, MUSCLE_PART) VALUES(%s,%s);"
    cur.execute(sql, (user_id, events))
    return True

def parts_add(user_id, events):
    x = Parts_add(user_id, events)
    conn.commit()
    cur.close()
    conn.close()
    if x == False:
        return False
    return True


if __name__ == "__main__": 
    print(parts_add( 1, "o"))

