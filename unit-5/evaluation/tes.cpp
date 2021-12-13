#include <bits/stdc++.h>
using namespace std;
const int mxn = 3e3;
 
int n;
long double dp[mxn][mxn], p[mxn], ans;
 
int main() 
{
	cin.tie(0)->sync_with_stdio(0);
    cin >> n;
    
    for(int i=1;i<=n;i++)
        cin >> p[i];
    
    dp[0][0] = 1;
 
    for(int i=1;i<=n;i++)
    {
        for(int j=0;j<=i;j++)
        {
            dp[i][j] = dp[i-1][j] * (1.0 - p[i]);
            if(j)
                dp[i][j] += dp[i-1][j-1] * p[i];
        }
    }
    
    for(int i=1+n/2;i<=n;i++)
        ans += dp[n][i];
    
    cout << setprecision(10) << ans;
}