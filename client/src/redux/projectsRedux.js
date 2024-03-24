//selectors


// actions


const reducerName = 'projects';
const createActionName = name => `app/${reducerName}/${name}`;
//const LOAD_CART = createActionName('LOAD_PROJECTS');


// action creators


const projectsReducer = (statePart = [], action) => {


 switch (action.type) {


   default:


     return statePart;


 };
};


export default projectsReducer;