# word-classifier
My late attempt to solve this challenge: https://github.com/hola/challenge_word_classifier

## Information Acquiring 

* Identification of all combinations of 1, 2 or 3 letters that never occur;
* Identification of the max count of vowels and consonants for each word length;

## Optimization of Words

* toLowerCase();
* "'s" removal;
* removal of: ir, il, dis, mis, un;
* Identification and removal of common and shared prefixes;
* run https://tartarus.org/martin/PorterStemmer/js.txt;
* Drop off all words with less then 3 letters;
* Drop off all words with more then 14 letters;

## Tests

### Causes of 'return false'

* The word has more then 1 apostrophe;
* The word is a lonely apostrophe;
* The word matches one of the regexp created on the Information Acquiring 
 phase;
* Bloomfilter return;

## Files description



