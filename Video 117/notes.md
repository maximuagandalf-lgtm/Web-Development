### Need of useMemo() hook
- let's say there is a computation which is required to be performed only one time and will not change despite the page being re rendered cause due to change in state.

- useMemo() hook is used to "memoise" that computation so that computation is not performed everytime that page is re-rendered.

- this makes our web app faster, dynamic and much more resource efficient. 

- its syntax is very similiar to other hooks in react. An example of useMemo() hook is displayed in App.jsx

- syntax:-
    useMemo(()=> code, [])
    
    in this ()=> computation statement and [dependency array] is dependency array which is usually a state on whose change the computation statement is reexecuted.