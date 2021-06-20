# // EXO 13------------------  !!!!!!!!! EN PYTHON

# // Trolls are attacking your comment section!

# // A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# // Your task is to write a function that takes a string and return a new string with all vowels removed.

# // For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# // Note: for this kata y isn't considered a vowel.

# // def disemvowel(string_):
# //     vowels = 'aeiouAEIOU'
# //     result =''
# //     for letter in string_:
# //         if letter not in vowels:
# //             result += letter
# //     return result

# // autre solution
# // def disemvowel(string):
# //     return string.translate(None, 'aeiouAEIOU')
# // get_count('nfjkshfkhsukfhrkuhfkushufhz_eua__uçàaieijfuheuysigygèi)

# // EXO 14------------------  !!!!!!!!! EN PYTHON

# // Return the number (count) of vowels in the given string.

# // We will consider a, e, i, o, u as vowels for this Kata (but not y).

# // The input string will only consist of lower case letters and/or spaces.

# // def get_count(input_str):
# //     num_vowels = 0
# //     vowels ='aeiouAEIOU'
# //     if type(input_str) == 'str': return 0
# //     for letter in input_str:
# //         if letter in vowels:
# //             num_vowels += 1
# //     return num_vowels

# // get_count('je suis une string heheheheheh')

# // autre solution

# // def getCount(s):
# //     return sum(c in 'aeiou' for c in s)