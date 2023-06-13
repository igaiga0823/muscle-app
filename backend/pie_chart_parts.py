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


def PieChartParts(user_id, start_date, end_date):
    sql1 = "select MENU_ID, TIME from TRAINDATA where USER_ID =%s AND DATE >= %s AND DATE <= %s;"
    cur.execute(sql1, (str(user_id), start_date, end_date,))
    values = cur.fetchall()
    data = {"parts": [], "time": []}
    menus = {}

    for i, value in enumerate(values, 0):
        if value[0] not in menus:
            menus[value[0]] = value[1]
        else:
            menus[value[0]] += value[1]

    ans = {}

    for menu_id, time in menus.items():
        sql2 = "select MUSCLE_PART_ID from MENU_PARTS where USER_ID=%s AND MENU_ID=%s;"
        cur.execute(sql2, (str(user_id), str(menu_id)))
        values = cur.fetchall()
        for value in values:
            if value[0] not in ans:
                ans[value[0]] = time
            else:
                ans[value[0]] += time

    for time in ans.values():
        data["time"].append(time)

    for part_id in ans.keys():
        sql3 = "select MUSCLE_PART from MUSCLE_PART where USER_ID=%s AND MUSCLE_PART_ID=%s;"
        cur.execute(sql3, (str(user_id), str(part_id)))
        values = cur.fetchall()
        for value in values:
            data["parts"].append(value[0])

    return data


if __name__ == "__main__":
    print(PieChartParts(1, "2023-04-30", "2023-06-09"))
