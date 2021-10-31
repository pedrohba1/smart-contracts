#!/usr/bin/python3

from brownie import *
import brownie
import hashlib

def createNonce(s):
    n = hashlib.sha256()
    n.update(s)
    return n.digest()

def doCommit(n,v):
    c = hashlib.sha256()
    c.update(n)
    for _v in v:
        c.update(_v)
    return c.digest()




def main():
    cv = CommitVector.deploy({'from': accounts[0]})

    aluno1 = accounts[1]
    nonce1 = createNonce(b'nonce1')
    correcao1 = [b'\x01',b'\x02']
    commit1 = doCommit(nonce1,correcao1)
    print(commit1)
    cv.commit(commit1,{'from':aluno1})


    aluno2 = accounts[2]
    nonce2 = createNonce(b'nonce2')
    correcao2 = [b'\x03',b'\x02',b'\x05']
    commit2 = doCommit(nonce2,correcao2)
    print(commit2)
    cv.commit(commit2,{'from':aluno2})


    cv.reveal(nonce1,correcao1,{'from':aluno1})
    print(cv.isCorrect.call(aluno1,{'from':aluno1}))
    print(cv.getValue.call(aluno1,{'from':aluno1}))


    cv.reveal(nonce2,correcao2,{'from':aluno2})
    #print(cv.calc.call(nonce1,correcao,{'from':aluno1}))

    print(cv.isCorrect.call(aluno1,{'from':aluno1}))
    print(cv.getValue.call(aluno1,{'from':aluno1}))

    print(cv.isCorrect.call(aluno2,{'from':aluno2}))
    print(cv.getValue.call(aluno2,{'from':aluno2}))
