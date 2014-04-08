// Compiled by ClojureScript 0.0-2197
goog.provide('session.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('session.boot');
goog.require('goog.History');
goog.require('session.keymap');
goog.require('session.loop');
goog.require('session.io');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('yantra.graphics');
goog.require('om.core');
goog.require('React');
goog.require('subpar.core');
goog.require('goog.net.WebSocket');
goog.require('yantra.edn');
goog.require('session.session');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('yantra.plot');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('yantra.dom');
goog.require('yantra.layout');
goog.require('session.keymap');
goog.require('goog.events');
goog.require('yantra.controls');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
session.main.new_id = (function new_id(){var f = (function f(){return cljs.core.rand_int.call(null,16).toString(16);
});
var g = (function g(){return (8 | (3 & cljs.core.rand_int.call(null,15))).toString(16);
});
return [cljs.core.str((new goog.string.StringBuffer()).append(f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),"-4",f.call(null),f.call(null),f.call(null),"-",g.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null)))].join('');
});
session.main.system = (function system(){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434),new cljs.core.Keyword(null,"history","history",1940838406),new cljs.core.Keyword(null,"host","host",1017112858),new cljs.core.Keyword(null,"loop-create","loop-create",2966435767),new cljs.core.Keyword(null,"eval-receive","eval-receive",2260311588),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941),new cljs.core.Keyword(null,"loop-delete","loop-delete",2983271526),new cljs.core.Keyword(null,"eval-send","eval-send",1668363659),new cljs.core.Keyword(null,"socket","socket",4411822821)],[cljs.core.async.chan.call(null),(new goog.History()),(window["location"]["host"]),cljs.core.async.chan.call(null),cljs.core.async.chan.call(null),cljs.core.atom.call(null,cljs.core.assoc.call(null,(new session.datatypes.Boot()),new cljs.core.Keyword(null,"new-session","new-session",1013080795),(function (){var uuid = session.main.new_id.call(null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),uuid,new cljs.core.Keyword(null,"name","name",1017277949),uuid], null);
})())),cljs.core.async.chan.call(null),cljs.core.async.chan.call(null),cljs.core.async.chan.call(null),(new goog.net.WebSocket())]);
});
session.main.all_renderers = cljs.core.merge.call(null,yantra.edn.edn_renderers,yantra.graphics.graphics_renderers,yantra.layout.layout_renderers,yantra.controls.control_renderers,yantra.plot.plot_renderers,yantra.dom.dom_renderers,session.session.session_renderers,session.loop.loop_renderers,session.boot.boot_renderers);
session.main.builder = (function builder(x,y){return om.core.build.call(null,session.main.all_renderers.call(null,cljs.core.type.call(null,om.core.value.call(null,x))),x,y);
});
session.main.builder_raw = (function builder_raw(t,x,y){return om.core.build.call(null,session.main.all_renderers.call(null,t),x,y);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__9710__auto___10036 = (function (params__9711__auto__){if(cljs.core.map_QMARK_.call(null,params__9711__auto__))
{var map__10034 = params__9711__auto__;var map__10034__$1 = ((cljs.core.seq_QMARK_.call(null,map__10034))?cljs.core.apply.call(null,cljs.core.hash_map,map__10034):map__10034);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__9711__auto__))
{var vec__10035 = params__9711__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9710__auto___10036);
/**
* @param {...*} var_args
*/
session.main.home_path = ((function (action__9710__auto___10036){
return (function() { 
var home_path__delegate = function (args__9709__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__9709__auto__);
};
var home_path = function (var_args){
var args__9709__auto__ = null;if (arguments.length > 0) {
  args__9709__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return home_path__delegate.call(this,args__9709__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__10037){
var args__9709__auto__ = cljs.core.seq(arglist__10037);
return home_path__delegate(args__9709__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__9710__auto___10036))
;
session.main.SafePure = (function (){var default_render = new cljs.core.Keyword(null,"render","render",4374279432).cljs$core$IFn$_invoke$arity$1(om.core.pure_methods);return React.createClass(om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"render","render",4374279432),((function (default_render){
return (function (){var this$ = this;try{return default_render.call(this$);
}catch (e10038){var e = e10038;return React.DOM.span(null,"Render error");
}});})(default_render))
))));
})();
session.main.safe_pure = (function safe_pure(obj){return (new session.main.SafePure(obj));
});
session.main.safe_render = (function safe_render(data,owner,opts){return om.core.build_STAR_.call(null,data,owner,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ctor","ctor",1016968582),session.main.safe_pure));
});
session.main.start_BANG_ = (function start_BANG_(system){goog.events.listen(new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system),goog.history.EventType.NAVIGATE,(function (p1__10039_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__10039_SHARP_.token);
}));
var G__10079_10118 = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system);G__10079_10118.setEnabled(true);
(CodeMirror.keyMap["subpar"] = session.keymap.subpar_keymap);
cljs.core.enable_console_print_BANG_.call(null);
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system).addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){var msg = session.io.read_edn.call(null,e.message);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display-session","display-session",2856161277),new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(msg)))
{console.log("displaying a session");
var G__10080_10119 = new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system);G__10080_10119.setEnabled(false);
new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(system).setToken([cljs.core.str("/sessions/"),cljs.core.str(cljs.core.get_in.call(null,msg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",2998892040),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"id","id",1013907597)], null)).uuid)].join(''));
} else
{}
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-receive","kernel-receive",2518943941).cljs$core$IFn$_invoke$arity$1(system),msg);
}));
var socket_opened_10120 = cljs.core.async.chan.call(null);new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system).addEventListener(goog.net.WebSocket.EventType.OPENED,((function (socket_opened_10120){
return (function (e){return cljs.core.async.put_BANG_.call(null,socket_opened_10120,true);
});})(socket_opened_10120))
);
new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system).open([cljs.core.str("ws://"),cljs.core.str(new cljs.core.Keyword(null,"host","host",1017112858).cljs$core$IFn$_invoke$arity$1(system)),cljs.core.str("/")].join(''));
var c__6248__auto___10121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6248__auto___10121,socket_opened_10120){
return (function (){var f__6249__auto__ = (function (){var switch__6233__auto__ = ((function (c__6248__auto___10121,socket_opened_10120){
return (function (state_10098){var state_val_10099 = (state_10098[1]);if((state_val_10099 === 8))
{var inst_10087 = (state_10098[2]);var inst_10088 = new cljs.core.Keyword(null,"socket","socket",4411822821).cljs$core$IFn$_invoke$arity$1(system);var inst_10089 = session.io.write_edn.call(null,inst_10087);var inst_10090 = inst_10088.send(inst_10089);var state_10098__$1 = (function (){var statearr_10100 = state_10098;(statearr_10100[7] = inst_10090);
return statearr_10100;
})();var statearr_10101_10122 = state_10098__$1;(statearr_10101_10122[2] = null);
(statearr_10101_10122[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10099 === 7))
{var inst_10094 = (state_10098[2]);var state_10098__$1 = state_10098;var statearr_10102_10123 = state_10098__$1;(statearr_10102_10123[2] = inst_10094);
(statearr_10102_10123[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10099 === 6))
{var state_10098__$1 = state_10098;var statearr_10103_10124 = state_10098__$1;(statearr_10103_10124[2] = null);
(statearr_10103_10124[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10099 === 5))
{var inst_10085 = new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(system);var state_10098__$1 = state_10098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10098__$1,8,inst_10085);
} else
{if((state_val_10099 === 4))
{var inst_10096 = (state_10098[2]);var state_10098__$1 = state_10098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10098__$1,inst_10096);
} else
{if((state_val_10099 === 3))
{var state_10098__$1 = state_10098;if(true)
{var statearr_10104_10125 = state_10098__$1;(statearr_10104_10125[1] = 5);
} else
{var statearr_10105_10126 = state_10098__$1;(statearr_10105_10126[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10099 === 2))
{var inst_10082 = (state_10098[2]);var state_10098__$1 = (function (){var statearr_10106 = state_10098;(statearr_10106[8] = inst_10082);
return statearr_10106;
})();var statearr_10107_10127 = state_10098__$1;(statearr_10107_10127[2] = null);
(statearr_10107_10127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10099 === 1))
{var state_10098__$1 = state_10098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10098__$1,2,socket_opened_10120);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6248__auto___10121,socket_opened_10120))
;return ((function (switch__6233__auto__,c__6248__auto___10121,socket_opened_10120){
return (function() {
var state_machine__6234__auto__ = null;
var state_machine__6234__auto____0 = (function (){var statearr_10111 = [null,null,null,null,null,null,null,null,null];(statearr_10111[0] = state_machine__6234__auto__);
(statearr_10111[1] = 1);
return statearr_10111;
});
var state_machine__6234__auto____1 = (function (state_10098){while(true){
var ret_value__6235__auto__ = (function (){try{while(true){
var result__6236__auto__ = switch__6233__auto__.call(null,state_10098);if(cljs.core.keyword_identical_QMARK_.call(null,result__6236__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6236__auto__;
}
break;
}
}catch (e10112){if((e10112 instanceof Object))
{var ex__6237__auto__ = e10112;var statearr_10113_10128 = state_10098;(statearr_10113_10128[5] = ex__6237__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10129 = state_10098;
state_10098 = G__10129;
continue;
}
} else
{return ret_value__6235__auto__;
}
break;
}
});
state_machine__6234__auto__ = function(state_10098){
switch(arguments.length){
case 0:
return state_machine__6234__auto____0.call(this);
case 1:
return state_machine__6234__auto____1.call(this,state_10098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6234__auto____0;
state_machine__6234__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6234__auto____1;
return state_machine__6234__auto__;
})()
;})(switch__6233__auto__,c__6248__auto___10121,socket_opened_10120))
})();var state__6250__auto__ = (function (){var statearr_10114 = f__6249__auto__.call(null);(statearr_10114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6248__auto___10121);
return statearr_10114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6250__auto__);
});})(c__6248__auto___10121,socket_opened_10120))
);
return om.core.root.call(null,(function (data,owner){if(typeof session.main.t10115 !== 'undefined')
{} else
{
/**
* @constructor
*/
session.main.t10115 = (function (owner,data,system,start_BANG_,meta10116){
this.owner = owner;
this.data = data;
this.system = system;
this.start_BANG_ = start_BANG_;
this.meta10116 = meta10116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
session.main.t10115.cljs$lang$type = true;
session.main.t10115.cljs$lang$ctorStr = "session.main/t10115";
session.main.t10115.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"session.main/t10115");
});
session.main.t10115.prototype.om$core$IRender$ = true;
session.main.t10115.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return session.main.builder.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),cljs.core.dissoc.call(null,self__.system,new cljs.core.Keyword(null,"app-state","app-state",1424976215))], null));
});
session.main.t10115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10117){var self__ = this;
var _10117__$1 = this;return self__.meta10116;
});
session.main.t10115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10117,meta10116__$1){var self__ = this;
var _10117__$1 = this;return (new session.main.t10115(self__.owner,self__.data,self__.system,self__.start_BANG_,meta10116__$1));
});
session.main.__GT_t10115 = (function __GT_t10115(owner__$1,data__$1,system__$1,start_BANG___$1,meta10116){return (new session.main.t10115(owner__$1,data__$1,system__$1,start_BANG___$1,meta10116));
});
}
return (new session.main.t10115(owner,data,system,start_BANG_,null));
}),new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(system),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"builder","builder",1244848909),session.main.builder,new cljs.core.Keyword(null,"builder-raw","builder-raw",3779185256),session.main.builder_raw], null),new cljs.core.Keyword(null,"target","target",4427965699),document.body,new cljs.core.Keyword(null,"instrument","instrument",2409387865),session.main.safe_render], null));
});
goog.exportSymbol('session.main.start_BANG_', session.main.start_BANG_);
session.main.the_system = session.main.system.call(null);
var action__9710__auto___10132 = (function (params__9711__auto__){if(cljs.core.map_QMARK_.call(null,params__9711__auto__))
{var map__10130 = params__9711__auto__;var map__10130__$1 = ((cljs.core.seq_QMARK_.call(null,map__10130))?cljs.core.apply.call(null,cljs.core.hash_map,map__10130):map__10130);var uuid = cljs.core.get.call(null,map__10130__$1,new cljs.core.Keyword(null,"uuid","uuid",1017505581));console.log("load session from url");
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(session.main.the_system),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"connect-session","connect-session",3567142949),new cljs.core.Keyword("index","id","index/id",3115525907),uuid], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9711__auto__))
{var vec__10131 = params__9711__auto__;var uuid = cljs.core.nth.call(null,vec__10131,0,null);console.log("load session from url");
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"kernel-send","kernel-send",4765431434).cljs$core$IFn$_invoke$arity$1(session.main.the_system),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"connect-session","connect-session",3567142949),new cljs.core.Keyword("index","id","index/id",3115525907),uuid], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/sessions/:uuid",action__9710__auto___10132);
/**
* @param {...*} var_args
*/
session.main.sessions_path = ((function (action__9710__auto___10132){
return (function() { 
var sessions_path__delegate = function (args__9709__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/sessions/:uuid",args__9709__auto__);
};
var sessions_path = function (var_args){
var args__9709__auto__ = null;if (arguments.length > 0) {
  args__9709__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sessions_path__delegate.call(this,args__9709__auto__);};
sessions_path.cljs$lang$maxFixedArity = 0;
sessions_path.cljs$lang$applyTo = (function (arglist__10133){
var args__9709__auto__ = cljs.core.seq(arglist__10133);
return sessions_path__delegate(args__9709__auto__);
});
sessions_path.cljs$core$IFn$_invoke$arity$variadic = sessions_path__delegate;
return sessions_path;
})()
;})(action__9710__auto___10132))
;
session.main.start_BANG_.call(null,session.main.the_system);

//# sourceMappingURL=main.js.map