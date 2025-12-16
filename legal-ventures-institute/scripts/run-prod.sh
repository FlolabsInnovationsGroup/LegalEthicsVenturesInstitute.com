#!/bin/sh
set -e
docker build -t lvi-site .
docker run --rm -p 3000:3000 lvi-site
