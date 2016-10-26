#!/bin/bash
for i in {9373..100000}
do
   export WC_SEED=$i 
   node datafilecreator.js 62000
   echo $i >> seeds.txt
   node ../provided/test.js . ../provided/testcases >> seeds.txt
done
