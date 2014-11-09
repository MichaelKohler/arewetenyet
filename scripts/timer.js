(function() {
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var day = _hour * 24;

  var birthday = new Date('11/10/2014 0:0 AM');
  var now = new Date();
  var remaining = birthday - now;
  var remainingDays = Math.floor(remaining / day) + 1;
  var daySingularPlural = remainingDays >= 2 ? 'days' : 'day';

  if (remainingDays > 0) {
    document.querySelector('#to-go').textContent = remainingDays + ' ' + daySingularPlural;
    document.querySelector('#status-yes').setAttribute('hidden', 'true');
  }
  else {
    document.querySelector('#status-no').setAttribute('hidden', 'true');
  }
}());