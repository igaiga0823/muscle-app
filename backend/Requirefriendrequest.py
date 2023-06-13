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


def Requirefriendrequest(friend_id):
    sql1 = "UPDATE FRIEND SET VALID_FLAG = 1 where FRIEND_ID =%s AND DELETE_FLAG = 0;"
    cur.execute(sql1, (str(friend_id),))

    conn.commit()
    cur.close()
    conn.close()
    return {"Status": "Successful"}


if __name__ == "__main__":
    print(Requirefriendrequest(1))
