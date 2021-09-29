

### App => 

### BrowserRouter (contains a history obj which keeps track of address bar and can change it as well)=>

### Header(=> Links to component's path)+Route(contains path and component) =>

### oAuth flow (oAuth google scopes give us access to a portion of user account data) =>
### GoogleAuth.js => click event handlers (for signIN btn) =>

### reduers and action creaters for handling state(auth info and userId) => 
### Redux forms :- import built in reducer and add 'form' to redux-store and store form values in it.

## Handle Stream Componenets ##
1. StreamCreate => 
  import Field and Redux-form
  'Field' :- for any form element/elements - name, component + any other props for the component
  'redux-form' :- syntax similar to connect, take {form: FORM_NAME} as first argument and component name as second argument
  functions created :- renderInput, renderError, onSubmit in class and validate in component
  onSubmit :- createStream action creater is called with formValues that send an axios request

2.StreamList =>
  import fetchStream action creater, connect funtion and Link
  functions created :- 
    renderAdmin : to render edit and delete btn on selected streams
    renderList : to render list items
    renderCreateBtn : used Link to connect it to 'stream/new'
  mapStrateToProps : return streams(an array of streams), currentUserId, isSignedIn

3. StreamEdit =>  
  componentDidMount : to fetch streams call action-creator(incase not there)
  function created :-
    onSubmit : updateStream action-creator and use history obj to navigate to home screen
  render : 'loading' when no stream present & StreamForm when stream is present with initial values(only pick title & desription) and onSubmit
  mapStateToProps : return stream from state.streams with id given in params

4. StreamDelete => 
  worked with models and portals

5. StreamShow => 
  same procedure done for StreamEdit


## It's not a best practice to allow a component to manage state ##

## Router from react-router-dom passes some very useful props automatically to the component ##

## Browser Router ##
creates a history object used to watch and manipulate browser address
this history obj is available only to Router components
so if we hv to use history obj outside the Router components like action-creaters, 
  => either pass it to them
  => or create a history obj ourselves and pass it to a plain Router
=> create history obj
=> import and pass history obj in plain router
=> import history obj in the action creater and push the route you wanna go to

## Portals ##
These are used when we want to render a componenet but not as a direct child but a child of some other element
mostly the body. Usually used to escape stacking context(in CSS) and for models.
