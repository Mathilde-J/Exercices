import urllib.request, json 
with urllib.request.urlopen("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json") as url:
    data = json.loads(url.read().decode())
    # print(json.dumps(data, indent=4, sort_keys=True))

nombre = (len(data['pokemon']))
print ('il y a : ' + str(nombre) + ' pokémons!') 

# for truc in data['pokemon']:
#     machin = str(truc['id'])
#     print (machin)

import re


print('ceux qui pèsent plus de 10 kg sont :')
for value in data['pokemon']:
    essai = value['weight']
    x = re.sub("[^0-9.]", "",essai)
    f = float(x)
    if f > 10:
        print(value['name'], value ['weight'])

print(type(f))
    