from sys import argv
import csv

if(len(argv) != 3):
    print("Not enough arguments")
    exit()

with open(argv[1], "r") as file:
    spam = csv.reader(file)
    STRs = next(spam)
    STRs.pop(0)

people = []
with open(argv[1], "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        people.append(row)

with open(argv[2], "r") as file2:
    sequence = file2.read()

sampleSTRs = {}
for STR in STRs:
    count = [0]
    seqIndex = sequence.find(STR)
    if(seqIndex != -1):
        countIndex = 0
        count[countIndex] = 1

        while True:
            while seqIndex+len(STR) == sequence.find(STR, seqIndex+len(STR)):
                count[countIndex] += 1
                seqIndex = seqIndex+len(STR)

            if(sequence.find(STR, seqIndex+len(STR)) == -1):
                break
            else:
                seqIndex = sequence.find(STR, seqIndex+len(STR))
                count.append(1)
                countIndex += 1

    sampleSTRs[STR] = max(count)

for person in people:
    for STR in STRs:
        match = True
        if(int(person[STR]) != sampleSTRs[STR]):
            match = False
            break

    if(match):
        print(person['name'])
        break

if(not match):
    print("No match")