function outerFunc() {
    let outVar = 'I am outside';
    function innerFunc() {
        console.log('outVar', outVar);
    }

    return innerFunc;
}

outerFunc()();

/*
Inside the innerFunc() scope, the variable outerVar is accessed from the lexical scope. That’s known already.

Note that innerFunc() invocation happens inside its lexical scope (the scope of outerFunc()).

Now innerFunc() is executed outside of its lexical scope. And what’s important:
innerFunc() still has access to outerVar from its lexical scope, even being executed outside of its lexical scope.

(Closure:)
In other words, innerFunc() closes over (a.k.a. captures, remembers) the variable outerVar from its lexical scope.
*/