#!/bin/bash

# Configuration Variables
PROGRAM_NAME=sojo-app

if [ -z "$1" ] ; then
  exit 0
else
  if [ $1 == "name" ] ; then
    echo $PROGRAM_NAME
  fi
fi
