function Change(img)
        {
            var obj = window.event.target || window.event.srcElement;
            obj.style.backgroundImage = "url('" + String(img) + "')";    
        }
