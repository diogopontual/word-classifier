module.exports={
	init: b=>{
		let z = '';
		for (let i = 0; i < 65500; i++)
			for (let e = 7; e >= 0; e--)
				z += b[i] >> e & 1 == 1 ? '1' : '0';
		let c = b.slice(65500);
		eval(c.toString());
		bl = new BF(z);
	},
	test: w=>{
		if(w.length == 1) return (w != '\'')
		if(w.length == 2) return !(nb.test(w)||ne.test(w)||n.test(w));
		w = st(w.toLowerCase().replace(/'s$/,'').replace(f,'').replace(p,''));
		if(/^'|'$/.test(w) || n.test(w) || nb.test(w) || ne.test(w)) return;
		let m = w.toLowerCase().replace(/[aeiou]/g, 'a').replace(/[bcdfghjklmnpqrstvwxyz]/g, 'c'), a = m.match(/a/g),  v = (a ? a.length : 0)
		if(v >= l[w.length] || w.length > 12) return;
		return bl.t(w);
	}
};