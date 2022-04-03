goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__62663){
var map__62664 = p__62663;
var map__62664__$1 = (((((!((map__62664 == null))))?(((((map__62664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62664):map__62664);
var m = map__62664__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62668_62879 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62669_62880 = null;
var count__62670_62881 = (0);
var i__62671_62882 = (0);
while(true){
if((i__62671_62882 < count__62670_62881)){
var f_62883 = chunk__62669_62880.cljs$core$IIndexed$_nth$arity$2(null,i__62671_62882);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62883], 0));


var G__62885 = seq__62668_62879;
var G__62886 = chunk__62669_62880;
var G__62887 = count__62670_62881;
var G__62888 = (i__62671_62882 + (1));
seq__62668_62879 = G__62885;
chunk__62669_62880 = G__62886;
count__62670_62881 = G__62887;
i__62671_62882 = G__62888;
continue;
} else {
var temp__5753__auto___62889 = cljs.core.seq(seq__62668_62879);
if(temp__5753__auto___62889){
var seq__62668_62890__$1 = temp__5753__auto___62889;
if(cljs.core.chunked_seq_QMARK_(seq__62668_62890__$1)){
var c__4556__auto___62891 = cljs.core.chunk_first(seq__62668_62890__$1);
var G__62892 = cljs.core.chunk_rest(seq__62668_62890__$1);
var G__62893 = c__4556__auto___62891;
var G__62894 = cljs.core.count(c__4556__auto___62891);
var G__62895 = (0);
seq__62668_62879 = G__62892;
chunk__62669_62880 = G__62893;
count__62670_62881 = G__62894;
i__62671_62882 = G__62895;
continue;
} else {
var f_62896 = cljs.core.first(seq__62668_62890__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62896], 0));


var G__62897 = cljs.core.next(seq__62668_62890__$1);
var G__62898 = null;
var G__62899 = (0);
var G__62900 = (0);
seq__62668_62879 = G__62897;
chunk__62669_62880 = G__62898;
count__62670_62881 = G__62899;
i__62671_62882 = G__62900;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_62901 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_62901], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_62901)))?cljs.core.second(arglists_62901):arglists_62901)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62674_62902 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62675_62903 = null;
var count__62676_62904 = (0);
var i__62677_62905 = (0);
while(true){
if((i__62677_62905 < count__62676_62904)){
var vec__62690_62906 = chunk__62675_62903.cljs$core$IIndexed$_nth$arity$2(null,i__62677_62905);
var name_62907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62690_62906,(0),null);
var map__62693_62908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62690_62906,(1),null);
var map__62693_62909__$1 = (((((!((map__62693_62908 == null))))?(((((map__62693_62908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62693_62908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62693_62908):map__62693_62908);
var doc_62910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693_62909__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693_62909__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62907], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62911], 0));

if(cljs.core.truth_(doc_62910)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62910], 0));
} else {
}


var G__62912 = seq__62674_62902;
var G__62913 = chunk__62675_62903;
var G__62914 = count__62676_62904;
var G__62915 = (i__62677_62905 + (1));
seq__62674_62902 = G__62912;
chunk__62675_62903 = G__62913;
count__62676_62904 = G__62914;
i__62677_62905 = G__62915;
continue;
} else {
var temp__5753__auto___62916 = cljs.core.seq(seq__62674_62902);
if(temp__5753__auto___62916){
var seq__62674_62917__$1 = temp__5753__auto___62916;
if(cljs.core.chunked_seq_QMARK_(seq__62674_62917__$1)){
var c__4556__auto___62918 = cljs.core.chunk_first(seq__62674_62917__$1);
var G__62919 = cljs.core.chunk_rest(seq__62674_62917__$1);
var G__62920 = c__4556__auto___62918;
var G__62921 = cljs.core.count(c__4556__auto___62918);
var G__62922 = (0);
seq__62674_62902 = G__62919;
chunk__62675_62903 = G__62920;
count__62676_62904 = G__62921;
i__62677_62905 = G__62922;
continue;
} else {
var vec__62696_62923 = cljs.core.first(seq__62674_62917__$1);
var name_62924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62696_62923,(0),null);
var map__62699_62925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62696_62923,(1),null);
var map__62699_62926__$1 = (((((!((map__62699_62925 == null))))?(((((map__62699_62925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62699_62925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62699_62925):map__62699_62925);
var doc_62927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699_62926__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699_62926__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62924], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62928], 0));

if(cljs.core.truth_(doc_62927)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62927], 0));
} else {
}


var G__62929 = cljs.core.next(seq__62674_62917__$1);
var G__62930 = null;
var G__62931 = (0);
var G__62932 = (0);
seq__62674_62902 = G__62929;
chunk__62675_62903 = G__62930;
count__62676_62904 = G__62931;
i__62677_62905 = G__62932;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__62701 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__62702 = null;
var count__62703 = (0);
var i__62704 = (0);
while(true){
if((i__62704 < count__62703)){
var role = chunk__62702.cljs$core$IIndexed$_nth$arity$2(null,i__62704);
var temp__5753__auto___62933__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___62933__$1)){
var spec_62934 = temp__5753__auto___62933__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62934)], 0));
} else {
}


var G__62935 = seq__62701;
var G__62936 = chunk__62702;
var G__62937 = count__62703;
var G__62938 = (i__62704 + (1));
seq__62701 = G__62935;
chunk__62702 = G__62936;
count__62703 = G__62937;
i__62704 = G__62938;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__62701);
if(temp__5753__auto____$1){
var seq__62701__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__62701__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62701__$1);
var G__62939 = cljs.core.chunk_rest(seq__62701__$1);
var G__62940 = c__4556__auto__;
var G__62941 = cljs.core.count(c__4556__auto__);
var G__62942 = (0);
seq__62701 = G__62939;
chunk__62702 = G__62940;
count__62703 = G__62941;
i__62704 = G__62942;
continue;
} else {
var role = cljs.core.first(seq__62701__$1);
var temp__5753__auto___62943__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___62943__$2)){
var spec_62944 = temp__5753__auto___62943__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62944)], 0));
} else {
}


var G__62945 = cljs.core.next(seq__62701__$1);
var G__62946 = null;
var G__62947 = (0);
var G__62948 = (0);
seq__62701 = G__62945;
chunk__62702 = G__62946;
count__62703 = G__62947;
i__62704 = G__62948;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__62955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__62956 = cljs.core.ex_cause(t);
via = G__62955;
t = G__62956;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__62729 = datafied_throwable;
var map__62729__$1 = (((((!((map__62729 == null))))?(((((map__62729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62729):map__62729);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62729__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__62730 = cljs.core.last(via);
var map__62730__$1 = (((((!((map__62730 == null))))?(((((map__62730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62730):map__62730);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__62735 = data;
var map__62735__$1 = (((((!((map__62735 == null))))?(((((map__62735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62735):map__62735);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62735__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62735__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62735__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__62736 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__62736__$1 = (((((!((map__62736 == null))))?(((((map__62736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62736):map__62736);
var top_data = map__62736__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__62762 = phase;
var G__62762__$1 = (((G__62762 instanceof cljs.core.Keyword))?G__62762.fqn:null);
switch (G__62762__$1) {
case "read-source":
var map__62767 = data;
var map__62767__$1 = (((((!((map__62767 == null))))?(((((map__62767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62767):map__62767);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62767__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62767__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__62785 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__62785__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62785,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__62785);
var G__62785__$2 = (cljs.core.truth_((function (){var fexpr__62786 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62786.cljs$core$IFn$_invoke$arity$1 ? fexpr__62786.cljs$core$IFn$_invoke$arity$1(source) : fexpr__62786.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62785__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__62785__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62785__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__62785__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__62787 = top_data;
var G__62787__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62787,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__62787);
var G__62787__$2 = (cljs.core.truth_((function (){var fexpr__62792 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62792.cljs$core$IFn$_invoke$arity$1 ? fexpr__62792.cljs$core$IFn$_invoke$arity$1(source) : fexpr__62792.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62787__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__62787__$1);
var G__62787__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62787__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__62787__$2);
var G__62787__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62787__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__62787__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62787__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__62787__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__62796 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62796,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62796,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62796,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62796,(3),null);
var G__62803 = top_data;
var G__62803__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62803,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__62803);
var G__62803__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62803__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__62803__$1);
var G__62803__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62803__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__62803__$2);
var G__62803__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62803__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__62803__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62803__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__62803__$4;
}

break;
case "execution":
var vec__62814 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62814,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62814,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62814,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62814,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__62728_SHARP_){
var or__4126__auto__ = (p1__62728_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__62826 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62826.cljs$core$IFn$_invoke$arity$1 ? fexpr__62826.cljs$core$IFn$_invoke$arity$1(p1__62728_SHARP_) : fexpr__62826.call(null,p1__62728_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__62827 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__62827__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62827,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__62827);
var G__62827__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62827__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__62827__$1);
var G__62827__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62827__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__62827__$2);
var G__62827__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62827__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__62827__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62827__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__62827__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62762__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__62834){
var map__62835 = p__62834;
var map__62835__$1 = (((((!((map__62835 == null))))?(((((map__62835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62835):map__62835);
var triage_data = map__62835__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62835__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__62839 = phase;
var G__62839__$1 = (((G__62839 instanceof cljs.core.Keyword))?G__62839.fqn:null);
switch (G__62839__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__62840 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__62841 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62842 = loc;
var G__62843 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62844_62963 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62845_62964 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62846_62965 = true;
var _STAR_print_fn_STAR__temp_val__62847_62966 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62846_62965);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62847_62966);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62832_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__62832_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62845_62964);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62844_62963);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62840,G__62841,G__62842,G__62843) : format.call(null,G__62840,G__62841,G__62842,G__62843));

break;
case "macroexpansion":
var G__62848 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__62849 = cause_type;
var G__62850 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62851 = loc;
var G__62852 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62848,G__62849,G__62850,G__62851,G__62852) : format.call(null,G__62848,G__62849,G__62850,G__62851,G__62852));

break;
case "compile-syntax-check":
var G__62853 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__62854 = cause_type;
var G__62855 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62856 = loc;
var G__62857 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62853,G__62854,G__62855,G__62856,G__62857) : format.call(null,G__62853,G__62854,G__62855,G__62856,G__62857));

break;
case "compilation":
var G__62858 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__62859 = cause_type;
var G__62860 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62861 = loc;
var G__62862 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62858,G__62859,G__62860,G__62861,G__62862) : format.call(null,G__62858,G__62859,G__62860,G__62861,G__62862));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__62864 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__62865 = symbol;
var G__62866 = loc;
var G__62867 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62868_62967 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62869_62968 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62870_62969 = true;
var _STAR_print_fn_STAR__temp_val__62871_62970 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62870_62969);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62871_62970);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62833_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__62833_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62869_62968);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62868_62967);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62864,G__62865,G__62866,G__62867) : format.call(null,G__62864,G__62865,G__62866,G__62867));
} else {
var G__62872 = "Execution error%s at %s(%s).\n%s\n";
var G__62873 = cause_type;
var G__62874 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62875 = loc;
var G__62876 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62872,G__62873,G__62874,G__62875,G__62876) : format.call(null,G__62872,G__62873,G__62874,G__62875,G__62876));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62839__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
