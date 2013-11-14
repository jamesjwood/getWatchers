var path = require('path');

module.exports =  function(pkg){
	var deps = ['*.js','src/**/*.js', 'test/**/*.js'];
	for(var name in pkg.dependencies)
	{
  		deps.push('../' + name + '/package.json');
  		deps.push('node_modules/' + name + '/package.json');
  	}
  	return deps;
}
