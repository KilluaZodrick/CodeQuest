// ===== Chuva de números (sutil) =====
(function(){
  var c=document.getElementById('rain'),x=c.getContext('2d'),cols,drops,fs=16;
  function init(){c.width=innerWidth;c.height=innerHeight;cols=Math.floor(c.width/fs);drops=[];for(var i=0;i<cols;i++)drops[i]=Math.random()*c.height/fs}
  init();addEventListener('resize',init);
  setInterval(function(){
    x.fillStyle='rgba(30,33,36,.12)';x.fillRect(0,0,c.width,c.height);
    x.fillStyle='#00ff41';x.font=fs+'px monospace';
    for(var i=0;i<cols;i++){
      x.fillText(Math.random()<.5?'0':'1',i*fs,drops[i]*fs);
      if(drops[i]*fs>c.height&&Math.random()>.975)drops[i]=0;
      drops[i]+=.6;
    }
  },60);
})();
