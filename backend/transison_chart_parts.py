import MySQLdb
from datetime import datetime, timedelta

conn = MySQLdb.connect(
    host='mysql213.phy.lolipop.lan',
    user='LAA1475865',
    passwd='wuimse2135',
    db='LAA1475865-muscle',
    charset='utf8')
cur = conn.cursor()


def TransisonChartParts(user_id, muscle_part_id, start_date, end_date):
    data = {"dates": [], "menu": [], "time": []}
    # 週ごとのデータを格納するリスト
    weekly_data = []

    # 開始日から終了日までの日数を計算
    start = datetime.strptime(start_date, '%Y-%m-%d')
    end = datetime.strptime(end_date, '%Y-%m-%d')
    num_days = (end - start).days

    # 週ごとにデータを取得
    for i in range(0, num_days + 1, 7):
        # 週の開始日と終了日を計算
        week_start = start + timedelta(days=i)
        week_end = week_start + timedelta(days=6)
        week_start_str = week_start.strftime('%Y-%m-%d')
        week_end_str = week_end.strftime('%Y-%m-%d')

        # 週ごとのデータを取得し、リストに追加
        weekly_data = TransisonCharts(
            user_id, muscle_part_id, week_start_str, week_end_str)
        data["dates"].append(week_start_str)
        data["time"].append(weekly_data["time"])
        if data["menu"] == []:
            data["menu"].append(weekly_data["menu"])

    conn.commit()
    cur.close()
    conn.close()
    return data


def TransisonCharts(user_id, muscle_part_id, start_date, end_date):
    sql = "SELECT MENU_ID FROM MENU_PARTS WHERE USER_ID =%s AND MUSCLE_PART_ID=%s;"

    cur.execute(sql, (str(user_id), muscle_part_id))
    results = cur.fetchall()

    datas = []

    for row in results:
        datas.append(row[0])

    ans = {"menu": [], "time": []}

    for row in datas:
        sql = "SELECT SUM(TIME) FROM TRAINDATA WHERE USER_ID=%s AND MENU_ID = %s AND DATE >= %s AND DATE <= %s;"
        cur.execute(sql, (str(user_id), str(row), start_date, end_date))
        result = cur.fetchall()
        ans["time"].append(result[0][0])
        sql = "SELECT MENU_NAME FROM MENU WHERE USER_ID=%s AND MENU_ID = %s;"
        cur.execute(sql, (str(user_id), str(row)))
        result = cur.fetchall()
        ans["menu"].append(result[0][0])

    return ans


if __name__ == "__main__":
    weekly_data = TransisonChartParts(1, 4, "2023-05-30", "2023-06-09")
    print(weekly_data)
