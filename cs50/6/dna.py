from sys import argv
import csv

if(len(argv) != 3):
    print("Not enough arguments")
    exit()

with open(argv[1], "r") as file:
    spam = csv.reader(file)
    strs = next(spam)
    strs.pop(0)

print(strs)

print("------------------------")

with open(argv[1]) as file2:
    reader = csv.DictReader(file2)
    for row in reader:
        print(row)