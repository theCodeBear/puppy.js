puppy.components.createElement = function(el, text) {
  console.log('el:', el);
  console.log('text:', text);
  var el = document.createElement(el);
  el.innerText = text;
  console.log(el);
  console.log(el.nodeName);
  document.body.appendChild(el);
  return el;
};