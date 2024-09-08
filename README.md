# Projeto Lógico e Físico - AOP2

**Aluno:** João Manoel Lima (projeto individual)  
**Matrícula:** 202312044  
**Curso:** Análise e Desenvolvimento de Sistemas - EaD  

## Introdução

Este repositório contém o backup do banco de dados `PrecosCombustiveis`, desenvolvido para o projeto lógico e físico das AOPs da disciplina de Arquitetura de Dados Relacionais I. O banco de dados foi implementado usando o SQL Server dentro de um ambiente Docker.

## Desenvolvimento

### Ambiente de Desenvolvimento

Foi utilizada uma imagem Docker para criar o ambiente do SQL Server. Abaixo estão os comandos utilizados:

```bash
docker run -d -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=SuaSenhaSegura(!)" --name my-mssql-server -p 1433:1433 rapidfort/microsoft-sql-server-2019-ib:latest
```

Encontrei um problema breve, pois tentei utilizar uma senha fraca no início do projeto e isso resultava em um código de erro incomum. Precisei utilizar os logs do Docker para entender a política de senhas.

### Ferramenta de Gerenciamento

Utilizei o DBeaver como ferramenta de gerenciamento do banco de dados para facilitar a edição das tabelas e manipulação dos dados. Esta escolha foi motivada principalmente por ser uma ferramenta gratuita com uma versão nativa para o meu sistema operacional (Linux).

### Estrutura do Banco de Dados

O banco de dados foi modelado com base no projeto conceitual desenvolvido na AOP1, adaptando-se para o ambiente SQL Server. Todas as restrições, chaves primárias, relacionamentos e índices foram definidos conforme proposto.

### Conflitos e Soluções

Durante o processo de implementação, enfrentei alguns desafios, como a necessidade de ajuste nos IDs de postos ao inserir dados. Esse problema foi resolvido ao garantir que os IDs utilizados estavam consistentes com os registros existentes e que não havia o conflito de IDs.

### Backup do Banco de Dados

O backup do banco de dados, `PrecosCombustiveis.bak`, está incluído neste repositório. Para restaurar o banco de dados, siga os passos abaixo:

```bash
RESTORE DATABASE PrecosCombustiveis 
FROM DISK = '/var/opt/mssql/backup/backup.bak'
WITH MOVE 'PrecosCombustiveis' TO '/var/opt/mssql/data/PrecosCombustiveis.mdf',
MOVE 'PrecosCombustiveis_log' TO '/var/opt/mssql/data/PrecosCombustiveis_log.ldf';
```

Caso esteja utilizando um ambiente Windows, será necessário alterar os caminhos para uma rota mais adequada.

## Conclusão

Este projeto representa a implementação prática do banco de dados planejado na AOP1. A estrutura foi devidamente adaptada e implementada utilizando as ferramentas disponíveis, com as devidas resoluções de conflitos.