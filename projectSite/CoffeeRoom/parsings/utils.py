from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

serv = Service(ChromeDriverManager().install())
opt = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=serv, options=opt)


def parse_resourse(adress):
    driver.get(adress)
    get_data()
    pass


def get_data():
    item1 = driver.find_element("checkbox1")
    pass
