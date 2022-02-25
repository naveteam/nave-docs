# Uso do domínio da Nave para clientes

Geralmente não usamos o domínida da nave (nave.rs) para hospedar sites de clientes, mas podem haver cenários onde seja necessário o uso de HTTPS/SSL em um endpoint. Para isso, usamos o domínio da nave para esses testes.
Geralmente tentamos seguir um padrão para isso, sendo ele:
```nomeDoProjeto-ambiente.nave.rs``` para front-end ou
```api-nomeDoProjeto-ambient.nave.rs``` para back-end.

Depois de esses passos serem feitos, você pode configurar o SSL pelo Nginx usando o Certbot com [este passo-a-passo](/infra/use-cases/nginx/https)
