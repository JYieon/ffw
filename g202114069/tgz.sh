#!/bin/bash
studentNo=202114069
time=`date +"%H%M"`
fullName=g${studentNo}.tgz
tar cvzf ${fullName} --exclude="node_modules" --exclude="*.tgz" *
#명령어 ./tgz.sh