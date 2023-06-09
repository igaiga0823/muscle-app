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

conn = MySQLdb.connect(
    host='mysql213.phy.lolipop.lan',
    user='LAA1475865',
    passwd='wuimse2135',
    db='LAA1475865-muscle',
    charset='utf8')
cur = conn.cursor()


def PieChartParts(user_id, start_year, start_month, start_day, end_year, end_month, end_day):
    start_date = start_year + "-" + start_month + "-" + start_day
    end_date = end_year + "-" + end_month + "-" + end_day
    sql1 = "select MENU_ID, TIME from TRAINDATA where USER_ID =%s AND DATE >= %s AND DATE <= %s;"
    cur.execute(sql1, (str(user_id),start_date,end_date,))
    values = cur.fetchall() 
    data = {"menu":[],"time":[]}
    menus = {}
   
    for i, value in enumerate(values, 0):
        if value[0] not in menus:
            menus[value[0]] = value[1]
            data["menu"].append(value[0])
        else:
            menus[value[0]] += value[1]

    for i in menus.values():
        data['time'].append(i)

    return data


if __name__ == "__main__":
    print(PieChartParts(1, "2023", "04", "30", "2023", "06", "09"))
