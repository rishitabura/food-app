// #include <iostream>
// #include <vector>
// #include <queue>
// #include <climits>
// using namespace std;

// // Define a pair structure for use in priority queue (distance, node)
// typedef pair<int, int> pii;

// // Dijkstra function to compute shortest distances from a start node
// vector<int> dijkstra(int start, int n, vector<vector<pii>>& graph) {
//     vector<int> dist(n + 1, INT_MAX); // Initialize distances as infinity
//     priority_queue<pii, vector<pii>, greater<pii>> pq; // Min-heap for shortest distance
    
//     dist[start] = 0;
//     pq.push({0, start});

//     while (!pq.empty()) {
//         int u = pq.top().second;
//         int currentDist = pq.top().first;
//         pq.pop();

//         if (currentDist > dist[u]) continue;

//         // Traverse adjacent nodes
//         for (auto& neighbor : graph[u]) {
//             int v = neighbor.first;
//             int weight = neighbor.second;

//             if (dist[u] + weight < dist[v]) {
//                 dist[v] = dist[u] + weight;
//                 pq.push({dist[v], v});
//             }
//         }
//     }

//     return dist; // Return the distance array
// }

// int minCostPath(int g_nodes,vector<int>g_from,vector<int> g_to,vector<int>g_weight,int x,int y){
//     // Construct the graph (adjacency list)
//     vector<vector<pii>> graph(g_nodes + 1);
//     for (int i = 0; i < g_from.size(); i++) {
//         graph[g_from[i]].push_back({g_to[i], g_weight[i]});
//         graph[g_to[i]].push_back({g_from[i], g_weight[i]}); // Since undirected
//     }
//     int school = g_nodes; // Jack's school is always at node g_nodes
    
//     // Run Dijkstra for start, x, and y
//     vector<int> dist_from_start = dijkstra(1, g_nodes, graph);
//     vector<int> dist_from_x = dijkstra(x, g_nodes, graph);
//     vector<int> dist_from_y = dijkstra(y, g_nodes, graph);

//     // Compute the minimum time path: 1 -> x -> y -> school
//     int min_time = dist_from_start[x] + dist_from_x[y] + dist_from_y[school];

//     return min_time;
// }


// int main() {
//     int g_nodes, g_edges;

//     // Input the number of nodes and edges
//     cin >> g_nodes >> g_edges;

//     // Create vectors to store the edges and their weights
//     vector<int> g_from(g_edges), g_to(g_edges), g_weight(g_edges);

//     // Input for each edge (from, to, weight)
//     for (int i = 0; i < g_edges; i++) {
//         cin >> g_from[i] >> g_to[i] >> g_weight[i];
//     }

//     // Input for node x (first errand)
//     int x;
//     cin >> x;

//     // Input for node y (second errand)
//     int y;
//     cin >> y;

//     // Call the function to find the minimum cost path
//     int result = minCostPath(g_nodes, g_from, g_to, g_weight, x, y);

//     // Output the result
//     cout << "Minimum cost path: " << result << endl;

//     return 0;
// }

