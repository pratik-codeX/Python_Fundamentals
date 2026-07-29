fd = open("Pratik.txt",'r')

print("Information of file :",fd)

print("Content of file")
print(fd.read())

print("Reading single line from file:")
print(fd.readline())

print("Current position of file is :",fd.tell())

fd.seek(0)

fd = open("Pratik.txt",'a+r')

fd.write("Python:Automation in python")

fd.seek(0)


print(fd.read())

fd.close()