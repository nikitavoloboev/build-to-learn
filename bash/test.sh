#!/usr/bin/env bash

in="React is nice"

cd /Users/nikivi/Dropbox/Write/blog || exit

# Dash separate & lowercase file name
swap=${in// /-}
swap=${$swap | tr '[:upper:]' '[:lower:]'}

echo $swap

# Create file and write title as heading
# touch "${swap}.md"
# "$in" >> ${swap}.md

# Edit the file
# /usr/local/bin/subl ${swap}.md
