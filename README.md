Girdle
======

Horizontal scrollers that use force directed input. Check out the 'public' folder to see them in action.

======

A pre-commit hook is defined in /pre-commit that runs jshint. To use the hook, run the following:

ln -s ../../pre-commit .git/hooks/pre-commit

A post-commit hook is defined in /post-commit that runs the Plato complexity analysis tools. To use the hook, run the following:

ln -s ../../post-commit .git/hooks/post-commit

To install Plato, run the following.

npm install -g plato

