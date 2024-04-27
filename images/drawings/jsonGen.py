#### Used to generate the json for the drawings page
import os, os.path,json
from datetime import date
directory = "./images/drawings"
fileList = os.listdir(directory)
drawings = {}
print(fileList)
for item in fileList:
    if item[-3:] != ".py":
        drawings[item.split(".")[0]] ={"desc":input("describe "+item.split(".")[0]+"\n"),"file":"images/drawings/"+item,"UploadDate":str(date.today())}
        with open('data/drawings.json', 'w') as fp:
            json.dump(drawings, fp)
print(drawings)
