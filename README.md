# LinhaDeComando #
## v0.14.0 ##

Implementação de um programa em Javascript (NODE) em linha de comando.

[![Maintainability](https://api.codeclimate.com/v1/badges/e7af9128441e6521ff92/maintainability)](https://codeclimate.com/github/digitalbocca/LinhaDeComando/maintainability)

[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/contains-technical-debt.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)

---

## ATENÇÃO ##

Este programa apenas escreve texto na tela do terminal.
Este programa tem apenas finalidade didática.

---

## USE NO CLOUD9 ##

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

**O CÓDIGO FOI TESTADO NA VERSÃO 8.9.2 DO NODE**

- DEPOIS DE CARREGADO O WORKSPACE VÁ ATÉ O TERMINAL.
- ATUALIZE O NODE PARA A VERSÃO 8.9.2 :
- <code>nvm install 8.9.2</code>
- <code>nvm use 8.9.2</code>
- <code>nvm alias default 8.9.2</code>
- INSTALE AS DEPENDÊNCIAS:
- <code>npm install</code>
- EXECUTE O ARQUIVO:
- dev <code>npm run dev</code>
- prod <code>npm run start</code>

## USE NO SEU COMPUTADOR ##

CLONE O REPOSITÓRIO:

```bash
git clone https://github.com/digitalbocca/LinhaDeComando.git
```

INSTALE AS DEPENDÊNCIAS:

```bash
npm install
```

EXECUTE O ARQUIVO:

- Modo Desenvolvedor:

```bash
npm run dev
```

- Modo Produção:

```bash
npm run start
```

## LISTA DE COMANDOS ##

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

## DEPENDÊNCIAS ##

```json
"dependencies": {
  "chalk": "^2.3.0",
  "cli-table": "^0.3.1"
},
"devDependencies": {
  "standard": "^10.0.3"
}
```

---

> Este código tem finalidade didática e não deve ser usado em produção.

> Envie sua sugestão ou correção.

> Obrigado.

---

## Licença ##

MIT