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

def Weight(user_id,weight_data,date):
    sql3 = "INSERT INTO TRAINDATA (USER_ID,WEIGHT_DATA,DATE) VALUES(%s,%s,%s);"
    cur.execute(sql3, (user_id,weight_data,date))







