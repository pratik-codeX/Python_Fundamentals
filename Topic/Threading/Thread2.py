import threading
import _thread


Counter = 0

def Count():
    global Counter
    threading.Lock()
    while(Counter < 10):
        Counter = Counter + 1  
        print(Counter)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

def main():

    print("Active Threads :",threading.active_count())

    t1 = threading.Thread(target= Count)
    t2 = threading.Thread(target= Count)

    t1
    t1.start()
    t2.start()

    t1.join()
    t2.join()



if __name__ == "__main__":
    main()