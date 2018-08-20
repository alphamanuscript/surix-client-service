set -e
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
        git add -A
        git commit -m "[build] $VERSION"
        git push origin $BRANCH
        git checkout master
        git merge $BRANCH
        git push -u origin master
        git tag -a v$VERSION -m "[BUILD] $VERSION"
        
        # publish
        git push origin --tags
    else 
        echo "Release cannot be done on '$BRANCH' branch. Please switch to 'dev' branch to release."
    fi
fi