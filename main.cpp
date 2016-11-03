#include <iostream>
#include <QString>
#include "drzewo.h"

using namespace std;


int main(int argc, char *argv[])
{
    Drzewo a;
    Drzewo b(5, "Jerry");


    a.przedstawSie();
    b.przedstawSie();

    QString str = "śłóęąć";
    cout << str << endl;

   // Drzewo.przedstawSie();
   // InneDrzewo.przedstawSie();

    return 0;
}
