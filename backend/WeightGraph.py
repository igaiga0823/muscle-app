#!/usr/local/bin/python3.7
# coding: utf-8
import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
from flask import Flask, current_app
from datetime import datetime, timedelta

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


def WeightGraph(user_id, data_range):
    today = datetime.today().date()  # 今日の日付
    date_range = today-timedelta(days=data_range)
    sql1 = "select WEIGHT_DATA,DATE from WEIGHT where USER_ID =%s AND DATE >= %s order by DATE;"
    cur.execute(sql1, (user_id, date_range))
    weights = cur.fetchall()
    data = {"date": [], "weight": []}
    data["date"].append(weights[-1][1].strftime('%Y-%m-%d'))
    data["weight"].append(weights[-1][0])

    for weight in reversed(range(0, len(weights)-1)):  # 同じ日付の重複をのぞく
        if weights[weight][1] != weights[weight+1][1]:
            data["date"].append(weights[weight][1].strftime('%Y-%m-%d'))
            data["weight"].append(weights[weight][0])

    conn.commit()
    cur.close()
    conn.close()
    return data


if __name__ == "__main__":
    WeightGraph(1, 10)
