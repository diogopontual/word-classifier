#!/bin/bash
for i in {10..1}
do
   node prefixdiscovery.js $i $1 
done
