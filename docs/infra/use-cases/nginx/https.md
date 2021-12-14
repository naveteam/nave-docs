# HTTPS no Nginx

Para usar HTTPS no Nginx, usamos uma solução chamada Certbot. Ele configura automaticamente os certificados SSL e mantém um aviso por e-mail de quando um certificado vai expirar.

Para configurar ele, primeiro precisamos configurar um domínio DNS para a instância onde estamos com o Nginx rodando.

Depois de ter esse domínio, editamos a configuração padrão do Nginx e adicionamos ele no campo `server_name`:

```
server {
  server_name example.com;

{...}
```

Após isso, instalamos o [Certbot](https://certbot.eff.org/instructions). Caso esteja no Ubuntu, ele pode ser instalado usando o comando
```bash
sudo snap install certbot --classic
```

Depois do apontamento do DNS configurado, Certbot instalado e o Nginx com o `server_name` configurado, rodamos o comando
```bash
sudo certbot --nginx
```
e seguimos o passo-a-passo apresentado pelo próprio Certbot.

Após finalizar ele, o SSL já está configurado e podemos usar o HTTPS para acessar a aplicação.