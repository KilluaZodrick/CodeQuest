# CodeQuest
site ceiado usando Claude Ia, primeiro projeto pessoal usando prompt e automaçao IA 

Quiz de programação Front-end e Back-end com visual estilo matrix (cinza escuro, verde e números caindo ao fundo).

🔗 Site: https://KilluaZodrick.github.io/CodeQuest/ 📦 Código: https://github.com/KilluaZodrick/CodeQuest

Troque SEU-USUARIO e SEU-REPOSITORIO pelos seus dados.

Recursos
Duas trilhas (Front-end e Back-end), cada uma com 3 níveis: Básico, Médio e Avançado
5 questões por nível. A resposta é código digitado (não é múltipla escolha)
3 tentativas por questão, com uma dica nova a cada erro
No final de cada questão: código correto e outras formas de resolver
Um nível só é liberado quando todas as questões do anterior são acertadas
Cadastro e login (usuário, senha e nome de exibição), com progresso salvo por usuário
O nome de exibição pode ser trocado a cada 3 meses
Continuar de onde parou ou refazer um nível
Como rodar localmente
python -m http.server 8000
# abra http://localhost:8000
Também funciona com npx serve. Abrir o index.html direto no navegador costuma funcionar, mas o cadastro usa a API de criptografia do navegador, que prefere localhost ou HTTPS.

Como publicar no GitHub Pages
Crie um repositório no GitHub e envie estes arquivos para a branch main.
No repositório, abra Settings → Pages e, em Source, escolha GitHub Actions.
O workflow em .github/workflows/pages.yml publica o site a cada push. Em 1 a 2 minutos o link aparece na aba Actions e em Settings → Pages.
Link final: https://KilluaZodrick.github.io/CodeQuest/

Estrutura
index.html          página principal
css/style.css       visual
js/questions.js     questões das duas trilhas
js/app.js           telas, login, progresso e correção
js/storage.js       armazenamento local (localStorage)
js/rain.js          números caindo no fundo
js/config.js        configuração opcional (IA avaliadora)
Como adicionar questões
Em js/questions.js, cada questão tem este formato:

{
  t: 'Front',                       // 'Front' ou 'Back'
  q: 'Enunciado da questão.',
  ok: [/^p\{color:red;?\}$/],       // regex(s) aceitos. O texto é normalizado antes:
                                    // minúsculas, sem espaços e aspas simples viram duplas
  h: ['Dica 1', 'Dica 2'],          // uma dica por erro
  code: 'p { color: red; }',        // código correto mostrado no final
  alt: 'Outras formas de resolver.' // texto das alternativas
}
Limitações e segurança
Este é um projeto base de estudo, não seguro. Contas e progresso ficam no localStorage do navegador de cada pessoa: não são compartilhados entre aparelhos nem protegidos por servidor. A senha é guardada como hash (PBKDF2), mas qualquer pessoa com acesso ao navegador consegue ver os dados.
Não use senhas reais de outros serviços.
A correção compara o texto digitado com padrões (regex); o código não é executado. Uma solução correta, mas muito diferente da esperada, pode ser recusada: inclua novas regex em ok.
A IA avaliadora e a memória de aprendizado existem no código, mas vêm desligadas. Para ligar, veja js/config.js. Nunca coloque chave de API no front-end: use um servidor intermediário.
Para contas compartilhadas entre dispositivos, troque o LocalDB (js/storage.js) por um banco na nuvem, como Supabase ou Firebase.
Licença
MIT. Veja o arquivo LICENSE.
