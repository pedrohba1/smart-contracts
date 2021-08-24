# vanityJS

vanity hashes usando nodeJS.

Usei um gerador de palavras para usar 12 palavras como seed.

O hash é gerado pelo módulo `crypto` nativo to prórprio nodeJS e é em seguida convertido para base58 usando o módulo `bs58`.

Por último, procuro em cada hash vanity gerado as strings que eu quero no array "names".
