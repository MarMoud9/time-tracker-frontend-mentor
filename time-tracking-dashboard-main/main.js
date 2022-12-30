const daily_link = document.querySelector("#daily");
const weekly_link = document.querySelector("#weekly");
const monthly_link = document.querySelector("#monthly");
var timeframes =  document.querySelectorAll(".timeframe");
var previous_hrs = document.querySelectorAll(".previous");
var current_hrs = document.querySelectorAll(".hours");
console.log(timeframes)

var work = {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  };
var play = {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  };
var study = {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  };
var exercise = {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  };
var social = {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  };
var selfcare = {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  };
var categories = new Array(work, play, study, exercise, social, selfcare )
daily_link.addEventListener("click", (e) =>{
    e.preventDefault();
    daily_link.classList.add("active-link");
    weekly_link.classList.remove("active-link");
    monthly_link.classList.remove("active-link");
    for(i = 0; i<timeframes.length; i++) {
        timeframes[i].textContent = "day "
        previous_hrs[i].textContent = categories[i].timeframes.daily.previous
        current_hrs[i].textContent = categories[i].timeframes.daily.current
    }
    
});

weekly_link.addEventListener("click", (e) =>{
    e.preventDefault();
    weekly_link.classList.add("active-link");
    daily_link.classList.remove("active-link");
    monthly_link.classList.remove("active-link");
    for(i = 0; i<timeframes.length; i++) {
        timeframes[i].textContent = "week "
        previous_hrs[i].textContent = categories[i].timeframes.weekly.previous
        current_hrs[i].textContent = categories[i].timeframes.weekly.current
    }
});

monthly_link.addEventListener("click", (e) =>{
    e.preventDefault();
    monthly_link.classList.add("active-link");
    weekly_link.classList.remove("active-link");
    daily_link.classList.remove("active-link");
    for(i = 0; i<timeframes.length; i++) {
        timeframes[i].textContent = "month "
        previous_hrs[i].textContent = categories[i].timeframes.monthly.previous
        current_hrs[i].textContent = categories[i].timeframes.monthly.current
    }
});