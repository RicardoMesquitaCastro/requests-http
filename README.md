Estudos Requisições API

1. Intalação do projeto "ng new ...."

2. Intalação Bootstrap "npm bootstrap -save"
			"npm i ngx-bootstrap"
   @import '~bootstrap/dist/css/bootstrap.min.css'; em estilos globais

3. Componentes e rotas

ng g m cursos --routing
ng g c cursos/cursos-lista
///////////////////////////////////////////////////////////~~~~~~~~~///////////////////////////////////////

#119 Http: Simulando Servidor REST(json-server) ----- https://www.npmjs.com/package/json-server
npm i json-server //Instalado globalmente na maquina 

Start JSON Server
json-server --watch db.json //raiz do projeto 
PLUGIN: REST Client no VS code para simular requisições

#120 Http GET: listar registros

#121 Http: Dica: Variável de Ambiente para parametrizar qual a URL a utlilizar 
directory: environment

#122 Http GET + Pipe Async. Evitar problemas de memoria da aplicação por cache  VER MAIS SOBRE
cursos$ = observable

#123: Http + RxJS: Unsubscribe Automático
ESTUDAR MAIS SOBRE

#124: Capturando Erros (+Erro com async)
catchError