# -*- coding: utf-8 -*-
import os
from flask import Flask, render_template, request, jsonify, current_app
import json
from flask_cors import CORS
from flask_mail import Message, Mail


from Signin import Signin
from Signup import Signup
from Email import Email
from Check import Check
from Config import Config
from LoginStart import LoginStart
from TrainDataPOST import TrainDataPOST
from WeightGraph import WeightGraph
from WeightDataPOST import WeightForm
from UploadVideo import UploadVideo
from menu_add import menu_add
from parts_add import parts_add
from pie_chart import PieChart
from pie_chart_parts import PieChartParts
from transison_chart import TransisonChart
from transison_chart_parts import TransisonChartParts

from GetUserInfo import GetUserInfo
from GetMenu import GetMenu
from GetParts import GetParts
from UserSearch import UserSearch
from FriendRequest import FriendRequest
from GetFriendList import GetFriendList
from GetFriendRequestList import GetFriendRequestList
from Requirefriendrequest import Requirefriendrequest
from GetFriendTimeLapse import GetFriendTimeLapse

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
mail = Mail(app)


# @api.after_request
# def after_request(response):
#   response.headers.add('Access-Control-Allow-Origin', '*')
#   response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#   response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
#   return response
# import json

@app.route('/')
def hello():
    return 'あ'


@app.route('/confirm')
def confirm():
    response = jsonify({"SESSION_ID": 11232, "name": "admin"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/loginstart', methods=["GET", "POST"])
def loginstart():

    ip = request.remote_addr
    SESSION_ID, RANDOM_ID = LoginStart(ip)
    response = jsonify({"SESSION_ID": SESSION_ID, "RANDOM_ID": RANDOM_ID})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/signin', methods=["GET", "POST"])
def signin():
    req = request.args
    user_name = req.get("user_name")
    after_password = req.get("after_password")
    session_id = req.get("session_id")
    # response = {"user_name": user_name, "after_password": after_password, "session_id": session_id }
    response = Signin(user_name, after_password, session_id)
    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/signup', methods=["GET", "POST"])
def signup():
    req = request.args
    email_address = req.get("email_address")
    user_name = req.get("user_name")
    origin_password = req.get("origin_password")
    try:
        Signup(email_address, user_name, origin_password)
        # 'https:url/validate?email_address=ooo'
        mail_message = f"{user_name}ご登録ありがとうございます\nhttps://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/check/{email_address}"
        with app.app_context():
            msg = Message('muscle-app', recipients=[email_address])
            msg.body = mail_message.encode("utf-8")
            mail.send(msg)
        response = jsonify({"status": "successful"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"status": "failed"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/render')
def index():
    return render_template('render.html')


@app.route('/check/<email_address>')
def check(email_address):
    response = Check(email_address)
    return response

# メールが正常に機能しているかどうか


@app.route('/emailtest')
def email():
    data = Email()
    mail_message = "ああ\nあ"
    with app.app_context():
        for email_address in data:
            msg = Message('muscle-app', recipients=["daidevelop289@gmail.com"])
            msg.body = mail_message.encode("utf-8")
            mail.send(msg)
    return "OK"


@app.route("/traindata/post", methods=["POST", "GET"])
def traindatapost():
    # if not request.is_json:
    #     return jsonify({"error": "Missing JSON in request"}), 400

    try:
        data = request.json  # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        output = TrainDataPOST(data)
        # output = data
        response = jsonify(output)
        return response, 200

    except:
        return jsonify({"error": "Missing JSON in request"}), 200


@app.route("/weightgraph", methods=["POST", "GET"])
def weightgraph():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request"}), 400
    try:
        data = request.json  # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        user_id = data["user_id"]
        data_range = data["data_range"]
        output = WeightGraph(user_id, data_range)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except:
        return jsonify({"error": "Missing JSON in request"}), 400


@app.route("/graph/piechart", methods=["POST", "GET"])
def piechart():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request1"}), 400
    try:
        data = request.json  # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        user_id = data["user_id"]
        output = PieChart(user_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except:
        return jsonify({"error": "Missing JSON in request"}), 400


@app.route("/graph/piechart/parts", methods=["POST", "GET"])
def piechartparts():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request1"}), 400
    try:
        data = request.json  # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        user_id = data["user_id"]
        start_date = data["start_date"]
        end_date = data["end_date"]
        output = PieChartParts(user_id, start_date, end_date)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except:
        return jsonify({"error": "Missing JSON in request"}), 400


@app.route("/graph/transison/parts", methods=["POST", "GET"])
def transisonchart():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request1"}), 400
    try:
        data = request.json  # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        user_id = data["user_id"]
        muscle_part_id = data["muscle_part_id"]
        start_date = data["start_date"]
        end_date = data["end_date"]
        output = TransisonChart(user_id, muscle_part_id, start_date, end_date)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except:
        return jsonify({"error": "Missing JSON in request"}), 400


@app.route("/graph/transison/parts/menu", methods=["POST", "GET"])
def transisonchartparts():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request1"}), 400
    try:
        data = request.json  # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        user_id = data["user_id"]
        muscle_part_id = data["muscle_part_id"]
        start_date = data["start_date"]
        end_date = data["end_date"]
        output = TransisonChart(user_id, muscle_part_id, start_date, end_date)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except:
        return jsonify({"error": "Missing JSON in request"}), 400


@app.route("/weightForm/post", methods=["POST", "GET"])
def weightForm():
    if not request.is_json:
        return jsonify({"error": "Missing JSON in request"}), 400
    try:
        data = request.json  # request.dataをutf-8にデコードしてjsonライブラリにてディクショナリ型とする
        user_id = data["user_id"]
        weight_data = data["weight_data"]
        WeightForm(user_id, weight_data)
        response = jsonify({"status": "successful"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except:
        return jsonify({"error": "Missing JSON in request"}), 400


@app.route('/menuadd', methods=['POST'])
def menuadd():
    try:
        data = request.json
        user_id = data["user_id"]
        events = data["events"]
        body_parts = data['body_parts']
        if events == '':
            response = jsonify({"Success": "False"})
            return response
        x = menu_add(user_id, events, body_parts)
        if x == False:
            response = jsonify({"Success": "already"})
        else:
            response = jsonify({"Succcess": "successful"})
        return response

    except:
        response = jsonify({"Success": "False"})
        return response


@app.route('/partsadd', methods=['POST'])
def partsadd():
    try:
        data = request.json
        user_id = data["user_id"]
        events = data["events"]
        if events == '':
            response = jsonify({"Success": "False"})
            return response
        x = parts_add(user_id, events)
        if x == False:
            response = jsonify({"Success": "already"})
        else:
            response = jsonify({"Success": "successful"})
        return response

    except:
        response = jsonify({"Success": "False"})
        return response


@app.route('/upload', methods=['POST'])
def upload():
    if 'video' not in request.files:
        return 'No video file uploaded', 400
    try:
        video = request.files['video']

        video.save('./video/' + video.filename)
        user_id = request.form['user_id']  #
        comment = request.form['comment']

        UploadVideo(user_id, video.filename, comment)
        response = jsonify({"Success": "True"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/user', methods=['POST', "GET"])
def getuserinfo():
    try:
        data = request.json
        user_id = data["user_id"]
        output = GetUserInfo(user_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/menu', methods=['POST', "GET"])
def getmenuinfo():
    try:
        data = request.json
        user_id = data["user_id"]
        output = GetMenu(user_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/muscleparts', methods=['POST', "GET"])
def getpartsinfo():
    try:
        data = request.json
        user_id = data["user_id"]
        output = GetParts(user_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/usersearch', methods=['POST', "GET"])
def getusersearch():
    try:
        data = request.json
        user_name = data["user_name"]
        output = UserSearch(user_name)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/friendrequest', methods=['POST', "GET"])
def postfriendrequest():
    try:
        data = request.json
        user_id = data["user_id"]
        friend_id = data["friend_id"]
        output = FriendRequest(user_id, friend_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/getfriendlist', methods=['POST', "GET"])
def getfriendlist():
    try:
        data = request.json
        user_id = data["user_id"]
        output = GetFriendList(user_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/getfriendrequest', methods=['POST', "GET"])
def getfriendrequest():
    try:
        data = request.json
        user_id = data["user_id"]
        output = GetFriendRequestList(user_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/requirefriendrequest', methods=['POST', "GET"])
def requirefriendrequest():
    try:
        data = request.json
        friend_id = data["friend_id"]
        output = Requirefriendrequest(friend_id)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


@app.route('/getfriendtimelapse', methods=['POST', "GET"])
def getfriendtimelapse():
    try:
        data = request.json
        user_id = data["user_id"]
        start_date = data["start_date"]
        end_date = data["end_date"]
        output = GetFriendTimeLapse(user_id, start_date, end_date)
        response = jsonify(output)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except:
        response = jsonify({"Success": "False"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


if __name__ == '__main__':
    app.run(debug=True)
