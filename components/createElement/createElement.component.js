puppy.components.createElement = function(el, text, replace, parent) {
  el = el.toLowerCase().trim();
  text = text.trim();
  var el = document.createElement(el);
  if (el === 'input') el.value = text;
  else el.innerText = text;
  if (replace) parent.parentNode.replaceChild(el, parent);
  else {
    document.body.appendChild(el);
    return el;
  }
};