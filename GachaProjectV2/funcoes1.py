def roleta10(tiros):
    lista = ['nat5', 'nat4', 'nat4', 'arma'] # indices 0, 1 e 2 / len = 3

    # Defini a lista aqui em cima para não dar problema ao adicionar
    # esses personagens nat4 na minha lista2
    personagens4 = ['amber', 'barbara', 'beidou', 'bennet', 'chongyun', 'fischl', 'kaeya',
                    'lisa', 'ningguang', 'noelle', 'razor', 'sucrose', 'xingqiu', 'xiangling',
                    'diona', 'xinyan']

    for c in range(0, 5): # Adiciona mais 5 valores de arma para a lista.
        lista.append('arma')

    lista2 = [] # essa é a minha lista definitiva que vai ser mandada
                # para meu dicionário.
    charsPegos = []
    from random import randint
    for c in range(0, tiros): # só adiciona até a quantidade de tiros passada, que tem que ser 10
        pool = randint(0, len(lista) - 1)

        if pool == 0:
            personagens5 = ['venti', 'mona', 'diluc', 'albedo', 'klee', 'qiqi', 'keqing', 'jean', 'xiao', 'hutao']

            # estou dentro do tiro 0, ou seja o tiro do 5 estrelas
            # criei uma variavel "sorte" para dificultar a aquisição do personagem
            # 5 estrelas.
            sorte = randint(0, 3)
            if sorte == 0 or sorte == 1 or sorte == 2:
                lista2 += ['arma']
            else:
                escolhe_char5 = randint(0, len(personagens5) - 1)
                lista2 += [personagens5[escolhe_char5]]


        elif pool == 1 or pool == 2:
            # aqui eu estou dentro dos tiros dos personagens 4 estrelas / nat4.
            # criei também outra variável denominada "sorte2" para dificultar
            # a aquisição de um personagem 4 estrelas.

            sorte2 = randint(0, 2)
            if sorte2 == 0 or sorte2 == 1:
                lista2 += ['arma']
            else:
                escolhe_char4 = randint(0, len(personagens4) - 1)
                lista2 += [personagens4[escolhe_char4]]

        else:
            # se não for nenhum dos tiros de personagens nat 5 e nat 4
            # o código cai aqui, que adiciona arma na minha lista2
            # porém, um tiro de 10 como regra do jogo nunca pode vir somente armas.
                # para isso eu verifiquei, se a quantidade de arma for == 9
                    # adiciona um dos personagens 4 estrelas garantido.
            if lista2.count('arma') < 9:
                lista2 += ['arma']

            if lista2.count('arma') >= 9:
                escolhe_char = randint(0, len(personagens4) - 1)
                lista2.append(personagens4[escolhe_char])


        charsPegos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


    # A lista2 vai ser a lista que será jogada no testDict, a lista
    # definitiva dos tiros
    #print(f'Essa é minha lista2: {lista2}')

    cont = 0
    testeDict = [{}, {}, {}, {}, {},
                 {}, {}, {}, {}, {}]

    for i, v in enumerate(charsPegos):
        testeDict[i]['name'] = lista2[v] # Aqui será chamado outra lista 2, com os nomes de personagens
        cont += 1

        if (cont >= len(charsPegos)):
            return testeDict