#include <iostream>
#include <vector>
#include <deque>
#include <cmath>

using namespace std;

long long factorial(int n)
{
    long long result = 1;
    for (int i = 2; i <= n; ++i)
    {
        result *= i;
    }
    return result;
}

int main()
{
    int n;
    cin >> n;
    while (n--)
    {
        int n;
        cin >> n;

        if (n == 1)
        {
            cout << 1 << endl;
            continue;
        }

        vector<pair<int, int>> edges;
        for (int i = 0; i < n - 1; ++i)
        {
            int u, v;
            cin >> u >> v;
            edges.push_back({u, v});
        }

        vector<vector<int>> adj(n);
        for (const auto &edge : edges)
        {
            adj[edge.first].push_back(edge.second);
            adj[edge.second].push_back(edge.first);
        }

        // Check connectivity using BFS
        vector<bool> visited(n, false);
        deque<int> q;
        q.push_back(0);
        visited[0] = true;
        int count = 1;

        while (!q.empty())
        {
            int node = q.front();
            q.pop_front();
            for (int neighbor : adj[node])
            {
                if (!visited[neighbor])
                {
                    visited[neighbor] = true;
                    count++;
                    q.push_back(neighbor);
                }
            }
        }

        if (count != n)
        {
            cout << 0 << endl;
            continue;
        }

        vector<int> degrees(n);
        for (int i = 0; i < n; ++i)
        {
            degrees[i] = adj[i].size();
        }

        long long deno = 1;
        for (int d : degrees)
        {
            deno *= factorial(d - 1);
        }
        long long no = factorial(n - 2);

        cout << no / deno << endl;
    }

    return 0;
}
