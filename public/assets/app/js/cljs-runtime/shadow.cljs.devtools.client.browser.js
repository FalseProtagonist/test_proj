goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58299 = arguments.length;
var i__4737__auto___58300 = (0);
while(true){
if((i__4737__auto___58300 < len__4736__auto___58299)){
args__4742__auto__.push((arguments[i__4737__auto___58300]));

var G__58301 = (i__4737__auto___58300 + (1));
i__4737__auto___58300 = G__58301;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57978){
var G__57979 = cljs.core.first(seq57978);
var seq57978__$1 = cljs.core.next(seq57978);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57979,seq57978__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__58007 = cljs.core.seq(sources);
var chunk__58008 = null;
var count__58009 = (0);
var i__58010 = (0);
while(true){
if((i__58010 < count__58009)){
var map__58029 = chunk__58008.cljs$core$IIndexed$_nth$arity$2(null,i__58010);
var map__58029__$1 = (((((!((map__58029 == null))))?(((((map__58029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58029):map__58029);
var src = map__58029__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58029__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58029__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58029__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58029__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58033){var e_58313 = e58033;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58313);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58313.message)].join('')));
}

var G__58314 = seq__58007;
var G__58315 = chunk__58008;
var G__58316 = count__58009;
var G__58317 = (i__58010 + (1));
seq__58007 = G__58314;
chunk__58008 = G__58315;
count__58009 = G__58316;
i__58010 = G__58317;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58007);
if(temp__5753__auto__){
var seq__58007__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58007__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58007__$1);
var G__58321 = cljs.core.chunk_rest(seq__58007__$1);
var G__58322 = c__4556__auto__;
var G__58323 = cljs.core.count(c__4556__auto__);
var G__58324 = (0);
seq__58007 = G__58321;
chunk__58008 = G__58322;
count__58009 = G__58323;
i__58010 = G__58324;
continue;
} else {
var map__58037 = cljs.core.first(seq__58007__$1);
var map__58037__$1 = (((((!((map__58037 == null))))?(((((map__58037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58037):map__58037);
var src = map__58037__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58037__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58039){var e_58325 = e58039;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58325);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58325.message)].join('')));
}

var G__58326 = cljs.core.next(seq__58007__$1);
var G__58327 = null;
var G__58328 = (0);
var G__58329 = (0);
seq__58007 = G__58326;
chunk__58008 = G__58327;
count__58009 = G__58328;
i__58010 = G__58329;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58047 = cljs.core.seq(js_requires);
var chunk__58048 = null;
var count__58049 = (0);
var i__58050 = (0);
while(true){
if((i__58050 < count__58049)){
var js_ns = chunk__58048.cljs$core$IIndexed$_nth$arity$2(null,i__58050);
var require_str_58330 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58330);


var G__58334 = seq__58047;
var G__58335 = chunk__58048;
var G__58336 = count__58049;
var G__58337 = (i__58050 + (1));
seq__58047 = G__58334;
chunk__58048 = G__58335;
count__58049 = G__58336;
i__58050 = G__58337;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58047);
if(temp__5753__auto__){
var seq__58047__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58047__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58047__$1);
var G__58338 = cljs.core.chunk_rest(seq__58047__$1);
var G__58339 = c__4556__auto__;
var G__58340 = cljs.core.count(c__4556__auto__);
var G__58341 = (0);
seq__58047 = G__58338;
chunk__58048 = G__58339;
count__58049 = G__58340;
i__58050 = G__58341;
continue;
} else {
var js_ns = cljs.core.first(seq__58047__$1);
var require_str_58342 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58342);


var G__58343 = cljs.core.next(seq__58047__$1);
var G__58344 = null;
var G__58345 = (0);
var G__58346 = (0);
seq__58047 = G__58343;
chunk__58048 = G__58344;
count__58049 = G__58345;
i__58050 = G__58346;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__58058){
var map__58059 = p__58058;
var map__58059__$1 = (((((!((map__58059 == null))))?(((((map__58059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58059):map__58059);
var msg = map__58059__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58059__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58059__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58065(s__58066){
return (new cljs.core.LazySeq(null,(function (){
var s__58066__$1 = s__58066;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58066__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__58071 = cljs.core.first(xs__6308__auto__);
var map__58071__$1 = (((((!((map__58071 == null))))?(((((map__58071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58071):map__58071);
var src = map__58071__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58071__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58071__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__58066__$1,map__58071,map__58071__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58059,map__58059__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58065_$_iter__58067(s__58068){
return (new cljs.core.LazySeq(null,((function (s__58066__$1,map__58071,map__58071__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58059,map__58059__$1,msg,info,reload_info){
return (function (){
var s__58068__$1 = s__58068;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__58068__$1);
if(temp__5753__auto____$1){
var s__58068__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58068__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58068__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58070 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58069 = (0);
while(true){
if((i__58069 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__58069);
cljs.core.chunk_append(b__58070,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58350 = (i__58069 + (1));
i__58069 = G__58350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58070),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58065_$_iter__58067(cljs.core.chunk_rest(s__58068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58070),null);
}
} else {
var warning = cljs.core.first(s__58068__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58065_$_iter__58067(cljs.core.rest(s__58068__$2)));
}
} else {
return null;
}
break;
}
});})(s__58066__$1,map__58071,map__58071__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58059,map__58059__$1,msg,info,reload_info))
,null,null));
});})(s__58066__$1,map__58071,map__58071__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__58059,map__58059__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58065(cljs.core.rest(s__58066__$1)));
} else {
var G__58352 = cljs.core.rest(s__58066__$1);
s__58066__$1 = G__58352;
continue;
}
} else {
var G__58353 = cljs.core.rest(s__58066__$1);
s__58066__$1 = G__58353;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__58081_58354 = cljs.core.seq(warnings);
var chunk__58082_58355 = null;
var count__58083_58356 = (0);
var i__58084_58357 = (0);
while(true){
if((i__58084_58357 < count__58083_58356)){
var map__58104_58365 = chunk__58082_58355.cljs$core$IIndexed$_nth$arity$2(null,i__58084_58357);
var map__58104_58366__$1 = (((((!((map__58104_58365 == null))))?(((((map__58104_58365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58104_58365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58104_58365):map__58104_58365);
var w_58367 = map__58104_58366__$1;
var msg_58368__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58104_58366__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58104_58366__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58104_58366__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58104_58366__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58371)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58369),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58370),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58368__$1)].join(''));


var G__58372 = seq__58081_58354;
var G__58373 = chunk__58082_58355;
var G__58374 = count__58083_58356;
var G__58375 = (i__58084_58357 + (1));
seq__58081_58354 = G__58372;
chunk__58082_58355 = G__58373;
count__58083_58356 = G__58374;
i__58084_58357 = G__58375;
continue;
} else {
var temp__5753__auto___58376 = cljs.core.seq(seq__58081_58354);
if(temp__5753__auto___58376){
var seq__58081_58377__$1 = temp__5753__auto___58376;
if(cljs.core.chunked_seq_QMARK_(seq__58081_58377__$1)){
var c__4556__auto___58378 = cljs.core.chunk_first(seq__58081_58377__$1);
var G__58379 = cljs.core.chunk_rest(seq__58081_58377__$1);
var G__58380 = c__4556__auto___58378;
var G__58381 = cljs.core.count(c__4556__auto___58378);
var G__58382 = (0);
seq__58081_58354 = G__58379;
chunk__58082_58355 = G__58380;
count__58083_58356 = G__58381;
i__58084_58357 = G__58382;
continue;
} else {
var map__58108_58383 = cljs.core.first(seq__58081_58377__$1);
var map__58108_58384__$1 = (((((!((map__58108_58383 == null))))?(((((map__58108_58383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58108_58383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58108_58383):map__58108_58383);
var w_58385 = map__58108_58384__$1;
var msg_58386__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58108_58384__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58108_58384__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58108_58384__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58108_58384__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58389)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58387),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58388),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58386__$1)].join(''));


var G__58390 = cljs.core.next(seq__58081_58377__$1);
var G__58391 = null;
var G__58392 = (0);
var G__58393 = (0);
seq__58081_58354 = G__58390;
chunk__58082_58355 = G__58391;
count__58083_58356 = G__58392;
i__58084_58357 = G__58393;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__58056_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58056_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__58119){
var map__58120 = p__58119;
var map__58120__$1 = (((((!((map__58120 == null))))?(((((map__58120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58120):map__58120);
var msg = map__58120__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__58126 = cljs.core.seq(updates);
var chunk__58128 = null;
var count__58129 = (0);
var i__58130 = (0);
while(true){
if((i__58130 < count__58129)){
var path = chunk__58128.cljs$core$IIndexed$_nth$arity$2(null,i__58130);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58180_58404 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58183_58405 = null;
var count__58184_58406 = (0);
var i__58185_58407 = (0);
while(true){
if((i__58185_58407 < count__58184_58406)){
var node_58408 = chunk__58183_58405.cljs$core$IIndexed$_nth$arity$2(null,i__58185_58407);
var path_match_58409 = shadow.cljs.devtools.client.browser.match_paths(node_58408.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58409)){
var new_link_58410 = (function (){var G__58200 = node_58408.cloneNode(true);
G__58200.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58409),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58200;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58409], 0));

goog.dom.insertSiblingAfter(new_link_58410,node_58408);

goog.dom.removeNode(node_58408);


var G__58411 = seq__58180_58404;
var G__58412 = chunk__58183_58405;
var G__58413 = count__58184_58406;
var G__58414 = (i__58185_58407 + (1));
seq__58180_58404 = G__58411;
chunk__58183_58405 = G__58412;
count__58184_58406 = G__58413;
i__58185_58407 = G__58414;
continue;
} else {
var G__58415 = seq__58180_58404;
var G__58416 = chunk__58183_58405;
var G__58417 = count__58184_58406;
var G__58418 = (i__58185_58407 + (1));
seq__58180_58404 = G__58415;
chunk__58183_58405 = G__58416;
count__58184_58406 = G__58417;
i__58185_58407 = G__58418;
continue;
}
} else {
var temp__5753__auto___58419 = cljs.core.seq(seq__58180_58404);
if(temp__5753__auto___58419){
var seq__58180_58420__$1 = temp__5753__auto___58419;
if(cljs.core.chunked_seq_QMARK_(seq__58180_58420__$1)){
var c__4556__auto___58421 = cljs.core.chunk_first(seq__58180_58420__$1);
var G__58423 = cljs.core.chunk_rest(seq__58180_58420__$1);
var G__58424 = c__4556__auto___58421;
var G__58425 = cljs.core.count(c__4556__auto___58421);
var G__58426 = (0);
seq__58180_58404 = G__58423;
chunk__58183_58405 = G__58424;
count__58184_58406 = G__58425;
i__58185_58407 = G__58426;
continue;
} else {
var node_58427 = cljs.core.first(seq__58180_58420__$1);
var path_match_58428 = shadow.cljs.devtools.client.browser.match_paths(node_58427.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58428)){
var new_link_58432 = (function (){var G__58202 = node_58427.cloneNode(true);
G__58202.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58428),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58202;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58428], 0));

goog.dom.insertSiblingAfter(new_link_58432,node_58427);

goog.dom.removeNode(node_58427);


var G__58437 = cljs.core.next(seq__58180_58420__$1);
var G__58438 = null;
var G__58439 = (0);
var G__58440 = (0);
seq__58180_58404 = G__58437;
chunk__58183_58405 = G__58438;
count__58184_58406 = G__58439;
i__58185_58407 = G__58440;
continue;
} else {
var G__58441 = cljs.core.next(seq__58180_58420__$1);
var G__58442 = null;
var G__58443 = (0);
var G__58444 = (0);
seq__58180_58404 = G__58441;
chunk__58183_58405 = G__58442;
count__58184_58406 = G__58443;
i__58185_58407 = G__58444;
continue;
}
}
} else {
}
}
break;
}


var G__58445 = seq__58126;
var G__58446 = chunk__58128;
var G__58447 = count__58129;
var G__58448 = (i__58130 + (1));
seq__58126 = G__58445;
chunk__58128 = G__58446;
count__58129 = G__58447;
i__58130 = G__58448;
continue;
} else {
var G__58449 = seq__58126;
var G__58450 = chunk__58128;
var G__58451 = count__58129;
var G__58452 = (i__58130 + (1));
seq__58126 = G__58449;
chunk__58128 = G__58450;
count__58129 = G__58451;
i__58130 = G__58452;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58126);
if(temp__5753__auto__){
var seq__58126__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58126__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58126__$1);
var G__58453 = cljs.core.chunk_rest(seq__58126__$1);
var G__58454 = c__4556__auto__;
var G__58455 = cljs.core.count(c__4556__auto__);
var G__58456 = (0);
seq__58126 = G__58453;
chunk__58128 = G__58454;
count__58129 = G__58455;
i__58130 = G__58456;
continue;
} else {
var path = cljs.core.first(seq__58126__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58203_58457 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58206_58458 = null;
var count__58207_58459 = (0);
var i__58208_58460 = (0);
while(true){
if((i__58208_58460 < count__58207_58459)){
var node_58461 = chunk__58206_58458.cljs$core$IIndexed$_nth$arity$2(null,i__58208_58460);
var path_match_58462 = shadow.cljs.devtools.client.browser.match_paths(node_58461.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58462)){
var new_link_58463 = (function (){var G__58222 = node_58461.cloneNode(true);
G__58222.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58462),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58222;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58462], 0));

goog.dom.insertSiblingAfter(new_link_58463,node_58461);

goog.dom.removeNode(node_58461);


var G__58474 = seq__58203_58457;
var G__58475 = chunk__58206_58458;
var G__58476 = count__58207_58459;
var G__58477 = (i__58208_58460 + (1));
seq__58203_58457 = G__58474;
chunk__58206_58458 = G__58475;
count__58207_58459 = G__58476;
i__58208_58460 = G__58477;
continue;
} else {
var G__58478 = seq__58203_58457;
var G__58479 = chunk__58206_58458;
var G__58480 = count__58207_58459;
var G__58481 = (i__58208_58460 + (1));
seq__58203_58457 = G__58478;
chunk__58206_58458 = G__58479;
count__58207_58459 = G__58480;
i__58208_58460 = G__58481;
continue;
}
} else {
var temp__5753__auto___58482__$1 = cljs.core.seq(seq__58203_58457);
if(temp__5753__auto___58482__$1){
var seq__58203_58483__$1 = temp__5753__auto___58482__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58203_58483__$1)){
var c__4556__auto___58484 = cljs.core.chunk_first(seq__58203_58483__$1);
var G__58485 = cljs.core.chunk_rest(seq__58203_58483__$1);
var G__58486 = c__4556__auto___58484;
var G__58487 = cljs.core.count(c__4556__auto___58484);
var G__58488 = (0);
seq__58203_58457 = G__58485;
chunk__58206_58458 = G__58486;
count__58207_58459 = G__58487;
i__58208_58460 = G__58488;
continue;
} else {
var node_58489 = cljs.core.first(seq__58203_58483__$1);
var path_match_58490 = shadow.cljs.devtools.client.browser.match_paths(node_58489.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58490)){
var new_link_58491 = (function (){var G__58223 = node_58489.cloneNode(true);
G__58223.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58490),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58223;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58490], 0));

goog.dom.insertSiblingAfter(new_link_58491,node_58489);

goog.dom.removeNode(node_58489);


var G__58492 = cljs.core.next(seq__58203_58483__$1);
var G__58493 = null;
var G__58494 = (0);
var G__58495 = (0);
seq__58203_58457 = G__58492;
chunk__58206_58458 = G__58493;
count__58207_58459 = G__58494;
i__58208_58460 = G__58495;
continue;
} else {
var G__58496 = cljs.core.next(seq__58203_58483__$1);
var G__58497 = null;
var G__58498 = (0);
var G__58499 = (0);
seq__58203_58457 = G__58496;
chunk__58206_58458 = G__58497;
count__58207_58459 = G__58498;
i__58208_58460 = G__58499;
continue;
}
}
} else {
}
}
break;
}


var G__58500 = cljs.core.next(seq__58126__$1);
var G__58501 = null;
var G__58502 = (0);
var G__58503 = (0);
seq__58126 = G__58500;
chunk__58128 = G__58501;
count__58129 = G__58502;
i__58130 = G__58503;
continue;
} else {
var G__58504 = cljs.core.next(seq__58126__$1);
var G__58505 = null;
var G__58506 = (0);
var G__58507 = (0);
seq__58126 = G__58504;
chunk__58128 = G__58505;
count__58129 = G__58506;
i__58130 = G__58507;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__58224){
var map__58225 = p__58224;
var map__58225__$1 = (((((!((map__58225 == null))))?(((((map__58225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58225):map__58225);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__58240){
var map__58241 = p__58240;
var map__58241__$1 = (((((!((map__58241 == null))))?(((((map__58241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58241):map__58241);
var _ = map__58241__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__58243,done,error){
var map__58244 = p__58243;
var map__58244__$1 = (((((!((map__58244 == null))))?(((((map__58244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58244):map__58244);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58244__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__58246,done,error){
var map__58247 = p__58246;
var map__58247__$1 = (((((!((map__58247 == null))))?(((((map__58247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58247):map__58247);
var msg = map__58247__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58247__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58247__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58247__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58255){
var map__58256 = p__58255;
var map__58256__$1 = (((((!((map__58256 == null))))?(((((map__58256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58256):map__58256);
var src = map__58256__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58256__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__58258 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__58258) : done.call(null,G__58258));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__58259){
var map__58260 = p__58259;
var map__58260__$1 = (((((!((map__58260 == null))))?(((((map__58260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58260):map__58260);
var msg__$1 = map__58260__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e58262){var ex = e58262;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__58264){
var map__58265 = p__58264;
var map__58265__$1 = (((((!((map__58265 == null))))?(((((map__58265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58265):map__58265);
var env = map__58265__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__58276){
var map__58277 = p__58276;
var map__58277__$1 = (((((!((map__58277 == null))))?(((((map__58277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58277):map__58277);
var msg = map__58277__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__58285){
var map__58286 = p__58285;
var map__58286__$1 = (((((!((map__58286 == null))))?(((((map__58286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58286):map__58286);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__58293){
var map__58294 = p__58293;
var map__58294__$1 = (((((!((map__58294 == null))))?(((((map__58294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58294):map__58294);
var svc = map__58294__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
