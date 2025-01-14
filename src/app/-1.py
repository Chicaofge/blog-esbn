
list = []

def ler_numeros():
    global list
    list = []
    for i in range(10):
        num = int(input("Introduza um número inteiro: "))
        list.append(num)

def diferenca_max_min():
    if len(list)==0:
        return 0 
    maior=max(list)
    menor=min(list)
    return maior-menor

def contar_pares():
    contar=0
    for num in list:
        if num % 2==0:
            contar +=1
    return contar

def calcular_media():
    if len(list)== 0 :
        return 0 
    soma=sum(list)
    media=soma/len(list)
    return media
ler_numeros()

print("Diferença entre maior e menor:", diferenca_max_min())
print("Quantidade de números pares:", contar_pares())
print("Média dos números:", calcular_media())
