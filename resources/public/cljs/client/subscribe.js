goog.provide('session.client.subscribe');
goog.require('cljs.core');
session.client.subscribe.ISubscribe = {};
session.client.subscribe.receive = (function receive(this$,msg){
if((function (){var and__3937__auto____7671 = this$;
if(and__3937__auto____7671)
{return this$.session$client$subscribe$ISubscribe$receive$arity$2;
} else
{return and__3937__auto____7671;
}
})())
{return this$.session$client$subscribe$ISubscribe$receive$arity$2(this$,msg);
} else
{var x__2396__auto____7672 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____7673 = (session.client.subscribe.receive[goog.typeOf(x__2396__auto____7672)]);
if(or__3939__auto____7673)
{return or__3939__auto____7673;
} else
{var or__3939__auto____7674 = (session.client.subscribe.receive["_"]);
if(or__3939__auto____7674)
{return or__3939__auto____7674;
} else
{throw cljs.core.missing_protocol.call(null,"ISubscribe.receive",this$);
}
}
})().call(null,this$,msg);
}
});
session.client.subscribe.ws = (new WebSocket([cljs.core.str("ws://"),cljs.core.str(document.location.host),cljs.core.str("/service")].join('')));
session.client.subscribe.callbacks = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
session.client.subscribe.subscribe_BANG_ = (function subscribe_BANG_(id,target){
return cljs.core.swap_BANG_.call(null,session.client.subscribe.callbacks,cljs.core.assoc,id,(function (p1__7675_SHARP_){
return session.client.subscribe.receive.call(null,target,p1__7675_SHARP_);
}));
});
(session.client.subscribe.ws["onmessage"] = (function (e){
var data__7676 = cljs.reader.read_string.call(null,e.data);
return cljs.core.deref.call(null,session.client.subscribe.callbacks).call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,data__7676)).call(null,data__7676);
}));
session.client.subscribe.send_BANG_ = (function send_BANG_(msg){
return session.client.subscribe.ws.send(cljs.core.pr_str.call(null,msg));
});
