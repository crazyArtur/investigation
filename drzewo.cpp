#include "drzewo.h"

drzewo::drzewo(){
    int wiek = 0;
    string kimJestem = "drzewem";
}

drzewo::drzewo(int a, string j){
    int wiek = a;
    string kimJestem = j;
}

void drzewo::przedstawSie(){
    cout << "Cześć! Jestem " << this->kimJestem << ". Mam " << this->wiek << " lat" << endl;
}
