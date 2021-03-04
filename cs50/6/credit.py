from cs50 import get_int


cardNumber = get_int("Number: ")
digits = 0
cardDigits = []

while True:
    cardDigits.append(cardNumber % 10)
    cardNumber //= 10
    digits += 1

    if(cardNumber == 0):
        break

digitSum = 0
for i in range(0, digits, 1):
    if(i%2 == 0):
        digitSum += cardDigits[i]
    else:
        temp = cardDigits[i] * 2
        digitSum += temp // 10 + temp % 10

if(digitSum % 10 != 0):
    print("INVALID")
    quit()

mastercard = [1,2,3,4,5]
if((digits == 13 or digits == 16) and cardDigits[digits-1] == 4):
    print("VISA")
elif(digits == 15 and cardDigits[digits-1] == 3 and (cardDigits[digits-2] == 4 or cardDigits[digits-2] == 7)):
    print("AMEX")
elif(digits == 16 and cardDigits[digits-1] == 5 and (cardDigits[digits-2] in mastercard)):
    print("MASTERCARD")
else:
    print("INVALID")