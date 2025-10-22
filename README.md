# Sorteador de Amigo Secreto

Uma aplicação web minimalista para realizar sorteios de amigo secreto de forma justa e aleatória, desenvolvida com JavaScript puro.

## Funcionalidades Principais

* **Adição de Participantes:** Interface limpa para adicionar nomes à lista de sorteio.
* **Validação de Entrada:**
    * Impede a adição de nomes vazios.
    * Impede a adição de nomes duplicados (com verificação *case-insensitive*).
* **Algoritmo de Sorteio:**
    * Utiliza uma implementação do algoritmo Fisher-Yates para garantir um embaralhamento eficiente.
    * Valida o resultado para assegurar que nenhum participante tire a si mesmo.
* **Reinicialização:** Permite limpar todos os dados e recomeçar o processo facilmente.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
