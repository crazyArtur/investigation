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
node *table[N] = {NULL};
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
            newWord[index] = '\0';

            int bucket = hash(newWord);
            if(table[bucket] == NULL)
            {
                table[bucket] = (node*) malloc(sizeof(node));
                memcpy(table[bucket] -> word, newWord, strlen(newWord)+1);
                table[bucket] -> next = NULL;
            }
            else
            {
                node* tmp = (node*) malloc(sizeof(node));
                memcpy(tmp -> word, newWord, strlen(newWord)+1);
                tmp -> next = table[bucket];
                table[bucket] = tmp;
            }

            index = 0;
        }
    }

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
