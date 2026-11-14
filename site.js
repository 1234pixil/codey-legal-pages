// EDIT THIS ONE LINE: how people can reach you (an email address, or a link to your support server).
window.CODEY_CONTACT = 'the Codey support server on Discord';
document.querySelectorAll('.contact').forEach(function (el) {
  var c = window.CODEY_CONTACT;
  el.innerHTML = /^https?:\/\//.test(c) ? '<a href="' + c + '">' + c + '</a>' : /@/.test(c) ? '<a href="mailto:' + c + '">' + c + '</a>' : c;
});
