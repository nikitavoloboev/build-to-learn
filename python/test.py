# from requests import get
import requests
from bs4 import BeautifulSoup
from lxml import html

page = requests.get("https://app.otta.co/companies")
print(page)
tree = html.fromstring(page.content)
print(tree)
