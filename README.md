# 2021.1-Oraculo-Frontend

[![License: GPL-3.0](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/mit)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2021-1-PC-GO-Frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2021-1-PC-GO-Frontend)

Esse repositório tem o propósito de apresentar um interface web simples e intuitiva do projeto [`Oráculo`](https://github.com/fga-eps-mds/2021.1-Oraculo).

## Como contribuir?

Gostaria de contribuir com nosso projeto? Acesse o nosso [guia de contribuição](https://fga-eps-mds.github.io/2021.1-Oraculo/CONTRIBUTING/) onde são explicados todos os passos.
Caso reste duvidas você também pode entrar em contato conosco criando uma issue.

## Documentação

A documentação do projeto pode ser acessada pelo nosso site em https://fga-eps-mds.github.io/2021.1-Oraculo/.

## Como rodar?

Para rodar o Frontend é preciso usar o seguinte comando usando o docker.

```bash
docker-compose up
```

O frontend estará rodando na [porta 3000](http://localhost:3000).

Configure as variáveis de ambiente

```
export DEV=true
export PROFILE_BASE_URL=""
export RECORDS_BASE_URL=""
export TAGS_BASE_URL=""
```

Se `DEV` for true então as variáveis `PROFILE_BASE_URL`, `RECORDS_BASE_URL` e
`TAGS_BASE_URL`serão ignoradas.

Esta aplicação faz conexão e é dependente das APIs para funcionar corretamente. As APIs correspondentes são:

- [API de Profile](https://github.com/fga-eps-mds/2021.1-Oraculo-Profile)
- [API de Processos](https://github.com/fga-eps-mds/2021.1-Oraculo-Processos)
- [API de Tags](https://github.com/fga-eps-mds/2021.1-Oraculo-Tags)
