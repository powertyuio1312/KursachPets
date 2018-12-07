        function ChangeListNext()
        {
            var obj = document.getElementById("list");
            var a = [ "img/helpdog.jpg", "img/smallfood.jpg", "img/catss.jpg", "img/6small.jpg", "img/catfood.jpg"];
            for (var i = 0; i < a.length; i++) {
                var b = "url(\"" + a[i] +"\")";
                if (b === obj.style.backgroundImage) {
                    if (a[i] == "img/catfood.jpg") {
                        obj.style.backgroundImage = "url(\"" + String(a[0]) + "\")";
                        break;
                    }
                    else {
                        obj.style.backgroundImage = "url(\"" + String(a[i+1]) + "\")";
                        break;
                    }
                }
            }
        }

        function ChangeListPrev()
        {
            var obj = document.getElementById("list");
            var a = [ "img/helpdog.jpg", "img/smallfood.jpg", "img/catss.jpg", "img/6small.jpg", "img/catfood.jpg"];
            for (var i = 0; i < a.length; i++) {
                var b = "url(\"" + a[i] +"\")";
                if (b === obj.style.backgroundImage) {
                    if (a[i] == "img/helpdog.jpg") {
                        obj.style.backgroundImage = "url(\"" + String(a[4]) + "\")";
                        break;
                    }
                    else {
                        obj.style.backgroundImage = "url(\"" + String(a[i-1]) + "\")";
                        break;
                    }
                }
            }
        }