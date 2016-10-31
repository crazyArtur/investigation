#include <iostream>
#include <string>
#include "drzewo.h"

using namespace std;


int main(int argc, char *argv[])
{
    Drzewo a;
    Drzewo b(5, "Jerry");


    a.przedstawSie();
    b.przedstawSie();

   // Drzewo.przedstawSie();
   // InneDrzewo.przedstawSie();

    return 0;
}
