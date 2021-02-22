// Implements a dictionary's functionality

#include <stdbool.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    // bool isCorrect;
    char word[LENGTH + 1];
    struct node *next;
} node;

// Number of buckets in hash table
const unsigned int N = 26;

// ASCII
int ascii = 97;

// Hash table
node *table[N];
// node *top;

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    // TODO
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO
    return 0;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    FILE *file = fopen(dictionary, "r");
    if (file == NULL)
    {
        printf("Could not open %s.\n", dictionary);
        unload();
        return 1;
    }

    int index = 0;
    char newWord[LENGTH + 1];

    for (int c = fgetc(file); c != EOF; c = fgetc(file))
    {
        if(c != '\n')
        {
            newWord[index] = c;
            index++;
        }
        else
        {
            newWord[index] = '\0'
        }



    // for(int i = 0, length = strlen(dictionary) ; i < length; i++)
    // {
    //     if (i == 0 || dictionary[i-1] == 10)
    //     {
    //         table[dictionary[i] - ascii] = malloc(sizeof(node));
    //     }
    // }

    // for(int i = 0, length = strlen(dictionary) ; i < length; i++)
    // {
    //     if (i == 0 || dictionary[i-1] == 10)
    //     {
    //         top =     dictionary[i]
    //     }

    // }

    return false;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return 0;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    // TODO
    return false;
}
