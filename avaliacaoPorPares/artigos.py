import hashlib

 

artigos = list()
g = 999

# valor no segredo do commit
b = 137 # O MEU SEGREDO
a = 18822 # O SEGREDO QUE O PROFESSOR PASSOU
p = 27143
N = 14 # são 14 artigos (por enquanto)

 
T = 5 # cada aluno lê e avalia 5 artigos 
print(a,b)

shared_secret_key = ((g**a)%p)**b %p
h = str(shared_secret_key).encode();
while len(artigos) < T:
    h = hashlib.sha256(h).digest()
    # lembrando que como é o modulo, vai retornar de 0 até n-1. 
    # então o primeiro artigo é 0, o segundo é 1, o terceiro é 2...
    i = int.from_bytes(h, "big")% N;
    if i not in artigos:
        artigos.append(i)

 

print(artigos)