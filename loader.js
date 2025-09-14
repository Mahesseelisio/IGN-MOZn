// loader to prefer localStorage articles if present
async function fetchArticles(){ let fallback = await fetch('articles.json').then(r=>r.json()); try{ const ls = JSON.parse(localStorage.getItem('ign_articles')||'null'); if(Array.isArray(ls) && ls.length) return ls; }catch(e){} return fallback; }
