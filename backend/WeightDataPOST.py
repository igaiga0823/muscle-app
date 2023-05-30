#!/usr/local/bin/python3.7
# coding: utf-8
import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
from flask import Flask,current_app
from flask_mail import  Message,Mail
from datetime import datetime

conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()

def WeightForm(user_id,weight_data):
    today = datetime.today().date().strftime('%Y-%m-%d')#今日の日付 
    sql3 = "INSERT INTO WEIGHT (USER_ID,WEIGHT_DATA,DATE) VALUES(%s,%s,%s);"
    cur.execute(sql3, (user_id,weight_data,today))
    conn.commit()
    cur.close()
    conn.close()

if __name__ == "__main__": 
    WeightForm(1,65)








