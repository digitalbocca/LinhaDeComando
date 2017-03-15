# LinhaDeComando #

Implementação de um programa em Javascript (NODE) em linha de comando.

#### ATENÇÃO ####

Este programa apenas escreve texto na tela do terminal.
Este programa tem apenas finalidade didática.

#### USE NO CLOUD9 ####

INSTRUÇÕES DE CRIAÇÃO DO WORKSPACE:

- CRIE UM NOVO WORKSPACE.
- NOMEIE E CRIE UMA DESCRIÇÃO.
- ESOLHA 'HOSTED WORKSPACE'
- ESCOLHA A VISIBILIDADE (PRIVADA OU PUBLICA)
- PREENCHA O CAMPO 'Clone from Git or Mercurial URL' COM:
- <code>https://github.com/digitalbocca/LinhaDeComando.git</code>
- ESCOLHA O TEMPLATE 'blank' (UBUNTU).
- CRIE O SEU WORKSPACE.

INSTRUÇÕES APÓS A CRIAÇÃO DO SEU WORKSPACE:

**O CÓDIGO FOI TESTADO NA VERSÃO 7.7.3 DO NODE**

- DEPOIS DE CARREGADO O WORKSPACE VÁ ATÉ O TERMINAL.
- ATUALIZE O NODE PARA A VERSÃO 7+ :
- <code>nvm install 7</code>
- <code>nvm use 7</code>
- <code>nvm alias default 7</code>
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

#### DEPENDÊNCIAS ####

```json
"dependencies": {
  "cli-table": "^0.3.1",
  "colors": "^1.1.2"
}
```

**DEPENDÊNCIAS APENAS PARA FORMATAÇÃO DO TEXTO**

> Este c&oacute;digo &eacute; apenas para fins did&aacute;ticos e n&atilde;o deve ser usado em produ&ccedil;&atilde;o.

> O c&oacute;digo n&atilde;o segue nenhuma padroniza&ccedil;&atilde;o, &eacute; apenas para simular o funcionamento.

> Obrigado.