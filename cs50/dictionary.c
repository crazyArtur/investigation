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
    bool result = false;
    char word_lower[LENGTH + 1];
    memcpy(word_lower, word, strlen(word)+1);

    for(int i = 0; word_lower[i]; i++)
    {
      word_lower[i] = tolower(word_lower[i]);
    }

    node* ptr = table[hash(word_lower)];

    for(int i = 0; i < strlen(word_lower); i++)
    {
        if(ptr == NULL)
        {
            result = false;
            break;
        }

        if(word_lower[i+1] == '\0')
        {
            if(ptr->word == false)
            {
                result = false;
                break;
            }
            else
            {
                result = true;
                break;
            }
        }
        else
        {
            ptr = ptr->tablee[hash(&word_lower[i+1])];
        }
    }
    return result;
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
            unsigned int hashed = hash(new_word);

            if(table[hashed] == NULL)
            {
                table[hashed] = (node*) malloc(sizeof(node));
            }

            node* ptr0 = table[hashed];
            node* ptr1 = table[hashed];

            do
            {
                if(ptr1 == NULL)
                {
                    // printf("PTR WAS NULL\n"); // TESTING
                    ptr1 = (node*) malloc(sizeof(node));
                    ptr0->tablee[hash(&new_word[index])] = ptr1;
                }
                ptr0 = ptr1;

                if(new_word[++index] == '\0')
                {
                    ptr1->word = true;
                    finished = true;
                }
                else
                {
                    ptr1 = ptr1->tablee[hash(&new_word[index])];
                }

            } while (!finished);

            index = 0;
        }
    }

    fclose(file);

    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    return word_count * sizeof(node);
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    for( int i = 0; i < N; i++)
    {
        if(table[i] == NULL)
        {
            continue;
        }


    }

    return false; //true;
}
