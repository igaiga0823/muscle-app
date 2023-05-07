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

def Signup(email_address,user_name,origin_password):
    sql = "INSERT INTO USER (EMAIL_ADDRESS,PASSWORD,USER_NAME) VALUES(%s,%s,%s);"
    cur.execute(sql, (email_address,origin_password,user_name))
    conn.commit()
    cur.close()
    conn.close()


if __name__ == "__main__": 
    Signup("dai3258sa@gmail.com","b59c67bf196a4758191e42f76670ceba","dai")

