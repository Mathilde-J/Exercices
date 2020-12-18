# Tentative 1
# # def sapin (chiffre):
# #     i=-1
# #     star="/"
# #     while chiffre < 10:
# #         i+=1
# #         star+="*""\\"
# #         print(i, star)

# # result = sapin(3)
# # print(result)


# Tentative 2
def pinsa(chiffre):
    i = -1
    star = ""
    for i in range(i,chiffre):
        i+=1
        star+="*"
        larbre = "/" + star + '\\'
        if i == 0:
            plus = "+"
            print(plus.center(chiffre + 3))
        if i %2 ==0:
            print(larbre.center(chiffre + 3))
        
pinsa(8)

# Tentative 3
# # chiffre = input("Type something to test this out: ")
# # print (type (chiffre))
# # def pinsa(chiffre):
# #     i = 0
# #     i2= 0
# #     star = ""
# #     plus = "+"
# #     print(plus.center(chiffre + 3))
# #     for i in range(i,chiffre):
# #         i+=1
# #         i2+=2
# #         # print(i, i2)
# #         larbre = "/" + star + '\\'
# #         if i2 %2 ==0:
# #             star+="*"
# #             print(i,larbre.center(chiffre + 3))

# # result = pinsa(6)

