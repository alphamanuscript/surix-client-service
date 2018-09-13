#set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]] 
then
    BRANCH=`git branch | grep \* | cut -d ' ' -f2`
    if [[ $BRANCH == 'dev' ]]
    then 
        echo "Releasing v$VERSION ..."
        # commit
        yarn build
        echo
        
        # commit the changes and push
        git add -A
        git commit -m "[build] $VERSION"
        git push origin $BRANCH

        # Switch to master for final publish
        git checkout master
        # Merge changes to master
        git merge $BRANCH

        #Publish changes
        git push -u origin master
        #git tag -a v$VERSION -m "version $VERSION"
        npm version $VERSION

        #publish to npm
        npm publish
        
        # push tags
        git push origin --tags

        # Back to the original branch (dev)
        git checkout $BRANCH
    else 
        echo "$(tput setaf 1)Release cannot be done on '$BRANCH' branch. Please switch to 'dev' branch to release.$(tput sgr 0)"
    fi
fi