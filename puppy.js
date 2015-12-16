/*  basic interface is <el data-pup='function(arg1,arg2,etc)''></el>
    and return value of user defined component needs to be either text to
    put inside the element or HTML to put inside it.
*/

function pre() {
  var all = document.querySelectorAll('[data-pup]');
  var puppyLength = all.length;
  var func, returned;
  for (var i=0; i<all.length; i++) {
    func = all[i].getAttribute('data-pup').split(/[(,)]/).slice(0,-1);
    returned = puppy.components[func[0]].apply(this, func.slice(1));
    if (all[i].nodeName === 'INPUT') all[i].value = returned;
    // if returned value is not a DOM element, then it is text
    else if (returned.nodeType !== 1) returned = document.createTextNode(returned);
    // if returned value is not input element but is a DOM element, appendchild
    else all[i].appendChild(returned);
  }
}

window.onload = function() {
  pre();
}