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


def UserSearch(user_name):
    sql1 = "select USER_ID  from USER where ( USER_NAME =%s OR USER_NICKNAME = %s ) AND DELETE_FLAG = 0;"
    cur.execute(sql1, (str(user_name), str(user_name),))
    data = cur.fetchall()
    output = []
    for i in range(len(data)):
        output.append(data[i][0])

    conn.commit()
    cur.close()
    conn.close()
    return {"data": output}


if __name__ == "__main__":
    print(UserSearch("daidai"))
