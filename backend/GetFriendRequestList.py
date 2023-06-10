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


def GetFriendRequestList(user_id):
    sql1 = "select FRIEND_ID, USER_ID1  from FRIEND where (USER_ID2 =%s OR USER_ID2 =%s) AND DELETE_FLAG = 0 AND VALID_FLAG = 0;"
    cur.execute(sql1, (str(user_id),str(user_id),))
    datas = cur.fetchall()
    output = []
    friendIdList = []
    for data in datas:

        friendIdList.append(str(data[0]))
        output.append(str(data[1]))
    return {"requestUserList":list(output),"requestFriendIdList":list(friendIdList)}


if __name__ == "__main__":
    print(GetFriendRequestList(1))
