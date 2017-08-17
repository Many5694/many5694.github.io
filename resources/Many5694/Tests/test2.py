import urllib.request
i=1
while (i < 27):
    htmlreq = urllib.request.urlopen("https://3dr.com/faa/drone-practice-tests/"+"i")
    htmltext = htmlreq.read()
    print(str(htmltext,'utf-8'))
i += 1

input("Pause for view text-------------------------------------------------")
