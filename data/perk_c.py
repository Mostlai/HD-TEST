import json


def loadJson():
    with open(file='./equip_perk.json', encoding='utf-8') as f:
        data = json.load(f)
        return data


def calculateAllWeight(data, rank, slot):
    allWeight = 0
    for i in data:
        if i['rank'] <= rank and i['perk_slot'] == slot:
            allWeight +=i['weight']
    return allWeight


def perkPercent(data, rank, slot, allweight):
    for i in data:
        if i['rank'] <= rank and i['perk_slot'] == slot:
            percent =round(((i['weight']/allweight)*100), 1)
            print("{} 权重:{}/{} 概率:{}%"
                  .format(i['name'],i['weight'],allweight,percent))


data = loadJson()
rank = 2
perk_slot = 1
allweight = calculateAllWeight(data, rank, perk_slot)
perkPercent(data, rank, perk_slot, allweight)
