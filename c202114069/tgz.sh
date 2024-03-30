#!/bin/bash
studentNo=202114069
time=`date +"%H%M"`
fullName=c${studentNo}.tgz
tar cvzf ${fullName} --exclude="node_modules" --exclude="*.tgz" *
