// Given a directed graph, design and algorith to find out whether there is a route between two nodes.


function routeBetweenNodes(graph, nodeA, nodeB) {
	let isRoute = false;

	if (graph[nodeA].indexOf(nodeB) !== -1) {
		return true;
	}
	findRoute(graph[nodeA], nodeB)

	function findRoute(edges, target) {
		if (edges.length === 0) { return }
		if (edges.indexOf(target) !== -1) {
			isRoute = true;
			return 
		}
		for (var i = 0; i < edges.length; i++) {
			findRoute(graph[edges[i]], target)
		} 
	}
	return isRoute;
}


const graph = {
	1: [2, 5],
	2: [3, 4],
	3: [4],
	4: [],
	5: []
}

const graph2 = {
	1: [2],
	2: [3, 4],
	3: [4],
	4: [5],
	5: []
}

console.assert(routeBetweenNodes(graph, 2, 5) === false);
console.assert(routeBetweenNodes(graph2, 1, 5) === true);