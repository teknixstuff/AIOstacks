AIO.autostyls = ()=>{
  Array.prototype.forEach.call(document.querySelectorAll('*[x-type]'),node=>{
    var newElem = document.createElement(AIO.autostyls.typeswaps[node.attributes['x-type'].value].type);
    if (AIO.autostyls.typeswaps[node.attributes['x-type'].value].hasOwnProperty('defaultAttributes')) {
      Object.entries(AIO.autostyls.typeswaps[node.attributes['x-type'].value].defaultAttributes).forEach(attrib=>{
        newElem.setAttribute(attrib[0],attrib[1]);
      });
    }
    Array.prototype.forEach.call(node.attributes,attrib=>{
      newElem.setAttribute(attrib.name,attrib.value);
    });
    if (AIO.autostyls.typeswaps[node.attributes['x-type'].value].hasOwnProperty('forceAttributes')) {
      Object.entries(AIO.autostyls.typeswaps[node.attributes['x-type'].value].forceAttributes).forEach(attrib=>{
        newElem.setAttribute(attrib[0],attrib[1]);
      });
    }
    Array.prototype.forEach.call(node.childNodes,child=>{
      newElem.appendChild(child);
    });
    node.replaceWith(newElem);
    if (AIO.autostyls.typeswaps[node.attributes['x-type'].value].hasOwnProperty('code')) {
      AIO.autostyls.typeswaps[node.attributes['x-type'].value].code.call(newElem);
    }
  });
};
AIO.autostyls.typeswaps = {
  'button': {
    type: 'span'
  },
  'textinput': {
    type: 'input',
    forceAttributes: {
      'type': 'text',
      'onkeyup': 'this.setAttribute("value", this.value);'
    }
  },
  'link': {
    type: 'a',
    defaultAttributes: {
      'href': 'javascript:undefined;'
    }
  },
  'config': {
    type: 'meta',
    code: elem=>{
      if (elem.getAttribute('name')=='background-image'){
        document.body.style.backgroundImage = `url('${elem.getAttribute('value')}')`;
      }
    }
  }
};
window.addEventListener('DOMContentLoaded',AIO.autostyls);
