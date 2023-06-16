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


def GetFriendTimeLapse(user_id, start_date, end_date):
    sql1 = "select USER_ID1, USER_ID2  from FRIEND where (USER_ID1 =%s OR USER_ID2 =%s) AND DELETE_FLAG = 0 AND VALID_FLAG = 1;"
    cur.execute(sql1, (str(user_id), str(user_id),))
    datas = cur.fetchall()
    friendSet = set()
    for data in datas:
        if str(data[0]) != str(user_id):
            friendSet.add(str(data[0]))
        if str(data[1]) != str(user_id):
            friendSet.add(str(data[1]))
    friendList = list(friendList)

    output = {}
    for friend in friendList:
        sql2 = "select USER_ID1, USER_ID2  from FRIEND where (USER_ID1 =%s OR USER_ID2 =%s) AND DELETE_FLAG = 0 AND VALID_FLAG = 1;"
        cur.execute(sql2, (str(user_id), str(user_id),))
        datas = cur.fetchall()

    conn.commit()
    cur.close()
    conn.close()


if __name__ == "__main__":
    print(GetFriendTimeLapse(1))
