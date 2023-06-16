import MySQLdb
from datetime import datetime, timedelta

conn = MySQLdb.connect(
    host='mysql213.phy.lolipop.lan',
    user='LAA1475865',
    passwd='wuimse2135',
    db='LAA1475865-muscle',
    charset='utf8')
cur = conn.cursor()


def TransisonChart(user_id, muscle_part_id, start_date, end_date):
    data = {"dates": [], "time": []}
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

    return data


def TransisonCharts(user_id, muscle_part_id, start_date, end_date):
    sql = """
    SELECT DATE, SUM(TIME)
    FROM TRAINDATA
    JOIN MENU_PARTS ON TRAINDATA.MENU_ID = MENU_PARTS.MENU_ID
    JOIN MUSCLE_PART ON MENU_PARTS.MUSCLE_PART_ID = MUSCLE_PART.MUSCLE_PART_ID
    WHERE TRAINDATA.USER_ID = %s AND MUSCLE_PART.MUSCLE_PART_ID = %s AND DATE >= %s AND DATE <= %s
    GROUP BY DATE
    """

    cur.execute(sql, (str(user_id), muscle_part_id, start_date, end_date))
    results = cur.fetchall()

    datas = {"time": 0}

    for row in results:
        datas["time"] = row[1]

    return datas


if __name__ == "__main__":
    weekly_data = TransisonChart(1, 4, "2023-04-30", "2023-06-09")
    print(weekly_data)
