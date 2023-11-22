/* 
<div id="parent">
<div id="child1">
<h1> Hi i am a H1 tag<h1>
<h2> Hi i am a H2 tag<h2>
</div>
<div id="child1">
<h1> Hi i am a H1 tag<h1>
</div>
<div>
 */

const heading = React.createElement("div",{id:'parent'},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"Hi iam H1 tag from child 1"),
            React.createElement("h2",{},"Hi iam H2 tag from child 1")]),
            React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"Hi iam H1 tag from child 2"),
                React.createElement("h2",{},"Hi iam H2 tag from child 2")])
            ]);

console.log('heading',heading);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading);

/* const heading = React.createElement("h1", {id:"heading",xyz:"abcdefghi"}, "hello world from React");
console.log('heading',heading);
const Root = ReactDOM.createRoot(document.getElementById("root"));
console.log('Root',Root);
Root.render(heading); */