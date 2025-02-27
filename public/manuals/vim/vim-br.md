# Pequeno Manual do VIM por Douglas Guimarães

## História do VIM, Contexto da Comunidade e Comandos Iniciais do VI

### História

O **VIM**, ou **VI Improved**, é um editor de texto de software livre criado por **Bram Moolenaar** e lançado publicamente em **2 de novembro de 1991**. Ele é baseado no **VI**, um editor de texto anterior desenvolvido por **Bill Joy** em **1976**.

#### Melhorias do VIM em relação ao VI

O VIM introduziu **recursos importantes**, como **destaque de sintaxe** e o **modo visual**, além de **melhorias de desempenho** e **documentação** apoiada por sua **grande comunidade**.

| **Recurso**                       | **Descrição**                                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Destaque de Sintaxe**           | Destaque de sintaxe para várias linguagens de programação, melhorando a legibilidade do código.                       |
| **Desfazer/Refazer Multinível**   | Operações ilimitadas de desfazer e refazer, ao contrário do desfazer de nível único do VI.                            |
| **Múltiplas Janelas/Abas**        | Suporte para dividir a tela em várias janelas e usar abas para multitarefa.                                           |
| **Modo Visual**                   | Modo de seleção de texto aprimorado para edição precisa.                                                              |
| **Macros e Scripting**            | Gravar e reproduzir macros, além de scripting avançado com Vimscript para automação.                                  |
| **Busca e Substituição**          | Busca e substituição aprimoradas com suporte a expressões regulares.                                                  |
| **Plugins**                       | Ecossistema extenso de plugins para adicionar funcionalidades como exploradores de arquivos, integração com Git, etc. |
| **Múltiplos Formatos de Arquivo** | Suporte a vários formatos de arquivo e codificações, tornando-o mais versátil.                                        |
| **Dobragem de Código**            | Dobragem de código para recolher e expandir seções de texto para melhor organização.                                  |
| **Verificação Ortográfica**       | Verificação ortográfica embutida para vários idiomas.                                                                 |
| **Autocompletar**                 | Autocompletar para palavras, linhas e funções.                                                                        |
| **Gerenciamento de Sessão**       | Salvar e restaurar sessões de edição, preservando seu espaço de trabalho entre sessões.                               |

### Contexto da Comunidade - A Criação do Neovim

Em **2014**, **Thiago Arruda** criou um fork do VIM chamado **Neovim** após sua proposta de patch para o VIM ser rejeitada. O Neovim é um **editor de texto baseado no VIM** desenvolvido em **[Lua](https://www.lua.org/)** e extensível por meio de uma ampla variedade de **plugins da comunidade**. A razão para a existência do Neovim é que o VIM ainda é **100% controlado por Bram Moolenaar**, então o Neovim foi criado para focar no **desenvolvimento orientado pela comunidade**.

### Comandos para Começar Rapidamente com o VIM - Movimentos do VI

Aqui está uma lista dos **comandos que você precisa conhecer** para começar com **VI**, **VIM**, **Neovim** ou qualquer outro editor baseado em **Movimentos do VI** 😂:

| **Comando**            | **Descrição**                                          |
| ---------------------- | ------------------------------------------------------ |
| **Navegação**          |                                                        |
| `h`                    | Mover cursor para a esquerda                           |
| `j`                    | Mover cursor para baixo                                |
| `k`                    | Mover cursor para cima                                 |
| `l`                    | Mover cursor para a direita                            |
| `0`                    | Ir para o início da linha                              |
| `$`                    | Ir para o final da linha                               |
| `gg`                   | Ir para a primeira linha do arquivo                    |
| `G`                    | Ir para a última linha do arquivo                      |
| `Ctrl + f`             | Rolar a página para baixo                              |
| `Ctrl + b`             | Rolar a página para cima                               |
| `w`                    | Pular para a próxima palavra                           |
| `b`                    | Pular para a palavra anterior                          |
| **Edição**             |                                                        |
| `i`                    | Inserir antes do cursor                                |
| `a`                    | Inserir após o cursor                                  |
| `I`                    | Inserir no início da linha                             |
| `A`                    | Inserir no final da linha                              |
| `o`                    | Inserir nova linha abaixo                              |
| `O`                    | Inserir nova linha acima                               |
| `x`                    | Deletar caractere sob o cursor                         |
| `dd`                   | Deletar linha inteira                                  |
| `dw`                   | Deletar palavra                                        |
| `D`                    | Deletar do cursor até o final da linha                 |
| `yy`                   | Copiar linha                                           |
| `yw`                   | Copiar palavra                                         |
| `p`                    | Colar após o cursor                                    |
| `P`                    | Colar antes do cursor                                  |
| `u`                    | Desfazer                                               |
| `Ctrl + r`             | Refazer                                                |
| **Busca/Substituição** |                                                        |
| `/texto`               | Buscar por "texto"                                     |
| `n`                    | Ir para o próximo resultado da busca                   |
| `N`                    | Ir para o resultado anterior da busca                  |
| `:%s/antigo/novo/g`    | Substituir todas as ocorrências de "antigo" por "novo" |
| `:%s/antigo/novo/gc`   | Substituir com confirmação                             |
| **Salvar/Sair**        |                                                        |
| `:w`                   | Salvar arquivo                                         |
| `:q`                   | Sair do Vim                                            |
| `:wq`                  | Salvar e sair                                          |
| `:q!`                  | Sair sem salvar                                        |
| `:w !sudo tee %`       | Salvar arquivo com sudo (se permissão negada)          |
| **Diversos**           |                                                        |
| `:help`                | Abrir ajuda do Vim                                     |
| `:set number`          | Mostrar números das linhas                             |
| `:set nonumber`        | Ocultar números das linhas                             |
| `:split`               | Dividir janela horizontalmente                         |
| `:vsplit`              | Dividir janela verticalmente                           |
| `Ctrl + ww`            | Alternar entre janelas divididas                       |
| `:e nome_do_arquivo`   | Abrir outro arquivo no Vim                             |
| `:tabnew`              | Abrir uma nova aba                                     |
| `gt`                   | Alternar para a próxima aba                            |
| `gT`                   | Alternar para a aba anterior                           |

## Referências

- [VIM](https://www.vim.org/)
- [VI](<https://en.wikipedia.org/wiki/Vi_(text_editor)>)
- [Lua](https://www.lua.org/)
- [Quem é o Criador do Neovim?](https://www.reddit.com/r/neovim/comments/17i074v/who_is_the_neovims_creator_and_who_is_the_main/)
- [Manifesto do Neovim?](https://groups.google.com/g/vim_dev/c/65jjGqS1_VQ?pli=1)

## Autor(es)

- **Autor**: Douglas Guimarães
- **Última Modificação**: 27/02/2025
