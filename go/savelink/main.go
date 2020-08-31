package main

import (
	"os"

	"github.com/atotto/clipboard"
)

func main() {
	save()
}

// TODO: include title of the URL
// TODO: check for error
// save links in clipboard to file.
func save() {
	// get url from clipboard
	clip, _ := clipboard.ReadAll()
	clip = clip + "\n"

	// check it's url

	// append url to file (on new line)
	f, err := os.OpenFile("/Users/nikivi/Desktop/links.md", os.O_APPEND|os.O_WRONLY, 0600)
	if err != nil {
		panic(err)
	}

	defer f.Close()
	if _, err = f.WriteString(clip); err != nil {
		panic(err)
	}
}
