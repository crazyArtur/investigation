#include "drzewo.h"

int dodawanie(int &z, int &zz)
{
  //  z = 1;
   // zz = 2;
    return z + zz;
}

int v(const std::string &pWorld )
{
    int N = pWorld.length();
    int level = N;
    int treasureNum = 0;
    int treasure[2*N];
    for(int i = 0; i < 2*N; i++)
    {
        treasure[i] = 0;
    }

    for(int i = 0; i < N; i++)
    {
        if(pWorld[i] == '(')
        {
            level--;
        }
        else if(pWorld[i] == ')')
        {
            level++;
        }
        else
        {
            treasure[level] += 1;
            if(treasureNum < treasure[level])
                treasureNum = treasure[level];
        }
    }

    int matchingLevel = N;
    for(int i = 0; i < N; i++)
    {
        if(pWorld[i] == '(')
        {
            matchingLevel--;
        }
        else if(pWorld[i] == ')')
        {
            matchingLevel++;
        }
        else if(treasure[matchingLevel] == treasureNum)
            return i;
    }

}

/*
    for(int i = 0; i < N; i++)
    {
        if(treasure[N-i] > treasureNum)
        {
            treasureNum = treasure[N-i];
            level = -i;
        }
        else if(treasure[N+i] > treasureNum)
        {
            treasureNum = treasure[N+i];
            level = i;
        }
    }

    for(int i = 0; i < N; i++)
    {
        if(pWorld[i] == '(')
        {
            matchingLevel--;
        }
        else if (pWorld[i] == ')')
        {
            matchingLevel++;
        }
        else if(matchingLevel == level && pWorld[i] == '*')
            return i;
    }
*/
