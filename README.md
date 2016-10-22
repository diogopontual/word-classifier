# word-classifier
My late attempt to solve this challenge: https://github.com/hola/challenge_word_classifierhttps://github.com/hola/challenge_word_classifier

## Optimization of Words

* toLowerCase();
* "'s" removal;
* removal of: ir, il, dis, mid, mis, anti, in, un;
* run https://tartarus.org/martin/PorterStemmer/js.txt;
* Drop off all words with less then 3 letters;
* Drop off all words with more then 14 letters;

## Tests

### Causes of 'return false'

* The word has more then 1 apostrophe;
* The word is a lonely apostrophe;
* The word has one of the following entries: ['jq', 'jx', 'jz', 'qj', 'qx', 'qy', 'qz', 'q\'', 'vj', 'vq', 'xj', 'zx', '\'j', '\'q', '\'x', '\'z'];

## Logbook

### Day 0

