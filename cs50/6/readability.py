from cs50 import get_string
import re
import string

text = get_string("Text: ")

endOfSentence = [".", "!", "?"]
sentenceCount = 0

for mark in endOfSentence:
    sentenceCount += text.count(mark)

wordCount = text.count(" ")+1

letterCount = 0
for char in text:
    if(char.isalpha()):
        letterCount += 1

L = letterCount / wordCount *100
S = sentenceCount / wordCount *100

grade = 0.0588 * L - 0.296 * S - 15.8
gradeRounded = int(round(grade))

if(gradeRounded < 1):
    print("Before Grade 1")
elif(gradeRounded > 16):
    print("Grade 16+")
else:
    print("Grade ", gradeRounded)