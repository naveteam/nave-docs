# Boilerplate de CI com PM2
### [Link do código](https://gitlab.com/nave/ci-boilerplate/-/blob/master/back-pm2-ec2.yml)

Esse boilerplate é majoritariamente usado para ambientes de Dev, onde o código roda em um EC2 com o PM2.
Pode ser usado para hospedar back-ends ou front-ends onde é utilizado Server Side Rendering(SSR)

## Requisitos para rodar:
### Máquina:
Caso a infra tenha sido provisionada usando o Terraform de dev, as aplicações necessárias já estão instaladas. Caso não tenha sido, as aplicações necessárias são:
- Node.js - pode ser instalado usando o seguinte script:
```
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```
- Yarn - pode ser instalado de forma global usando o npm: `npm i -g yarn`
- PM2 - instalado de forma global: `npm i -g pm2`
- Nginx - a configuração padrão dele pode ser vista [aqui](infra/use-cases/nginx/default-config).

### Variáveis:
Todas as variáves de ambiente devem ter a distinção de qual ambiente elas servem no final do nome. Ex.: `ENV_DEV`, `ENV_HMG`, `ENV_PROD`.

- `EC2_PEM_AMBIENT`: chave SSH usada pra acessar a instância.
- `EC2_HOST_AMBIENT`: IP público da máquina ou entrada de DNS apontando direto para a máquina.
- `EC2_USER_AMBIENT`: usuário da máquina. Geralmente é `ubuntu`.
- `ENV_AMBIENT`: Env no Gitlab com todas as envs da aplicação.
