# LinhaDeComando #

Implementação de um programa em Javascript (NODE) em linha de comando.

[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/contains-technical-debt.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)

---

### ATENÇÃO ###

Este programa apenas escreve texto na tela do terminal.
Este programa tem apenas finalidade didática.

---

### USE NO CLOUD9 ###

**INSTRUÇÕES DE CRIAÇÃO DO WORKSPACE:**

- CRIE UM NOVO WORKSPACE.
- NOMEIE E CRIE UMA DESCRIÇÃO.
- ESOLHA 'HOSTED WORKSPACE'
- ESCOLHA A VISIBILIDADE (PRIVADA OU PUBLICA)
- PREENCHA O CAMPO 'Clone from Git or Mercurial URL' COM:
- <code>https://github.com/digitalbocca/LinhaDeComando.git</code>
- ESCOLHA O TEMPLATE 'blank' (UBUNTU).
- CRIE O SEU WORKSPACE.

INSTRUÇÕES APÓS A CRIAÇÃO DO SEU WORKSPACE:

**O CÓDIGO FOI TESTADO NA VERSÃO 8.1.1 DO NODE**

- DEPOIS DE CARREGADO O WORKSPACE VÁ ATÉ O TERMINAL.
- ATUALIZE O NODE PARA A VERSÃO 8.1.1 :
- <code>nvm install 8.3.0</code>
- <code>nvm use 8.3.0</code>
- <code>nvm alias default 8.3.0</code>
- INSTALE AS DEPENDÊNCIAS:
- <code>npm install</code>
- EXECUTE O ARQUIVO:
- <code>npm run comando</code>

#### USE NO SEU COMPUTADOR ####

CLONE O REPOSITÓRIO:

```bash
git clone https://github.com/digitalbocca/LinhaDeComando.git
```

INSTALE AS DEPENDÊNCIAS:

```bash
npm install
```

EXECUTE O ARQUIVO:

```bash
npm run comando
```

#### LISTA DE COMANDOS ####

```bash
- inicio | Inicia o Programa (Simulação).
- copy   | Mostra o Copyright.
- sair   | Encerra o Programa.
```

QUALQUER OUTRO COMANDO ELE IMPRIME UM ERRO E A LISTA DE COMANDOS:

```bash
+------------------------+
|    LISTA DE COMANDOS   |
+------------------------+
| inicio                 |
| copy                   |
| sair                   |
+------------------------+
```

---

### DEPENDÊNCIAS ###

```json
"dependencies": {
  "cli-table": "^0.3.1",
  "colors": "^1.1.2"
}
```

**DEPENDÊNCIAS APENAS PARA FORMATAÇÃO DO TEXTO**

---

> Este código tem somente finalidade didática e não deve ser usado em produção.

> O código não segue nenhuma padronização, servindo apenas para simular o funcionamento.

> Obrigado.

---

## Licença ##

MIT