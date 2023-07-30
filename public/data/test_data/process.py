import json
import random


def get_random_int(min, max):
    return random.randint(min, max)


def get_random_relation():
    number = get_random_int(1, 3)
    relation = None
    if number == 1:
        relation = "sib"
    elif number == 2:
        relation = "par"
    elif number == 3:
        relation = "equ"
    return relation


def get_random_type():
    number = get_random_int(1, 3)
    type = None
    if number == 1:
        type = "shape"
    elif number == 2:
        type = "point"
    elif number == 3:
        type = "correlation"
    return type


# 打开JSON文件
with open('result.json', 'r') as f:
    data = json.load(f)

# print(links)
for item in data['links']:
    item['relationship'] = get_random_relation()

for item in data['nodes']:
    item['type'] = get_random_type()

# 然后将修改后的数据写回到文件
with open('result2.json', 'w') as f:
    json.dump(data, f)
