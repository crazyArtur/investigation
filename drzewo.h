#ifndef DRZEWO_H
#define DRZEWO_H
#include <iostream>
#include <string>

using namespace std;

class Drzewo
{
protected:
    int wiek;
    string imie;
public:
    Drzewo();
    Drzewo(int a, string j);
    void przedstawSie();
};

#endif // DRZEWO_H
