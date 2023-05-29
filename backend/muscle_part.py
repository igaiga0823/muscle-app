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


def PieChart(user_id):
    sql1 = "select MENU from TRAINDATA where USER_ID =%s;"
    cur.execute(sql1, (str(user_id)))
    values = cur.fetchall() 
    data = {"menu":[],"count":[]}
    menus = {}
   
    for i, value in enumerate(values, 0):
        if value[0] not in menus:
            menus[value[0]] = 1
            data["menu"].append(value[0])
        else:
            menus[value[0]] += 1

    for i in menus.values():
        data['count'].append(i)

    return data


if __name__ == "__main__":
    PieChart(1)
