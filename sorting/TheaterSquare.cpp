#include <iostream>
#include <math.h>
 
using namespace std;
 
int main() {
    double m, n, a;
    cin >> n >> m >> a;
    
    cout << (long long) ceil(n/a)* (long long) ceil(m/a);
}