//01 - Aujourd'hui

    function whatDayIsToday(){
        var todayVar = new Date().getDay()
        var weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        console.log("Aujourd'hui nous sommes" , weekday[todayVar] )
    }

    whatDayIsToday()

//02 - Mois Courant

    function whatMonthIsIt(){
        var monthVar = new Date().getMonth()
        var weekday = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
        console.log("Aujourd'hui nous sommes" , weekday[monthVar] )
    }

    whatMonthIsIt()

    console.log()

//03 - Format 

function formatDate(str){
    var theDate = new Date(str)
    // console.log(test)
    var day = theDate.getDate()
    if (day < 10){
        day = '0' + day;
    }
    var month = theDate.getMonth()+1
    if (month < 10 ){
        month = '0' + month;
    }
    var year = theDate.getFullYear()
    console.log(`${day}/${month}/${year}`)
}

    formatDate("1985-4-4")

//04 -  Age 

    function calculateAge(myAge){
        var dateNow = new Date()
        var newDate = new Date(myAge)
        var ageDiference = dateNow - newDate 
        var curentAge = ((( ageDiference / 1000 ) / 3600 ) / 24 ) / 365
        var exactAge = curentAge.toFixed(1)
        console.log(exactAge)


    }

    calculateAge("1985-11-30")

    

    