import csv
from sys import argv
from cs50 import SQL

if(len(argv) != 2):
    print("No file provided")
    exit()

db = SQL("sqlite:///students.db")

students = []
with open(argv[1], "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        name = row["name"].split()
        firstName = name[0]

        if(len(name) < 3):
            middleName = None
            lastName = name[1]
        else:
            middleName = name[1]
            lastName = name[2]

        db.execute("INSERT INTO students (first, middle, last, house, birth) VALUES(?, ?, ?, ?, ?)", firstName, middleName, lastName, row["house"], int(row["birth"]))
