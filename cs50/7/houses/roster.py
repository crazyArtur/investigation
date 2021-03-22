from sys import argv
from cs50 import SQL

if(len(argv) != 2):
    print("Not correct number of arguments")
    exit()

db = SQL("sqlite:///students.db")

all = db.execute("SELECT first, middle, last, birth FROM students WHERE house = ? ORDER BY last, first", argv[1])

for it in all:
    if(it["middle"] == None):
        middle = ""
    else:
        middle = it["middle"]
    print(it["first"], middle, it["last"] + ", born ", it["birth"])