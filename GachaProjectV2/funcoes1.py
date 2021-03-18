def roleta10(tiros):
    lista = ['Venti', 'Keqing', 'Mona', 'Diluc', 'Klee', 'QiQi']
    charsPegos = []
    from random import randint
    for c in range(0, tiros):
        pool = randint(0, len(lista) - 1)
        charsPegos += [pool]

    cont = 0
    testeDict = [{}, {}, {}, {}, {},
                 {}, {}, {}, {}, {}]

    for i, v in enumerate(charsPegos):
        testeDict[i]['name'] = lista[v]
        cont += 1

        if (cont >= len(charsPegos)):
            return testeDict          