var app = (function () {
	var idConection = null;
    class Point{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }        
    }
    
    var stompClient = null;

    var addPointToCanvas = function (point) {        
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.stroke();
    };
    
    
    var getMousePosition = function (evt) {
        canvas = document.getElementById("canvas");
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };


    var connectAndSubscribe = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);
        
        //subscribe to /topic/TOPICXX when connections succeed
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/newpoint', function (eventbody) {
                //alert(eventbody);
                console.log(eventbody);
                //console.log(eventbody.body.x);
                var cord=JSON.parse(eventbody.body);
                console.log(eventbody);
                var x = cord.x;
                var y = cord.y;
                //alert(x+" "+y);
                addPointToCanvas(new Point(x,y));
            });
        });

    };
    
    

    return {

        init: function () {
            var can = document.getElementById("canvas");
            
            //websocket connection
            connectAndSubscribe();
        },

        publishPoint: function(px,py){
            var pt=new Point(px,py);
            console.info("publishing point at "+pt);
            stompClient.send("/topic/newpoint."+idConection, {},JSON.stringify({x:px,y:py}));

            //publicar el evento
        },

        disconnect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            setConnected(false);
            console.log("Disconnected");
        },
        conectarse:function(id){
        	 console.info('Connecting to WS...');
             var socket = new SockJS('/stompendpoint');
             stompClient = Stomp.over(socket);
             idConection = id;
             console.log("id: "+id);
             //subscribe to /topic/TOPICXX when connections succeed
             stompClient.connect({}, function (frame) {
                 console.log('Connected: ' + frame);
                 stompClient.subscribe('/topic/newpoint.'+idConection, function (eventbody) {
                     //alert(eventbody);
                     console.log(eventbody);
                     //console.log(eventbody.body.x);
                     var cord=JSON.parse(eventbody.body);
                     console.log(eventbody);
                     var x = cord.x;
                     var y = cord.y;
                     //alert(x+" "+y);
                     addPointToCanvas(new Point(x,y));
                 });
             });
        }
    };

})();