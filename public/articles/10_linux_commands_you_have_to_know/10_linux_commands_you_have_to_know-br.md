#  10 comandos do Linux que você tem que saber.

Que Linux _domina_ os servidores e que, a medida que o steam deck vai se tornando mais famoso, o mundo desktop também você já sabe. Porém, será que você, não usuário comum, mas recém sysOps sabe os principais comandos do pinguim?

Caso a resposta seja não, separamos aqui os top 10. O número um é essencial em qualquer servidor Linux .

## 10. `find`
Busca arquivos e diretórios em uma hierarquia de diretórios.

```bash
find [caminho] [opções] [expressão]
```

### Exemplos úteis:
- `find / -name arquivo.txt` → Busca o arquivo chamado `arquivo.txt` a partir da raiz.
- `find . -type f -name "*.log"` → Busca arquivos com extensão `.log` no diretório atual.

### Principais opções:
- `-name` → Busca por nome exato (sensível a maiúsculas).
- `-iname` → Busca por nome (sem diferenciar maiúsculas/minúsculas).
- `-type f` → Apenas arquivos.
- `-type d` → Apenas diretórios.
- `-size` → Filtra por tamanho (ex: `+100M`, `-10k`).
- `-exec comando {} \;` → Executa um comando para cada resultado.

---

## 9. `sudo`
Permite executar comandos como superusuário (root).

```bash
sudo [comando]
```

### Exemplos úteis:
- `sudo apt update` → Atualiza os repositórios (Debian/Ubuntu).
- `sudo nano /etc/hosts` → Edita o arquivo de hosts com permissões elevadas.

### Dica:
- Usuários precisam estar no grupo `sudo` para usar esse comando.

---

## 8. `top`
Exibe processos ativos e uso de recursos em tempo real.

```bash
top
```

### Comandos interativos (enquanto o `top` está rodando):
- `P` → Ordena por uso de CPU.
- `M` → Ordena por uso de memória.
- `k` → Finaliza um processo (insira o PID).
- `q` → Sai do `top`.

### Alternativa:
- `htop` → Versão melhorada (colorida e mais interativa, precisa instalar).

---

## 7. `grep`
Procura por padrões de texto em arquivos ou saídas.

```bash
grep [opções] "padrão" [arquivo]
```

### Exemplos úteis:
- `grep "root" /etc/passwd` → Procura a palavra "root" no arquivo.
- `ps aux | grep firefox` → Procura processos com "firefox".

### Principais opções:
- `-i` → Ignora maiúsculas/minúsculas.
- `-r` ou `-R` → Busca recursiva em diretórios.
- `-n` → Mostra número das linhas.
- `--color=auto` → Destaca o padrão encontrado (geralmente padrão).

---

## 6. `rm`
Remove arquivos ou diretórios.

```bash
rm [opções] arquivo_ou_diretório
```

### Exemplos úteis:
- `rm arquivo.txt` → Remove o arquivo.
- `rm -r pasta/` → Remove o diretório e seu conteúdo.
- `rm -rf /tmp/teste` → Força a remoção recursiva (sem confirmação).

### Principais opções:
- `-r` → Remove diretórios recursivamente.
- `-f` → Força remoção (ignora avisos).
- `-i` → Pede confirmação antes de cada remoção.

⚠️ **Cuidado extremo com `rm -rf /`**

---

## 5. `mv`
Move ou renomeia arquivos e diretórios.

```bash
mv [origem] [destino]
```

### Exemplos úteis:
- `mv arquivo.txt pasta/` → Move o arquivo.
- `mv velho.txt novo.txt` → Renomeia o arquivo.

### Dica:
- Pode sobrescrever arquivos sem aviso. Use `-i` para pedir confirmação.

---

## 4. `cp`
Copia arquivos e diretórios.

```bash
cp [opções] origem destino
```

### Exemplos úteis:
- `cp a.txt b.txt` → Copia um arquivo.
- `cp -r pasta1/ pasta2/` → Copia diretórios recursivamente.

### Principais opções:
- `-r` → Copia diretórios.
- `-i` → Pede confirmação antes de sobrescrever.
- `-u` → Copia apenas se o arquivo de origem for mais recente.

---

## 3. `cat`
Exibe o conteúdo de arquivos no terminal.

```bash
cat [arquivo]
```

### Exemplos úteis:
- `cat texto.txt` → Mostra o conteúdo.
- `cat arquivo1 arquivo2 > novo.txt` → Junta arquivos.

### Dica:
- Para paginar conteúdo longo, use `cat arquivo | less`.

---

## 2. `cd`
Navega entre diretórios.

```bash
cd [diretório]
```

### Exemplos úteis:
- `cd /home/usuario` → Vai para o diretório especificado.
- `cd ..` → Volta um nível.
- `cd ~` ou `cd` → Vai para o diretório home do usuário.
- `cd -` → Volta ao diretório anterior.

---

## 1. `ls`
Lista arquivos e diretórios.

```bash
ls [opções] [caminho]
```

### Exemplos úteis:
- `ls` → Lista conteúdo do diretório atual.
- `ls -l` → Lista em formato detalhado.
- `ls -a` → Inclui arquivos ocultos.
- `ls -lh` → Lista com tamanhos legíveis (KB, MB...).



