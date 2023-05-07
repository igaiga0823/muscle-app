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

def Check(email_address):
    sql1 = "UPDATE USER SET VALID_ACCOUNT = 1 WHERE EMAIL_ADDRESS = %s;"
    cur.execute(sql1,(email_address,))
    conn.commit()
    cur.close()
    conn.close()
    return "<center><h3>認証しました</h3></center>"

if __name__ == "__main__": 
    Check("dai3258sa@gmail.com")
