(function() {
  // all the global constants (except for intervalID, which gets set later on, if it gets set)
  var dayInMilliSeconds = 86400000,

      birthday = new Date('11/10/2014 0:0 AM'),      
      intervalID;

  function check() {
    var remaining = birthday.getTime() - Date.now(),
        remainingDays = Math.floor(remaining / dayInMilliSeconds) + 1,
        daySingularPlural = remainingDays >= 2 ? 'days' : 'day';

    if (remainingDays > 0) {
        document.querySelector('#to-go').textContent = remainingDays + ' ' + daySingularPlural;
        if(!intervalID) {
            document.querySelector('#status-yes').setAttribute('hidden', 'true');
            // check again on the next day
            var now = new Date();
            var milliSecondsFromMidnight = now.getTime() - now.setHours(0,0,0,0);
            var milliSecondsUntilMidnight = dayInMilliSeconds - milliSecondsFromMidnight;
            window.setTimeout(function() {
                // check every 24 hours from now on
                intervalID = window.setInterval(function() {
                    check();
                }, dayInMilliSeconds);
                // actually check now
                check();
            }, milliSecondsUntilMidnight);
        }
    }
    else {
        document.querySelector('#status-no').setAttribute('hidden', 'true');
        if(intervalID) {
            // when the page was loaded, it hasn't been ten years yet, so we have do do a little bit more work
            document.querySelector('#status-yes').removeAttribute('hidden');
            window.clearInterval(intervalID);
        }
    }
  }
  check();
}());
