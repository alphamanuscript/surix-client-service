set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]] 
then
    #echo "Releasing $VERSION ..."

    BRANCH=`git branch | grep \* | cut -d ' ' -f2`
    read -p "Are you sure you want to release on $BRANCH branch? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        echo "Releasing v$VERSION on branch $BRANCH ..."
        # commit
        yarn build
        echo
        git add -A
        git commit -m "[build] $VERSION"
        git push -u origin $BRANCH
        git tag -a v$VERSION -m "[BUILD] $VERSION"
        
        # publish
        git push origin --tags
        URL=`git remote get-url origin`
        git request-pull v$VERSION $URL master
        git push
    fi
fi