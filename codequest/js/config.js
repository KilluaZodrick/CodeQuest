// Configuração opcional.
// IA avaliadora de respostas (desligada por padrão). Para ligar, defina um objeto com um
// método json(prompt) que devolva {"correct": true|false, "feedback": "texto curto"}.
// IMPORTANTE: nunca coloque chave de API aqui; chame um servidor seu que guarde a chave.
//
// window.CQ_AI = { json: async function(prompt){
//   var r = await fetch("https://SEU-SERVIDOR/avaliar", {method:"POST",
//     headers:{"Content-Type":"application/json"}, body: JSON.stringify({prompt:prompt})});
//   return r.json();
// }};
window.CQ_AI = null;
