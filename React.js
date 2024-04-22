const nesting = React.createElement('div',{id:"parent"},
    React.createElement('div',{id:"children"},
        [React.createElement('h1',{},"Nesting of React"),React.createElement('h2',{},"sibling")]
    )    
); 

console.log(nesting);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(nesting);