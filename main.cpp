#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    const int max = 200000;
    vector<int> d(max + 1, 0);
    for (int x = 1; x <= max; x++) {
        if (x < 5) {
            d[x] = 1;
        } else {
            d[x] = 1 + d[x / 5];
        }
    }

    vector<int> prefix(max + 1, 0);
    for (int i = 1; i <= max; i++) {
        prefix[i] = prefix[i - 1] + d[i];
    }

    int n = max;
    int logn = floor(log2(n)) + 1;
    vector<vector<int>> st(logn, vector<int>(n + 1, 0));
    for (int i = 1; i <= n; i++) {
        st[0][i] = d[i];
    }
    for (int j = 1; j < logn; j++) {
        for (int i = 1; i + (1 << j) - 1 <= n; i++) {
            st[j][i] = min(st[j - 1][i], st[j - 1][i + (1 << (j - 1))]);
        }
    }

    auto query = [&](int L, int R) -> int {
        int len = R - L + 1;
        int k = floor(log2(len));
        return min(st[k][L], st[k][R - (1 << k) + 1]);
    };

    int t;
    cin >> t;
    while (t--) {
        int l, r;
        cin >> l >> r;
        int total = prefix[r] - prefix[l - 1];
        int m = query(l, r);
        cout << total + m << "\n";
    }

    return 0;
}
