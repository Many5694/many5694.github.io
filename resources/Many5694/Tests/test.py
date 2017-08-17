import urllib.request
htmlreq = urllib.request.urlopen("https://3dr.com/faa/drone-practice-tests/")
htmltext = htmlreq.read()
print(str(htmltext,'utf-8'))
input("Pause for view text-------------------------------------------------")
