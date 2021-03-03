from cs50 import get_int

while True:
    height = get_int("What should be the height of the pyramid? Please choose number from 1 to 8 inclusive: ")
    if height >= 1 and height <= 8:
        break

for i in range(height):
    print(" "*(height-(i+1)) + "#"*(i+1) + "  " + "#"*(i+1))