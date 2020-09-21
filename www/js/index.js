

// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

var app = {
    // Application Constructor
    initialize: function(){
        document.getElementById("btn").addEventListener('click', app.takephoto);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    takephoto: function() {
        let opts = {
            quality:80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 300,
            targetHeight:400,
         };
        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    ftw: function(imgURI) {
        document.getElementById('photo').src = "data:image/jpeg;base64," + imgURI;
    },
    wtf: function(msg) {
        document.getElementById('msg').textContent = msg;
    }
};
    /* console.log("Button Clicked!");
    navigator.camera.getPicture(app.onSuccess,app.onFail, { quality: 50,
        destinationType: Camera.destinationType.DATA_URL
    })
},

    onSuccess: function(imageData) {
        var image = document.getElementById('photo');
        image.src = "data:image/jpeg;based64," + imageData;
    },

    onFail: function(message) {
        alert('Failed because: ' + message);
    }
}; */

app.initialize();
