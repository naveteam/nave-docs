# Boilerplate de CI com Docker + ECS
### [Link do código](/wip)

Esse boilerplate é usado geralmente em ambientes de homologação e produção devido a sua alta escalabilidade. O funcionamento dele é simples:
- Gera uma imagem Docker do código
- Publica essa imagem no AWS ECR com a tag `latest`
- Atualiza o cluster do ECS com a nova versão da imagem

Ele serve para aplicações em qualquer linguagem, desde que tenha um Dockerfile configurado corretamente.

## Requisitos para rodar:
### Máquina:
Não é necessária nenhuma configuração de máquina pois o mesmo roda em Fargate.

### Variáveis:
Todas as variáves de ambiente devem ter a distinção de qual ambiente elas servem no final do nome. Ex.: `ENV_DEV`, `ENV_HMG`, `ENV_PROD`.

- `AWS_KEY_AMBIENT` e `AWS_SECRET_AMBIENT`: Credenciais da AWS geradas pelo Terraform
- `AWS_REGION_AMBIENT`: Região onde o cluster ECS está rodando
- `EC2_USER_AMBIENT`: usuário da máquina. Geralmente é `ubuntu`
- `ECR_URL_AMBIENT`: URL do ECR para upload das imagens do Docker
- `ENV_AMBIENT`: Env no Gitlab separada por ambiente com todas as envs da aplicação. Ex.: ENV_DEV, ENV_HMG, ENV_PROD
