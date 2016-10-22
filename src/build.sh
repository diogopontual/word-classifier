#!/bin/sh

node fileoptimizer.js
node datafilecreator.js $1
rm data.gz
gzip -9 data
