exports.interpreter = (c,w) => {
	a=[],e=[],l=[],m=127,j=p=0,s=[],v=64<<9,
	$={
		'<'(){p=(--p+v)%v},
		'>'(){p=++p%v},
		'+'(_){a[p]=++_%m},
		'-'(_){a[p]=(--_+m)%m},
		']'(){j=s[j]-1},
		'['(_){j=_?j:e[j]},
		'.'(_){w(String.fromCharCode(_))}
	};
	for(;c[j++];c[j]=='['?l[++p]=j:c[j]==']'?e[s[j]=l[p--]]=j:0);
	for(j=-1;c[++j];$[c[j]](a[p]|0));
}