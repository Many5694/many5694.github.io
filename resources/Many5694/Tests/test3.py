import urllib.request
import time
outFile = open('log_test3_.txt', 'w')

ip=1
while (ip < 27):
    print(ip)
    htmlreq = urllib.request.urlopen("https://3dr.com/faa/drone-practice-tests/"+"ip")
    htmltext = htmlreq.read()
    outFile.write(str(htmltext,'utf-8'))
    print(str(htmltext,'utf-8'))
    print("----------------------------------------------------------------------------------------------")
    time.sleep(30)
    ip += 1
outFile.close()
