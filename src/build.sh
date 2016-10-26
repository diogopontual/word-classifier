#!/bin/sh

node fileoptimizer.js
node datafilecreator.js $1
node datacompressor.js
rm data.gz
gzip -9 data.dat
mv data.dat.gz data.gz
rm data
