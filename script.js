let hr  = React.createElement('hr');

let h2  = React.createElement('h2' ,{className:'h2Style'}, 'Learn web Development' );

let a  = React.createElement('a' ,{href:'#'}, ' rest of MDN ' );


let p1  = React.createElement('p' ,{className: 'paragraph '}, 'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.' );
let p2  = React.createElement('p' ,{className: 'paragraph '}, 'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the', a , 'and other intermediate to advanced resources that assume a lot of previous knowledge.' );
let p3  = React.createElement('p' ,{className: 'paragraph '}, 'If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.' );


let div  = React.createElement('div' ,{className:"divStyle"}, [hr,h2,p1,p2,p3] );

ReactDOM.render(div,document.getElementById('root'));

