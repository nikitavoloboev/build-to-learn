package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"strings"
)

// Provided a path to a folder. Track all files in folder and commit with file names as commit msg.
// Then push the folder to remote.
func main() {
	args := os.Args
	if len(args) < 2 {
		log.Fatal("Please provide a path as argument.")
	}

	// Use current path
	if args[1:][0] == "." {
		fmt.Println(os.Getwd())
		// path := os.Getwd()
	} else {

	}

	path := args[1:][0]
	cmd := exec.Command("/usr/local/bin/git")
	cmd.Dir = path
	cmd.Args = []string{"git", "diff", "HEAD", "--name-only"}
	out, err := cmd.Output()
	if err != nil {
		log.Fatal(err)
	} else {
		outS := strings.Fields(string(out))
		filesChanged := make([]string, 0)
		// Get all files changed without extension
		for _, v := range outS {
			split := strings.Split(v, "/")
			last := split[len(split)-1]
			filesChanged = append(filesChanged, strings.Split(last, ".")[0])
		}
		// Track files changed by Git
		cmd = exec.Command("/usr/local/bin/git")
		cmd.Dir = path
		cmd.Args = []string{"git", "add", "."}
		_, err := cmd.Output()
		if err != nil {
			log.Fatal(err)
		}
		commitMsg := strings.Join(filesChanged, " ")

		// Commit with a message
		cmd = exec.Command("/usr/local/bin/git")
		cmd.Dir = path
		cmd.Args = []string{"git", "commit", "-m", commitMsg}
		_, err = cmd.Output()
		if err != nil {
			log.Fatal(err)
		}

		// Push changes
		cmd = exec.Command("/usr/local/bin/git")
		cmd.Dir = path
		cmd.Args = []string{"git", "push"}
		_, err = cmd.Output()
		if err != nil {
			log.Fatal(err)
		}
	}
}
