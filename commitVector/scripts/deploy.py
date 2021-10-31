from brownie import CommitVector, accounts
import hashlib

def main():
    acct = accounts.load('MM1')
    CommitVector.deploy({'from': acct})


#export WEB3_INFURA_PROJECT_ID=85fe72005d7f4b7cb55a3623d50a7310

#brownie run deploy.py --network ropsten
