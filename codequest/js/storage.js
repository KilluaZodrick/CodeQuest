// Armazenamento local (localStorage) com a mesma interface simples usada pelo app:
//   LocalDB.doc("colecao/id").get() / set(obj) / update(obj) / delete()
//   LocalDB.collection("colecao").limit(n).get()  ->  { docs: [ { id, exists, data() } ] }
// Para usar um banco na nuvem (Supabase, Firebase...), crie um objeto com essa mesma
// interface e atribua a DB em app.js (função boot).
var LocalDB=(function(){
  var P='cq_db:';
  function read(p){try{var v=localStorage.getItem(P+p);return v?JSON.parse(v):null}catch(e){return null}}
  function write(p,d){localStorage.setItem(P+p,JSON.stringify(d))}
  function snap(id,d){return {id:id,exists:d!==null,data:function(){return d===null?undefined:JSON.parse(JSON.stringify(d))}}}
  return {
    doc:function(p){return {
      get:async function(){return snap(p.split('/').pop(),read(p))},
      set:async function(d){write(p,d)},
      update:async function(d){write(p,Object.assign(read(p)||{},d))},
      delete:async function(){localStorage.removeItem(P+p)}
    }},
    collection:function(name){return {
      limit:function(){return this},
      get:async function(){
        var docs=[],pre=P+name+'/';
        for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);
          if(k.indexOf(pre)==0)docs.push(snap(k.slice(pre.length),JSON.parse(localStorage.getItem(k))));}
        return {docs:docs};
      }
    }}
  };
})();
