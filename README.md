# Lista de Tarefas

O objetivo deste projeto é fornecer uma interface de usuário para gerenciar uma lista de tarefas, a aplicação permite adicionar, visualizar, editar e remover tarefas, tudo isso utilizando a API desenvolvida em ASP.NET Core.


## Passos
Siga os passos abaixo para configurar e rodar o projeto localmente.

* Clone o repositório:
~~~
git clone https://github.com/Joao-Silva01/Sistema_Lista.git
~~~

### Colocar a API para rodar
**1. Entre no repositório:**<br>
* Entre no arquivo da api
~~~
cd api
cd ListApi
~~~
**2. Instale as depêndencias do backend**
~~~
dotnet restore
~~~
**3.  Inicie a API**
~~~
dotnet run
~~~

### Agora vamos colocar a aplicação para rodar

**1. Instale as dependências:**<br>
* Verifique se está no arquivo react_front
* Caso esteja, instale as depêndencias do frontend
~~~
npm install
~~~

**2. Inicie o servidor de desenvolvimento:**
~~~
npm start
~~~
