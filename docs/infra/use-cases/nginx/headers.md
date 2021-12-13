# Headers

Os headers tem um papel importante principalmente na autenticação, mas devemos tomar alguns cuidados com eles:

- Evitar usar [headers com _ (underline)](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/?highlight=disappearing%20http%20headers#missing-disappearing-http-headers), pois o Nginx ignora os mesmos na sua configuração padrão.
Caso você realmente precise utilizar headers com underline, você pode usar o `underscores_in_headers on;` na configuração do Nginx, mas é importante salientar que essa não é uma prática recomendada.