goog.provide('membrane.component');
membrane.component.cljs_resolve = cljs.analyzer.api.resolve;

membrane.component.cljs_resolve_var = cljs.analyzer.resolve_var;

membrane.component.cljs_env_compiler = (function membrane$component$cljs_env_compiler(){
return cljs.env._STAR_compiler_STAR_;
});
membrane.component._STAR_sci_ctx_STAR_ = null;
membrane.component.resolve_sci_meta = (function membrane$component$resolve_sci_meta(sym){
return null;
});
membrane.component.special_syms = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"ATOM","ATOM",-2063219067,null),com.rpl.specter.ATOM,new cljs.core.Symbol(null,"ALL","ALL",866837407,null),com.rpl.specter.ALL,new cljs.core.Symbol(null,"FIRST","FIRST",1484623161,null),com.rpl.specter.FIRST,new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),com.rpl.specter.LAST,new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),com.rpl.specter.MAP_VALS,new cljs.core.Symbol(null,"META","META",-1501392487,null),com.rpl.specter.META,new cljs.core.Symbol(null,"END","END",-169551588,null),com.rpl.specter.END], null);
membrane.component.path__GT_spec = (function membrane$component$path__GT_spec(elem){
if(cljs.core.vector_QMARK_(elem)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(membrane.component.path__GT_spec,elem);
} else {
if(cljs.core.seq_QMARK_(elem)){
var arg = cljs.core.second(elem);
var G__48056 = cljs.core.first(elem);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),G__48056)){
return (com.rpl.specter.keypath.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.keypath.cljs$core$IFn$_invoke$arity$1(arg) : com.rpl.specter.keypath.call(null,arg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"drop","drop",2005013138,null),G__48056)){
var G__48057 = cljs.core.constantly(arg);
var G__48058 = (function (coll){
return cljs.core.count(coll);
});
return (com.rpl.specter.srange_dynamic.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.srange_dynamic.cljs$core$IFn$_invoke$arity$2(G__48057,G__48058) : com.rpl.specter.srange_dynamic.call(null,G__48057,G__48058));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"raw-path","raw-path",-120754622,null),G__48056)){
var info__42334__auto__ = membrane.component.pathcache48059;
var info__42334__auto____$1 = (((info__42334__auto__ == null))?(function (){var info48060 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(membrane.component.path__GT_spec,new cljs.core.Var(function(){return membrane.component.path__GT_spec;},new cljs.core.Symbol("membrane.component","path->spec","membrane.component/path->spec",-1625974649,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"membrane.component","membrane.component",-598780945,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"membrane/component.cljc",new cljs.core.Keyword(null,"line","line",212345235),73,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"path->spec","path->spec",102715685,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(membrane.component.path__GT_spec)?membrane.component.path__GT_spec.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Symbol(null,"path->spec","path->spec",102715685,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(arg,new cljs.core.Symbol(null,"arg","arg",-106730310,null))], null),cljs.core.list(new cljs.core.Symbol(null,"path->spec","path->spec",102715685,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null)))], null),"membrane.component",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arg","arg",-106730310,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path->spec","path->spec",102715685,null),new cljs.core.Symbol(null,"arg","arg",-106730310,null)], null));
membrane.component.pathcache48059 = info48060;

return info48060;
})():info__42334__auto__);
var precompiled48061 = com.rpl.specter.impl.cached_path_info_precompiled(info__42334__auto____$1);
var dynamic_QMARK___42335__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__42334__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___42335__auto__)){
var G__48066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.component.path__GT_spec,arg], null);
return (precompiled48061.cljs$core$IFn$_invoke$arity$1 ? precompiled48061.cljs$core$IFn$_invoke$arity$1(G__48066) : precompiled48061.call(null,G__48066));
} else {
return precompiled48061;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),G__48056)){
var G__48067 = (membrane.component.path__GT_spec.cljs$core$IFn$_invoke$arity$1 ? membrane.component.path__GT_spec.cljs$core$IFn$_invoke$arity$1(arg) : membrane.component.path__GT_spec.call(null,arg));
return (com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$1(G__48067) : com.rpl.specter.collect_one.call(null,G__48067));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"path","path",1452340359,null),G__48056)){
var info__42334__auto__ = membrane.component.pathcache48068;
var info__42334__auto____$1 = (((info__42334__auto__ == null))?(function (){var info48069 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(arg,new cljs.core.Symbol(null,"arg","arg",-106730310,null))], null),"membrane.component",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arg","arg",-106730310,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arg","arg",-106730310,null)], null));
membrane.component.pathcache48068 = info48069;

return info48069;
})():info__42334__auto__);
var precompiled48070 = com.rpl.specter.impl.cached_path_info_precompiled(info__42334__auto____$1);
var dynamic_QMARK___42335__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__42334__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___42335__auto__)){
var G__48072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null);
return (precompiled48070.cljs$core$IFn$_invoke$arity$1 ? precompiled48070.cljs$core$IFn$_invoke$arity$1(G__48072) : precompiled48070.call(null,G__48072));
} else {
return precompiled48070;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"keypath-list","keypath-list",457175590,null),G__48056)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.keypath,arg);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"get","get",-971253014,null),G__48056)){
return (com.rpl.specter.keypath.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.keypath.cljs$core$IFn$_invoke$arity$1(arg) : com.rpl.specter.keypath.call(null,arg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),G__48056)){
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(arg) : com.rpl.specter.nil__GT_val.call(null,arg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"take","take",871646627,null),G__48056)){
var G__48073 = cljs.core.constantly((0));
var G__48074 = (function (coll){
var x__4217__auto__ = arg;
var y__4218__auto__ = cljs.core.count(coll);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
return (com.rpl.specter.srange_dynamic.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.srange_dynamic.cljs$core$IFn$_invoke$arity$2(G__48073,G__48074) : com.rpl.specter.srange_dynamic.call(null,G__48073,G__48074));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"nth","nth",1529209554,null),G__48056)){
return (com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nthpath.cljs$core$IFn$_invoke$arity$1(arg) : com.rpl.specter.nthpath.call(null,arg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"filter","filter",691993593,null),G__48056)){
var G__48075 = (((arg instanceof cljs.core.Keyword))?(function (x){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,arg);
}):arg);
return (com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$1(G__48075) : com.rpl.specter.filterer.call(null,G__48075));
} else {
throw (new Error(["Assert failed: ",["unrecognized method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elem)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(elem)].join(''),"\n","false"].join('')));


}
}
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.contains_QMARK_(membrane.component.special_syms,elem)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(membrane.component.special_syms,elem);
} else {
return elem;

}
}
}
});
/**
 * create a lens that path-replace can use. 
 */
membrane.component.parse_path = (function membrane$component$parse_path(form){
return (new cljs.core.Delay((function (){
if((form instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,null], null);
} else {
if(cljs.core.seq_QMARK_(form)){
var f = cljs.core.first(form);
var G__48076 = f;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","or","clojure.core/or",1106799215,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"drop","drop",2005013138,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"drop","drop",2005013138,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","get-in","clojure.core/get-in",-1204155834,null),G__48076)){
var G__48077 = cljs.core.count(form);
switch (G__48077) {
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath-list","keypath-list",457175590,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath-list","keypath-list",457175590,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(3)),null,(1),null))], 0)))),null,(1),null))))))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48077)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","drop","clojure.core/drop",628028941,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"drop","drop",2005013138,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","take","clojure.core/take",1641130266,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"take","take",871646627,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","nth","clojure.core/nth",151080571,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),G__48076)){
var G__48081 = cljs.core.count(form);
switch (G__48081) {
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath-list","keypath-list",457175590,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath-list","keypath-list",457175590,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(3)),null,(1),null))], 0)))),null,(1),null))))))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48081)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","filter","clojure.core/filter",-149790826,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"filter","filter",691993593,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"root-deref","root-deref",1080239436,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"raw-path","raw-path",-120754622,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"get","get",-971253014,null),G__48076)){
var G__48082 = cljs.core.count(form);
switch (G__48082) {
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(3)),null,(1),null))], 0)))),null,(1),null))))))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48082)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),G__48076)){
var G__48084 = cljs.core.count(form);
switch (G__48084) {
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(3)),null,(1),null))], 0)))),null,(1),null))))))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48084)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"take","take",871646627,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"take","take",871646627,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"nth","nth",1529209554,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("spec","select-one","spec/select-one",-1328474394,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"path","path",1452340359,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"filter","filter",691993593,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"filter","filter",691993593,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__48076)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))], null);
} else {
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null))], 0))))], null);
} else {
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))));
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
if(((cljs.core.vector_QMARK_(form)) || (typeof form === 'string') || (cljs.core.boolean_QMARK_(form)) || ((form instanceof cljs.core.Keyword)) || (typeof form === 'number') || (cljs.core.map_QMARK_(form)) || (cljs.core.vector_QMARK_(form)) || (cljs.core.set_QMARK_(form)) || ((form == null)))){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))))));
} else {
throw (new Error(["Assert failed: ",["expected symbol or seq got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),"\n","false"].join('')));


}
}
}
}),null));
});
membrane.component.calculate_path = (function membrane$component$calculate_path(deps,k){
var path = (function (){var deps__$1 = deps;
var k__$1 = k;
var path = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(deps__$1,k__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__48094 = temp__5751__auto__;
var new_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48094,(0),null);
var get_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48094,(1),null);
var vec__48097 = cljs.core.deref(get_path);
var new_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48097,(0),null);
var intent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48097,(1),null);
var G__48442 = new_deps;
var G__48443 = new_k;
var G__48444 = (((!((intent == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,intent):path);
deps__$1 = G__48442;
k__$1 = G__48443;
path = G__48444;
continue;
} else {
return cljs.core.vec(cljs.core.reverse((cljs.core.truth_(k__$1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k__$1,null,(1),null))))),null,(1),null))], 0))))):path)));
}
break;
}
})();
if(cljs.core.truth_((((cljs.core.first(path) instanceof cljs.core.Symbol))?new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(path))):false))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(path),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.rest(path)),null,(1),null))], 0))));
} else {
return path;
}
});
if((typeof membrane !== 'undefined') && (typeof membrane.component !== 'undefined') && (typeof membrane.component.special_fns !== 'undefined')){
} else {
membrane.component.special_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
membrane.component._STAR_env_STAR_ = null;
membrane.component.fully_qualified = (function membrane$component$fully_qualified(sym){
if(cljs.core.truth_(membrane.component.cljs_env_compiler())){
var temp__5751__auto__ = (function (){var G__48100 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.cljs_env_compiler()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(cljs.core._STAR_ns_STAR_))], null))], null);
var G__48101 = sym;
return (membrane.component.cljs_resolve.cljs$core$IFn$_invoke$arity$2 ? membrane.component.cljs_resolve.cljs$core$IFn$_invoke$arity$2(G__48100,G__48101) : membrane.component.cljs_resolve.call(null,G__48100,G__48101));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var result = temp__5751__auto__;
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a form, walk and replace all $syms with the lens (or path) for the sym with the same name.
 */
membrane.component.path_replace = (function membrane$component$path_replace(var_args){
var G__48113 = arguments.length;
switch (G__48113) {
case 1:
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.component.path_replace.cljs$core$IFn$_invoke$arity$1 = (function (form){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(form,cljs.core.PersistentArrayMap.EMPTY);
}));

(membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2 = (function (form,deps){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,form)){
return form;
} else {
if((form == null)){
return form;
} else {
if(cljs.core.seq_QMARK_(form)){
var first_form = cljs.core.first(form);
var G__48114 = cljs.core.first(form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),G__48114)){
var vec__48115 = form;
var seq__48116 = cljs.core.seq(vec__48115);
var first__48117 = cljs.core.first(seq__48116);
var seq__48116__$1 = cljs.core.next(seq__48116);
var letsym = first__48117;
var first__48117__$1 = cljs.core.first(seq__48116__$1);
var seq__48116__$2 = cljs.core.next(seq__48116__$1);
var bindings = first__48117__$1;
var body = seq__48116__$2;
var _ = (function (){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ","a vector for its binding","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
return null;
} else {
throw (new Error(["Assert failed: ","an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}
})()
;
var vec__48118 = (function (){var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
var deps__$1 = deps;
var new_bindings = cljs.core.PersistentVector.EMPTY;
while(true){
if(bindings__$1){
var vec__48125 = cljs.core.first(bindings__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48125,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48125,(1),null);
var val__$1 = membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(val,deps__$1);
var val_path = membrane.component.parse_path(val__$1);
var deps__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$1,sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,val_path], null));
var G__48455 = cljs.core.next(bindings__$1);
var G__48456 = deps__$2;
var G__48457 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,val__$1], null));
bindings__$1 = G__48455;
deps__$1 = G__48456;
new_bindings = G__48457;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,new_bindings], null);
}
break;
}
})();
var deps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48118,(0),null);
var new_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48118,(1),null);
var body__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48102_SHARP_){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(p1__48102_SHARP_,deps__$1);
}),body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,letsym,null,(1),null)),(new cljs.core.List(null,new_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for-kv","for-kv",-36140918,null),G__48114)){
var vec__48128 = cljs.core.next(form);
var seq_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128,(0),null);
var body_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128,(1),null);
var vec__48131 = (function (){var seq_exprs__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs));
var deps__$1 = deps;
var new_seq_exprs = cljs.core.PersistentVector.EMPTY;
while(true){
if(seq_exprs__$1){
var binding_row = cljs.core.first(seq_exprs__$1);
var vec__48140 = binding_row;
var left_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48140,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48140,(1),null);
var binding = vec__48140;
if(((cljs.core.vector_QMARK_(left_side)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,left_side)))){
var vec__48143 = left_side;
var key_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48143,(0),null);
var val_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48143,(1),null);
var deps__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$1,key_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,(new cljs.core.Delay(((function (seq_exprs__$1,deps__$1,new_seq_exprs,vec__48143,key_sym,val_sym,binding_row,vec__48140,left_side,val,binding,vec__48128,seq_exprs,body_expr,G__48114,first_form){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"map-key","map-key",-754952108,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,key_sym,null,(1),null))], 0))))], null);
});})(seq_exprs__$1,deps__$1,new_seq_exprs,vec__48143,key_sym,val_sym,binding_row,vec__48140,left_side,val,binding,vec__48128,seq_exprs,body_expr,G__48114,first_form))
,null))], null));
var deps__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$2,val_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$2,(new cljs.core.Delay(((function (seq_exprs__$1,deps__$1,new_seq_exprs,vec__48143,key_sym,val_sym,deps__$2,binding_row,vec__48140,left_side,val,binding,vec__48128,seq_exprs,body_expr,G__48114,first_form){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,key_sym,null,(1),null))], 0))))], null);
});})(seq_exprs__$1,deps__$1,new_seq_exprs,vec__48143,key_sym,val_sym,deps__$2,binding_row,vec__48140,left_side,val,binding,vec__48128,seq_exprs,body_expr,G__48114,first_form))
,null))], null));
var G__48468 = cljs.core.next(seq_exprs__$1);
var G__48469 = deps__$3;
var G__48470 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding);
seq_exprs__$1 = G__48468;
deps__$1 = G__48469;
new_seq_exprs = G__48470;
continue;
} else {
var G__48472 = cljs.core.next(seq_exprs__$1);
var G__48473 = deps__$1;
var G__48474 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding);
seq_exprs__$1 = G__48472;
deps__$1 = G__48473;
new_seq_exprs = G__48474;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,new_seq_exprs], null);
}
break;
}
})();
var deps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(0),null);
var seq_exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),(new cljs.core.List(null,seq_exprs__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(body_expr,deps__$1),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__48114)){
return form;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__48114)){
var vec__48146 = form;
var seq__48147 = cljs.core.seq(vec__48146);
var first__48148 = cljs.core.first(seq__48147);
var seq__48147__$1 = cljs.core.next(seq__48147);
var letsym = first__48148;
var first__48148__$1 = cljs.core.first(seq__48147__$1);
var seq__48147__$2 = cljs.core.next(seq__48147__$1);
var bindings = first__48148__$1;
var body = seq__48147__$2;
var _ = (function (){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ","a vector for its binding","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
return null;
} else {
throw (new Error(["Assert failed: ","an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}
})()
;
var vec__48149 = (function (){var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
var deps__$1 = deps;
var new_bindings = cljs.core.PersistentVector.EMPTY;
while(true){
if(bindings__$1){
var vec__48156 = cljs.core.first(bindings__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48156,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48156,(1),null);
var val__$1 = membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(val,deps__$1);
var val_path = membrane.component.parse_path(val__$1);
var deps__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$1,sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,val_path], null));
var G__48487 = cljs.core.next(bindings__$1);
var G__48488 = deps__$2;
var G__48489 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,val__$1], null));
bindings__$1 = G__48487;
deps__$1 = G__48488;
new_bindings = G__48489;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,new_bindings], null);
}
break;
}
})();
var deps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(0),null);
var new_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(1),null);
var body__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48102_SHARP_){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(p1__48102_SHARP_,deps__$1);
}),body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,letsym,null,(1),null)),(new cljs.core.List(null,new_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__48114)){
return form;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__48114)){
var vec__48159 = cljs.core.next(form);
var seq_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48159,(0),null);
var body_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48159,(1),null);
var vec__48162 = (function (){var seq_exprs__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs));
var deps__$1 = deps;
var new_seq_exprs = cljs.core.PersistentVector.EMPTY;
while(true){
if(seq_exprs__$1){
var vec__48168 = cljs.core.first(seq_exprs__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48168,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48168,(1),null);
var binding = vec__48168;
if((sym instanceof cljs.core.Symbol)){
var index_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("index-");
var new_val = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map-indexed","cljs.core/map-indexed",1154761082,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0))));
var binding__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_sym,sym], null),new_val], null);
var deps__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$1,sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,(new cljs.core.Delay(((function (seq_exprs__$1,deps__$1,new_seq_exprs,index_sym,new_val,binding__$1,vec__48168,sym,val,binding,vec__48159,seq_exprs,body_expr,G__48114,first_form){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,index_sym,null,(1),null))], 0))))], null);
});})(seq_exprs__$1,deps__$1,new_seq_exprs,index_sym,new_val,binding__$1,vec__48168,sym,val,binding,vec__48159,seq_exprs,body_expr,G__48114,first_form))
,null))], null));
var G__48504 = cljs.core.next(seq_exprs__$1);
var G__48505 = deps__$2;
var G__48506 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding__$1);
seq_exprs__$1 = G__48504;
deps__$1 = G__48505;
new_seq_exprs = G__48506;
continue;
} else {
var G__48508 = cljs.core.next(seq_exprs__$1);
var G__48509 = deps__$1;
var G__48510 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding);
seq_exprs__$1 = G__48508;
deps__$1 = G__48509;
new_seq_exprs = G__48510;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,new_seq_exprs], null);
}
break;
}
})();
var deps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48162,(0),null);
var seq_exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48162,(1),null);
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),(new cljs.core.List(null,seq_exprs__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(body_expr,deps__$1),null,(1),null))], 0)))),cljs.core.meta(form));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__48114)){
var vec__48171 = form;
var seq__48172 = cljs.core.seq(vec__48171);
var first__48173 = cljs.core.first(seq__48172);
var seq__48172__$1 = cljs.core.next(seq__48172);
var letsym = first__48173;
var first__48173__$1 = cljs.core.first(seq__48172__$1);
var seq__48172__$2 = cljs.core.next(seq__48172__$1);
var bindings = first__48173__$1;
var body = seq__48172__$2;
var _ = (function (){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ","a vector for its binding","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
return null;
} else {
throw (new Error(["Assert failed: ","an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}
})()
;
var vec__48174 = (function (){var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
var deps__$1 = deps;
var new_bindings = cljs.core.PersistentVector.EMPTY;
while(true){
if(bindings__$1){
var vec__48180 = cljs.core.first(bindings__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48180,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48180,(1),null);
var val__$1 = membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(val,deps__$1);
var val_path = membrane.component.parse_path(val__$1);
var deps__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$1,sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,val_path], null));
var G__48518 = cljs.core.next(bindings__$1);
var G__48519 = deps__$2;
var G__48520 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,val__$1], null));
bindings__$1 = G__48518;
deps__$1 = G__48519;
new_bindings = G__48520;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,new_bindings], null);
}
break;
}
})();
var deps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48174,(0),null);
var new_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48174,(1),null);
var body__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48102_SHARP_){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(p1__48102_SHARP_,deps__$1);
}),body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,letsym,null,(1),null)),(new cljs.core.List(null,new_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__48114)){
var sigs = cljs.core.rest(form);
var fn_name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(fn_name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw ((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing")})()));
var fnsym = cljs.core.first(form);
var replaced_sigs = (new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function membrane$component$iter__48184(s__48185){
return (new cljs.core.LazySeq(null,(function (){
var s__48185__$1 = s__48185;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48185__$1);
if(temp__5753__auto__){
var s__48185__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48185__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48185__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48187 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48186 = (0);
while(true){
if((i__48186 < size__4528__auto__)){
var vec__48188 = cljs.core._nth(c__4527__auto__,i__48186);
var seq__48189 = cljs.core.seq(vec__48188);
var first__48190 = cljs.core.first(seq__48189);
var seq__48189__$1 = cljs.core.next(seq__48189);
var bindings = first__48190;
var body = seq__48189__$1;
var deps__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,deps,bindings);
cljs.core.chunk_append(b__48187,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,bindings,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__48186,deps__$1,vec__48188,seq__48189,first__48190,seq__48189__$1,bindings,body,c__4527__auto__,size__4528__auto__,b__48187,s__48185__$2,temp__5753__auto__,sigs,fn_name,sigs__$1,sigs__$2,fnsym,G__48114,first_form){
return (function (p1__48107_SHARP_){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(p1__48107_SHARP_,deps__$1);
});})(i__48186,deps__$1,vec__48188,seq__48189,first__48190,seq__48189__$1,bindings,body,c__4527__auto__,size__4528__auto__,b__48187,s__48185__$2,temp__5753__auto__,sigs,fn_name,sigs__$1,sigs__$2,fnsym,G__48114,first_form))
,body)));

var G__48533 = (i__48186 + (1));
i__48186 = G__48533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48187),membrane$component$iter__48184(cljs.core.chunk_rest(s__48185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48187),null);
}
} else {
var vec__48191 = cljs.core.first(s__48185__$2);
var seq__48192 = cljs.core.seq(vec__48191);
var first__48193 = cljs.core.first(seq__48192);
var seq__48192__$1 = cljs.core.next(seq__48192);
var bindings = first__48193;
var body = seq__48192__$1;
var deps__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,deps,bindings);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,bindings,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps__$1,vec__48191,seq__48192,first__48193,seq__48192__$1,bindings,body,s__48185__$2,temp__5753__auto__,sigs,fn_name,sigs__$1,sigs__$2,fnsym,G__48114,first_form){
return (function (p1__48107_SHARP_){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(p1__48107_SHARP_,deps__$1);
});})(deps__$1,vec__48191,seq__48192,first__48193,seq__48192__$1,bindings,body,s__48185__$2,temp__5753__auto__,sigs,fn_name,sigs__$1,sigs__$2,fnsym,G__48114,first_form))
,body)),membrane$component$iter__48184(cljs.core.rest(s__48185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sigs__$2);
})()),null,(1),null));
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fnsym], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_name], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([replaced_sigs], 0))),cljs.core.meta(form));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"reify*","reify*",1646945123,null),G__48114)){
return form;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),G__48114)){
return form;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","for","clojure.core/for",-993162653,null),G__48114)){
var vec__48194 = cljs.core.next(form);
var seq_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48194,(0),null);
var body_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48194,(1),null);
var vec__48197 = (function (){var seq_exprs__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs));
var deps__$1 = deps;
var new_seq_exprs = cljs.core.PersistentVector.EMPTY;
while(true){
if(seq_exprs__$1){
var vec__48203 = cljs.core.first(seq_exprs__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48203,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48203,(1),null);
var binding = vec__48203;
if((sym instanceof cljs.core.Symbol)){
var index_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("index-");
var new_val = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map-indexed","cljs.core/map-indexed",1154761082,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0))));
var binding__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_sym,sym], null),new_val], null);
var deps__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$1,sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,(new cljs.core.Delay(((function (seq_exprs__$1,deps__$1,new_seq_exprs,index_sym,new_val,binding__$1,vec__48203,sym,val,binding,vec__48194,seq_exprs,body_expr,G__48114,first_form){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,index_sym,null,(1),null))], 0))))], null);
});})(seq_exprs__$1,deps__$1,new_seq_exprs,index_sym,new_val,binding__$1,vec__48203,sym,val,binding,vec__48194,seq_exprs,body_expr,G__48114,first_form))
,null))], null));
var G__48540 = cljs.core.next(seq_exprs__$1);
var G__48541 = deps__$2;
var G__48542 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding__$1);
seq_exprs__$1 = G__48540;
deps__$1 = G__48541;
new_seq_exprs = G__48542;
continue;
} else {
var G__48543 = cljs.core.next(seq_exprs__$1);
var G__48544 = deps__$1;
var G__48545 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding);
seq_exprs__$1 = G__48543;
deps__$1 = G__48544;
new_seq_exprs = G__48545;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,new_seq_exprs], null);
}
break;
}
})();
var deps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48197,(0),null);
var seq_exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48197,(1),null);
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),(new cljs.core.List(null,seq_exprs__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(body_expr,deps__$1),null,(1),null))], 0)))),cljs.core.meta(form));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__48114)){
return form;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fori","fori",906100849,null),G__48114)){
var vec__48207 = cljs.core.next(form);
var seq_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48207,(0),null);
var body_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48207,(1),null);
var vec__48210 = (function (){var seq_exprs__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs));
var deps__$1 = deps;
var new_seq_exprs = cljs.core.PersistentVector.EMPTY;
while(true){
if(seq_exprs__$1){
var vec__48219 = cljs.core.first(seq_exprs__$1);
var vec__48222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(0),null);
var index_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(1),null);
var binding = vec__48219;
if((sym instanceof cljs.core.Symbol)){
var new_val = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map-indexed","cljs.core/map-indexed",1154761082,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0))));
var binding__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_sym,sym], null),new_val], null);
var deps__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps__$1,sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,(new cljs.core.Delay(((function (seq_exprs__$1,deps__$1,new_seq_exprs,new_val,binding__$1,vec__48219,vec__48222,index_sym,sym,val,binding,vec__48207,seq_exprs,body_expr,G__48114,first_form){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,index_sym,null,(1),null))], 0))))], null);
});})(seq_exprs__$1,deps__$1,new_seq_exprs,new_val,binding__$1,vec__48219,vec__48222,index_sym,sym,val,binding,vec__48207,seq_exprs,body_expr,G__48114,first_form))
,null))], null));
var G__48559 = cljs.core.next(seq_exprs__$1);
var G__48560 = deps__$2;
var G__48561 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding__$1);
seq_exprs__$1 = G__48559;
deps__$1 = G__48560;
new_seq_exprs = G__48561;
continue;
} else {
var G__48562 = cljs.core.next(seq_exprs__$1);
var G__48563 = deps__$1;
var G__48564 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_seq_exprs,binding);
seq_exprs__$1 = G__48562;
deps__$1 = G__48563;
new_seq_exprs = G__48564;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps__$1,new_seq_exprs], null);
}
break;
}
})();
var deps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48210,(0),null);
var seq_exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48210,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"for","for",316745208,null),null,(1),null)),(new cljs.core.List(null,seq_exprs__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(body_expr,deps__$1),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for-with-last","for-with-last",1211680336,null),G__48114)){
var vec__48225 = cljs.core.next(form);
var vec__48228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(0),null);
var x_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48228,(0),null);
var prev_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48228,(1),null);
var xs_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48228,(2),null);
var first_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(1),null);
var rest_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(2),null);
var index_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("index-");
var deps__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deps,x_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [deps,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs_sym,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,index_sym,null,(1),null))], 0))))], null);
}),null))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,xs_sym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"first-elem__48104__auto__","first-elem__48104__auto__",760022265,null),null,(1),null)),(new cljs.core.List(null,membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(first_body,deps__$1),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,prev_sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"first-elem__48104__auto__","first-elem__48104__auto__",760022265,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elems__48105__auto__","elems__48105__auto__",-1572518450,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"first-elem__48104__auto__","first-elem__48104__auto__",760022265,null),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"elem__48106__auto__","elem__48106__auto__",-1733953716,null),null,(1),null)),(new cljs.core.List(null,membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(rest_body,deps__$1),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__48103__auto__","s__48103__auto__",858761711,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elem__48106__auto__","elem__48106__auto__",-1733953716,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elems__48105__auto__","elems__48105__auto__",-1572518450,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"elem__48106__auto__","elem__48106__auto__",-1733953716,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elems__48105__auto__","elems__48105__auto__",-1572518450,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
var full_sym = (new cljs.core.Delay((function (){
return membrane.component.fully_qualified(first_form);
}),null));
var special_QMARK_ = (((first_form instanceof cljs.core.Symbol))?(function (){var temp__5751__auto__ = (function (){var or__4126__auto__ = (cljs.core.truth_(membrane.component.cljs_env_compiler())?new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1((membrane.component.cljs_resolve_var.cljs$core$IFn$_invoke$arity$2 ? membrane.component.cljs_resolve_var.cljs$core$IFn$_invoke$arity$2(membrane.component._STAR_env_STAR_,first_form) : membrane.component.cljs_resolve_var.call(null,membrane.component._STAR_env_STAR_,first_form))):null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = membrane.component.resolve_sci_meta(first_form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.meta(first_form);
}
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013).cljs$core$IFn$_invoke$arity$1(m);
} else {
return cljs.core.contains_QMARK_(cljs.core.deref(membrane.component.special_fns),cljs.core.deref(full_sym));
}
})():null);
if(cljs.core.truth_(special_QMARK_)){
var args = cljs.core.second(form);
var _ = ((cljs.core.map_QMARK_(args))?null:(function(){throw (new Error(["Assert failed: ",["membrane components must be called with a literal map. Invalid call:\n",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),"\n","(map? args)"].join('')))})());
var fn_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(membrane.component.special_fns),cljs.core.deref(full_sym),(function (){var or__4126__auto__ = membrane.component.resolve_sci_meta(first_form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(first_form);
}
})());
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(fn_meta);
var first_arglist = cljs.core.first(arglists);
var arg_map = cljs.core.first(first_arglist);
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(arg_map);
var all_args = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (sym){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(!(cljs.core.contains_QMARK_(args,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(sym)))),cljs.core.name(sym).startsWith("$")], null);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(arg_map),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,cljs.core.name,cljs.core.first),args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48108_SHARP_){
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48108_SHARP_)].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(arg_map))))], 0))));
var binding_syms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function membrane$component$iter__48233(s__48234){
return (new cljs.core.LazySeq(null,(function (){
var s__48234__$1 = s__48234;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48234__$1);
if(temp__5753__auto__){
var s__48234__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48234__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48234__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48236 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48235 = (0);
while(true){
if((i__48235 < size__4528__auto__)){
var arg = cljs.core._nth(c__4527__auto__,i__48235);
var arg_name = cljs.core.name(arg);
cljs.core.chunk_append(b__48236,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([arg_name,"-"].join(''))], null));

var G__48607 = (i__48235 + (1));
i__48235 = G__48607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48236),membrane$component$iter__48233(cljs.core.chunk_rest(s__48234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48236),null);
}
} else {
var arg = cljs.core.first(s__48234__$2);
var arg_name = cljs.core.name(arg);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([arg_name,"-"].join(''))], null),membrane$component$iter__48233(cljs.core.rest(s__48234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(all_args);
})());
var keypath_prefix = cljs.core.vec((function (){var iter__4529__auto__ = (function membrane$component$iter__48238(s__48239){
return (new cljs.core.LazySeq(null,(function (){
var s__48239__$1 = s__48239;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48239__$1);
if(temp__5753__auto__){
var s__48239__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48239__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48239__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48241 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48240 = (0);
while(true){
if((i__48240 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__48240);
var arg_name = cljs.core.name(k);
var dollar_arg_QMARK_ = arg_name.startsWith("$");
if(cljs.core.truth_((function (){var or__4126__auto__ = dollar_arg_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.core.contains_QMARK_(args,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(k)].join('')))));
}
})())){
cljs.core.chunk_append(b__48241,(cljs.core.truth_(dollar_arg_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(arg_name)):cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(arg_name)))].join(''))));

var G__48613 = (i__48240 + (1));
i__48240 = G__48613;
continue;
} else {
var G__48614 = (i__48240 + (1));
i__48240 = G__48614;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48241),membrane$component$iter__48238(cljs.core.chunk_rest(s__48239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48241),null);
}
} else {
var k = cljs.core.first(s__48239__$2);
var arg_name = cljs.core.name(k);
var dollar_arg_QMARK_ = arg_name.startsWith("$");
if(cljs.core.truth_((function (){var or__4126__auto__ = dollar_arg_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.core.contains_QMARK_(args,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(k)].join('')))));
}
})())){
return cljs.core.cons((cljs.core.truth_(dollar_arg_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(arg_name)):cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(arg_name)))].join(''))),membrane$component$iter__48238(cljs.core.rest(s__48239__$2)));
} else {
var G__48616 = cljs.core.rest(s__48239__$2);
s__48239__$1 = G__48616;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.keys(args));
})());
var bindings = (function (){var iter__4529__auto__ = (function membrane$component$iter__48242(s__48243){
return (new cljs.core.LazySeq(null,(function (){
var s__48243__$1 = s__48243;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48243__$1);
if(temp__5753__auto__){
var s__48243__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48243__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48243__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48245 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48244 = (0);
while(true){
if((i__48244 < size__4528__auto__)){
var arg = cljs.core._nth(c__4527__auto__,i__48244);
if(cljs.core.contains_QMARK_(binding_syms,arg)){
var binding_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,arg);
var arg_val = (cljs.core.truth_(cljs.core.name(arg).startsWith("$"))?(function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg));
if(cljs.core.truth_(temp__5751__auto__)){
var arg_val = temp__5751__auto__;
return arg_val;
} else {
var val_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(arg),(1))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(val_sym)].join(''));
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$3(args,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"context","context",810340414,null),arg))?new cljs.core.Symbol(null,"context","context",810340414,null):(cljs.core.truth_(new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(arg)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"context","context",810340414,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(arg)),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra","extra",-1041866702,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,keypath_prefix,null,(1),null)),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(arg)].join('')),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.contains_QMARK_(defaults,arg))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,arg):null),null,(1),null))], 0))))))));
cljs.core.chunk_append(b__48245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding_sym,arg_val], null));

var G__48634 = (i__48244 + (1));
i__48244 = G__48634;
continue;
} else {
var G__48635 = (i__48244 + (1));
i__48244 = G__48635;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48245),membrane$component$iter__48242(cljs.core.chunk_rest(s__48243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48245),null);
}
} else {
var arg = cljs.core.first(s__48243__$2);
if(cljs.core.contains_QMARK_(binding_syms,arg)){
var binding_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,arg);
var arg_val = (cljs.core.truth_(cljs.core.name(arg).startsWith("$"))?(function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(args,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg));
if(cljs.core.truth_(temp__5751__auto__)){
var arg_val = temp__5751__auto__;
return arg_val;
} else {
var val_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(arg),(1))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(val_sym)].join(''));
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$3(args,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"context","context",810340414,null),arg))?new cljs.core.Symbol(null,"context","context",810340414,null):(cljs.core.truth_(new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(arg)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"context","context",810340414,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(arg)),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra","extra",-1041866702,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,keypath_prefix,null,(1),null)),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(arg)].join('')),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.contains_QMARK_(defaults,arg))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,arg):null),null,(1),null))], 0))))))));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding_sym,arg_val], null),membrane$component$iter__48242(cljs.core.rest(s__48243__$2)));
} else {
var G__48645 = cljs.core.rest(s__48243__$2);
s__48243__$1 = G__48645;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(all_args);
})();
var new_args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function membrane$component$iter__48247(s__48248){
return (new cljs.core.LazySeq(null,(function (){
var s__48248__$1 = s__48248;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48248__$1);
if(temp__5753__auto__){
var s__48248__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48248__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48248__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48250 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48249 = (0);
while(true){
if((i__48249 < size__4528__auto__)){
var arg = cljs.core._nth(c__4527__auto__,i__48249);
var arg_name = cljs.core.name(arg);
var arg_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg_name);
cljs.core.chunk_append(b__48250,(cljs.core.truth_(arg_name.startsWith("$"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(arg_name))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,arg)], null)));

var G__48646 = (i__48249 + (1));
i__48249 = G__48646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48250),membrane$component$iter__48247(cljs.core.chunk_rest(s__48248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48250),null);
}
} else {
var arg = cljs.core.first(s__48248__$2);
var arg_name = cljs.core.name(arg);
var arg_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg_name);
return cljs.core.cons((cljs.core.truth_(arg_name.startsWith("$"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(arg_name))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(binding_syms,arg)], null)),membrane$component$iter__48247(cljs.core.rest(s__48248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(all_args);
})());
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,first_form,null,(1),null)),(new cljs.core.List(null,membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bindings))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,new_args),null,(1),null))], 0)))),deps),null,(1),null))))),cljs.core.meta(form));
} else {
return cljs.core.with_meta(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48110_SHARP_){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(p1__48110_SHARP_,deps);
}),form),cljs.core.meta(form));
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
if((form instanceof cljs.core.Symbol)){
var form_name = cljs.core.name(form);
if(cljs.core.truth_(form_name.startsWith("$"))){
var k = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(form_name,(1)));
if(cljs.core.contains_QMARK_(deps,k)){
return membrane.component.calculate_path(deps,k);
} else {
return form;
}
} else {
return form;
}
} else {
if(typeof form === 'string'){
return form;
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),(function (){var iter__4529__auto__ = (function membrane$component$iter__48251(s__48252){
return (new cljs.core.LazySeq(null,(function (){
var s__48252__$1 = s__48252;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48252__$1);
if(temp__5753__auto__){
var s__48252__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48252__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48252__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48254 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48253 = (0);
while(true){
if((i__48253 < size__4528__auto__)){
var vec__48255 = cljs.core._nth(c__4527__auto__,i__48253);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48255,(1),null);
cljs.core.chunk_append(b__48254,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(k,deps),membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(v,deps)], null));

var G__48650 = (i__48253 + (1));
i__48253 = G__48650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48254),membrane$component$iter__48251(cljs.core.chunk_rest(s__48252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48254),null);
}
} else {
var vec__48258 = cljs.core.first(s__48252__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48258,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48258,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(k,deps),membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(v,deps)], null),membrane$component$iter__48251(cljs.core.rest(s__48252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(form);
})());
} else {
if(cljs.core.seqable_QMARK_(form)){
var empty_form = cljs.core.empty(form);
var empty_form__$1 = (((((!((empty_form == null))))?(((((empty_form.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === empty_form.cljs$core$IMeta$))))?true:(((!empty_form.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,empty_form):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,empty_form)))?cljs.core.with_meta(empty_form,cljs.core.meta(form)):empty_form);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_form__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48111_SHARP_){
return membrane.component.path_replace.cljs$core$IFn$_invoke$arity$2(p1__48111_SHARP_,deps);
}),form));
} else {
return form;

}
}
}
}
}
}
}
}));

(membrane.component.path_replace.cljs$lang$maxFixedArity = 2);

membrane.component.doall_STAR_ = (function membrane$component$doall_STAR_(s){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.tree_seq(cljs.core.seqable_QMARK_,cljs.core.seq,s));

return s;
});
membrane.component.component_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof membrane !== 'undefined') && (typeof membrane.component !== 'undefined') && (typeof membrane.component.effects !== 'undefined')){
} else {
membrane.component.effects = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

membrane.component.top_level_ui_draw = (function membrane$component$top_level_ui_draw(p__48309){
var map__48310 = p__48309;
var map__48310__$1 = (((((!((map__48310 == null))))?(((((map__48310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48310):map__48310);
var m = map__48310__$1;
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var arg_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252));
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_extra_48297 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_state_48298 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"$state","$state",-1324110787),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"state","state",-1988618099),null,(1),null)),(2),null))], null));
var arg_path_body_48299 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"$body","$body",-844213794),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"body","body",-2049205669),null,(1),null)),(2),null))], null));
var arg_path_arg_names_48300 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"$arg-names","$arg-names",265556940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),null,(1),null)),(2),null))], null));
var arg_path_defaults_48301 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"$defaults","$defaults",1200435989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"defaults","defaults",976027214),null,(1),null)),(2),null))], null));
var arg_path_handler_48302 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"$handler","$handler",1680372231),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,(1),null)),(2),null))], null));
var arg_path_context_48303 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
var extra__$1 = new cljs.core.Keyword("membrane.component","extra","membrane.component/extra",-147872951).cljs$core$IFn$_invoke$arity$1(state);
var context__$1 = new cljs.core.Keyword("membrane.component","context","membrane.component/context",-307649135).cljs$core$IFn$_invoke$arity$1(state);
var args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function membrane$component$top_level_ui_draw_$_iter__48313(s__48314){
return (new cljs.core.LazySeq(null,(function (){
var s__48314__$1 = s__48314;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48314__$1);
if(temp__5753__auto__){
var s__48314__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48314__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48314__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48316 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48315 = (0);
while(true){
if((i__48315 < size__4528__auto__)){
var vec__48317 = cljs.core._nth(c__4527__auto__,i__48315);
var index_48305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48317,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48317,(1),null);
var kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nm);
var $kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(kw)].join(''));
cljs.core.chunk_append(b__48316,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,kw,cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,nm)),$kw,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null)),(new cljs.core.List(null,kw,null,(1),null))))),null,(1),null)))))),((cljs.core.contains_QMARK_(defaults,nm))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,nm),null,(1),null)),(2),null))], null):null))], null));

var G__48666 = (i__48315 + (1));
i__48315 = G__48666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48316),membrane$component$top_level_ui_draw_$_iter__48313(cljs.core.chunk_rest(s__48314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48316),null);
}
} else {
var vec__48320 = cljs.core.first(s__48314__$2);
var index_48305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48320,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48320,(1),null);
var kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nm);
var $kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.name(kw)].join(''));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,kw,cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,nm)),$kw,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),null,(1),null)),(new cljs.core.List(null,kw,null,(1),null))))),null,(1),null)))))),((cljs.core.contains_QMARK_(defaults,nm))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,nm),null,(1),null)),(2),null))], null):null))], null),membrane$component$top_level_ui_draw_$_iter__48313(cljs.core.rest(s__48314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,arg_names));
})()));
var main_view = (function (){var G__48324 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"extra","extra",1612569067),extra__$1,new cljs.core.Keyword(null,"$extra","$extra",542082855),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_state_48298,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword("membrane.component","extra","membrane.component/extra",-147872951),null,(1),null)),(2),null))], null)),new cljs.core.Keyword(null,"context","context",-830191113),context__$1,new cljs.core.Keyword(null,"$context","$context",-449141881),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_state_48298,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword("membrane.component","context","membrane.component/context",-307649135),null,(1),null)),(2),null))], null))], null),args], 0));
var fexpr__48323 = cljs.core.deref(body);
return (fexpr__48323.cljs$core$IFn$_invoke$arity$1 ? fexpr__48323.cljs$core$IFn$_invoke$arity$1(G__48324) : fexpr__48323.call(null,G__48324));
})();
return membrane.ui.on_bubble.cljs$core$IFn$_invoke$arity$variadic((function (intents){
return cljs.core.run_BANG_((function (p1__48285_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48285_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_scroll.cljs$core$IFn$_invoke$arity$variadic((function (offset,mpos){
var intents = membrane.ui.scroll(main_view,offset,mpos);
return cljs.core.run_BANG_((function (p1__48286_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48286_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_mouse_move_global.cljs$core$IFn$_invoke$arity$variadic((function (pos){
var intents = membrane.ui.mouse_move_global(main_view,pos);
return cljs.core.run_BANG_((function (p1__48287_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48287_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic((function (pos){
var intents = membrane.ui.mouse_move(main_view,pos);
return cljs.core.run_BANG_((function (p1__48288_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48288_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic((function (pos,button,mouse_down_QMARK_,mods){
var intents = membrane.ui.mouse_event(main_view,pos,button,mouse_down_QMARK_,mods);
if(cljs.core.seq(intents)){
return cljs.core.run_BANG_((function (p1__48289_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48289_SHARP_);
}),intents);
} else {
if(cljs.core.truth_(mouse_down_QMARK_)){
var G__48328_48687 = new cljs.core.Keyword(null,"set","set",304602554);
var G__48329_48688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_state_48298,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword("membrane.component","context","membrane.component/context",-307649135),null,(1),null)),(2),null))], null)),new cljs.core.Keyword(null,"focus","focus",234677911)], null);
var G__48330_48689 = null;
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(G__48328_48687,G__48329_48688,G__48330_48689) : handler.call(null,G__48328_48687,G__48329_48688,G__48330_48689));

return null;
} else {
return null;
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_key_press.cljs$core$IFn$_invoke$arity$variadic((function (s){
var intents = membrane.ui.key_press.cljs$core$IFn$_invoke$arity$variadic(main_view,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
return cljs.core.run_BANG_((function (p1__48290_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48290_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_key_event.cljs$core$IFn$_invoke$arity$variadic((function (key,scancode,action,mods){
var intents = membrane.ui.key_event.cljs$core$IFn$_invoke$arity$variadic(main_view,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,scancode,action,mods], 0));
return cljs.core.run_BANG_((function (p1__48291_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48291_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_clipboard_cut.cljs$core$IFn$_invoke$arity$variadic((function (){
var intents = membrane.ui.clipboard_cut(main_view);
return cljs.core.run_BANG_((function (p1__48292_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48292_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_clipboard_copy.cljs$core$IFn$_invoke$arity$variadic((function (){
var intents = membrane.ui.clipboard_copy(main_view);
return cljs.core.run_BANG_((function (p1__48293_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48293_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_clipboard_paste.cljs$core$IFn$_invoke$arity$variadic((function (s){
var intents = membrane.ui.clipboard_paste.cljs$core$IFn$_invoke$arity$variadic(main_view,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
return cljs.core.run_BANG_((function (p1__48294_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48294_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on_drop.cljs$core$IFn$_invoke$arity$variadic((function (paths,pos){
var intents = membrane.ui.drop(main_view,paths,pos);
return cljs.core.run_BANG_((function (p1__48295_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler,p1__48295_SHARP_);
}),intents);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([main_view], 0))], 0))], 0))], 0))], 0))], 0))], 0))], 0))], 0))], 0))], 0));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.component.Top_level_ui = (function (extra,state,body,arg_names,defaults,handler,context,__meta,__extmap,__hash){
this.extra = extra;
this.state = state;
this.body = body;
this.arg_names = arg_names;
this.defaults = defaults;
this.handler = handler;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.component.Top_level_ui.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.component.Top_level_ui.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48333,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48337 = k48333;
var G__48337__$1 = (((G__48337 instanceof cljs.core.Keyword))?G__48337.fqn:null);
switch (G__48337__$1) {
case "extra":
return self__.extra;

break;
case "state":
return self__.state;

break;
case "body":
return self__.body;

break;
case "arg-names":
return self__.arg_names;

break;
case "defaults":
return self__.defaults;

break;
case "handler":
return self__.handler;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48333,else__4383__auto__);

}
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48338){
var vec__48339 = p__48338;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.component.Top-level-ui{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),self__.arg_names],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"defaults","defaults",976027214),self__.defaults],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48332){
var self__ = this;
var G__48332__$1 = this;
return (new cljs.core.RecordIter((0),G__48332__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),new cljs.core.Keyword(null,"defaults","defaults",976027214),new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.component.Top_level_ui.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,self__.arg_names,self__.defaults,self__.handler,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.component.Top_level_ui.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1094706417 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48334,other48335){
var self__ = this;
var this48334__$1 = this;
return (((!((other48335 == null)))) && ((this48334__$1.constructor === other48335.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.extra,other48335.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.state,other48335.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.body,other48335.body)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.arg_names,other48335.arg_names)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.defaults,other48335.defaults)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.handler,other48335.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.context,other48335.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48334__$1.__extmap,other48335.__extmap)));
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"defaults","defaults",976027214),null,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,self__.arg_names,self__.defaults,self__.handler,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48332){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48346 = cljs.core.keyword_identical_QMARK_;
var expr__48347 = k__4388__auto__;
if(cljs.core.truth_((pred__48346.cljs$core$IFn$_invoke$arity$2 ? pred__48346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48347) : pred__48346.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48347)))){
return (new membrane.component.Top_level_ui(G__48332,self__.state,self__.body,self__.arg_names,self__.defaults,self__.handler,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48346.cljs$core$IFn$_invoke$arity$2 ? pred__48346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__48347) : pred__48346.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__48347)))){
return (new membrane.component.Top_level_ui(self__.extra,G__48332,self__.body,self__.arg_names,self__.defaults,self__.handler,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48346.cljs$core$IFn$_invoke$arity$2 ? pred__48346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__48347) : pred__48346.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__48347)))){
return (new membrane.component.Top_level_ui(self__.extra,self__.state,G__48332,self__.arg_names,self__.defaults,self__.handler,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48346.cljs$core$IFn$_invoke$arity$2 ? pred__48346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),expr__48347) : pred__48346.call(null,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),expr__48347)))){
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,G__48332,self__.defaults,self__.handler,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48346.cljs$core$IFn$_invoke$arity$2 ? pred__48346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"defaults","defaults",976027214),expr__48347) : pred__48346.call(null,new cljs.core.Keyword(null,"defaults","defaults",976027214),expr__48347)))){
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,self__.arg_names,G__48332,self__.handler,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48346.cljs$core$IFn$_invoke$arity$2 ? pred__48346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__48347) : pred__48346.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__48347)))){
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,self__.arg_names,self__.defaults,G__48332,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48346.cljs$core$IFn$_invoke$arity$2 ? pred__48346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__48347) : pred__48346.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__48347)))){
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,self__.arg_names,self__.defaults,self__.handler,G__48332,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,self__.arg_names,self__.defaults,self__.handler,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48332),null));
}
}
}
}
}
}
}
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.component.Top_level_ui.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),self__.arg_names,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"defaults","defaults",976027214),self__.defaults,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.component.Top_level_ui.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48332){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.component.Top_level_ui(self__.extra,self__.state,self__.body,self__.arg_names,self__.defaults,self__.handler,self__.context,G__48332,self__.__extmap,self__.__hash));
}));

(membrane.component.Top_level_ui.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.component.Top_level_ui.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.component.Top_level_ui.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.component.Top_level_ui.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"arg-names","arg-names",-1021604517,null),new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.component.Top_level_ui.cljs$lang$type = true);

(membrane.component.Top_level_ui.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.component/Top-level-ui",null,(1),null));
}));

(membrane.component.Top_level_ui.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.component/Top-level-ui");
}));

/**
 * Positional factory function for membrane.component/Top-level-ui.
 */
membrane.component.__GT_Top_level_ui = (function membrane$component$__GT_Top_level_ui(extra,state,body,arg_names,defaults,handler,context){
return (new membrane.component.Top_level_ui(extra,state,body,arg_names,defaults,handler,context,null,null,null));
});

/**
 * Factory function for membrane.component/Top-level-ui, taking a map of keywords to field values.
 */
membrane.component.map__GT_Top_level_ui = (function membrane$component$map__GT_Top_level_ui(G__48336){
var extmap__4419__auto__ = (function (){var G__48353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48336,new cljs.core.Keyword(null,"extra","extra",1612569067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),new cljs.core.Keyword(null,"defaults","defaults",976027214),new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__48336)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48353);
} else {
return G__48353;
}
})();
return (new membrane.component.Top_level_ui(new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__48336),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__48336),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__48336),new cljs.core.Keyword(null,"arg-names","arg-names",1632831252).cljs$core$IFn$_invoke$arity$1(G__48336),new cljs.core.Keyword(null,"defaults","defaults",976027214).cljs$core$IFn$_invoke$arity$1(G__48336),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__48336),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__48336),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.component.top_level_ui;},new cljs.core.Symbol("membrane.component","top-level-ui","membrane.component/top-level-ui",1393721176,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.component","membrane.component",-598780945,null),new cljs.core.Symbol(null,"top-level-ui","top-level-ui",-467814466,null),"membrane/component.cljc",20,1,868,true,868,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.component.top_level_ui)?membrane.component.top_level_ui.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"arg-names","arg-names",-1021604517,null),new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

membrane.component.top_level_ui_rerender_BANG_ = (function membrane$component$top_level_ui_rerender_BANG_(m__47722__auto__){
var elem_48304 = membrane.component.map__GT_Top_level_ui(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.component","top-level-ui","membrane.component/top-level-ui",-246810351),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_48304.extra,elem_48304.state,elem_48304.body,elem_48304.arg_names,elem_48304.defaults,elem_48304.handler,elem_48304.context,new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_48304),new cljs.core.Keyword(null,"$state","$state",-1324110787).cljs$core$IFn$_invoke$arity$1(elem_48304),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(elem_48304),new cljs.core.Keyword(null,"$arg-names","$arg-names",265556940).cljs$core$IFn$_invoke$arity$1(elem_48304),new cljs.core.Keyword(null,"$defaults","$defaults",1200435989).cljs$core$IFn$_invoke$arity$1(elem_48304),new cljs.core.Keyword(null,"$handler","$handler",1680372231).cljs$core$IFn$_invoke$arity$1(elem_48304),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_48304)], null)], null);
var rendered__47723__auto__ = membrane.component.top_level_ui_draw(elem_48304);
var elem_48304__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_48304,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_48304__$1);

return elem_48304__$1;
});

var ret__47724__auto___48784 = membrane.component.top_level_ui = (function membrane$component$top_level_ui(p__48354){
var map__48355 = p__48354;
var map__48355__$1 = (((((!((map__48355 == null))))?(((((map__48355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48355):map__48355);
var m = map__48355__$1;
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var arg_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252));
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.component","top-level-ui","membrane.component/top-level-ui",-246810351),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [extra,state,body,arg_names,defaults,handler,context,new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"$state","$state",-1324110787).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"$arg-names","$arg-names",265556940).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"$defaults","$defaults",1200435989).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"$handler","$handler",1680372231).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.component.top_level_ui_rerender_BANG_(m);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.component","top-level-ui","membrane.component/top-level-ui",1393721176,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"arg-names","arg-names",-1021604517,null),new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.component.top_level_ui;},new cljs.core.Symbol("membrane.component","top-level-ui","membrane.component/top-level-ui",1393721176,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.component","membrane.component",-598780945,null),new cljs.core.Symbol(null,"top-level-ui","top-level-ui",-467814466,null),"membrane/component.cljc",20,1,868,868,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"arg-names","arg-names",-1021604517,null),new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)], null)),null,(cljs.core.truth_(membrane.component.top_level_ui)?membrane.component.top_level_ui.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"arg-names","arg-names",-1021604517,null),new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

membrane.component.default_handler = (function membrane$component$default_handler(atm){
return (function() {
var membrane$component$default_handler_$_dispatch_BANG_ = null;
var membrane$component$default_handler_$_dispatch_BANG___0 = (function (){
return null;
});
var membrane$component$default_handler_$_dispatch_BANG___2 = (function() { 
var G__48819__delegate = function (type,args){
var G__48357 = type;
var G__48357__$1 = (((G__48357 instanceof cljs.core.Keyword))?G__48357.fqn:null);
switch (G__48357__$1) {
case "update":
var vec__48358 = args;
var seq__48359 = cljs.core.seq(vec__48358);
var first__48360 = cljs.core.first(seq__48359);
var seq__48359__$1 = cljs.core.next(seq__48359);
var path = first__48360;
var first__48360__$1 = cljs.core.first(seq__48359__$1);
var seq__48359__$2 = cljs.core.next(seq__48359__$1);
var f = first__48360__$1;
var args__$1 = seq__48359__$2;
return com.rpl.specter.transform_STAR_(membrane.component.path__GT_spec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ATOM,path], null)),(function() { 
var G__48822__delegate = function (spec_args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(spec_args,args__$1));
};
var G__48822 = function (var_args){
var spec_args = null;
if (arguments.length > 0) {
var G__48823__i = 0, G__48823__a = new Array(arguments.length -  0);
while (G__48823__i < G__48823__a.length) {G__48823__a[G__48823__i] = arguments[G__48823__i + 0]; ++G__48823__i;}
  spec_args = new cljs.core.IndexedSeq(G__48823__a,0,null);
} 
return G__48822__delegate.call(this,spec_args);};
G__48822.cljs$lang$maxFixedArity = 0;
G__48822.cljs$lang$applyTo = (function (arglist__48824){
var spec_args = cljs.core.seq(arglist__48824);
return G__48822__delegate(spec_args);
});
G__48822.cljs$core$IFn$_invoke$arity$variadic = G__48822__delegate;
return G__48822;
})()
,atm);

break;
case "set":
var vec__48364 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48364,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48364,(1),null);
return com.rpl.specter.setval_STAR_(membrane.component.path__GT_spec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ATOM,path], null)),v,atm);

break;
case "get":
var path = cljs.core.first(args);
return com.rpl.specter.select_one_STAR_(membrane.component.path__GT_spec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ATOM,path], null)),atm);

break;
case "delete":
var vec__48367 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48367,(0),null);
return com.rpl.specter.setval_STAR_(membrane.component.path__GT_spec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ATOM,path], null)),com.rpl.specter.NONE,atm);

break;
default:
var effects = cljs.core.deref(membrane.component.effects);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(effects,type);
if(cljs.core.truth_(handler)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,membrane$component$default_handler_$_dispatch_BANG_,args);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler for ",type], 0));
}

}
};
var G__48819 = function (type,var_args){
var args = null;
if (arguments.length > 1) {
var G__48841__i = 0, G__48841__a = new Array(arguments.length -  1);
while (G__48841__i < G__48841__a.length) {G__48841__a[G__48841__i] = arguments[G__48841__i + 1]; ++G__48841__i;}
  args = new cljs.core.IndexedSeq(G__48841__a,0,null);
} 
return G__48819__delegate.call(this,type,args);};
G__48819.cljs$lang$maxFixedArity = 1;
G__48819.cljs$lang$applyTo = (function (arglist__48843){
var type = cljs.core.first(arglist__48843);
var args = cljs.core.rest(arglist__48843);
return G__48819__delegate(type,args);
});
G__48819.cljs$core$IFn$_invoke$arity$variadic = G__48819__delegate;
return G__48819;
})()
;
membrane$component$default_handler_$_dispatch_BANG_ = function(type,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return membrane$component$default_handler_$_dispatch_BANG___0.call(this);
default:
var G__48848 = null;
if (arguments.length > 1) {
var G__48853__i = 0, G__48853__a = new Array(arguments.length -  1);
while (G__48853__i < G__48853__a.length) {G__48853__a[G__48853__i] = arguments[G__48853__i + 1]; ++G__48853__i;}
G__48848 = new cljs.core.IndexedSeq(G__48853__a,0,null);
}
return membrane$component$default_handler_$_dispatch_BANG___2.cljs$core$IFn$_invoke$arity$variadic(type, G__48848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
membrane$component$default_handler_$_dispatch_BANG_.cljs$lang$maxFixedArity = 1;
membrane$component$default_handler_$_dispatch_BANG_.cljs$lang$applyTo = membrane$component$default_handler_$_dispatch_BANG___2.cljs$lang$applyTo;
membrane$component$default_handler_$_dispatch_BANG_.cljs$core$IFn$_invoke$arity$0 = membrane$component$default_handler_$_dispatch_BANG___0;
membrane$component$default_handler_$_dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = membrane$component$default_handler_$_dispatch_BANG___2.cljs$core$IFn$_invoke$arity$variadic;
return membrane$component$default_handler_$_dispatch_BANG_;
})()
});
/**
 * `ui-var` The var for a component
 *   `initial-state` The initial state of the component to run or an atom that contains the initial state.
 *   `handler` The effect handler for your UI. The `handler` will be called with all effects returned by the event handlers of your ui.
 * 
 *   If `handler` is nil or an arity that doesn't specify `handler` is used, then a default handler using all of the globally defined effects from `defeffect` will be used. In addition to the globally defined effects the handler will provide 3 additional effects:
 * 
 *   `:update` similar to `update` except instead of a keypath, takes a more generic path.
 *   example: `[:update $ref inc]`
 * 
 *   `:set` sets the value given a $path
 *   example: `[:set $ref val]`
 * 
 *   `:delete` deletes value at $path
 *   example: `[:delete $ref]`
 * 
 *   return value: the state atom used by the ui.
 */
membrane.component.make_app = (function membrane$component$make_app(var_args){
var G__48372 = arguments.length;
switch (G__48372) {
case 1:
return membrane.component.make_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return membrane.component.make_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return membrane.component.make_app.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.component.make_app.cljs$core$IFn$_invoke$arity$1 = (function (ui_var){
return membrane.component.make_app.cljs$core$IFn$_invoke$arity$2(ui_var,cljs.core.PersistentArrayMap.EMPTY);
}));

(membrane.component.make_app.cljs$core$IFn$_invoke$arity$2 = (function (ui_var,initial_state){
return membrane.component.make_app.cljs$core$IFn$_invoke$arity$3(ui_var,initial_state,null);
}));

(membrane.component.make_app.cljs$core$IFn$_invoke$arity$3 = (function (ui_var,initial_state,handler){
var state_atom = (((initial_state instanceof cljs.core.Atom))?initial_state:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state));
var handler__$1 = (cljs.core.truth_(handler)?handler:membrane.component.default_handler(state_atom));
var arglist = cljs.core.first(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ui_var)));
var m = cljs.core.first(arglist);
var arg_names = cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"context","context",810340414,null)], 0));
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(m);
var top_level = (function (){
return membrane.component.top_level_ui(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(state_atom),new cljs.core.Keyword(null,"$state","$state",-1324110787),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),ui_var,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),arg_names,new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"handler","handler",-195596612),handler__$1], null));
});
return top_level;
}));

(membrane.component.make_app.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=membrane.component.js.map
