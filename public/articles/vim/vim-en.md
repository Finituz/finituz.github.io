# VIM Little Manual by Douglas Guimarães

## VIM History, Community Context, and VI Start Commands

### History

VIM, or **VI Improved**, is a free software text editor that was created by **Bram Moolenaar** and publicly released on **2 November 1991**. It is based on **VI**, an earlier text editor developed by **Bill Joy** in **1976**.

#### VIM Improvements to VI

VIM introduced **important features** like **text highlighting** and the **visual mode**, along with **performance improvements** and **documentation** supported by its **large community**.

| **Feature**               | **Description**                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| **Text Highlighting**     | Syntax highlighting for various programming languages, improving code readability.             |
| **Multi-level Undo/Redo** | Unlimited undo and redo operations, unlike vi's single-level undo.                             |
| **Multiple Windows/Tabs** | Supports splitting the screen into multiple windows and using tabs for multitasking.           |
| **Visual Mode**           | Enhanced text selection mode for precise editing.                                              |
| **Macros and Scripting**  | Record and replay macros, and advanced scripting with Vimscript for automation.                |
| **Search and Replace**    | Improved search and replace with support for regular expressions.                              |
| **Plugins**               | Extensive plugin ecosystem for adding functionality like file explorers, Git integration, etc. |
| **Multiple File Formats** | Supports various file formats and encodings, making it more versatile.                         |
| **Folding Code**          | Code folding to collapse and expand sections of text for better organization.                  |
| **Spell Checking**        | Built-in spell checking for multiple languages.                                                |
| **Autocompletion**        | Auto-completion for words, lines, and functions.                                               |
| **Session Management**    | Save and restore editing sessions, preserving your workspace between sessions.                 |

### Community Context - The Creation of Neovim

In **2014**, **Thiago Arruda** created a fork of VIM called **Neovim** after his patch to VIM was rejected. Neovim is a **VIM-based text editor** developed in **[Lua](https://www.lua.org/)** and extensible through a wide range of **community plugins**. The reason for Neovim's existence is that VIM is still **100% controlled by Bram Moolenaar**, so Neovim was created to focus on **community-driven development**.

### Commands to Quick Start with VIM - VI Motions

Here is a list of the **commands you must know** to start with **VI**, **VIM**, **Neovim**, or any other **VI Motions-based editor** 😂:

| **Command**        | **Description**                             |
| ------------------ | ------------------------------------------- |
| **Navigation**     |                                             |
| `h`                | Move cursor left                            |
| `j`                | Move cursor down                            |
| `k`                | Move cursor up                              |
| `l`                | Move cursor right                           |
| `0`                | Move to start of line                       |
| `$`                | Move to end of line                         |
| `gg`               | Go to the first line of the file            |
| `G`                | Go to the last line of the file             |
| `Ctrl + f`         | Page down                                   |
| `Ctrl + b`         | Page up                                     |
| `w`                | Jump to next word                           |
| `b`                | Jump to previous word                       |
| **Editing**        |                                             |
| `i`                | Insert before cursor                        |
| `a`                | Insert after cursor                         |
| `I`                | Insert at start of line                     |
| `A`                | Insert at end of line                       |
| `o`                | Insert new line below                       |
| `O`                | Insert new line above                       |
| `x`                | Delete character under cursor               |
| `dd`               | Delete entire line                          |
| `dw`               | Delete word                                 |
| `D`                | Delete from cursor to end of line           |
| `yy`               | Yank (copy) line                            |
| `yw`               | Yank word                                   |
| `p`                | Paste after cursor                          |
| `P`                | Paste before cursor                         |
| `u`                | Undo                                        |
| `Ctrl + r`         | Redo                                        |
| **Search/Replace** |                                             |
| `/text`            | Search for "text"                           |
| `n`                | Jump to next search result                  |
| `N`                | Jump to previous search result              |
| `:%s/old/new/g`    | Replace all occurrences of "old" with "new" |
| `:%s/old/new/gc`   | Replace with confirmation                   |
| **Saving/Exiting** |                                             |
| `:w`               | Save file                                   |
| `:q`               | Quit Vim                                    |
| `:wq`              | Save and quit                               |
| `:q!`              | Quit without saving                         |
| `:w !sudo tee %`   | Save file with sudo (if permission denied)  |
| **Miscellaneous**  |                                             |
| `:help`            | Open Vim help                               |
| `:set number`      | Show line numbers                           |
| `:set nonumber`    | Hide line numbers                           |
| `:split`           | Split window horizontally                   |
| `:vsplit`          | Split window vertically                     |
| `Ctrl + ww`        | Switch between split windows                |
| `:e filename`      | Open another file in Vim                    |
| `:tabnew`          | Open a new tab                              |
| `gt`               | Switch to next tab                          |
| `gT`               | Switch to previous tab                      |

## References

- [VIM](https://www.vim.org/)
- [VI](<https://en.wikipedia.org/wiki/Vi_(text_editor)>)
- [Lua](https://www.lua.org/)
- [Who is the Neovim Creator?](https://www.reddit.com/r/neovim/comments/17i074v/who_is_the_neovims_creator_and_who_is_the_main/)
- [Neovim Manifest?](https://groups.google.com/g/vim_dev/c/65jjGqS1_VQ?pli=1)

## Writer(s)

- **Author**: Douglas Guimarães
- **Last Modified**: 27/02/2025
