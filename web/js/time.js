function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('timeText').innerHTML =
            h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);

            var day = today.getDay();
            var d = today.getDate();
            var m1 = today.getMonth();
            var y = today.getFullYear();

            var dayString;
            dayString = dayName(day);

            var monthString;
            monthString = month(m1);

            document.getElementById('dateText').innerHTML =
            dayString + ", " + d + " " + monthString + " " + y;
}

function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
}

function month(m1) {
            m1 = m1 + 1;
            switch (m1) {
            case 1:  monthString = "Januari";
                     break;
            case 2:  monthString = "Februari";
                     break;
            case 3:  monthString = "Maret";
                     break;
            case 4:  monthString = "April";
                     break;
            case 5:  monthString = "Mei";
                     break;
            case 6:  monthString = "Juni";
                     break;
            case 7:  monthString = "Juli";
                     break;
            case 8:  monthString = "Agustus";
                     break;
            case 9:  monthString = "September";
                     break;
            case 10: monthString = "Oktober";
                     break;
            case 11: monthString = "November";
                     break;
            case 12: monthString = "December";
                     break;
            default: monthString = "Invalid month";
                     break;
            }
            return monthString;
}

function dayName(day){
            switch (day) {
                case 0: dayString = "Minggu";
                        break;
                case 1: dayString = "Senin";
                        break;
                case 2: dayString = "Selasa";
                        break;
                case 3: dayString = "Rabu";
                        break;
                case 4: dayString = "Kamis";
                        break;
                case 5: dayString = "Jumat";
                        break;
                case 6: dayString = "Sabtu";
                        break;
            }
            return dayString;
}