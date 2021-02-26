// Implements a dictionary's functionality

#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

#include "dictionary.h"

// Number of buckets in hash table
const unsigned int N = 26;

// Represents a node in a hash table
typedef struct node
{
    bool word;
    struct node *tablee[N];
} node;

// dictionary word count
unsigned int word_count = 0;

// Hash table
node *table[N] = {NULL};

// bool check_proper(node* ptr, char *word_lower)
// {
//     if(ptr == NULL)
//     {
//         return false;
//     }

//     if(strcmp(word_lower, ptr->word) == 0)
//     {
//         return true;
//     }

//     return check_proper(ptr->next, word_lower);
// }

// void unload_proper(node* ptr)
// {
//     if(ptr == NULL)
//     {
//         return;
//     }

//     unload_proper(ptr->next);
//     free(ptr);
//     return;
// }

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    // char word_lower[LENGTH + 1];
    // memcpy(word_lower, word, strlen(word)+1);

    // for(int i = 0; word_lower[i]; i++)
    // {
    //   word_lower[i] = tolower(word_lower[i]);
    // }

    return false;
    // check_proper(table[hash(word_lower)], word_lower);
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    return word[0] - 'a';
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
            index = 0;
            word_count++;
            bool finished = false;

            node* ptr = table[hash(new_word)];

            do
            {
                if(ptr == NULL)
                {
                    ptr = (node*) malloc(sizeof(node));
                }
                if(new_word[++index] == '\0')
                {
                    ptr->word = true;
                    finished = true;
                }
                else
                {
                    ptr = ptr->tablee[hash(&new_word[index])];
                }

            } while (!finished);

            index = 0;
        }
    }

    printf("Word count = %i\n", word_count); // TESTING

    fclose(file);

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
    // for(int i = 0; i < N; i++)
    // {
    //     unload_proper(table[i]);
    // }
    return false; //true;
}
