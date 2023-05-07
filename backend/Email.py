#!/usr/local/bin/python3.7
# coding: utf-8
#このセクションではデータを送ることのみ実行する
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


def Email():
    sql1 = "select EMAIL_ADDRESS from USER where VALID_ACCOUNT =%s;"
    cur.execute(sql1,(0,))
    data = cur.fetchall()
    rightdata=[]
    for email_address in data:
        if email

    return data
    
    
if __name__ == "__main__": 
    Email()



