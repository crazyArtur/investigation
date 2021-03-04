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

print(cardDigits)

if(digits != 13 and digits != 15 and digits != 16):
    print("INVALID")

digitSum = 0
for i in range(0, digits, 1):
    if(i%2 == 0):
        digitSum += cardDigits[i]

    else:
        cardDigits[i] *= 2
        digitSum += cardDigits[i] // 10 + cardDigits[i] % 10