#include "drzewo.h"

void Drzewo::przedstawSie(){
    cout << "Hey! Jestem " << imie << ". Mam " << wiek << " lat." << endl;
}
Drzewo::Drzewo(int a, string j){
    wiek = a;
    imie = j;
}
Drzewo::Drzewo(){
    wiek = 0;
    imie = "no name";
}
