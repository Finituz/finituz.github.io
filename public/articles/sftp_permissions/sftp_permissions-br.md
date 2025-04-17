# Como setar as permissões padrão em um servidor SFTP

Digamos que você gostaria que todos os usuários do seu servidor SFTP, ao fazerem upload de um arquivo, tivessem esse arquivo com permissões de leitura, escrita e execução para todos os usuários do servidor.

Podemos alcançar isso utilizando a flag `-u`. A flag `-u` nos dá a possibilidade de definir as permissões padrão dos arquivos enviados via SFTP.

Por exemplo, se quisermos configurar para que, por padrão, todos os usuários do grupo tenham permissão de leitura, escrita e execução nos arquivos enviados, podemos utilizar:

```bash
# /etc/ssh/sshd_config

Subsystem sftp internal-sftp -u 007
```

Após isso, defina uma permissão recursiva equivalente no diretório, por exemplo:

```bash
# terminal

$ chmod -R 700 . &
```

Quando o upload for feito, verificamos o seguinte:

![enviando um arquivo chamado test-group via sftp](../../imgs/articles/sftp-permissions/image_2.png)

Isso fará com que nosso servidor imponha, por padrão, essas permissões:

![Mostra as permissões sftp setadas](../../imgs/articles/sftp-permissions/image.png)

**Vale lembrar** que esse é o comportamento padrão do sistema. Caso o usuário force um código de permissão diferente, será esse o atribuído ao arquivo.

## Referências

- [How to put desired umask with SFTP?](https://serverfault.com/questions/70876/how-to-put-desired-umask-with-sftp)
- [IBM – Changing SFTP umask](https://www.ibm.com/support/pages/changing-sftp-umask-single-or-group-users)

## Autor

**_Douglas Guimarães_**  
Última modificação: 16/04/2025
