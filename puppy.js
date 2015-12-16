/*  basic interface is <el data-pup='function(arg1,arg2,etc)''></el>
    and return value of user defined component needs to be either text to
    put inside the element or HTML to put inside it.

*/

function pre() {
  var all = document.querySelectorAll('[data-pup]');
  console.log(all);
  var puppyLength = all.length;
  var func;
  console.log(puppyLength);
  for (var i=0; i<all.length; i++) {
    func = all[i].getAttribute('data-pup').split(/[(,)]/).slice(0,-1);
    console.log(func);
    console.log(all[i]);
    var returned = puppy.components[func[0]].apply(this, func.slice(1));
    if (returned.nodeType !== 1) returned = document.createTextNode(returned);
    all[i].appendChild(returned);
  }
}

window.onload = function() {
pre();
}