#ifndef DRZEWO_H
#define DRZEWO_H
#include <string>
#include <iostream>

using namespace std;

class drzewo
{
protected:
    int wiek;
    string kimJestem;
public:
    drzewo();
    drzewo(int a, string j);
    void przedstawSie();
};

#endif // DRZEWO_H
