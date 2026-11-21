# CodeQuest
site ceiado usando Claude Ia, primeiro projeto pessoal usando prompt e automaçao IA 

TAREFAS

1. Estrutura: separe o arquivo único em index.html, css/style.css, js/questions.js (as questões de Front-end e Back-end), js/storage.js, js/app.js e js/rain.js (chuva de números verde). Mantenha o visual idêntico: fundo cinza escuro, verde forte (#00ff41) nas bordas e botões, texto branco, números caindo de forma sutil e quase transparente.

2. Remover a dependência do claude.ai:
   - Crie js/storage.js com uma interface única (getAccount, putAccount, getProgress, putProgress, getLearned, putLearned, getWrong, putWrong) implementada com localStorage. O resto do código só fala com essa interface.
   - Troque as chamadas claude.use("db") por esse módulo.
   - A IA avaliadora (claude.use("sample")) não existe fora do claude.ai: deixe a função judge() desligada por padrão, retornando null, e documente como plugar uma API própria usando um servidor intermediário (nunca coloque chave de API no front-end). Mantenha o aprendizado local: respostas aceitas e erros comuns continuam salvos no storage.
   - Pergunte-me se quero também um adaptador opcional para Supabase ou Firebase (contas compartilhadas entre dispositivos). Se eu não responder, use só localStorage.

3. Preserve todas as funcionalidades: cadastro e login (usuário, nome de exibição de 2 a 24 caracteres, senha com hash PBKDF2), troca do nome de exibição a cada 90 dias, progresso por usuário, botão Front-end/Back-end, 3 níveis com 5 questões por trilha, 3 tentativas com dica a cada erro, código correto e alternativas ao final, níveis liberados em sequência, continuar de onde parou e refazer nível, sair da conta.

4. Arquivos do repositório: README.md em português (descrição, lista de recursos, como rodar localmente, como adicionar questões, aviso de que o login é só para estudo e não é seguro, limitações, estrutura de pastas e espaço para uma captura de tela), LICENSE (MIT), .gitignore, .nojekyll e .github/workflows/pages.yml para publicar no GitHub Pages a cada push na branch main (actions/configure-pages, upload-pages-artifact e deploy-pages).

5. Teste antes de publicar: rode um servidor local (npx serve ou python -m http.server) e use um navegador headless (Playwright) para cadastrar, sair, entrar, alternar Front-end/Back-end, acertar e errar uma questão, ver as dicas e confirmar o desbloqueio do nível seguinte. Corrija o que falhar.

6. Publicação: pergunte meu usuário do GitHub e o nome do repositório. Se o GitHub CLI (gh) estiver instalado e autenticado, faça git init, commit, crie o repositório público e envie o código (gh repo create --public --source=. --push) e ative o Pages com GitHub Actions. Se não for possível, me entregue os comandos exatos para eu rodar.

