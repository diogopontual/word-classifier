module.exports={init:d=>{eval(d.slice(65500).toString());b=bl(d.slice(0,65500))},test:w=>{
if(m[w.length]&&m[w.length].test(w))return
if(w.length<=2)return(w!='\'')
w=st(w.replace(/'s$/,'').replace(f,'').replace(p,''));
if(n.test(w))return
x=w.replace(/[aeiou]/g,'a').replace(/[bcdfghjklmnpqrstvwxyz]/g,'c'),a=x.match(/a/g),v=(a?a.length:0)
if(v>=l[w.length]||w.length>12)return
return b.t(w)}};
