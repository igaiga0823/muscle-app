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

