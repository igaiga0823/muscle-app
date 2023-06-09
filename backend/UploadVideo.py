#!/usr/local/bin/python3.7
# coding: utf-8

import MySQLdb
import requests
import os
import json
import sqlite3
from collections import defaultdict
import sys
import random
import hashlib



conn = MySQLdb.connect(
host = 'mysql213.phy.lolipop.lan',
user = 'LAA1475865',
passwd = 'wuimse2135',
db = 'LAA1475865-muscle',
charset = 'utf8')
cur = conn.cursor()



def UploadVideo(user_id, filename, comment):
    sql1 = "INSERT INTO USERVIDEO (VIDEO_NAME, USER_ID, COMMENT) VALUES(%s,%s,%s);"
    cur.execute(sql1,(filename, user_id, comment, ))

    ans =  { "Success" : "True"}

    conn.commit()
    cur.close()
    conn.close()
    return ans
    
        #return "{"+"loginStatus"+":"+"False"+"}"

#    sql3 = "select * from users where id = %s;"
#    cur.execute(sql3, (user_id, ))

if __name__ == "__main__": 
    UploadVideo("1","aaaa")
    