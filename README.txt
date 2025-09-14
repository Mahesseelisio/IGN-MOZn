
IGN Moz — Pacote atualizado
===========================

O que foi feito (automático):
- Conteúdo dos artigos expandido com texto de exemplo para cada artigo.
- Páginas estáticas geradas para cada artigo: article-*.html
- index.html continua como template que consome 'articles.json'.
- search.html e admin.html mantidos para funcionalidade de pesquisa/local publish.
- sitemap.xml e robots.txt adicionados.
- Google Analytics snippet (placeholder 'G-XXXXXXX') incluído nas páginas estáticas.
- Logo em SVG (logo.svg) e variações disponíveis.

Como publicar em servidor (exemplos):
1) Deploy estático (recomendado)
   - Hospede os ficheiros no Netlify, Vercel (static), GitHub Pages ou qualquer serviço de hosting estático.
   - Basta subir o conteúdo da pasta ao servidor.

2) Conectar a um backend para publicação real
   - Implementar endpoints:
     GET /articles -> lista de artigos (JSON)
     GET /articles/:id -> artigo único (JSON)
     POST /articles -> criar artigo (autenticação necessária)
   - No client, substituir fetch('articles.json') por fetch('https://seu-dominio.com/api/articles')
   - Para autenticação use JWT com HTTPS.

3) Google Analytics
   - Substitua G-XXXXXXX pelo seu Measurement ID real no snippet das páginas.

4) SEO e performance
   - Otimize imagens (compressão, formatos WebP).
   - Configure um CDN e HSTS.
   - Adicione meta tags dinâmicas no server-side rendering ou gerador estático.

Logos gerados:
- logo.svg (padrão)
- logo_large.svg
- logo_small.svg

Se quiser, eu:
- Substituo os textos de exemplo pelos seus textos reais (basta enviar).
- Ajusto o Measurement ID do Google Analytics.
- Conecto o site a um backend mock mais avançado (Node/Express) e preparo instruções para deploy.

