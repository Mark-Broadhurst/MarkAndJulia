/*global app */
app.filter('rooms', function () {
    'use strict';
    return function(input) {
        switch (input) {
            case 0 :
                return "Single (£89)";
            case 1 :
                return "Double (£89)";
            case 2 :
                return "Twin (£89)";
            case 3:
                return "Junior Suite (£185)";
            case 4:
                return "Room not required";
            default:
                return "";
        }
    };
});