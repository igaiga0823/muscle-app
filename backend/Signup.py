#!/usr/local/bin/python3.7
# coding: utf-8

import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys


conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()

def signup(email_address,origin_password,username):
    sql = "INSERT INTO USER (EMAIL_ADDRESS,PASSWORD,USER_NAME) VALUES(%s,%s,%s);"
    cur.execute(sql, (email_address,origin_password,username))
    conn.commit()
    cur.close()
    conn.close()

