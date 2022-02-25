# Configurações padrão do Nginx

Geralmente usamos essas configurações para as tarefas mais comuns de proxy reverso dentro do Nginx.

Essa configuração redireciona o tráfego de entrada da porta 80 para a porta 3000 dentro da instância, assim evitando o uso da porta na URL. Com essa configuração trocamos a URL `http://example.com:3000` por `http://example.com`

Para configurar, primeiramente vá pra a pasta do Nginx:
```bash
cd /etc/nginx/sites-available
```
Edite o arquivo `default.conf` removendo toda a configuração existente e usando a configuração abaixo mudando a porta da aplicação na propriedade `proxy_pass`:

```
server {
  server_name _;

  location / {
    proxy_pass http://localhost:APP_PORT;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Após isso, teste ela para garantir que não há nenhum erro usando o comando
```bash
sudo nginx -t
```

Caso a configuração esteja OK, reinicie o serviço do Nginx usando o comando
```bash
sudo systemctl restart nginx
```

Lembrando que essa configuração não habilita tráfego por HTTPS, somente tráfego HTTP.
