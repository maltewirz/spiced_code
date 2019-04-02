# First Day

## GIT Basics

1. `git clone https://yxz` to download a repository
1. `git checkout -b branchname` Create new branch
1. Created the file "test.txt"
1. `git status`to see the changes made
1. `git add test.txt` To add the file to staging
1. `git commit -m "First commit"` To commit this with comment
1. `git push origin master` to push it to server. origin is name of the remote repository.
   master is the branch.
1. `git pull origin master` This pulls commits from the remote repo that is located at origin.

### Other GIT stuff:

1. `git remote update` to show all changes
1. `git checkout <branch_i_want>` To switch between branches
1. `git branch` To check your branches, and to see which one you are on
1. `git branch -D <branch_to_delete>` To delete a local branch:
1. `git checkout -b <my_new_branch> origin/master` --> will create the new branch and automatically have it set to pull from master
1. `git remote -v` --> check where the remote for your git repo is.
1. `git push origin :<branch_name>` --> delete a REMOTE branch
1. `git clone <remote_repo>` --> clone a remote branch to your local computer. This is what you use if you want to copy code from github onto your computer.

## Formatting

-   Whitespaces and indentation (4 whitespaces) is of great importance.
-   When writing a higher function, copy and paste from original place, so it keeps the whitespaces.
-   As a general rule, an opening curly brace ({) should be immediately followed by a line break. The matching closing curly brace (}) should appear on its own line and in the same column as the first character of the line in which the opening curly brace appeared.
