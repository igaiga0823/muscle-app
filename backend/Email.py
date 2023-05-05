#!/usr/local/bin/python3.7
# coding: utf-8
import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
from muscle_be import mail
from flask_mail import  Message


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
    for email_address in data:
        msg = Message('Test Mail', recipients=[email_address[0]])
        msg.body = "Hello Flask message sent from Flask-Mail"
        mail.send(msg)
    return "Sent"

if __name__ == "__main__": 
    Email()



