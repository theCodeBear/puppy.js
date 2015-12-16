puppy.components.createElement = function(el, text) {
  el = el.toLowerCase().trim();
  text = text.trim();
  console.log('el:', el);
  console.log('text:', text);
  var el = document.createElement(el);
  if (el === 'input') el.value = text;
  else el.innerText = text;
  console.log(el);
  console.log(el.nodeName);
  document.body.appendChild(el);
  return el;
};