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


def GetMenu(user_id):
    sql1 = "select MENU_ID, USER_ID, MENU_NAME from MENU where USER_ID =%s AND DELETE_FLAG = 0;"
    cur.execute(sql1, (str(user_id)))
    data = cur.fetchall()
    output = {"menuId":[],"userId":[],"menu":[]}
    for i in data:
        output["menuId"].append(i[0])
        output["userId"].append(i[1])
        output["menu"].append(i[2])

    return output


if __name__ == "__main__":
    print(GetMenu(1))
