#!/usr/local/bin/python3.7
# coding: utf-8
import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
from datetime import datetime, timedelta

conn = MySQLdb.connect(
    host='mysql213.phy.lolipop.lan',
    user='LAA1475865',
    passwd='wuimse2135',
    db='LAA1475865-muscle',
    charset='utf8')
cur = conn.cursor()


def FriendRequest(user_id,friend_id):
    sql1 = "INSERT INTO FRIEND (USER_ID1, USER_ID2) VALUES(%s,%s);"
    cur.execute(sql1,(user_id, friend_id, ))

    ans =  { "Success" : "True"}

    conn.commit()
    cur.close()
    conn.close()
    return ans


if __name__ == "__main__":
    print(FriendRequest("daidai"))
