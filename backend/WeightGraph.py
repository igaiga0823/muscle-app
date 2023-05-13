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

conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()

def WeightGraph(user_id):
    sql1 = "select WEIGHT_DATA,DATE from WEIGHT where USER_ID =%s;"
    cur.execute(sql1,(user_id,))
    weights = cur.fetchall()
    data=set()

    data.append({"date":weights[-1][1],"weight":weights[-1][0]})
 
    for weight in reversed(range(0,len(weights)-1)):#同じ日付の重複をのぞく
        if weights[weight][1]!=weights[weight+1][1]:
            data.append({"date":weights[weight][1],"weight":weights[weight][0]})
    return data

if __name__ == "__main__": 
    WeightGraph(1)


