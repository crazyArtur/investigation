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
        students.append(row)



