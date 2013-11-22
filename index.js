var watchable={
	utils: true,
	jsonCrypto: true,
	analytics: true,
	pouchTools: true,
	artwork: true,
	core: true,
	objectTypes: true,
	data: true,
	object: true,
	userService: true,
	shareService: true,
	pouchdb: true,
	webApp: true
};

module.exports =  function(pkg){
	var deps = [];
	for(var name in pkg.dependencies)
	{
		if(watchable[name])
		{
  		deps.push('../' + name + '/package.json');
  		deps.push('node_modules/' + name + '/package.json');			
		}
  }
  return deps;
}
