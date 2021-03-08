from sys import argv
import csv

if(len(argv) != 3):
    print("Not enough arguments")
    exit()

with open(argv[1], "r") as file:
    spam = csv.reader(file)
    for row in spam:
        print(row)

