// Implements a dictionary's functionality

#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

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

// dictionary word count
unsigned int word_count = 0;

// Hash table
node *table[N] = {NULL};
// node *top;

bool check_proper(node* ptr, char *word_lower)
{
    if(ptr == NULL])
    {
        return false;
    }

    if(strcmp(word_lower, ptr->word) == 0)
    {
        return true;
    }

    return check_proper(ptr->next, word_lower);
}

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    char word_lower[LENGTH + 1];
    memccpy(word_lower, word, strlen(word)+1);

    for(int i = 0; word_lower[i]; i++)
    {
      word_lower[i] = tolower(str[i]);
    }

    return check_proper(table[hash(word)], word_lower);
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    return word[0] - ascii;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    FILE *file = fopen(dictionary, "r");
    if (file == NULL)
    {
        printf("Could not open %s.\n", dictionary);
        unload();
        return false;
    }

    int index = 0;
    char new_word[LENGTH + 1];

    for (int c = fgetc(file); c != EOF; c = fgetc(file))
    {
        if(c != '\n')
        {
            new_word[index] = c;
            index++;
        }
        else
        {
            new_word[index] = '\0';

            int bucket = hash(new_word);
            if(table[bucket] == NULL)
            {
                table[bucket] = (node*) malloc(sizeof(node));
                memcpy(table[bucket] -> word, new_word, strlen(new_word)+1);
                table[bucket] -> next = NULL;
            }
            else
            {
                node* tmp = (node*) malloc(sizeof(node));
                memcpy(tmp -> word, new_word, strlen(new_word)+1);
                tmp -> next = table[bucket];
                table[bucket] = tmp;
            }

            word_count++;
            index = 0;
        }
    }

    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    return word_count;
    // * sizeof(node);
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    // TODO
    return false;
}
