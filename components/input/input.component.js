// maybe i don't need to validate all these inputs, because that is the
// purpose of validation done by the user on the form itself, puppy.js
// isn't responsible for that.

puppy.components.internal.input = function(val, type, element) {
  switch(type) {
    case 'text':
    case 'password':
      return val;
    case 'number':
      return checkInputRegex(/^[-]?[0-9]*$/, val, type) ? val : false;
    case 'email':
      return checkInputRegex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, val, type) ? val : false;
    case 'color':
      return val;
      // break;
    case 'checkbox':
    case 'radio':
      if (val === 'true')
        element.setAttribute('checked', 'true');
      return;
    case 'submit':
      break;
    case 'button':
      break;
    case 'range':
      var min = + element.getAttribute('min');
      var max = + element.getAttribute('max');
      val = + val;
      if (!(val >= min && val <= max)) {
        throw 'Input value Error: Value in range type is out of range: ' + val;
        return;
      }
      if (checkInputRegex(/^[0-9]*$/, val, type)) return val;
      return;
    case 'search':
      break;
    case 'tel':
      break;
    case 'time':
      break;
    case 'url':
      break;
    case 'week':
      break;
    case 'date':
      break;
    case 'datetime':
      break;
    case 'datetime-local':
      break;
    default:
      throw 'Input type Error: '+ type + ' is not a value input type'
      break;
  }
};


function checkInputRegex(regex, value, type) {
  if (! new RegExp(regex).test(value)) {
    throw 'Input type Error: Value "' + value + '" is not a valid input type ' + type;
    return false;
  }
  return true;
}

