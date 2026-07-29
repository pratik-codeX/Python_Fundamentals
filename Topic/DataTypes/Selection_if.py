def Check_Age(age):
    if(age > 18):
        print("You are Eligible !")
    else:
        print("You are not Eligible !")

if __name__ == "__main__":
    age = 0
    print("Enter Age :")
    age = int(input())    
    Check_Age(age)


