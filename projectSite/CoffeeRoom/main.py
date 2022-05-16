from flask import Flask, render_template, request
import logging
import datetime
logging.basicConfig(filename='logger.log', level=logging.INFO)

app = Flask(__name__)


@app.route('/')
def head_page():
    logging.info("Открыта главная страница")
    return render_template('index.html')


@app.route('/', methods=['POST'])
def page_order_upload():
    logging.info("Сделан заказ")
    order_data = request.form
    print(order_data)
    # print(order_data.getlist('goods'))
    # print(sum(order_data.getlist('goods', type=int)))
    
    with open('orders.txt', 'a', encoding='utf-8') as file:
        file.write(f"{order_data.get('surname')} | {order_data.get('name')} | {order_data.get('goods')} | "
                   f"{order_data.get('result')} | {datetime.datetime.now()}\n")
    return render_template('index.html')


app.run(debug=True, port=5005)
