#ESTRUTURAS DE REPETIÇÃO

# for numero in range(5): #a varialvel chamou-se numero
#  #range é quantas vezes repete a variável
# #dentro de parênteses tem o nº de vezes (começando no 0)
#     print (numero)

# #para fazer as variáveis na mesma linha
# for numero in range(4):
#     print (numero, end = '*')
# #no espaco entre as plicas pode-se definir o que fica entre os numeros 
# #ex: espaço, uma letra ou símbolos

# #DEFINIR OS LIMITES
# for numero in range(1,10):
#     print (numero, end = ' ')

# limite_inferior = int(input('Qual o limite inferior: '))
# limite_superior = int(input('Qual o limite superior: '))
# for numero in range(limite_inferior,limite_superior+1):
#     print (numero, end = ' ')

# for numero in range (2,10,2):
#     print (numero, end = ' ')

# for letra in 'python':
#     print(letra)

# for letra in 'python':
#     print(letra, end = ' ')^

# numeros = [1, 2, 3, 4, 5, 6, 7, 8, 'python']
# for numero in numeros:
#     print (numero, end=' ')

# nomes = ['python','jave','c++']
# for nome in nomes:
#     print(nome)

# nomes = ['python','jave','c++']
# for nome in nomes:
#     print(nome, end= ' ')

# nomes = ['python','jave','c++']
# for nome in nomes:
#     print(nome)
#     print('=' * 6)
# print('Fim!')

#Dois comandos importantes nos ciclos que podem alterar o seu fluxo natural:
# -> break - para a execução do ciclo
# -> continue - para a iteração atual e passa para a próxima
# #Vamos dar um exemplo com ambos:
# print('Exemplo break: ')
# for numero in range(1,10):
#     if numero % 2 == 0:
#         break # para a execução do ciclo
#     print(numero, end=' ')
# print('\nExemplo continue: ')
# for numero in range(1,10):
#     if numero % 2 == 0:
#         continue # para a iteração atualo e passa para a próxima
#     print(numero, end=' ')

# EXERCÍCIOS MOODLE

#Tabuada
# print('******TABUADA******')
# numero = int(input('Digite um número para calcular a tabuada: '))
# for i in range(1, 11):
#     print(f'{numero} x {i} = {numero * i}')
#     print('Fim!')


limite_inferior=1
limite_superior = int(input('Digite um número positivo:'))
if limite_superior < 1:
    print(f'Deve introduzir um numero positivo e {limite_superior} não é positivo!')
if limite_superior > 1:
    print(f'A soma dos números de  é ')
