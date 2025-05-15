def reverseString(string):

    reversedString = ""

    for str in string[::-1]:
        reversedString += str
    return reversedString


test = "Hello"
print(reverseString(test))
