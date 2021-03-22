from sys import argv
from cs50 import SQL

if(len(argv) != 2):
    print("Not correct number of arguments")
    exit()

db = SQL("sqlite:///students.db")

all = db.execute("SELECT * FROM students WHERE birth > 1980")

print(all)