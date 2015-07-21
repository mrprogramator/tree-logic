function isLeafOf (leaf){
	return (leaf.Padre == this);//Change it with your own data logic
}

function fillTree(jsonResponse, tree, root){
	jsonResponse.filter(isLeafOf,root.Nombre).forEach( function(elem){
		root.children.push({
			Nombre: elem.Nombre,
			children : []
		});
		
	});
	
	if (root.children == 0){
		return root;
	}
	
	root.children.forEach( function(branch){
		branch = fillTree(jsonResponse,[],branch);
	});

	tree.push(root);
}

/*HOW TO USE IT*/
[AJAX_CALL].responseJSON
	.filter( function (item) { return item.Tipo == "Solucion"}) //Find a way to get the roots
	.forEach( function (s) { fillTree(x.responseJSON,data,s)})