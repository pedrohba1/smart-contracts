from brownie import *
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
    network.is_connected()
    accounts.add(PRIVATE_KEY)
    
    abi = CommitVector.abi

    # balance da minha conta
    print(accounts[0].balance())
    cv = Contract.from_abi("CommitVector", "0xa7bea30e2bdFefe81f93517F01C52A51A3Aefe39", abi)
    myWallet = accounts[0]
    nonce1 = createNonce(b'nonce1')
    # 01 o projeto é bom mas o artigo é fraco, git descentralizado
    # 02 é do axie infinity
    # 04 é o avve
    # 05 é do pancakeswap
    # 12 é do yup
    correcao1 = [b'\x04',b'\x02', b'\x12', b'\x05',  b'\x01' ]
    print(ord(correcao1[0]), ord(correcao1[2]))
    commit1 = doCommit(nonce1,correcao1)
    print(commit1)
    cv.commit(commit1,{'from':myWallet})