##This is simply a python file that returns the list of cards
import csv
from random import randint

cardcsv = "public/allCards.csv"
cardreader = open(cardcsv, 'r')
listcards = open('cardlist.csv','w')
cardlist = []

next(cardreader) #skips the header
for line in cardreader:
    details = line.split(',')
    mlead = details[2].split('"')[1] #should look like 'Luke '
    cardname = details[2].split('"')[3]
    name = mlead + cardname
    url, type = details[1],details[3].strip()

    cardlist.append([name, url, type])

formatted_list = "[\n"
for item in cardlist:
    formatted_list += f"    {item},\n"
formatted_list += "]"
print(formatted_list) #can copy the result from terminal
