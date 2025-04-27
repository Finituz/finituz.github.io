# 10 Linux Commands You Must Know

You already know that Linux **dominates** the server world, and as the Steam Deck becomes more popular, the desktop world is catching up too. But the question is: do **you**, not just an average user but a new sysOps, know the key commands of the penguin?

If the answer is no, we’ve put together the top 10 here. Number one is essential on any Linux server.

---

## 10. `find`

Searches for files and directories in a directory hierarchy.

```bash
find [path] [options] [expression]
```

### Useful examples:

- `find / -name file.txt` → Searches for a file named `file.txt` starting from the root.
- `find . -type f -name "*.log"` → Searches for `.log` files in the current directory.

### Key options:

- `-name` → Searches for exact name (case-sensitive).
- `-iname` → Case-insensitive name search.
- `-type f` → Files only.
- `-type d` → Directories only.
- `-size` → Filter by size (e.g., `+100M`, `-10k`).
- `-exec command {} \;` → Runs a command on each result.

---

## 9. `sudo`

Allows running commands as superuser (root).

```bash
sudo [command]
```

### Useful examples:

- `sudo apt update` → Updates repositories (Debian/Ubuntu).
- `sudo nano /etc/hosts` → Edits the hosts file with elevated privileges.

### Tip:

- Users must be in the `sudo` group to use this command.

---

## 8. `top`

Displays active processes and resource usage in real time.

```bash
top
```

### Interactive commands (while `top` is running):

- `P` → Sort by CPU usage.
- `M` → Sort by memory usage.
- `k` → Kill a process (enter PID).
- `q` → Quit `top`.

### Alternative:

- `htop` → Improved version (colorful and more interactive, needs installation).

---

## 7. `grep`

Searches for text patterns in files or outputs.

```bash
grep [options] "pattern" [file]
```

### Useful examples:

- `grep "root" /etc/passwd` → Looks for the word "root" in the file.
- `ps aux | grep firefox` → Finds processes with "firefox".

### Key options:

- `-i` → Case-insensitive.
- `-r` or `-R` → Recursive search through directories.
- `-n` → Show line numbers.
- `--color=auto` → Highlights matched pattern (usually default).

---

## 6. `rm`

Removes files or directories.

```bash
rm [options] file_or_directory
```

### Useful examples:

- `rm file.txt` → Deletes the file.
- `rm -r folder/` → Deletes directory and contents.
- `rm -rf /tmp/test` → Forcefully deletes recursively (no confirmation).

### Key options:

- `-r` → Recursive deletion.
- `-f` → Force deletion (ignores warnings).
- `-i` → Asks for confirmation before deletion.

⚠️ **Extreme caution with `rm -rf /`**

---

## 5. `mv`

Moves or renames files and directories.

```bash
mv [source] [destination]
```

### Useful examples:

- `mv file.txt folder/` → Moves the file.
- `mv old.txt new.txt` → Renames the file.

### Tip:

- Can overwrite files without warning. Use `-i` to ask for confirmation.

---

## 4. `cp`

Copies files and directories.

```bash
cp [options] source destination
```

### Useful examples:

- `cp a.txt b.txt` → Copies a file.
- `cp -r folder1/ folder2/` → Recursively copies directories.

### Key options:

- `-r` → Recursive copy.
- `-i` → Ask for confirmation before overwriting.
- `-u` → Copy only if source is newer than destination.

---

## 3. `cat`

Displays file contents in the terminal.

```bash
cat [file]
```

### Useful examples:

- `cat text.txt` → Displays contents.
- `cat file1 file2 > new.txt` → Merges files.

### Tip:

- For long output, use `cat file | less`.

---

## 2. `cd`

Navigates between directories.

```bash
cd [directory]
```

### Useful examples:

- `cd /home/user` → Goes to specified directory.
- `cd ..` → Goes up one level.
- `cd ~` or `cd` → Goes to user's home directory.
- `cd -` → Returns to previous directory.

---

## 1. `ls`

Lists files and directories.

```bash
ls [options] [path]
```

### Useful examples:

- `ls` → Lists contents of current directory.
- `ls -l` → Detailed list.
- `ls -a` → Includes hidden files.
- `ls -lh` → Human-readable sizes (KB, MB...).
