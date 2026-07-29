import threading


def Addition(No1,No2):
    threading.Lock
    Ans = No1+No2
    print(Ans)

def main():

    t1 = threading.Thread(target= Addition,args=(11,21,))

    t1.start()
    t1.join()
    

if __name__ == "__main__":
    main()