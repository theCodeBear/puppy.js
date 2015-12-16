
function pre() {
  var all = document.querySelectorAll('[data-pup]');
  console.log(all);
  var puppyLength = all.length;
  var func;
  console.log(puppyLength);
  for (var i=0; i<all.length; i++) {
    func = all[i].getAttribute('data-pup').split(/[(,)]/);
    console.log(func);
    all[i].innerText = components[func[0]](func[1]);
  }
}

pre();