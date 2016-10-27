#!/bin/bash
for i in {0..100}
do
   export WC_SEED=$i 
   node datafilecreator.js 65000
   echo $i >> seeds.txt
   node ../provided/test.js . ../provided/testcases >> seeds.txt
done
