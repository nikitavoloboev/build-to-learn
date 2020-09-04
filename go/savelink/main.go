package main

import (
	"flag"
	"os"

	"github.com/atotto/clipboard"
)

func main() {
	saveTopLink := flag.Bool("top", false, "save top link")
	flag.Parse()

	if *saveTopLink {
		save("/Users/nikivi/Desktop/top-links.md")
		return
	}
	save("/Users/nikivi/Desktop/links.md")
}

// TODO: include title of the URL
// save link clipboard to a list
func save(path string) {
	// get url from clipboard
	clip, _ := clipboard.ReadAll()
	clip = clip + "\n"

	// TODO: check it's url

	// append url to file (on new line)
	f, err := os.OpenFile(path, os.O_APPEND|os.O_WRONLY, 0600)
	if err != nil {
		panic(err)
	}
	defer f.Close()
	if _, err = f.WriteString(clip); err != nil {
		panic(err)
	}
}

// open a number links from a list in browser & delete them
func pop(list string, number int) {

}
