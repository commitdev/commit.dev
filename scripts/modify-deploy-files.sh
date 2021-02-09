#!/usr/bin/env bash

# Removes .html extensions from generated html files as .html extension causes routing issues with current AWS setup

printf "\nRemoving .html extensions... NOT \n"
find ./out -name "*.html" -type f | while read f; do echo "$f --> ${f%.html}"; mv "$f" "${f%.html}"; done
