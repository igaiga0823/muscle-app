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


def GetUserInfo(user_id):
    sql1 = "select USER_ID, USER_NAME, USER_NICKNAME, PHOTO_URL, DATE  from USER where USER_ID =%s AND DELETE_FLAG = 0;"
    cur.execute(sql1, (str(user_id),))
    data = cur.fetchall()
    output = {"userId": data[0][0], "userName": data[0][1],
              "userNickName": data[0][2], "photoUrl": data[0][3], "date":data[0][4].strftime("%Y-%m-%d %H:%M:%S")}

    conn.commit()
    cur.close()
    conn.close()
    return output


if __name__ == "__main__":
    print(GetUserInfo(1))
