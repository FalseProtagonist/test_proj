goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42677 = arguments.length;
switch (G__42677) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42680 = (function (f,blockable,meta42681){
this.f = f;
this.blockable = blockable;
this.meta42681 = meta42681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42682,meta42681__$1){
var self__ = this;
var _42682__$1 = this;
return (new cljs.core.async.t_cljs$core$async42680(self__.f,self__.blockable,meta42681__$1));
}));

(cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42682){
var self__ = this;
var _42682__$1 = this;
return self__.meta42681;
}));

(cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42681","meta42681",-1888451175,null)], null);
}));

(cljs.core.async.t_cljs$core$async42680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42680");

(cljs.core.async.t_cljs$core$async42680.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42680.
 */
cljs.core.async.__GT_t_cljs$core$async42680 = (function cljs$core$async$__GT_t_cljs$core$async42680(f__$1,blockable__$1,meta42681){
return (new cljs.core.async.t_cljs$core$async42680(f__$1,blockable__$1,meta42681));
});

}

return (new cljs.core.async.t_cljs$core$async42680(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42755 = arguments.length;
switch (G__42755) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42769 = arguments.length;
switch (G__42769) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42804 = arguments.length;
switch (G__42804) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46192 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46192) : fn1.call(null,val_46192));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46192) : fn1.call(null,val_46192));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42818 = arguments.length;
switch (G__42818) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___46203 = n;
var x_46204 = (0);
while(true){
if((x_46204 < n__4613__auto___46203)){
(a[x_46204] = x_46204);

var G__46205 = (x_46204 + (1));
x_46204 = G__46205;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42832 = (function (flag,meta42833){
this.flag = flag;
this.meta42833 = meta42833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42834,meta42833__$1){
var self__ = this;
var _42834__$1 = this;
return (new cljs.core.async.t_cljs$core$async42832(self__.flag,meta42833__$1));
}));

(cljs.core.async.t_cljs$core$async42832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42834){
var self__ = this;
var _42834__$1 = this;
return self__.meta42833;
}));

(cljs.core.async.t_cljs$core$async42832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42833","meta42833",-1324834556,null)], null);
}));

(cljs.core.async.t_cljs$core$async42832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42832");

(cljs.core.async.t_cljs$core$async42832.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42832.
 */
cljs.core.async.__GT_t_cljs$core$async42832 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42832(flag__$1,meta42833){
return (new cljs.core.async.t_cljs$core$async42832(flag__$1,meta42833));
});

}

return (new cljs.core.async.t_cljs$core$async42832(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42865 = (function (flag,cb,meta42866){
this.flag = flag;
this.cb = cb;
this.meta42866 = meta42866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42867,meta42866__$1){
var self__ = this;
var _42867__$1 = this;
return (new cljs.core.async.t_cljs$core$async42865(self__.flag,self__.cb,meta42866__$1));
}));

(cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42867){
var self__ = this;
var _42867__$1 = this;
return self__.meta42866;
}));

(cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42866","meta42866",1650386949,null)], null);
}));

(cljs.core.async.t_cljs$core$async42865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42865");

(cljs.core.async.t_cljs$core$async42865.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42865.
 */
cljs.core.async.__GT_t_cljs$core$async42865 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42865(flag__$1,cb__$1,meta42866){
return (new cljs.core.async.t_cljs$core$async42865(flag__$1,cb__$1,meta42866));
});

}

return (new cljs.core.async.t_cljs$core$async42865(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42886_SHARP_){
var G__42901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42886_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42901) : fret.call(null,G__42901));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42887_SHARP_){
var G__42905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42887_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42905) : fret.call(null,G__42905));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46212 = (i + (1));
i = G__46212;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46218 = arguments.length;
var i__4737__auto___46219 = (0);
while(true){
if((i__4737__auto___46219 < len__4736__auto___46218)){
args__4742__auto__.push((arguments[i__4737__auto___46219]));

var G__46220 = (i__4737__auto___46219 + (1));
i__4737__auto___46219 = G__46220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42910){
var map__42911 = p__42910;
var map__42911__$1 = (((((!((map__42911 == null))))?(((((map__42911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42911):map__42911);
var opts = map__42911__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42908){
var G__42909 = cljs.core.first(seq42908);
var seq42908__$1 = cljs.core.next(seq42908);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42909,seq42908__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42945 = arguments.length;
switch (G__42945) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42554__auto___46231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43001){
var state_val_43002 = (state_43001[(1)]);
if((state_val_43002 === (7))){
var inst_42994 = (state_43001[(2)]);
var state_43001__$1 = state_43001;
var statearr_43007_46232 = state_43001__$1;
(statearr_43007_46232[(2)] = inst_42994);

(statearr_43007_46232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (1))){
var state_43001__$1 = state_43001;
var statearr_43008_46235 = state_43001__$1;
(statearr_43008_46235[(2)] = null);

(statearr_43008_46235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (4))){
var inst_42972 = (state_43001[(7)]);
var inst_42972__$1 = (state_43001[(2)]);
var inst_42974 = (inst_42972__$1 == null);
var state_43001__$1 = (function (){var statearr_43015 = state_43001;
(statearr_43015[(7)] = inst_42972__$1);

return statearr_43015;
})();
if(cljs.core.truth_(inst_42974)){
var statearr_43018_46240 = state_43001__$1;
(statearr_43018_46240[(1)] = (5));

} else {
var statearr_43020_46242 = state_43001__$1;
(statearr_43020_46242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (13))){
var state_43001__$1 = state_43001;
var statearr_43023_46245 = state_43001__$1;
(statearr_43023_46245[(2)] = null);

(statearr_43023_46245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (6))){
var inst_42972 = (state_43001[(7)]);
var state_43001__$1 = state_43001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43001__$1,(11),to,inst_42972);
} else {
if((state_val_43002 === (3))){
var inst_42999 = (state_43001[(2)]);
var state_43001__$1 = state_43001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43001__$1,inst_42999);
} else {
if((state_val_43002 === (12))){
var state_43001__$1 = state_43001;
var statearr_43028_46246 = state_43001__$1;
(statearr_43028_46246[(2)] = null);

(statearr_43028_46246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (2))){
var state_43001__$1 = state_43001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43001__$1,(4),from);
} else {
if((state_val_43002 === (11))){
var inst_42987 = (state_43001[(2)]);
var state_43001__$1 = state_43001;
if(cljs.core.truth_(inst_42987)){
var statearr_43031_46252 = state_43001__$1;
(statearr_43031_46252[(1)] = (12));

} else {
var statearr_43033_46253 = state_43001__$1;
(statearr_43033_46253[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (9))){
var state_43001__$1 = state_43001;
var statearr_43034_46254 = state_43001__$1;
(statearr_43034_46254[(2)] = null);

(statearr_43034_46254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (5))){
var state_43001__$1 = state_43001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43035_46255 = state_43001__$1;
(statearr_43035_46255[(1)] = (8));

} else {
var statearr_43036_46256 = state_43001__$1;
(statearr_43036_46256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (14))){
var inst_42992 = (state_43001[(2)]);
var state_43001__$1 = state_43001;
var statearr_43040_46258 = state_43001__$1;
(statearr_43040_46258[(2)] = inst_42992);

(statearr_43040_46258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (10))){
var inst_42983 = (state_43001[(2)]);
var state_43001__$1 = state_43001;
var statearr_43041_46262 = state_43001__$1;
(statearr_43041_46262[(2)] = inst_42983);

(statearr_43041_46262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43002 === (8))){
var inst_42977 = cljs.core.async.close_BANG_(to);
var state_43001__$1 = state_43001;
var statearr_43042_46263 = state_43001__$1;
(statearr_43042_46263[(2)] = inst_42977);

(statearr_43042_46263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_43047 = [null,null,null,null,null,null,null,null];
(statearr_43047[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_43047[(1)] = (1));

return statearr_43047;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_43001){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43001);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43048){var ex__42403__auto__ = e43048;
var statearr_43049_46264 = state_43001;
(statearr_43049_46264[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43001[(4)]))){
var statearr_43051_46266 = state_43001;
(statearr_43051_46266[(1)] = cljs.core.first((state_43001[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46269 = state_43001;
state_43001 = G__46269;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_43001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_43001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43058 = f__42555__auto__();
(statearr_43058[(6)] = c__42554__auto___46231);

return statearr_43058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43069){
var vec__43070 = p__43069;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43070,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43070,(1),null);
var job = vec__43070;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42554__auto___46275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43077){
var state_val_43078 = (state_43077[(1)]);
if((state_val_43078 === (1))){
var state_43077__$1 = state_43077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43077__$1,(2),res,v);
} else {
if((state_val_43078 === (2))){
var inst_43074 = (state_43077[(2)]);
var inst_43075 = cljs.core.async.close_BANG_(res);
var state_43077__$1 = (function (){var statearr_43095 = state_43077;
(statearr_43095[(7)] = inst_43074);

return statearr_43095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43077__$1,inst_43075);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0 = (function (){
var statearr_43097 = [null,null,null,null,null,null,null,null];
(statearr_43097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__);

(statearr_43097[(1)] = (1));

return statearr_43097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1 = (function (state_43077){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43077);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43099){var ex__42403__auto__ = e43099;
var statearr_43100_46279 = state_43077;
(statearr_43100_46279[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43077[(4)]))){
var statearr_43101_46280 = state_43077;
(statearr_43101_46280[(1)] = cljs.core.first((state_43077[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46281 = state_43077;
state_43077 = G__46281;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = function(state_43077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1.call(this,state_43077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43106 = f__42555__auto__();
(statearr_43106[(6)] = c__42554__auto___46275);

return statearr_43106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43107){
var vec__43108 = p__43107;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43108,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43108,(1),null);
var job = vec__43108;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___46287 = n;
var __46288 = (0);
while(true){
if((__46288 < n__4613__auto___46287)){
var G__43112_46289 = type;
var G__43112_46290__$1 = (((G__43112_46289 instanceof cljs.core.Keyword))?G__43112_46289.fqn:null);
switch (G__43112_46290__$1) {
case "compute":
var c__42554__auto___46292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46288,c__42554__auto___46292,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async){
return (function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = ((function (__46288,c__42554__auto___46292,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async){
return (function (state_43126){
var state_val_43127 = (state_43126[(1)]);
if((state_val_43127 === (1))){
var state_43126__$1 = state_43126;
var statearr_43128_46294 = state_43126__$1;
(statearr_43128_46294[(2)] = null);

(statearr_43128_46294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43127 === (2))){
var state_43126__$1 = state_43126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43126__$1,(4),jobs);
} else {
if((state_val_43127 === (3))){
var inst_43124 = (state_43126[(2)]);
var state_43126__$1 = state_43126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43126__$1,inst_43124);
} else {
if((state_val_43127 === (4))){
var inst_43115 = (state_43126[(2)]);
var inst_43117 = process(inst_43115);
var state_43126__$1 = state_43126;
if(cljs.core.truth_(inst_43117)){
var statearr_43129_46300 = state_43126__$1;
(statearr_43129_46300[(1)] = (5));

} else {
var statearr_43130_46301 = state_43126__$1;
(statearr_43130_46301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43127 === (5))){
var state_43126__$1 = state_43126;
var statearr_43131_46302 = state_43126__$1;
(statearr_43131_46302[(2)] = null);

(statearr_43131_46302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43127 === (6))){
var state_43126__$1 = state_43126;
var statearr_43132_46303 = state_43126__$1;
(statearr_43132_46303[(2)] = null);

(statearr_43132_46303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43127 === (7))){
var inst_43122 = (state_43126[(2)]);
var state_43126__$1 = state_43126;
var statearr_43133_46309 = state_43126__$1;
(statearr_43133_46309[(2)] = inst_43122);

(statearr_43133_46309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46288,c__42554__auto___46292,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async))
;
return ((function (__46288,switch__42399__auto__,c__42554__auto___46292,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0 = (function (){
var statearr_43137 = [null,null,null,null,null,null,null];
(statearr_43137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__);

(statearr_43137[(1)] = (1));

return statearr_43137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1 = (function (state_43126){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43126);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43142){var ex__42403__auto__ = e43142;
var statearr_43146_46313 = state_43126;
(statearr_43146_46313[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43126[(4)]))){
var statearr_43147_46325 = state_43126;
(statearr_43147_46325[(1)] = cljs.core.first((state_43126[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46326 = state_43126;
state_43126 = G__46326;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = function(state_43126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1.call(this,state_43126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__;
})()
;})(__46288,switch__42399__auto__,c__42554__auto___46292,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async))
})();
var state__42556__auto__ = (function (){var statearr_43148 = f__42555__auto__();
(statearr_43148[(6)] = c__42554__auto___46292);

return statearr_43148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
});})(__46288,c__42554__auto___46292,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async))
);


break;
case "async":
var c__42554__auto___46329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46288,c__42554__auto___46329,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async){
return (function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = ((function (__46288,c__42554__auto___46329,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async){
return (function (state_43162){
var state_val_43163 = (state_43162[(1)]);
if((state_val_43163 === (1))){
var state_43162__$1 = state_43162;
var statearr_43170_46330 = state_43162__$1;
(statearr_43170_46330[(2)] = null);

(statearr_43170_46330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43163 === (2))){
var state_43162__$1 = state_43162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43162__$1,(4),jobs);
} else {
if((state_val_43163 === (3))){
var inst_43160 = (state_43162[(2)]);
var state_43162__$1 = state_43162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43162__$1,inst_43160);
} else {
if((state_val_43163 === (4))){
var inst_43151 = (state_43162[(2)]);
var inst_43152 = async(inst_43151);
var state_43162__$1 = state_43162;
if(cljs.core.truth_(inst_43152)){
var statearr_43172_46334 = state_43162__$1;
(statearr_43172_46334[(1)] = (5));

} else {
var statearr_43173_46335 = state_43162__$1;
(statearr_43173_46335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43163 === (5))){
var state_43162__$1 = state_43162;
var statearr_43177_46336 = state_43162__$1;
(statearr_43177_46336[(2)] = null);

(statearr_43177_46336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43163 === (6))){
var state_43162__$1 = state_43162;
var statearr_43178_46338 = state_43162__$1;
(statearr_43178_46338[(2)] = null);

(statearr_43178_46338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43163 === (7))){
var inst_43158 = (state_43162[(2)]);
var state_43162__$1 = state_43162;
var statearr_43179_46340 = state_43162__$1;
(statearr_43179_46340[(2)] = inst_43158);

(statearr_43179_46340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46288,c__42554__auto___46329,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async))
;
return ((function (__46288,switch__42399__auto__,c__42554__auto___46329,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0 = (function (){
var statearr_43180 = [null,null,null,null,null,null,null];
(statearr_43180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__);

(statearr_43180[(1)] = (1));

return statearr_43180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1 = (function (state_43162){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43162);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43184){var ex__42403__auto__ = e43184;
var statearr_43185_46345 = state_43162;
(statearr_43185_46345[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43162[(4)]))){
var statearr_43186_46346 = state_43162;
(statearr_43186_46346[(1)] = cljs.core.first((state_43162[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46347 = state_43162;
state_43162 = G__46347;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = function(state_43162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1.call(this,state_43162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__;
})()
;})(__46288,switch__42399__auto__,c__42554__auto___46329,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async))
})();
var state__42556__auto__ = (function (){var statearr_43189 = f__42555__auto__();
(statearr_43189[(6)] = c__42554__auto___46329);

return statearr_43189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
});})(__46288,c__42554__auto___46329,G__43112_46289,G__43112_46290__$1,n__4613__auto___46287,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43112_46290__$1)].join('')));

}

var G__46356 = (__46288 + (1));
__46288 = G__46356;
continue;
} else {
}
break;
}

var c__42554__auto___46357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43219){
var state_val_43220 = (state_43219[(1)]);
if((state_val_43220 === (7))){
var inst_43215 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
var statearr_43222_46358 = state_43219__$1;
(statearr_43222_46358[(2)] = inst_43215);

(statearr_43222_46358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (1))){
var state_43219__$1 = state_43219;
var statearr_43224_46359 = state_43219__$1;
(statearr_43224_46359[(2)] = null);

(statearr_43224_46359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (4))){
var inst_43195 = (state_43219[(7)]);
var inst_43195__$1 = (state_43219[(2)]);
var inst_43196 = (inst_43195__$1 == null);
var state_43219__$1 = (function (){var statearr_43225 = state_43219;
(statearr_43225[(7)] = inst_43195__$1);

return statearr_43225;
})();
if(cljs.core.truth_(inst_43196)){
var statearr_43226_46365 = state_43219__$1;
(statearr_43226_46365[(1)] = (5));

} else {
var statearr_43227_46366 = state_43219__$1;
(statearr_43227_46366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (6))){
var inst_43195 = (state_43219[(7)]);
var inst_43202 = (state_43219[(8)]);
var inst_43202__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43206 = [inst_43195,inst_43202__$1];
var inst_43207 = (new cljs.core.PersistentVector(null,2,(5),inst_43205,inst_43206,null));
var state_43219__$1 = (function (){var statearr_43231 = state_43219;
(statearr_43231[(8)] = inst_43202__$1);

return statearr_43231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43219__$1,(8),jobs,inst_43207);
} else {
if((state_val_43220 === (3))){
var inst_43217 = (state_43219[(2)]);
var state_43219__$1 = state_43219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43219__$1,inst_43217);
} else {
if((state_val_43220 === (2))){
var state_43219__$1 = state_43219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43219__$1,(4),from);
} else {
if((state_val_43220 === (9))){
var inst_43212 = (state_43219[(2)]);
var state_43219__$1 = (function (){var statearr_43232 = state_43219;
(statearr_43232[(9)] = inst_43212);

return statearr_43232;
})();
var statearr_43233_46371 = state_43219__$1;
(statearr_43233_46371[(2)] = null);

(statearr_43233_46371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (5))){
var inst_43198 = cljs.core.async.close_BANG_(jobs);
var state_43219__$1 = state_43219;
var statearr_43236_46372 = state_43219__$1;
(statearr_43236_46372[(2)] = inst_43198);

(statearr_43236_46372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43220 === (8))){
var inst_43202 = (state_43219[(8)]);
var inst_43209 = (state_43219[(2)]);
var state_43219__$1 = (function (){var statearr_43240 = state_43219;
(statearr_43240[(10)] = inst_43209);

return statearr_43240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43219__$1,(9),results,inst_43202);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0 = (function (){
var statearr_43242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__);

(statearr_43242[(1)] = (1));

return statearr_43242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1 = (function (state_43219){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43219);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43246){var ex__42403__auto__ = e43246;
var statearr_43247_46374 = state_43219;
(statearr_43247_46374[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43219[(4)]))){
var statearr_43248_46375 = state_43219;
(statearr_43248_46375[(1)] = cljs.core.first((state_43219[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46376 = state_43219;
state_43219 = G__46376;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = function(state_43219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1.call(this,state_43219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43253 = f__42555__auto__();
(statearr_43253[(6)] = c__42554__auto___46357);

return statearr_43253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


var c__42554__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43295){
var state_val_43298 = (state_43295[(1)]);
if((state_val_43298 === (7))){
var inst_43291 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43303_46379 = state_43295__$1;
(statearr_43303_46379[(2)] = inst_43291);

(statearr_43303_46379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (20))){
var state_43295__$1 = state_43295;
var statearr_43304_46380 = state_43295__$1;
(statearr_43304_46380[(2)] = null);

(statearr_43304_46380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (1))){
var state_43295__$1 = state_43295;
var statearr_43305_46381 = state_43295__$1;
(statearr_43305_46381[(2)] = null);

(statearr_43305_46381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (4))){
var inst_43257 = (state_43295[(7)]);
var inst_43257__$1 = (state_43295[(2)]);
var inst_43258 = (inst_43257__$1 == null);
var state_43295__$1 = (function (){var statearr_43306 = state_43295;
(statearr_43306[(7)] = inst_43257__$1);

return statearr_43306;
})();
if(cljs.core.truth_(inst_43258)){
var statearr_43307_46382 = state_43295__$1;
(statearr_43307_46382[(1)] = (5));

} else {
var statearr_43308_46383 = state_43295__$1;
(statearr_43308_46383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (15))){
var inst_43270 = (state_43295[(8)]);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43295__$1,(18),to,inst_43270);
} else {
if((state_val_43298 === (21))){
var inst_43286 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43309_46384 = state_43295__$1;
(statearr_43309_46384[(2)] = inst_43286);

(statearr_43309_46384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (13))){
var inst_43288 = (state_43295[(2)]);
var state_43295__$1 = (function (){var statearr_43310 = state_43295;
(statearr_43310[(9)] = inst_43288);

return statearr_43310;
})();
var statearr_43313_46385 = state_43295__$1;
(statearr_43313_46385[(2)] = null);

(statearr_43313_46385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (6))){
var inst_43257 = (state_43295[(7)]);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43295__$1,(11),inst_43257);
} else {
if((state_val_43298 === (17))){
var inst_43278 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
if(cljs.core.truth_(inst_43278)){
var statearr_43317_46393 = state_43295__$1;
(statearr_43317_46393[(1)] = (19));

} else {
var statearr_43319_46394 = state_43295__$1;
(statearr_43319_46394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (3))){
var inst_43293 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43295__$1,inst_43293);
} else {
if((state_val_43298 === (12))){
var inst_43267 = (state_43295[(10)]);
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43295__$1,(14),inst_43267);
} else {
if((state_val_43298 === (2))){
var state_43295__$1 = state_43295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43295__$1,(4),results);
} else {
if((state_val_43298 === (19))){
var state_43295__$1 = state_43295;
var statearr_43321_46409 = state_43295__$1;
(statearr_43321_46409[(2)] = null);

(statearr_43321_46409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (11))){
var inst_43267 = (state_43295[(2)]);
var state_43295__$1 = (function (){var statearr_43322 = state_43295;
(statearr_43322[(10)] = inst_43267);

return statearr_43322;
})();
var statearr_43323_46410 = state_43295__$1;
(statearr_43323_46410[(2)] = null);

(statearr_43323_46410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (9))){
var state_43295__$1 = state_43295;
var statearr_43328_46415 = state_43295__$1;
(statearr_43328_46415[(2)] = null);

(statearr_43328_46415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (5))){
var state_43295__$1 = state_43295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43331_46419 = state_43295__$1;
(statearr_43331_46419[(1)] = (8));

} else {
var statearr_43332_46420 = state_43295__$1;
(statearr_43332_46420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (14))){
var inst_43270 = (state_43295[(8)]);
var inst_43270__$1 = (state_43295[(2)]);
var inst_43271 = (inst_43270__$1 == null);
var inst_43272 = cljs.core.not(inst_43271);
var state_43295__$1 = (function (){var statearr_43335 = state_43295;
(statearr_43335[(8)] = inst_43270__$1);

return statearr_43335;
})();
if(inst_43272){
var statearr_43336_46421 = state_43295__$1;
(statearr_43336_46421[(1)] = (15));

} else {
var statearr_43337_46422 = state_43295__$1;
(statearr_43337_46422[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (16))){
var state_43295__$1 = state_43295;
var statearr_43338_46432 = state_43295__$1;
(statearr_43338_46432[(2)] = false);

(statearr_43338_46432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (10))){
var inst_43264 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43339_46433 = state_43295__$1;
(statearr_43339_46433[(2)] = inst_43264);

(statearr_43339_46433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (18))){
var inst_43275 = (state_43295[(2)]);
var state_43295__$1 = state_43295;
var statearr_43344_46434 = state_43295__$1;
(statearr_43344_46434[(2)] = inst_43275);

(statearr_43344_46434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43298 === (8))){
var inst_43261 = cljs.core.async.close_BANG_(to);
var state_43295__$1 = state_43295;
var statearr_43357_46438 = state_43295__$1;
(statearr_43357_46438[(2)] = inst_43261);

(statearr_43357_46438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0 = (function (){
var statearr_43366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__);

(statearr_43366[(1)] = (1));

return statearr_43366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1 = (function (state_43295){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43295);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43369){var ex__42403__auto__ = e43369;
var statearr_43370_46439 = state_43295;
(statearr_43370_46439[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43295[(4)]))){
var statearr_43376_46440 = state_43295;
(statearr_43376_46440[(1)] = cljs.core.first((state_43295[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46444 = state_43295;
state_43295 = G__46444;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__ = function(state_43295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1.call(this,state_43295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43380 = f__42555__auto__();
(statearr_43380[(6)] = c__42554__auto__);

return statearr_43380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));

return c__42554__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43392 = arguments.length;
switch (G__43392) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43401 = arguments.length;
switch (G__43401) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43411 = arguments.length;
switch (G__43411) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42554__auto___46454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43438){
var state_val_43439 = (state_43438[(1)]);
if((state_val_43439 === (7))){
var inst_43434 = (state_43438[(2)]);
var state_43438__$1 = state_43438;
var statearr_43441_46460 = state_43438__$1;
(statearr_43441_46460[(2)] = inst_43434);

(statearr_43441_46460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (1))){
var state_43438__$1 = state_43438;
var statearr_43442_46462 = state_43438__$1;
(statearr_43442_46462[(2)] = null);

(statearr_43442_46462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (4))){
var inst_43414 = (state_43438[(7)]);
var inst_43414__$1 = (state_43438[(2)]);
var inst_43415 = (inst_43414__$1 == null);
var state_43438__$1 = (function (){var statearr_43443 = state_43438;
(statearr_43443[(7)] = inst_43414__$1);

return statearr_43443;
})();
if(cljs.core.truth_(inst_43415)){
var statearr_43450_46467 = state_43438__$1;
(statearr_43450_46467[(1)] = (5));

} else {
var statearr_43454_46468 = state_43438__$1;
(statearr_43454_46468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (13))){
var state_43438__$1 = state_43438;
var statearr_43464_46469 = state_43438__$1;
(statearr_43464_46469[(2)] = null);

(statearr_43464_46469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (6))){
var inst_43414 = (state_43438[(7)]);
var inst_43420 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43414) : p.call(null,inst_43414));
var state_43438__$1 = state_43438;
if(cljs.core.truth_(inst_43420)){
var statearr_43480_46470 = state_43438__$1;
(statearr_43480_46470[(1)] = (9));

} else {
var statearr_43481_46471 = state_43438__$1;
(statearr_43481_46471[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (3))){
var inst_43436 = (state_43438[(2)]);
var state_43438__$1 = state_43438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43438__$1,inst_43436);
} else {
if((state_val_43439 === (12))){
var state_43438__$1 = state_43438;
var statearr_43482_46472 = state_43438__$1;
(statearr_43482_46472[(2)] = null);

(statearr_43482_46472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (2))){
var state_43438__$1 = state_43438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43438__$1,(4),ch);
} else {
if((state_val_43439 === (11))){
var inst_43414 = (state_43438[(7)]);
var inst_43425 = (state_43438[(2)]);
var state_43438__$1 = state_43438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43438__$1,(8),inst_43425,inst_43414);
} else {
if((state_val_43439 === (9))){
var state_43438__$1 = state_43438;
var statearr_43492_46473 = state_43438__$1;
(statearr_43492_46473[(2)] = tc);

(statearr_43492_46473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (5))){
var inst_43417 = cljs.core.async.close_BANG_(tc);
var inst_43418 = cljs.core.async.close_BANG_(fc);
var state_43438__$1 = (function (){var statearr_43494 = state_43438;
(statearr_43494[(8)] = inst_43417);

return statearr_43494;
})();
var statearr_43495_46478 = state_43438__$1;
(statearr_43495_46478[(2)] = inst_43418);

(statearr_43495_46478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (14))){
var inst_43432 = (state_43438[(2)]);
var state_43438__$1 = state_43438;
var statearr_43496_46482 = state_43438__$1;
(statearr_43496_46482[(2)] = inst_43432);

(statearr_43496_46482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (10))){
var state_43438__$1 = state_43438;
var statearr_43497_46487 = state_43438__$1;
(statearr_43497_46487[(2)] = fc);

(statearr_43497_46487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43439 === (8))){
var inst_43427 = (state_43438[(2)]);
var state_43438__$1 = state_43438;
if(cljs.core.truth_(inst_43427)){
var statearr_43499_46488 = state_43438__$1;
(statearr_43499_46488[(1)] = (12));

} else {
var statearr_43501_46489 = state_43438__$1;
(statearr_43501_46489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_43503 = [null,null,null,null,null,null,null,null,null];
(statearr_43503[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_43503[(1)] = (1));

return statearr_43503;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_43438){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43438);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43504){var ex__42403__auto__ = e43504;
var statearr_43505_46494 = state_43438;
(statearr_43505_46494[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43438[(4)]))){
var statearr_43509_46495 = state_43438;
(statearr_43509_46495[(1)] = cljs.core.first((state_43438[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46496 = state_43438;
state_43438 = G__46496;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_43438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_43438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43511 = f__42555__auto__();
(statearr_43511[(6)] = c__42554__auto___46454);

return statearr_43511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42554__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43541){
var state_val_43542 = (state_43541[(1)]);
if((state_val_43542 === (7))){
var inst_43536 = (state_43541[(2)]);
var state_43541__$1 = state_43541;
var statearr_43544_46506 = state_43541__$1;
(statearr_43544_46506[(2)] = inst_43536);

(statearr_43544_46506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43542 === (1))){
var inst_43519 = init;
var inst_43520 = inst_43519;
var state_43541__$1 = (function (){var statearr_43545 = state_43541;
(statearr_43545[(7)] = inst_43520);

return statearr_43545;
})();
var statearr_43546_46507 = state_43541__$1;
(statearr_43546_46507[(2)] = null);

(statearr_43546_46507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43542 === (4))){
var inst_43523 = (state_43541[(8)]);
var inst_43523__$1 = (state_43541[(2)]);
var inst_43524 = (inst_43523__$1 == null);
var state_43541__$1 = (function (){var statearr_43547 = state_43541;
(statearr_43547[(8)] = inst_43523__$1);

return statearr_43547;
})();
if(cljs.core.truth_(inst_43524)){
var statearr_43548_46509 = state_43541__$1;
(statearr_43548_46509[(1)] = (5));

} else {
var statearr_43552_46510 = state_43541__$1;
(statearr_43552_46510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43542 === (6))){
var inst_43527 = (state_43541[(9)]);
var inst_43520 = (state_43541[(7)]);
var inst_43523 = (state_43541[(8)]);
var inst_43527__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43520,inst_43523) : f.call(null,inst_43520,inst_43523));
var inst_43528 = cljs.core.reduced_QMARK_(inst_43527__$1);
var state_43541__$1 = (function (){var statearr_43556 = state_43541;
(statearr_43556[(9)] = inst_43527__$1);

return statearr_43556;
})();
if(inst_43528){
var statearr_43557_46515 = state_43541__$1;
(statearr_43557_46515[(1)] = (8));

} else {
var statearr_43558_46516 = state_43541__$1;
(statearr_43558_46516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43542 === (3))){
var inst_43538 = (state_43541[(2)]);
var state_43541__$1 = state_43541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43541__$1,inst_43538);
} else {
if((state_val_43542 === (2))){
var state_43541__$1 = state_43541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43541__$1,(4),ch);
} else {
if((state_val_43542 === (9))){
var inst_43527 = (state_43541[(9)]);
var inst_43520 = inst_43527;
var state_43541__$1 = (function (){var statearr_43559 = state_43541;
(statearr_43559[(7)] = inst_43520);

return statearr_43559;
})();
var statearr_43561_46521 = state_43541__$1;
(statearr_43561_46521[(2)] = null);

(statearr_43561_46521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43542 === (5))){
var inst_43520 = (state_43541[(7)]);
var state_43541__$1 = state_43541;
var statearr_43562_46523 = state_43541__$1;
(statearr_43562_46523[(2)] = inst_43520);

(statearr_43562_46523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43542 === (10))){
var inst_43534 = (state_43541[(2)]);
var state_43541__$1 = state_43541;
var statearr_43563_46530 = state_43541__$1;
(statearr_43563_46530[(2)] = inst_43534);

(statearr_43563_46530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43542 === (8))){
var inst_43527 = (state_43541[(9)]);
var inst_43530 = cljs.core.deref(inst_43527);
var state_43541__$1 = state_43541;
var statearr_43564_46533 = state_43541__$1;
(statearr_43564_46533[(2)] = inst_43530);

(statearr_43564_46533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42400__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42400__auto____0 = (function (){
var statearr_43566 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43566[(0)] = cljs$core$async$reduce_$_state_machine__42400__auto__);

(statearr_43566[(1)] = (1));

return statearr_43566;
});
var cljs$core$async$reduce_$_state_machine__42400__auto____1 = (function (state_43541){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43541);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43567){var ex__42403__auto__ = e43567;
var statearr_43568_46543 = state_43541;
(statearr_43568_46543[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43541[(4)]))){
var statearr_43569_46544 = state_43541;
(statearr_43569_46544[(1)] = cljs.core.first((state_43541[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46551 = state_43541;
state_43541 = G__46551;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42400__auto__ = function(state_43541){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42400__auto____1.call(this,state_43541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42400__auto____0;
cljs$core$async$reduce_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42400__auto____1;
return cljs$core$async$reduce_$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43571 = f__42555__auto__();
(statearr_43571[(6)] = c__42554__auto__);

return statearr_43571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));

return c__42554__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42554__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43581){
var state_val_43582 = (state_43581[(1)]);
if((state_val_43582 === (1))){
var inst_43576 = cljs.core.async.reduce(f__$1,init,ch);
var state_43581__$1 = state_43581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43581__$1,(2),inst_43576);
} else {
if((state_val_43582 === (2))){
var inst_43578 = (state_43581[(2)]);
var inst_43579 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43578) : f__$1.call(null,inst_43578));
var state_43581__$1 = state_43581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43581__$1,inst_43579);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42400__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42400__auto____0 = (function (){
var statearr_43588 = [null,null,null,null,null,null,null];
(statearr_43588[(0)] = cljs$core$async$transduce_$_state_machine__42400__auto__);

(statearr_43588[(1)] = (1));

return statearr_43588;
});
var cljs$core$async$transduce_$_state_machine__42400__auto____1 = (function (state_43581){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43581);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43589){var ex__42403__auto__ = e43589;
var statearr_43592_46555 = state_43581;
(statearr_43592_46555[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43581[(4)]))){
var statearr_43593_46556 = state_43581;
(statearr_43593_46556[(1)] = cljs.core.first((state_43581[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46557 = state_43581;
state_43581 = G__46557;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42400__auto__ = function(state_43581){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42400__auto____1.call(this,state_43581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42400__auto____0;
cljs$core$async$transduce_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42400__auto____1;
return cljs$core$async$transduce_$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43595 = f__42555__auto__();
(statearr_43595[(6)] = c__42554__auto__);

return statearr_43595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));

return c__42554__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__43599 = arguments.length;
switch (G__43599) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42554__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43633){
var state_val_43634 = (state_43633[(1)]);
if((state_val_43634 === (7))){
var inst_43609 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
var statearr_43635_46563 = state_43633__$1;
(statearr_43635_46563[(2)] = inst_43609);

(statearr_43635_46563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (1))){
var inst_43603 = cljs.core.seq(coll);
var inst_43604 = inst_43603;
var state_43633__$1 = (function (){var statearr_43636 = state_43633;
(statearr_43636[(7)] = inst_43604);

return statearr_43636;
})();
var statearr_43637_46570 = state_43633__$1;
(statearr_43637_46570[(2)] = null);

(statearr_43637_46570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (4))){
var inst_43604 = (state_43633[(7)]);
var inst_43607 = cljs.core.first(inst_43604);
var state_43633__$1 = state_43633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43633__$1,(7),ch,inst_43607);
} else {
if((state_val_43634 === (13))){
var inst_43627 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
var statearr_43638_46572 = state_43633__$1;
(statearr_43638_46572[(2)] = inst_43627);

(statearr_43638_46572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (6))){
var inst_43613 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
if(cljs.core.truth_(inst_43613)){
var statearr_43639_46573 = state_43633__$1;
(statearr_43639_46573[(1)] = (8));

} else {
var statearr_43640_46574 = state_43633__$1;
(statearr_43640_46574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (3))){
var inst_43631 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43633__$1,inst_43631);
} else {
if((state_val_43634 === (12))){
var state_43633__$1 = state_43633;
var statearr_43641_46581 = state_43633__$1;
(statearr_43641_46581[(2)] = null);

(statearr_43641_46581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (2))){
var inst_43604 = (state_43633[(7)]);
var state_43633__$1 = state_43633;
if(cljs.core.truth_(inst_43604)){
var statearr_43642_46582 = state_43633__$1;
(statearr_43642_46582[(1)] = (4));

} else {
var statearr_43643_46583 = state_43633__$1;
(statearr_43643_46583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (11))){
var inst_43624 = cljs.core.async.close_BANG_(ch);
var state_43633__$1 = state_43633;
var statearr_43644_46585 = state_43633__$1;
(statearr_43644_46585[(2)] = inst_43624);

(statearr_43644_46585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (9))){
var state_43633__$1 = state_43633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43646_46586 = state_43633__$1;
(statearr_43646_46586[(1)] = (11));

} else {
var statearr_43647_46587 = state_43633__$1;
(statearr_43647_46587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (5))){
var inst_43604 = (state_43633[(7)]);
var state_43633__$1 = state_43633;
var statearr_43648_46588 = state_43633__$1;
(statearr_43648_46588[(2)] = inst_43604);

(statearr_43648_46588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (10))){
var inst_43629 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
var statearr_43649_46590 = state_43633__$1;
(statearr_43649_46590[(2)] = inst_43629);

(statearr_43649_46590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (8))){
var inst_43604 = (state_43633[(7)]);
var inst_43620 = cljs.core.next(inst_43604);
var inst_43604__$1 = inst_43620;
var state_43633__$1 = (function (){var statearr_43650 = state_43633;
(statearr_43650[(7)] = inst_43604__$1);

return statearr_43650;
})();
var statearr_43652_46593 = state_43633__$1;
(statearr_43652_46593[(2)] = null);

(statearr_43652_46593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_43653 = [null,null,null,null,null,null,null,null];
(statearr_43653[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_43653[(1)] = (1));

return statearr_43653;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_43633){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43633);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e43654){var ex__42403__auto__ = e43654;
var statearr_43655_46594 = state_43633;
(statearr_43655_46594[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43633[(4)]))){
var statearr_43657_46597 = state_43633;
(statearr_43657_46597[(1)] = cljs.core.first((state_43633[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46599 = state_43633;
state_43633 = G__46599;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_43633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_43633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_43658 = f__42555__auto__();
(statearr_43658[(6)] = c__42554__auto__);

return statearr_43658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));

return c__42554__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43667 = arguments.length;
switch (G__43667) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_46611 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_46611(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46612 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_46612(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46613 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_46613(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46622 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_46622(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43691 = (function (ch,cs,meta43692){
this.ch = ch;
this.cs = cs;
this.meta43692 = meta43692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43693,meta43692__$1){
var self__ = this;
var _43693__$1 = this;
return (new cljs.core.async.t_cljs$core$async43691(self__.ch,self__.cs,meta43692__$1));
}));

(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43693){
var self__ = this;
var _43693__$1 = this;
return self__.meta43692;
}));

(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43691.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43692","meta43692",-1686853553,null)], null);
}));

(cljs.core.async.t_cljs$core$async43691.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43691");

(cljs.core.async.t_cljs$core$async43691.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43691");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43691.
 */
cljs.core.async.__GT_t_cljs$core$async43691 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43691(ch__$1,cs__$1,meta43692){
return (new cljs.core.async.t_cljs$core$async43691(ch__$1,cs__$1,meta43692));
});

}

return (new cljs.core.async.t_cljs$core$async43691(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42554__auto___46645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_43870){
var state_val_43871 = (state_43870[(1)]);
if((state_val_43871 === (7))){
var inst_43865 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_43876_46646 = state_43870__$1;
(statearr_43876_46646[(2)] = inst_43865);

(statearr_43876_46646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (20))){
var inst_43744 = (state_43870[(7)]);
var inst_43756 = cljs.core.first(inst_43744);
var inst_43757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43756,(0),null);
var inst_43758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43756,(1),null);
var state_43870__$1 = (function (){var statearr_43890 = state_43870;
(statearr_43890[(8)] = inst_43757);

return statearr_43890;
})();
if(cljs.core.truth_(inst_43758)){
var statearr_43893_46648 = state_43870__$1;
(statearr_43893_46648[(1)] = (22));

} else {
var statearr_43896_46649 = state_43870__$1;
(statearr_43896_46649[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (27))){
var inst_43797 = (state_43870[(9)]);
var inst_43790 = (state_43870[(10)]);
var inst_43709 = (state_43870[(11)]);
var inst_43792 = (state_43870[(12)]);
var inst_43797__$1 = cljs.core._nth(inst_43790,inst_43792);
var inst_43800 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43797__$1,inst_43709,done);
var state_43870__$1 = (function (){var statearr_43901 = state_43870;
(statearr_43901[(9)] = inst_43797__$1);

return statearr_43901;
})();
if(cljs.core.truth_(inst_43800)){
var statearr_43902_46661 = state_43870__$1;
(statearr_43902_46661[(1)] = (30));

} else {
var statearr_43903_46666 = state_43870__$1;
(statearr_43903_46666[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (1))){
var state_43870__$1 = state_43870;
var statearr_43908_46688 = state_43870__$1;
(statearr_43908_46688[(2)] = null);

(statearr_43908_46688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (24))){
var inst_43744 = (state_43870[(7)]);
var inst_43763 = (state_43870[(2)]);
var inst_43764 = cljs.core.next(inst_43744);
var inst_43719 = inst_43764;
var inst_43720 = null;
var inst_43721 = (0);
var inst_43722 = (0);
var state_43870__$1 = (function (){var statearr_43913 = state_43870;
(statearr_43913[(13)] = inst_43722);

(statearr_43913[(14)] = inst_43763);

(statearr_43913[(15)] = inst_43720);

(statearr_43913[(16)] = inst_43721);

(statearr_43913[(17)] = inst_43719);

return statearr_43913;
})();
var statearr_43915_46691 = state_43870__$1;
(statearr_43915_46691[(2)] = null);

(statearr_43915_46691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (39))){
var state_43870__$1 = state_43870;
var statearr_43919_46694 = state_43870__$1;
(statearr_43919_46694[(2)] = null);

(statearr_43919_46694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (4))){
var inst_43709 = (state_43870[(11)]);
var inst_43709__$1 = (state_43870[(2)]);
var inst_43711 = (inst_43709__$1 == null);
var state_43870__$1 = (function (){var statearr_43922 = state_43870;
(statearr_43922[(11)] = inst_43709__$1);

return statearr_43922;
})();
if(cljs.core.truth_(inst_43711)){
var statearr_43925_46695 = state_43870__$1;
(statearr_43925_46695[(1)] = (5));

} else {
var statearr_43928_46697 = state_43870__$1;
(statearr_43928_46697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (15))){
var inst_43722 = (state_43870[(13)]);
var inst_43720 = (state_43870[(15)]);
var inst_43721 = (state_43870[(16)]);
var inst_43719 = (state_43870[(17)]);
var inst_43740 = (state_43870[(2)]);
var inst_43741 = (inst_43722 + (1));
var tmp43916 = inst_43720;
var tmp43917 = inst_43721;
var tmp43918 = inst_43719;
var inst_43719__$1 = tmp43918;
var inst_43720__$1 = tmp43916;
var inst_43721__$1 = tmp43917;
var inst_43722__$1 = inst_43741;
var state_43870__$1 = (function (){var statearr_43933 = state_43870;
(statearr_43933[(18)] = inst_43740);

(statearr_43933[(13)] = inst_43722__$1);

(statearr_43933[(15)] = inst_43720__$1);

(statearr_43933[(16)] = inst_43721__$1);

(statearr_43933[(17)] = inst_43719__$1);

return statearr_43933;
})();
var statearr_43936_46705 = state_43870__$1;
(statearr_43936_46705[(2)] = null);

(statearr_43936_46705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (21))){
var inst_43767 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_43940_46706 = state_43870__$1;
(statearr_43940_46706[(2)] = inst_43767);

(statearr_43940_46706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (31))){
var inst_43797 = (state_43870[(9)]);
var inst_43803 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43797);
var state_43870__$1 = state_43870;
var statearr_43946_46707 = state_43870__$1;
(statearr_43946_46707[(2)] = inst_43803);

(statearr_43946_46707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (32))){
var inst_43790 = (state_43870[(10)]);
var inst_43792 = (state_43870[(12)]);
var inst_43791 = (state_43870[(19)]);
var inst_43789 = (state_43870[(20)]);
var inst_43805 = (state_43870[(2)]);
var inst_43809 = (inst_43792 + (1));
var tmp43937 = inst_43790;
var tmp43938 = inst_43791;
var tmp43939 = inst_43789;
var inst_43789__$1 = tmp43939;
var inst_43790__$1 = tmp43937;
var inst_43791__$1 = tmp43938;
var inst_43792__$1 = inst_43809;
var state_43870__$1 = (function (){var statearr_43950 = state_43870;
(statearr_43950[(10)] = inst_43790__$1);

(statearr_43950[(12)] = inst_43792__$1);

(statearr_43950[(21)] = inst_43805);

(statearr_43950[(19)] = inst_43791__$1);

(statearr_43950[(20)] = inst_43789__$1);

return statearr_43950;
})();
var statearr_43951_46712 = state_43870__$1;
(statearr_43951_46712[(2)] = null);

(statearr_43951_46712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (40))){
var inst_43832 = (state_43870[(22)]);
var inst_43836 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43832);
var state_43870__$1 = state_43870;
var statearr_43952_46714 = state_43870__$1;
(statearr_43952_46714[(2)] = inst_43836);

(statearr_43952_46714[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (33))){
var inst_43820 = (state_43870[(23)]);
var inst_43822 = cljs.core.chunked_seq_QMARK_(inst_43820);
var state_43870__$1 = state_43870;
if(inst_43822){
var statearr_43956_46715 = state_43870__$1;
(statearr_43956_46715[(1)] = (36));

} else {
var statearr_43957_46716 = state_43870__$1;
(statearr_43957_46716[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (13))){
var inst_43733 = (state_43870[(24)]);
var inst_43737 = cljs.core.async.close_BANG_(inst_43733);
var state_43870__$1 = state_43870;
var statearr_43958_46717 = state_43870__$1;
(statearr_43958_46717[(2)] = inst_43737);

(statearr_43958_46717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (22))){
var inst_43757 = (state_43870[(8)]);
var inst_43760 = cljs.core.async.close_BANG_(inst_43757);
var state_43870__$1 = state_43870;
var statearr_43959_46718 = state_43870__$1;
(statearr_43959_46718[(2)] = inst_43760);

(statearr_43959_46718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (36))){
var inst_43820 = (state_43870[(23)]);
var inst_43825 = cljs.core.chunk_first(inst_43820);
var inst_43827 = cljs.core.chunk_rest(inst_43820);
var inst_43828 = cljs.core.count(inst_43825);
var inst_43789 = inst_43827;
var inst_43790 = inst_43825;
var inst_43791 = inst_43828;
var inst_43792 = (0);
var state_43870__$1 = (function (){var statearr_43961 = state_43870;
(statearr_43961[(10)] = inst_43790);

(statearr_43961[(12)] = inst_43792);

(statearr_43961[(19)] = inst_43791);

(statearr_43961[(20)] = inst_43789);

return statearr_43961;
})();
var statearr_43962_46719 = state_43870__$1;
(statearr_43962_46719[(2)] = null);

(statearr_43962_46719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (41))){
var inst_43820 = (state_43870[(23)]);
var inst_43838 = (state_43870[(2)]);
var inst_43839 = cljs.core.next(inst_43820);
var inst_43789 = inst_43839;
var inst_43790 = null;
var inst_43791 = (0);
var inst_43792 = (0);
var state_43870__$1 = (function (){var statearr_43969 = state_43870;
(statearr_43969[(10)] = inst_43790);

(statearr_43969[(12)] = inst_43792);

(statearr_43969[(25)] = inst_43838);

(statearr_43969[(19)] = inst_43791);

(statearr_43969[(20)] = inst_43789);

return statearr_43969;
})();
var statearr_43972_46720 = state_43870__$1;
(statearr_43972_46720[(2)] = null);

(statearr_43972_46720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (43))){
var state_43870__$1 = state_43870;
var statearr_43973_46721 = state_43870__$1;
(statearr_43973_46721[(2)] = null);

(statearr_43973_46721[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (29))){
var inst_43847 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_43978_46722 = state_43870__$1;
(statearr_43978_46722[(2)] = inst_43847);

(statearr_43978_46722[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (44))){
var inst_43862 = (state_43870[(2)]);
var state_43870__$1 = (function (){var statearr_43985 = state_43870;
(statearr_43985[(26)] = inst_43862);

return statearr_43985;
})();
var statearr_43994_46724 = state_43870__$1;
(statearr_43994_46724[(2)] = null);

(statearr_43994_46724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (6))){
var inst_43777 = (state_43870[(27)]);
var inst_43776 = cljs.core.deref(cs);
var inst_43777__$1 = cljs.core.keys(inst_43776);
var inst_43778 = cljs.core.count(inst_43777__$1);
var inst_43779 = cljs.core.reset_BANG_(dctr,inst_43778);
var inst_43784 = cljs.core.seq(inst_43777__$1);
var inst_43789 = inst_43784;
var inst_43790 = null;
var inst_43791 = (0);
var inst_43792 = (0);
var state_43870__$1 = (function (){var statearr_44002 = state_43870;
(statearr_44002[(27)] = inst_43777__$1);

(statearr_44002[(28)] = inst_43779);

(statearr_44002[(10)] = inst_43790);

(statearr_44002[(12)] = inst_43792);

(statearr_44002[(19)] = inst_43791);

(statearr_44002[(20)] = inst_43789);

return statearr_44002;
})();
var statearr_44003_46728 = state_43870__$1;
(statearr_44003_46728[(2)] = null);

(statearr_44003_46728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (28))){
var inst_43820 = (state_43870[(23)]);
var inst_43789 = (state_43870[(20)]);
var inst_43820__$1 = cljs.core.seq(inst_43789);
var state_43870__$1 = (function (){var statearr_44004 = state_43870;
(statearr_44004[(23)] = inst_43820__$1);

return statearr_44004;
})();
if(inst_43820__$1){
var statearr_44005_46730 = state_43870__$1;
(statearr_44005_46730[(1)] = (33));

} else {
var statearr_44006_46733 = state_43870__$1;
(statearr_44006_46733[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (25))){
var inst_43792 = (state_43870[(12)]);
var inst_43791 = (state_43870[(19)]);
var inst_43794 = (inst_43792 < inst_43791);
var inst_43795 = inst_43794;
var state_43870__$1 = state_43870;
if(cljs.core.truth_(inst_43795)){
var statearr_44008_46741 = state_43870__$1;
(statearr_44008_46741[(1)] = (27));

} else {
var statearr_44009_46742 = state_43870__$1;
(statearr_44009_46742[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (34))){
var state_43870__$1 = state_43870;
var statearr_44013_46743 = state_43870__$1;
(statearr_44013_46743[(2)] = null);

(statearr_44013_46743[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (17))){
var state_43870__$1 = state_43870;
var statearr_44014_46745 = state_43870__$1;
(statearr_44014_46745[(2)] = null);

(statearr_44014_46745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (3))){
var inst_43867 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43870__$1,inst_43867);
} else {
if((state_val_43871 === (12))){
var inst_43772 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_44015_46746 = state_43870__$1;
(statearr_44015_46746[(2)] = inst_43772);

(statearr_44015_46746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (2))){
var state_43870__$1 = state_43870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43870__$1,(4),ch);
} else {
if((state_val_43871 === (23))){
var state_43870__$1 = state_43870;
var statearr_44016_46748 = state_43870__$1;
(statearr_44016_46748[(2)] = null);

(statearr_44016_46748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (35))){
var inst_43845 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_44022_46751 = state_43870__$1;
(statearr_44022_46751[(2)] = inst_43845);

(statearr_44022_46751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (19))){
var inst_43744 = (state_43870[(7)]);
var inst_43748 = cljs.core.chunk_first(inst_43744);
var inst_43749 = cljs.core.chunk_rest(inst_43744);
var inst_43750 = cljs.core.count(inst_43748);
var inst_43719 = inst_43749;
var inst_43720 = inst_43748;
var inst_43721 = inst_43750;
var inst_43722 = (0);
var state_43870__$1 = (function (){var statearr_44031 = state_43870;
(statearr_44031[(13)] = inst_43722);

(statearr_44031[(15)] = inst_43720);

(statearr_44031[(16)] = inst_43721);

(statearr_44031[(17)] = inst_43719);

return statearr_44031;
})();
var statearr_44032_46757 = state_43870__$1;
(statearr_44032_46757[(2)] = null);

(statearr_44032_46757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (11))){
var inst_43744 = (state_43870[(7)]);
var inst_43719 = (state_43870[(17)]);
var inst_43744__$1 = cljs.core.seq(inst_43719);
var state_43870__$1 = (function (){var statearr_44033 = state_43870;
(statearr_44033[(7)] = inst_43744__$1);

return statearr_44033;
})();
if(inst_43744__$1){
var statearr_44040_46759 = state_43870__$1;
(statearr_44040_46759[(1)] = (16));

} else {
var statearr_44046_46760 = state_43870__$1;
(statearr_44046_46760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (9))){
var inst_43774 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_44047_46761 = state_43870__$1;
(statearr_44047_46761[(2)] = inst_43774);

(statearr_44047_46761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (5))){
var inst_43717 = cljs.core.deref(cs);
var inst_43718 = cljs.core.seq(inst_43717);
var inst_43719 = inst_43718;
var inst_43720 = null;
var inst_43721 = (0);
var inst_43722 = (0);
var state_43870__$1 = (function (){var statearr_44050 = state_43870;
(statearr_44050[(13)] = inst_43722);

(statearr_44050[(15)] = inst_43720);

(statearr_44050[(16)] = inst_43721);

(statearr_44050[(17)] = inst_43719);

return statearr_44050;
})();
var statearr_44053_46770 = state_43870__$1;
(statearr_44053_46770[(2)] = null);

(statearr_44053_46770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (14))){
var state_43870__$1 = state_43870;
var statearr_44055_46771 = state_43870__$1;
(statearr_44055_46771[(2)] = null);

(statearr_44055_46771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (45))){
var inst_43859 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_44072_46773 = state_43870__$1;
(statearr_44072_46773[(2)] = inst_43859);

(statearr_44072_46773[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (26))){
var inst_43777 = (state_43870[(27)]);
var inst_43849 = (state_43870[(2)]);
var inst_43850 = cljs.core.seq(inst_43777);
var state_43870__$1 = (function (){var statearr_44076 = state_43870;
(statearr_44076[(29)] = inst_43849);

return statearr_44076;
})();
if(inst_43850){
var statearr_44077_46774 = state_43870__$1;
(statearr_44077_46774[(1)] = (42));

} else {
var statearr_44082_46775 = state_43870__$1;
(statearr_44082_46775[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (16))){
var inst_43744 = (state_43870[(7)]);
var inst_43746 = cljs.core.chunked_seq_QMARK_(inst_43744);
var state_43870__$1 = state_43870;
if(inst_43746){
var statearr_44083_46780 = state_43870__$1;
(statearr_44083_46780[(1)] = (19));

} else {
var statearr_44084_46785 = state_43870__$1;
(statearr_44084_46785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (38))){
var inst_43842 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_44085_46786 = state_43870__$1;
(statearr_44085_46786[(2)] = inst_43842);

(statearr_44085_46786[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (30))){
var state_43870__$1 = state_43870;
var statearr_44088_46787 = state_43870__$1;
(statearr_44088_46787[(2)] = null);

(statearr_44088_46787[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (10))){
var inst_43722 = (state_43870[(13)]);
var inst_43720 = (state_43870[(15)]);
var inst_43732 = cljs.core._nth(inst_43720,inst_43722);
var inst_43733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43732,(0),null);
var inst_43734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43732,(1),null);
var state_43870__$1 = (function (){var statearr_44093 = state_43870;
(statearr_44093[(24)] = inst_43733);

return statearr_44093;
})();
if(cljs.core.truth_(inst_43734)){
var statearr_44094_46795 = state_43870__$1;
(statearr_44094_46795[(1)] = (13));

} else {
var statearr_44095_46796 = state_43870__$1;
(statearr_44095_46796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (18))){
var inst_43770 = (state_43870[(2)]);
var state_43870__$1 = state_43870;
var statearr_44099_46797 = state_43870__$1;
(statearr_44099_46797[(2)] = inst_43770);

(statearr_44099_46797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (42))){
var state_43870__$1 = state_43870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43870__$1,(45),dchan);
} else {
if((state_val_43871 === (37))){
var inst_43709 = (state_43870[(11)]);
var inst_43820 = (state_43870[(23)]);
var inst_43832 = (state_43870[(22)]);
var inst_43832__$1 = cljs.core.first(inst_43820);
var inst_43833 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43832__$1,inst_43709,done);
var state_43870__$1 = (function (){var statearr_44107 = state_43870;
(statearr_44107[(22)] = inst_43832__$1);

return statearr_44107;
})();
if(cljs.core.truth_(inst_43833)){
var statearr_44108_46798 = state_43870__$1;
(statearr_44108_46798[(1)] = (39));

} else {
var statearr_44118_46799 = state_43870__$1;
(statearr_44118_46799[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43871 === (8))){
var inst_43722 = (state_43870[(13)]);
var inst_43721 = (state_43870[(16)]);
var inst_43725 = (inst_43722 < inst_43721);
var inst_43726 = inst_43725;
var state_43870__$1 = state_43870;
if(cljs.core.truth_(inst_43726)){
var statearr_44119_46807 = state_43870__$1;
(statearr_44119_46807[(1)] = (10));

} else {
var statearr_44120_46808 = state_43870__$1;
(statearr_44120_46808[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__42400__auto__ = null;
var cljs$core$async$mult_$_state_machine__42400__auto____0 = (function (){
var statearr_44127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44127[(0)] = cljs$core$async$mult_$_state_machine__42400__auto__);

(statearr_44127[(1)] = (1));

return statearr_44127;
});
var cljs$core$async$mult_$_state_machine__42400__auto____1 = (function (state_43870){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_43870);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e44129){var ex__42403__auto__ = e44129;
var statearr_44130_46816 = state_43870;
(statearr_44130_46816[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_43870[(4)]))){
var statearr_44134_46820 = state_43870;
(statearr_44134_46820[(1)] = cljs.core.first((state_43870[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46821 = state_43870;
state_43870 = G__46821;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42400__auto__ = function(state_43870){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42400__auto____1.call(this,state_43870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42400__auto____0;
cljs$core$async$mult_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42400__auto____1;
return cljs$core$async$mult_$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_44137 = f__42555__auto__();
(statearr_44137[(6)] = c__42554__auto___46645);

return statearr_44137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44141 = arguments.length;
switch (G__44141) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_46824 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46824(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46828 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46828(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46833 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46833(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46839 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46839(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46847 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46847(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46884 = arguments.length;
var i__4737__auto___46885 = (0);
while(true){
if((i__4737__auto___46885 < len__4736__auto___46884)){
args__4742__auto__.push((arguments[i__4737__auto___46885]));

var G__46886 = (i__4737__auto___46885 + (1));
i__4737__auto___46885 = G__46886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44173){
var map__44174 = p__44173;
var map__44174__$1 = (((((!((map__44174 == null))))?(((((map__44174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44174):map__44174);
var opts = map__44174__$1;
var statearr_44176_46898 = state;
(statearr_44176_46898[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44191_46902 = state;
(statearr_44191_46902[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_44199_46904 = state;
(statearr_44199_46904[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44169){
var G__44170 = cljs.core.first(seq44169);
var seq44169__$1 = cljs.core.next(seq44169);
var G__44171 = cljs.core.first(seq44169__$1);
var seq44169__$2 = cljs.core.next(seq44169__$1);
var G__44172 = cljs.core.first(seq44169__$2);
var seq44169__$3 = cljs.core.next(seq44169__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44170,G__44171,G__44172,seq44169__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44236 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44237){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44237 = meta44237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44238,meta44237__$1){
var self__ = this;
var _44238__$1 = this;
return (new cljs.core.async.t_cljs$core$async44236(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44237__$1));
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44238){
var self__ = this;
var _44238__$1 = this;
return self__.meta44237;
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44237","meta44237",-1153094070,null)], null);
}));

(cljs.core.async.t_cljs$core$async44236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44236");

(cljs.core.async.t_cljs$core$async44236.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44236.
 */
cljs.core.async.__GT_t_cljs$core$async44236 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44236(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44237){
return (new cljs.core.async.t_cljs$core$async44236(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44237));
});

}

return (new cljs.core.async.t_cljs$core$async44236(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42554__auto___46952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_44370){
var state_val_44371 = (state_44370[(1)]);
if((state_val_44371 === (7))){
var inst_44276 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44376_46958 = state_44370__$1;
(statearr_44376_46958[(2)] = inst_44276);

(statearr_44376_46958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (20))){
var inst_44288 = (state_44370[(7)]);
var state_44370__$1 = state_44370;
var statearr_44377_46964 = state_44370__$1;
(statearr_44377_46964[(2)] = inst_44288);

(statearr_44377_46964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (27))){
var state_44370__$1 = state_44370;
var statearr_44378_46965 = state_44370__$1;
(statearr_44378_46965[(2)] = null);

(statearr_44378_46965[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (1))){
var inst_44263 = (state_44370[(8)]);
var inst_44263__$1 = calc_state();
var inst_44265 = (inst_44263__$1 == null);
var inst_44266 = cljs.core.not(inst_44265);
var state_44370__$1 = (function (){var statearr_44379 = state_44370;
(statearr_44379[(8)] = inst_44263__$1);

return statearr_44379;
})();
if(inst_44266){
var statearr_44380_46968 = state_44370__$1;
(statearr_44380_46968[(1)] = (2));

} else {
var statearr_44381_46969 = state_44370__$1;
(statearr_44381_46969[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (24))){
var inst_44312 = (state_44370[(9)]);
var inst_44335 = (state_44370[(10)]);
var inst_44321 = (state_44370[(11)]);
var inst_44335__$1 = (inst_44312.cljs$core$IFn$_invoke$arity$1 ? inst_44312.cljs$core$IFn$_invoke$arity$1(inst_44321) : inst_44312.call(null,inst_44321));
var state_44370__$1 = (function (){var statearr_44382 = state_44370;
(statearr_44382[(10)] = inst_44335__$1);

return statearr_44382;
})();
if(cljs.core.truth_(inst_44335__$1)){
var statearr_44383_46975 = state_44370__$1;
(statearr_44383_46975[(1)] = (29));

} else {
var statearr_44384_46976 = state_44370__$1;
(statearr_44384_46976[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (4))){
var inst_44279 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44279)){
var statearr_44385_46979 = state_44370__$1;
(statearr_44385_46979[(1)] = (8));

} else {
var statearr_44386_46995 = state_44370__$1;
(statearr_44386_46995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (15))){
var inst_44306 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44306)){
var statearr_44387_47001 = state_44370__$1;
(statearr_44387_47001[(1)] = (19));

} else {
var statearr_44388_47002 = state_44370__$1;
(statearr_44388_47002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (21))){
var inst_44311 = (state_44370[(12)]);
var inst_44311__$1 = (state_44370[(2)]);
var inst_44312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44311__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44311__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44311__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44370__$1 = (function (){var statearr_44391 = state_44370;
(statearr_44391[(9)] = inst_44312);

(statearr_44391[(12)] = inst_44311__$1);

(statearr_44391[(13)] = inst_44313);

return statearr_44391;
})();
return cljs.core.async.ioc_alts_BANG_(state_44370__$1,(22),inst_44314);
} else {
if((state_val_44371 === (31))){
var inst_44343 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44343)){
var statearr_44393_47013 = state_44370__$1;
(statearr_44393_47013[(1)] = (32));

} else {
var statearr_44397_47014 = state_44370__$1;
(statearr_44397_47014[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (32))){
var inst_44320 = (state_44370[(14)]);
var state_44370__$1 = state_44370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44370__$1,(35),out,inst_44320);
} else {
if((state_val_44371 === (33))){
var inst_44311 = (state_44370[(12)]);
var inst_44288 = inst_44311;
var state_44370__$1 = (function (){var statearr_44398 = state_44370;
(statearr_44398[(7)] = inst_44288);

return statearr_44398;
})();
var statearr_44399_47019 = state_44370__$1;
(statearr_44399_47019[(2)] = null);

(statearr_44399_47019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (13))){
var inst_44288 = (state_44370[(7)]);
var inst_44295 = inst_44288.cljs$lang$protocol_mask$partition0$;
var inst_44296 = (inst_44295 & (64));
var inst_44297 = inst_44288.cljs$core$ISeq$;
var inst_44298 = (cljs.core.PROTOCOL_SENTINEL === inst_44297);
var inst_44299 = ((inst_44296) || (inst_44298));
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44299)){
var statearr_44400_47031 = state_44370__$1;
(statearr_44400_47031[(1)] = (16));

} else {
var statearr_44401_47034 = state_44370__$1;
(statearr_44401_47034[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (22))){
var inst_44320 = (state_44370[(14)]);
var inst_44321 = (state_44370[(11)]);
var inst_44319 = (state_44370[(2)]);
var inst_44320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44319,(0),null);
var inst_44321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44319,(1),null);
var inst_44322 = (inst_44320__$1 == null);
var inst_44323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44321__$1,change);
var inst_44324 = ((inst_44322) || (inst_44323));
var state_44370__$1 = (function (){var statearr_44402 = state_44370;
(statearr_44402[(14)] = inst_44320__$1);

(statearr_44402[(11)] = inst_44321__$1);

return statearr_44402;
})();
if(cljs.core.truth_(inst_44324)){
var statearr_44403_47044 = state_44370__$1;
(statearr_44403_47044[(1)] = (23));

} else {
var statearr_44404_47045 = state_44370__$1;
(statearr_44404_47045[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (36))){
var inst_44311 = (state_44370[(12)]);
var inst_44288 = inst_44311;
var state_44370__$1 = (function (){var statearr_44405 = state_44370;
(statearr_44405[(7)] = inst_44288);

return statearr_44405;
})();
var statearr_44406_47046 = state_44370__$1;
(statearr_44406_47046[(2)] = null);

(statearr_44406_47046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (29))){
var inst_44335 = (state_44370[(10)]);
var state_44370__$1 = state_44370;
var statearr_44407_47047 = state_44370__$1;
(statearr_44407_47047[(2)] = inst_44335);

(statearr_44407_47047[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (6))){
var state_44370__$1 = state_44370;
var statearr_44408_47048 = state_44370__$1;
(statearr_44408_47048[(2)] = false);

(statearr_44408_47048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (28))){
var inst_44331 = (state_44370[(2)]);
var inst_44332 = calc_state();
var inst_44288 = inst_44332;
var state_44370__$1 = (function (){var statearr_44409 = state_44370;
(statearr_44409[(7)] = inst_44288);

(statearr_44409[(15)] = inst_44331);

return statearr_44409;
})();
var statearr_44410_47049 = state_44370__$1;
(statearr_44410_47049[(2)] = null);

(statearr_44410_47049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (25))){
var inst_44357 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44411_47056 = state_44370__$1;
(statearr_44411_47056[(2)] = inst_44357);

(statearr_44411_47056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (34))){
var inst_44355 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44421_47057 = state_44370__$1;
(statearr_44421_47057[(2)] = inst_44355);

(statearr_44421_47057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (17))){
var state_44370__$1 = state_44370;
var statearr_44422_47062 = state_44370__$1;
(statearr_44422_47062[(2)] = false);

(statearr_44422_47062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (3))){
var state_44370__$1 = state_44370;
var statearr_44423_47066 = state_44370__$1;
(statearr_44423_47066[(2)] = false);

(statearr_44423_47066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (12))){
var inst_44359 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44370__$1,inst_44359);
} else {
if((state_val_44371 === (2))){
var inst_44263 = (state_44370[(8)]);
var inst_44268 = inst_44263.cljs$lang$protocol_mask$partition0$;
var inst_44269 = (inst_44268 & (64));
var inst_44270 = inst_44263.cljs$core$ISeq$;
var inst_44271 = (cljs.core.PROTOCOL_SENTINEL === inst_44270);
var inst_44272 = ((inst_44269) || (inst_44271));
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44272)){
var statearr_44428_47079 = state_44370__$1;
(statearr_44428_47079[(1)] = (5));

} else {
var statearr_44429_47080 = state_44370__$1;
(statearr_44429_47080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (23))){
var inst_44320 = (state_44370[(14)]);
var inst_44326 = (inst_44320 == null);
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44326)){
var statearr_44430_47081 = state_44370__$1;
(statearr_44430_47081[(1)] = (26));

} else {
var statearr_44431_47082 = state_44370__$1;
(statearr_44431_47082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (35))){
var inst_44346 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44346)){
var statearr_44433_47083 = state_44370__$1;
(statearr_44433_47083[(1)] = (36));

} else {
var statearr_44434_47084 = state_44370__$1;
(statearr_44434_47084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (19))){
var inst_44288 = (state_44370[(7)]);
var inst_44308 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44288);
var state_44370__$1 = state_44370;
var statearr_44435_47085 = state_44370__$1;
(statearr_44435_47085[(2)] = inst_44308);

(statearr_44435_47085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (11))){
var inst_44288 = (state_44370[(7)]);
var inst_44292 = (inst_44288 == null);
var inst_44293 = cljs.core.not(inst_44292);
var state_44370__$1 = state_44370;
if(inst_44293){
var statearr_44438_47087 = state_44370__$1;
(statearr_44438_47087[(1)] = (13));

} else {
var statearr_44440_47092 = state_44370__$1;
(statearr_44440_47092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (9))){
var inst_44263 = (state_44370[(8)]);
var state_44370__$1 = state_44370;
var statearr_44441_47094 = state_44370__$1;
(statearr_44441_47094[(2)] = inst_44263);

(statearr_44441_47094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (5))){
var state_44370__$1 = state_44370;
var statearr_44442_47097 = state_44370__$1;
(statearr_44442_47097[(2)] = true);

(statearr_44442_47097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (14))){
var state_44370__$1 = state_44370;
var statearr_44443_47102 = state_44370__$1;
(statearr_44443_47102[(2)] = false);

(statearr_44443_47102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (26))){
var inst_44321 = (state_44370[(11)]);
var inst_44328 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44321);
var state_44370__$1 = state_44370;
var statearr_44444_47105 = state_44370__$1;
(statearr_44444_47105[(2)] = inst_44328);

(statearr_44444_47105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (16))){
var state_44370__$1 = state_44370;
var statearr_44445_47108 = state_44370__$1;
(statearr_44445_47108[(2)] = true);

(statearr_44445_47108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (38))){
var inst_44351 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44446_47109 = state_44370__$1;
(statearr_44446_47109[(2)] = inst_44351);

(statearr_44446_47109[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (30))){
var inst_44312 = (state_44370[(9)]);
var inst_44313 = (state_44370[(13)]);
var inst_44321 = (state_44370[(11)]);
var inst_44338 = cljs.core.empty_QMARK_(inst_44312);
var inst_44339 = (inst_44313.cljs$core$IFn$_invoke$arity$1 ? inst_44313.cljs$core$IFn$_invoke$arity$1(inst_44321) : inst_44313.call(null,inst_44321));
var inst_44340 = cljs.core.not(inst_44339);
var inst_44341 = ((inst_44338) && (inst_44340));
var state_44370__$1 = state_44370;
var statearr_44456_47116 = state_44370__$1;
(statearr_44456_47116[(2)] = inst_44341);

(statearr_44456_47116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (10))){
var inst_44263 = (state_44370[(8)]);
var inst_44284 = (state_44370[(2)]);
var inst_44285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44284,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44284,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44284,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44288 = inst_44263;
var state_44370__$1 = (function (){var statearr_44465 = state_44370;
(statearr_44465[(16)] = inst_44285);

(statearr_44465[(17)] = inst_44286);

(statearr_44465[(7)] = inst_44288);

(statearr_44465[(18)] = inst_44287);

return statearr_44465;
})();
var statearr_44466_47128 = state_44370__$1;
(statearr_44466_47128[(2)] = null);

(statearr_44466_47128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (18))){
var inst_44303 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44467_47131 = state_44370__$1;
(statearr_44467_47131[(2)] = inst_44303);

(statearr_44467_47131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (37))){
var state_44370__$1 = state_44370;
var statearr_44468_47135 = state_44370__$1;
(statearr_44468_47135[(2)] = null);

(statearr_44468_47135[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (8))){
var inst_44263 = (state_44370[(8)]);
var inst_44281 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44263);
var state_44370__$1 = state_44370;
var statearr_44469_47138 = state_44370__$1;
(statearr_44469_47138[(2)] = inst_44281);

(statearr_44469_47138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42400__auto__ = null;
var cljs$core$async$mix_$_state_machine__42400__auto____0 = (function (){
var statearr_44474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44474[(0)] = cljs$core$async$mix_$_state_machine__42400__auto__);

(statearr_44474[(1)] = (1));

return statearr_44474;
});
var cljs$core$async$mix_$_state_machine__42400__auto____1 = (function (state_44370){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_44370);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e44481){var ex__42403__auto__ = e44481;
var statearr_44482_47139 = state_44370;
(statearr_44482_47139[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_44370[(4)]))){
var statearr_44483_47141 = state_44370;
(statearr_44483_47141[(1)] = cljs.core.first((state_44370[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47142 = state_44370;
state_44370 = G__47142;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42400__auto__ = function(state_44370){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42400__auto____1.call(this,state_44370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42400__auto____0;
cljs$core$async$mix_$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42400__auto____1;
return cljs$core$async$mix_$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_44489 = f__42555__auto__();
(statearr_44489[(6)] = c__42554__auto___46952);

return statearr_44489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47147 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47147(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47150 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47150(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47155 = (function() {
var G__47156 = null;
var G__47156__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47156__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47156 = function(p,v){
switch(arguments.length){
case 1:
return G__47156__1.call(this,p);
case 2:
return G__47156__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47156.cljs$core$IFn$_invoke$arity$1 = G__47156__1;
G__47156.cljs$core$IFn$_invoke$arity$2 = G__47156__2;
return G__47156;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44524 = arguments.length;
switch (G__44524) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47155(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47155(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44561 = arguments.length;
switch (G__44561) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44559_SHARP_){
if(cljs.core.truth_((p1__44559_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44559_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44559_SHARP_.call(null,topic)))){
return p1__44559_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44559_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44567 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44568){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44568 = meta44568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44569,meta44568__$1){
var self__ = this;
var _44569__$1 = this;
return (new cljs.core.async.t_cljs$core$async44567(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44568__$1));
}));

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44569){
var self__ = this;
var _44569__$1 = this;
return self__.meta44568;
}));

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44567.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44568","meta44568",-2043231331,null)], null);
}));

(cljs.core.async.t_cljs$core$async44567.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44567");

(cljs.core.async.t_cljs$core$async44567.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44567");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44567.
 */
cljs.core.async.__GT_t_cljs$core$async44567 = (function cljs$core$async$__GT_t_cljs$core$async44567(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44568){
return (new cljs.core.async.t_cljs$core$async44567(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44568));
});

}

return (new cljs.core.async.t_cljs$core$async44567(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42554__auto___47201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_44690){
var state_val_44691 = (state_44690[(1)]);
if((state_val_44691 === (7))){
var inst_44673 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44693_47213 = state_44690__$1;
(statearr_44693_47213[(2)] = inst_44673);

(statearr_44693_47213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (20))){
var state_44690__$1 = state_44690;
var statearr_44694_47220 = state_44690__$1;
(statearr_44694_47220[(2)] = null);

(statearr_44694_47220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (1))){
var state_44690__$1 = state_44690;
var statearr_44696_47224 = state_44690__$1;
(statearr_44696_47224[(2)] = null);

(statearr_44696_47224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (24))){
var inst_44656 = (state_44690[(7)]);
var inst_44665 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44656);
var state_44690__$1 = state_44690;
var statearr_44699_47228 = state_44690__$1;
(statearr_44699_47228[(2)] = inst_44665);

(statearr_44699_47228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (4))){
var inst_44602 = (state_44690[(8)]);
var inst_44602__$1 = (state_44690[(2)]);
var inst_44603 = (inst_44602__$1 == null);
var state_44690__$1 = (function (){var statearr_44702 = state_44690;
(statearr_44702[(8)] = inst_44602__$1);

return statearr_44702;
})();
if(cljs.core.truth_(inst_44603)){
var statearr_44704_47229 = state_44690__$1;
(statearr_44704_47229[(1)] = (5));

} else {
var statearr_44706_47230 = state_44690__$1;
(statearr_44706_47230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (15))){
var inst_44649 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44707_47231 = state_44690__$1;
(statearr_44707_47231[(2)] = inst_44649);

(statearr_44707_47231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (21))){
var inst_44670 = (state_44690[(2)]);
var state_44690__$1 = (function (){var statearr_44708 = state_44690;
(statearr_44708[(9)] = inst_44670);

return statearr_44708;
})();
var statearr_44710_47232 = state_44690__$1;
(statearr_44710_47232[(2)] = null);

(statearr_44710_47232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (13))){
var inst_44627 = (state_44690[(10)]);
var inst_44630 = cljs.core.chunked_seq_QMARK_(inst_44627);
var state_44690__$1 = state_44690;
if(inst_44630){
var statearr_44712_47233 = state_44690__$1;
(statearr_44712_47233[(1)] = (16));

} else {
var statearr_44716_47234 = state_44690__$1;
(statearr_44716_47234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (22))){
var inst_44662 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
if(cljs.core.truth_(inst_44662)){
var statearr_44739_47235 = state_44690__$1;
(statearr_44739_47235[(1)] = (23));

} else {
var statearr_44740_47236 = state_44690__$1;
(statearr_44740_47236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (6))){
var inst_44658 = (state_44690[(11)]);
var inst_44602 = (state_44690[(8)]);
var inst_44656 = (state_44690[(7)]);
var inst_44656__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44602) : topic_fn.call(null,inst_44602));
var inst_44657 = cljs.core.deref(mults);
var inst_44658__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44657,inst_44656__$1);
var state_44690__$1 = (function (){var statearr_44744 = state_44690;
(statearr_44744[(11)] = inst_44658__$1);

(statearr_44744[(7)] = inst_44656__$1);

return statearr_44744;
})();
if(cljs.core.truth_(inst_44658__$1)){
var statearr_44751_47237 = state_44690__$1;
(statearr_44751_47237[(1)] = (19));

} else {
var statearr_44753_47238 = state_44690__$1;
(statearr_44753_47238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (25))){
var inst_44667 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44754_47239 = state_44690__$1;
(statearr_44754_47239[(2)] = inst_44667);

(statearr_44754_47239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (17))){
var inst_44627 = (state_44690[(10)]);
var inst_44638 = cljs.core.first(inst_44627);
var inst_44641 = cljs.core.async.muxch_STAR_(inst_44638);
var inst_44642 = cljs.core.async.close_BANG_(inst_44641);
var inst_44643 = cljs.core.next(inst_44627);
var inst_44612 = inst_44643;
var inst_44613 = null;
var inst_44614 = (0);
var inst_44615 = (0);
var state_44690__$1 = (function (){var statearr_44757 = state_44690;
(statearr_44757[(12)] = inst_44642);

(statearr_44757[(13)] = inst_44612);

(statearr_44757[(14)] = inst_44614);

(statearr_44757[(15)] = inst_44613);

(statearr_44757[(16)] = inst_44615);

return statearr_44757;
})();
var statearr_44761_47293 = state_44690__$1;
(statearr_44761_47293[(2)] = null);

(statearr_44761_47293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (3))){
var inst_44678 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44690__$1,inst_44678);
} else {
if((state_val_44691 === (12))){
var inst_44651 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44766_47302 = state_44690__$1;
(statearr_44766_47302[(2)] = inst_44651);

(statearr_44766_47302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (2))){
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44690__$1,(4),ch);
} else {
if((state_val_44691 === (23))){
var state_44690__$1 = state_44690;
var statearr_44768_47308 = state_44690__$1;
(statearr_44768_47308[(2)] = null);

(statearr_44768_47308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (19))){
var inst_44658 = (state_44690[(11)]);
var inst_44602 = (state_44690[(8)]);
var inst_44660 = cljs.core.async.muxch_STAR_(inst_44658);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44690__$1,(22),inst_44660,inst_44602);
} else {
if((state_val_44691 === (11))){
var inst_44612 = (state_44690[(13)]);
var inst_44627 = (state_44690[(10)]);
var inst_44627__$1 = cljs.core.seq(inst_44612);
var state_44690__$1 = (function (){var statearr_44780 = state_44690;
(statearr_44780[(10)] = inst_44627__$1);

return statearr_44780;
})();
if(inst_44627__$1){
var statearr_44781_47311 = state_44690__$1;
(statearr_44781_47311[(1)] = (13));

} else {
var statearr_44783_47312 = state_44690__$1;
(statearr_44783_47312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (9))){
var inst_44653 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44787_47313 = state_44690__$1;
(statearr_44787_47313[(2)] = inst_44653);

(statearr_44787_47313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (5))){
var inst_44609 = cljs.core.deref(mults);
var inst_44610 = cljs.core.vals(inst_44609);
var inst_44611 = cljs.core.seq(inst_44610);
var inst_44612 = inst_44611;
var inst_44613 = null;
var inst_44614 = (0);
var inst_44615 = (0);
var state_44690__$1 = (function (){var statearr_44788 = state_44690;
(statearr_44788[(13)] = inst_44612);

(statearr_44788[(14)] = inst_44614);

(statearr_44788[(15)] = inst_44613);

(statearr_44788[(16)] = inst_44615);

return statearr_44788;
})();
var statearr_44792_47316 = state_44690__$1;
(statearr_44792_47316[(2)] = null);

(statearr_44792_47316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (14))){
var state_44690__$1 = state_44690;
var statearr_44810_47332 = state_44690__$1;
(statearr_44810_47332[(2)] = null);

(statearr_44810_47332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (16))){
var inst_44627 = (state_44690[(10)]);
var inst_44633 = cljs.core.chunk_first(inst_44627);
var inst_44634 = cljs.core.chunk_rest(inst_44627);
var inst_44635 = cljs.core.count(inst_44633);
var inst_44612 = inst_44634;
var inst_44613 = inst_44633;
var inst_44614 = inst_44635;
var inst_44615 = (0);
var state_44690__$1 = (function (){var statearr_44815 = state_44690;
(statearr_44815[(13)] = inst_44612);

(statearr_44815[(14)] = inst_44614);

(statearr_44815[(15)] = inst_44613);

(statearr_44815[(16)] = inst_44615);

return statearr_44815;
})();
var statearr_44816_47333 = state_44690__$1;
(statearr_44816_47333[(2)] = null);

(statearr_44816_47333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (10))){
var inst_44612 = (state_44690[(13)]);
var inst_44614 = (state_44690[(14)]);
var inst_44613 = (state_44690[(15)]);
var inst_44615 = (state_44690[(16)]);
var inst_44620 = cljs.core._nth(inst_44613,inst_44615);
var inst_44621 = cljs.core.async.muxch_STAR_(inst_44620);
var inst_44622 = cljs.core.async.close_BANG_(inst_44621);
var inst_44624 = (inst_44615 + (1));
var tmp44793 = inst_44612;
var tmp44794 = inst_44614;
var tmp44795 = inst_44613;
var inst_44612__$1 = tmp44793;
var inst_44613__$1 = tmp44795;
var inst_44614__$1 = tmp44794;
var inst_44615__$1 = inst_44624;
var state_44690__$1 = (function (){var statearr_44821 = state_44690;
(statearr_44821[(13)] = inst_44612__$1);

(statearr_44821[(14)] = inst_44614__$1);

(statearr_44821[(15)] = inst_44613__$1);

(statearr_44821[(17)] = inst_44622);

(statearr_44821[(16)] = inst_44615__$1);

return statearr_44821;
})();
var statearr_44822_47347 = state_44690__$1;
(statearr_44822_47347[(2)] = null);

(statearr_44822_47347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (18))){
var inst_44646 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44823_47350 = state_44690__$1;
(statearr_44823_47350[(2)] = inst_44646);

(statearr_44823_47350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (8))){
var inst_44614 = (state_44690[(14)]);
var inst_44615 = (state_44690[(16)]);
var inst_44617 = (inst_44615 < inst_44614);
var inst_44618 = inst_44617;
var state_44690__$1 = state_44690;
if(cljs.core.truth_(inst_44618)){
var statearr_44824_47351 = state_44690__$1;
(statearr_44824_47351[(1)] = (10));

} else {
var statearr_44825_47352 = state_44690__$1;
(statearr_44825_47352[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_44826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44826[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_44826[(1)] = (1));

return statearr_44826;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_44690){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_44690);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e44827){var ex__42403__auto__ = e44827;
var statearr_44828_47353 = state_44690;
(statearr_44828_47353[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_44690[(4)]))){
var statearr_44829_47354 = state_44690;
(statearr_44829_47354[(1)] = cljs.core.first((state_44690[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47355 = state_44690;
state_44690 = G__47355;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_44690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_44690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_44832 = f__42555__auto__();
(statearr_44832[(6)] = c__42554__auto___47201);

return statearr_44832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44837 = arguments.length;
switch (G__44837) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44851 = arguments.length;
switch (G__44851) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44861 = arguments.length;
switch (G__44861) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42554__auto___47381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_44928){
var state_val_44930 = (state_44928[(1)]);
if((state_val_44930 === (7))){
var state_44928__$1 = state_44928;
var statearr_44932_47382 = state_44928__$1;
(statearr_44932_47382[(2)] = null);

(statearr_44932_47382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (1))){
var state_44928__$1 = state_44928;
var statearr_44935_47383 = state_44928__$1;
(statearr_44935_47383[(2)] = null);

(statearr_44935_47383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (4))){
var inst_44883 = (state_44928[(7)]);
var inst_44882 = (state_44928[(8)]);
var inst_44885 = (inst_44883 < inst_44882);
var state_44928__$1 = state_44928;
if(cljs.core.truth_(inst_44885)){
var statearr_44938_47388 = state_44928__$1;
(statearr_44938_47388[(1)] = (6));

} else {
var statearr_44942_47389 = state_44928__$1;
(statearr_44942_47389[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (15))){
var inst_44909 = (state_44928[(9)]);
var inst_44917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44909);
var state_44928__$1 = state_44928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44928__$1,(17),out,inst_44917);
} else {
if((state_val_44930 === (13))){
var inst_44909 = (state_44928[(9)]);
var inst_44909__$1 = (state_44928[(2)]);
var inst_44912 = cljs.core.some(cljs.core.nil_QMARK_,inst_44909__$1);
var state_44928__$1 = (function (){var statearr_44966 = state_44928;
(statearr_44966[(9)] = inst_44909__$1);

return statearr_44966;
})();
if(cljs.core.truth_(inst_44912)){
var statearr_44967_47400 = state_44928__$1;
(statearr_44967_47400[(1)] = (14));

} else {
var statearr_44970_47401 = state_44928__$1;
(statearr_44970_47401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (6))){
var state_44928__$1 = state_44928;
var statearr_44974_47403 = state_44928__$1;
(statearr_44974_47403[(2)] = null);

(statearr_44974_47403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (17))){
var inst_44920 = (state_44928[(2)]);
var state_44928__$1 = (function (){var statearr_44985 = state_44928;
(statearr_44985[(10)] = inst_44920);

return statearr_44985;
})();
var statearr_44988_47404 = state_44928__$1;
(statearr_44988_47404[(2)] = null);

(statearr_44988_47404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (3))){
var inst_44925 = (state_44928[(2)]);
var state_44928__$1 = state_44928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44928__$1,inst_44925);
} else {
if((state_val_44930 === (12))){
var _ = (function (){var statearr_44992 = state_44928;
(statearr_44992[(4)] = cljs.core.rest((state_44928[(4)])));

return statearr_44992;
})();
var state_44928__$1 = state_44928;
var ex44983 = (state_44928__$1[(2)]);
var statearr_44993_47405 = state_44928__$1;
(statearr_44993_47405[(5)] = ex44983);


if((ex44983 instanceof Object)){
var statearr_44997_47406 = state_44928__$1;
(statearr_44997_47406[(1)] = (11));

(statearr_44997_47406[(5)] = null);

} else {
throw ex44983;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (2))){
var inst_44881 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44882 = cnt;
var inst_44883 = (0);
var state_44928__$1 = (function (){var statearr_45004 = state_44928;
(statearr_45004[(11)] = inst_44881);

(statearr_45004[(7)] = inst_44883);

(statearr_45004[(8)] = inst_44882);

return statearr_45004;
})();
var statearr_45006_47410 = state_44928__$1;
(statearr_45006_47410[(2)] = null);

(statearr_45006_47410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (11))){
var inst_44887 = (state_44928[(2)]);
var inst_44889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44928__$1 = (function (){var statearr_45019 = state_44928;
(statearr_45019[(12)] = inst_44887);

return statearr_45019;
})();
var statearr_45020_47420 = state_44928__$1;
(statearr_45020_47420[(2)] = inst_44889);

(statearr_45020_47420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (9))){
var inst_44883 = (state_44928[(7)]);
var _ = (function (){var statearr_45022 = state_44928;
(statearr_45022[(4)] = cljs.core.cons((12),(state_44928[(4)])));

return statearr_45022;
})();
var inst_44895 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44883) : chs__$1.call(null,inst_44883));
var inst_44896 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44883) : done.call(null,inst_44883));
var inst_44897 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44895,inst_44896);
var ___$1 = (function (){var statearr_45027 = state_44928;
(statearr_45027[(4)] = cljs.core.rest((state_44928[(4)])));

return statearr_45027;
})();
var state_44928__$1 = state_44928;
var statearr_45028_47431 = state_44928__$1;
(statearr_45028_47431[(2)] = inst_44897);

(statearr_45028_47431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (5))){
var inst_44907 = (state_44928[(2)]);
var state_44928__$1 = (function (){var statearr_45029 = state_44928;
(statearr_45029[(13)] = inst_44907);

return statearr_45029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44928__$1,(13),dchan);
} else {
if((state_val_44930 === (14))){
var inst_44914 = cljs.core.async.close_BANG_(out);
var state_44928__$1 = state_44928;
var statearr_45030_47444 = state_44928__$1;
(statearr_45030_47444[(2)] = inst_44914);

(statearr_45030_47444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (16))){
var inst_44923 = (state_44928[(2)]);
var state_44928__$1 = state_44928;
var statearr_45033_47446 = state_44928__$1;
(statearr_45033_47446[(2)] = inst_44923);

(statearr_45033_47446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (10))){
var inst_44883 = (state_44928[(7)]);
var inst_44900 = (state_44928[(2)]);
var inst_44901 = (inst_44883 + (1));
var inst_44883__$1 = inst_44901;
var state_44928__$1 = (function (){var statearr_45039 = state_44928;
(statearr_45039[(7)] = inst_44883__$1);

(statearr_45039[(14)] = inst_44900);

return statearr_45039;
})();
var statearr_45041_47451 = state_44928__$1;
(statearr_45041_47451[(2)] = null);

(statearr_45041_47451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44930 === (8))){
var inst_44905 = (state_44928[(2)]);
var state_44928__$1 = state_44928;
var statearr_45050_47453 = state_44928__$1;
(statearr_45050_47453[(2)] = inst_44905);

(statearr_45050_47453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_45054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45054[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_45054[(1)] = (1));

return statearr_45054;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_44928){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_44928);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e45056){var ex__42403__auto__ = e45056;
var statearr_45058_47459 = state_44928;
(statearr_45058_47459[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_44928[(4)]))){
var statearr_45059_47460 = state_44928;
(statearr_45059_47460[(1)] = cljs.core.first((state_44928[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47461 = state_44928;
state_44928 = G__47461;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_44928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_44928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_45067 = f__42555__auto__();
(statearr_45067[(6)] = c__42554__auto___47381);

return statearr_45067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45105 = arguments.length;
switch (G__45105) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42554__auto___47467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_45144){
var state_val_45145 = (state_45144[(1)]);
if((state_val_45145 === (7))){
var inst_45117 = (state_45144[(7)]);
var inst_45118 = (state_45144[(8)]);
var inst_45117__$1 = (state_45144[(2)]);
var inst_45118__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45117__$1,(0),null);
var inst_45119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45117__$1,(1),null);
var inst_45120 = (inst_45118__$1 == null);
var state_45144__$1 = (function (){var statearr_45155 = state_45144;
(statearr_45155[(7)] = inst_45117__$1);

(statearr_45155[(8)] = inst_45118__$1);

(statearr_45155[(9)] = inst_45119);

return statearr_45155;
})();
if(cljs.core.truth_(inst_45120)){
var statearr_45157_47476 = state_45144__$1;
(statearr_45157_47476[(1)] = (8));

} else {
var statearr_45158_47477 = state_45144__$1;
(statearr_45158_47477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45145 === (1))){
var inst_45106 = cljs.core.vec(chs);
var inst_45108 = inst_45106;
var state_45144__$1 = (function (){var statearr_45159 = state_45144;
(statearr_45159[(10)] = inst_45108);

return statearr_45159;
})();
var statearr_45160_47478 = state_45144__$1;
(statearr_45160_47478[(2)] = null);

(statearr_45160_47478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45145 === (4))){
var inst_45108 = (state_45144[(10)]);
var state_45144__$1 = state_45144;
return cljs.core.async.ioc_alts_BANG_(state_45144__$1,(7),inst_45108);
} else {
if((state_val_45145 === (6))){
var inst_45140 = (state_45144[(2)]);
var state_45144__$1 = state_45144;
var statearr_45162_47479 = state_45144__$1;
(statearr_45162_47479[(2)] = inst_45140);

(statearr_45162_47479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45145 === (3))){
var inst_45142 = (state_45144[(2)]);
var state_45144__$1 = state_45144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45144__$1,inst_45142);
} else {
if((state_val_45145 === (2))){
var inst_45108 = (state_45144[(10)]);
var inst_45110 = cljs.core.count(inst_45108);
var inst_45111 = (inst_45110 > (0));
var state_45144__$1 = state_45144;
if(cljs.core.truth_(inst_45111)){
var statearr_45170_47482 = state_45144__$1;
(statearr_45170_47482[(1)] = (4));

} else {
var statearr_45173_47483 = state_45144__$1;
(statearr_45173_47483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45145 === (11))){
var inst_45108 = (state_45144[(10)]);
var inst_45127 = (state_45144[(2)]);
var tmp45163 = inst_45108;
var inst_45108__$1 = tmp45163;
var state_45144__$1 = (function (){var statearr_45184 = state_45144;
(statearr_45184[(10)] = inst_45108__$1);

(statearr_45184[(11)] = inst_45127);

return statearr_45184;
})();
var statearr_45189_47494 = state_45144__$1;
(statearr_45189_47494[(2)] = null);

(statearr_45189_47494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45145 === (9))){
var inst_45118 = (state_45144[(8)]);
var state_45144__$1 = state_45144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45144__$1,(11),out,inst_45118);
} else {
if((state_val_45145 === (5))){
var inst_45134 = cljs.core.async.close_BANG_(out);
var state_45144__$1 = state_45144;
var statearr_45224_47500 = state_45144__$1;
(statearr_45224_47500[(2)] = inst_45134);

(statearr_45224_47500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45145 === (10))){
var inst_45130 = (state_45144[(2)]);
var state_45144__$1 = state_45144;
var statearr_45225_47501 = state_45144__$1;
(statearr_45225_47501[(2)] = inst_45130);

(statearr_45225_47501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45145 === (8))){
var inst_45117 = (state_45144[(7)]);
var inst_45108 = (state_45144[(10)]);
var inst_45118 = (state_45144[(8)]);
var inst_45119 = (state_45144[(9)]);
var inst_45122 = (function (){var cs = inst_45108;
var vec__45113 = inst_45117;
var v = inst_45118;
var c = inst_45119;
return (function (p1__45103_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45103_SHARP_);
});
})();
var inst_45123 = cljs.core.filterv(inst_45122,inst_45108);
var inst_45108__$1 = inst_45123;
var state_45144__$1 = (function (){var statearr_45230 = state_45144;
(statearr_45230[(10)] = inst_45108__$1);

return statearr_45230;
})();
var statearr_45231_47503 = state_45144__$1;
(statearr_45231_47503[(2)] = null);

(statearr_45231_47503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_45239 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45239[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_45239[(1)] = (1));

return statearr_45239;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_45144){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_45144);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e45245){var ex__42403__auto__ = e45245;
var statearr_45247_47512 = state_45144;
(statearr_45247_47512[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_45144[(4)]))){
var statearr_45252_47514 = state_45144;
(statearr_45252_47514[(1)] = cljs.core.first((state_45144[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47516 = state_45144;
state_45144 = G__47516;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_45144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_45144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_45253 = f__42555__auto__();
(statearr_45253[(6)] = c__42554__auto___47467);

return statearr_45253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45262 = arguments.length;
switch (G__45262) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42554__auto___47528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_45328){
var state_val_45329 = (state_45328[(1)]);
if((state_val_45329 === (7))){
var inst_45271 = (state_45328[(7)]);
var inst_45271__$1 = (state_45328[(2)]);
var inst_45272 = (inst_45271__$1 == null);
var inst_45273 = cljs.core.not(inst_45272);
var state_45328__$1 = (function (){var statearr_45335 = state_45328;
(statearr_45335[(7)] = inst_45271__$1);

return statearr_45335;
})();
if(inst_45273){
var statearr_45336_47532 = state_45328__$1;
(statearr_45336_47532[(1)] = (8));

} else {
var statearr_45337_47533 = state_45328__$1;
(statearr_45337_47533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (1))){
var inst_45264 = (0);
var state_45328__$1 = (function (){var statearr_45340 = state_45328;
(statearr_45340[(8)] = inst_45264);

return statearr_45340;
})();
var statearr_45343_47535 = state_45328__$1;
(statearr_45343_47535[(2)] = null);

(statearr_45343_47535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (4))){
var state_45328__$1 = state_45328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45328__$1,(7),ch);
} else {
if((state_val_45329 === (6))){
var inst_45284 = (state_45328[(2)]);
var state_45328__$1 = state_45328;
var statearr_45352_47541 = state_45328__$1;
(statearr_45352_47541[(2)] = inst_45284);

(statearr_45352_47541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (3))){
var inst_45286 = (state_45328[(2)]);
var inst_45325 = cljs.core.async.close_BANG_(out);
var state_45328__$1 = (function (){var statearr_45355 = state_45328;
(statearr_45355[(9)] = inst_45286);

return statearr_45355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45328__$1,inst_45325);
} else {
if((state_val_45329 === (2))){
var inst_45264 = (state_45328[(8)]);
var inst_45267 = (inst_45264 < n);
var state_45328__$1 = state_45328;
if(cljs.core.truth_(inst_45267)){
var statearr_45360_47564 = state_45328__$1;
(statearr_45360_47564[(1)] = (4));

} else {
var statearr_45361_47565 = state_45328__$1;
(statearr_45361_47565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (11))){
var inst_45264 = (state_45328[(8)]);
var inst_45276 = (state_45328[(2)]);
var inst_45277 = (inst_45264 + (1));
var inst_45264__$1 = inst_45277;
var state_45328__$1 = (function (){var statearr_45367 = state_45328;
(statearr_45367[(8)] = inst_45264__$1);

(statearr_45367[(10)] = inst_45276);

return statearr_45367;
})();
var statearr_45371_47567 = state_45328__$1;
(statearr_45371_47567[(2)] = null);

(statearr_45371_47567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (9))){
var state_45328__$1 = state_45328;
var statearr_45376_47569 = state_45328__$1;
(statearr_45376_47569[(2)] = null);

(statearr_45376_47569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (5))){
var state_45328__$1 = state_45328;
var statearr_45381_47572 = state_45328__$1;
(statearr_45381_47572[(2)] = null);

(statearr_45381_47572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (10))){
var inst_45281 = (state_45328[(2)]);
var state_45328__$1 = state_45328;
var statearr_45389_47574 = state_45328__$1;
(statearr_45389_47574[(2)] = inst_45281);

(statearr_45389_47574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (8))){
var inst_45271 = (state_45328[(7)]);
var state_45328__$1 = state_45328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45328__$1,(11),out,inst_45271);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_45390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45390[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_45390[(1)] = (1));

return statearr_45390;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_45328){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_45328);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e45391){var ex__42403__auto__ = e45391;
var statearr_45392_47580 = state_45328;
(statearr_45392_47580[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_45328[(4)]))){
var statearr_45394_47581 = state_45328;
(statearr_45394_47581[(1)] = cljs.core.first((state_45328[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47586 = state_45328;
state_45328 = G__47586;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_45328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_45328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_45398 = f__42555__auto__();
(statearr_45398[(6)] = c__42554__auto___47528);

return statearr_45398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45407 = (function (f,ch,meta45408){
this.f = f;
this.ch = ch;
this.meta45408 = meta45408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45409,meta45408__$1){
var self__ = this;
var _45409__$1 = this;
return (new cljs.core.async.t_cljs$core$async45407(self__.f,self__.ch,meta45408__$1));
}));

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45409){
var self__ = this;
var _45409__$1 = this;
return self__.meta45408;
}));

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45419 = (function (f,ch,meta45408,_,fn1,meta45420){
this.f = f;
this.ch = ch;
this.meta45408 = meta45408;
this._ = _;
this.fn1 = fn1;
this.meta45420 = meta45420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45421,meta45420__$1){
var self__ = this;
var _45421__$1 = this;
return (new cljs.core.async.t_cljs$core$async45419(self__.f,self__.ch,self__.meta45408,self__._,self__.fn1,meta45420__$1));
}));

(cljs.core.async.t_cljs$core$async45419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45421){
var self__ = this;
var _45421__$1 = this;
return self__.meta45420;
}));

(cljs.core.async.t_cljs$core$async45419.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45419.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45402_SHARP_){
var G__45430 = (((p1__45402_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45402_SHARP_) : self__.f.call(null,p1__45402_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45430) : f1.call(null,G__45430));
});
}));

(cljs.core.async.t_cljs$core$async45419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45408","meta45408",-1555599490,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45407","cljs.core.async/t_cljs$core$async45407",-1586973555,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45420","meta45420",-1765186376,null)], null);
}));

(cljs.core.async.t_cljs$core$async45419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45419");

(cljs.core.async.t_cljs$core$async45419.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45419.
 */
cljs.core.async.__GT_t_cljs$core$async45419 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45419(f__$1,ch__$1,meta45408__$1,___$2,fn1__$1,meta45420){
return (new cljs.core.async.t_cljs$core$async45419(f__$1,ch__$1,meta45408__$1,___$2,fn1__$1,meta45420));
});

}

return (new cljs.core.async.t_cljs$core$async45419(self__.f,self__.ch,self__.meta45408,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45435 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45435) : self__.f.call(null,G__45435));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45408","meta45408",-1555599490,null)], null);
}));

(cljs.core.async.t_cljs$core$async45407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45407");

(cljs.core.async.t_cljs$core$async45407.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45407.
 */
cljs.core.async.__GT_t_cljs$core$async45407 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45407(f__$1,ch__$1,meta45408){
return (new cljs.core.async.t_cljs$core$async45407(f__$1,ch__$1,meta45408));
});

}

return (new cljs.core.async.t_cljs$core$async45407(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45453 = (function (f,ch,meta45454){
this.f = f;
this.ch = ch;
this.meta45454 = meta45454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45455,meta45454__$1){
var self__ = this;
var _45455__$1 = this;
return (new cljs.core.async.t_cljs$core$async45453(self__.f,self__.ch,meta45454__$1));
}));

(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45455){
var self__ = this;
var _45455__$1 = this;
return self__.meta45454;
}));

(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45454","meta45454",-472167919,null)], null);
}));

(cljs.core.async.t_cljs$core$async45453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45453");

(cljs.core.async.t_cljs$core$async45453.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45453.
 */
cljs.core.async.__GT_t_cljs$core$async45453 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45453(f__$1,ch__$1,meta45454){
return (new cljs.core.async.t_cljs$core$async45453(f__$1,ch__$1,meta45454));
});

}

return (new cljs.core.async.t_cljs$core$async45453(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45467 = (function (p,ch,meta45468){
this.p = p;
this.ch = ch;
this.meta45468 = meta45468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45469,meta45468__$1){
var self__ = this;
var _45469__$1 = this;
return (new cljs.core.async.t_cljs$core$async45467(self__.p,self__.ch,meta45468__$1));
}));

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45469){
var self__ = this;
var _45469__$1 = this;
return self__.meta45468;
}));

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45468","meta45468",702350204,null)], null);
}));

(cljs.core.async.t_cljs$core$async45467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45467");

(cljs.core.async.t_cljs$core$async45467.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45467.
 */
cljs.core.async.__GT_t_cljs$core$async45467 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45467(p__$1,ch__$1,meta45468){
return (new cljs.core.async.t_cljs$core$async45467(p__$1,ch__$1,meta45468));
});

}

return (new cljs.core.async.t_cljs$core$async45467(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45479 = arguments.length;
switch (G__45479) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42554__auto___47642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_45541){
var state_val_45542 = (state_45541[(1)]);
if((state_val_45542 === (7))){
var inst_45537 = (state_45541[(2)]);
var state_45541__$1 = state_45541;
var statearr_45543_47643 = state_45541__$1;
(statearr_45543_47643[(2)] = inst_45537);

(statearr_45543_47643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (1))){
var state_45541__$1 = state_45541;
var statearr_45544_47645 = state_45541__$1;
(statearr_45544_47645[(2)] = null);

(statearr_45544_47645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (4))){
var inst_45523 = (state_45541[(7)]);
var inst_45523__$1 = (state_45541[(2)]);
var inst_45524 = (inst_45523__$1 == null);
var state_45541__$1 = (function (){var statearr_45545 = state_45541;
(statearr_45545[(7)] = inst_45523__$1);

return statearr_45545;
})();
if(cljs.core.truth_(inst_45524)){
var statearr_45546_47647 = state_45541__$1;
(statearr_45546_47647[(1)] = (5));

} else {
var statearr_45547_47648 = state_45541__$1;
(statearr_45547_47648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (6))){
var inst_45523 = (state_45541[(7)]);
var inst_45528 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45523) : p.call(null,inst_45523));
var state_45541__$1 = state_45541;
if(cljs.core.truth_(inst_45528)){
var statearr_45548_47649 = state_45541__$1;
(statearr_45548_47649[(1)] = (8));

} else {
var statearr_45549_47650 = state_45541__$1;
(statearr_45549_47650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (3))){
var inst_45539 = (state_45541[(2)]);
var state_45541__$1 = state_45541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45541__$1,inst_45539);
} else {
if((state_val_45542 === (2))){
var state_45541__$1 = state_45541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45541__$1,(4),ch);
} else {
if((state_val_45542 === (11))){
var inst_45531 = (state_45541[(2)]);
var state_45541__$1 = state_45541;
var statearr_45552_47653 = state_45541__$1;
(statearr_45552_47653[(2)] = inst_45531);

(statearr_45552_47653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (9))){
var state_45541__$1 = state_45541;
var statearr_45555_47654 = state_45541__$1;
(statearr_45555_47654[(2)] = null);

(statearr_45555_47654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (5))){
var inst_45526 = cljs.core.async.close_BANG_(out);
var state_45541__$1 = state_45541;
var statearr_45565_47655 = state_45541__$1;
(statearr_45565_47655[(2)] = inst_45526);

(statearr_45565_47655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (10))){
var inst_45534 = (state_45541[(2)]);
var state_45541__$1 = (function (){var statearr_45566 = state_45541;
(statearr_45566[(8)] = inst_45534);

return statearr_45566;
})();
var statearr_45567_47657 = state_45541__$1;
(statearr_45567_47657[(2)] = null);

(statearr_45567_47657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45542 === (8))){
var inst_45523 = (state_45541[(7)]);
var state_45541__$1 = state_45541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45541__$1,(11),out,inst_45523);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_45568 = [null,null,null,null,null,null,null,null,null];
(statearr_45568[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_45568[(1)] = (1));

return statearr_45568;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_45541){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_45541);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e45569){var ex__42403__auto__ = e45569;
var statearr_45570_47664 = state_45541;
(statearr_45570_47664[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_45541[(4)]))){
var statearr_45571_47667 = state_45541;
(statearr_45571_47667[(1)] = cljs.core.first((state_45541[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47670 = state_45541;
state_45541 = G__47670;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_45541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_45541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_45572 = f__42555__auto__();
(statearr_45572[(6)] = c__42554__auto___47642);

return statearr_45572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45574 = arguments.length;
switch (G__45574) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42554__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_45654){
var state_val_45655 = (state_45654[(1)]);
if((state_val_45655 === (7))){
var inst_45650 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
var statearr_45668_47708 = state_45654__$1;
(statearr_45668_47708[(2)] = inst_45650);

(statearr_45668_47708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (20))){
var inst_45620 = (state_45654[(7)]);
var inst_45631 = (state_45654[(2)]);
var inst_45632 = cljs.core.next(inst_45620);
var inst_45588 = inst_45632;
var inst_45589 = null;
var inst_45590 = (0);
var inst_45591 = (0);
var state_45654__$1 = (function (){var statearr_45670 = state_45654;
(statearr_45670[(8)] = inst_45590);

(statearr_45670[(9)] = inst_45631);

(statearr_45670[(10)] = inst_45591);

(statearr_45670[(11)] = inst_45589);

(statearr_45670[(12)] = inst_45588);

return statearr_45670;
})();
var statearr_45673_47719 = state_45654__$1;
(statearr_45673_47719[(2)] = null);

(statearr_45673_47719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (1))){
var state_45654__$1 = state_45654;
var statearr_45675_47720 = state_45654__$1;
(statearr_45675_47720[(2)] = null);

(statearr_45675_47720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (4))){
var inst_45577 = (state_45654[(13)]);
var inst_45577__$1 = (state_45654[(2)]);
var inst_45578 = (inst_45577__$1 == null);
var state_45654__$1 = (function (){var statearr_45676 = state_45654;
(statearr_45676[(13)] = inst_45577__$1);

return statearr_45676;
})();
if(cljs.core.truth_(inst_45578)){
var statearr_45677_47727 = state_45654__$1;
(statearr_45677_47727[(1)] = (5));

} else {
var statearr_45678_47728 = state_45654__$1;
(statearr_45678_47728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (15))){
var state_45654__$1 = state_45654;
var statearr_45682_47730 = state_45654__$1;
(statearr_45682_47730[(2)] = null);

(statearr_45682_47730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (21))){
var state_45654__$1 = state_45654;
var statearr_45683_47735 = state_45654__$1;
(statearr_45683_47735[(2)] = null);

(statearr_45683_47735[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (13))){
var inst_45590 = (state_45654[(8)]);
var inst_45591 = (state_45654[(10)]);
var inst_45589 = (state_45654[(11)]);
var inst_45588 = (state_45654[(12)]);
var inst_45616 = (state_45654[(2)]);
var inst_45617 = (inst_45591 + (1));
var tmp45679 = inst_45590;
var tmp45680 = inst_45589;
var tmp45681 = inst_45588;
var inst_45588__$1 = tmp45681;
var inst_45589__$1 = tmp45680;
var inst_45590__$1 = tmp45679;
var inst_45591__$1 = inst_45617;
var state_45654__$1 = (function (){var statearr_45684 = state_45654;
(statearr_45684[(8)] = inst_45590__$1);

(statearr_45684[(10)] = inst_45591__$1);

(statearr_45684[(11)] = inst_45589__$1);

(statearr_45684[(12)] = inst_45588__$1);

(statearr_45684[(14)] = inst_45616);

return statearr_45684;
})();
var statearr_45685_47741 = state_45654__$1;
(statearr_45685_47741[(2)] = null);

(statearr_45685_47741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (22))){
var state_45654__$1 = state_45654;
var statearr_45686_47742 = state_45654__$1;
(statearr_45686_47742[(2)] = null);

(statearr_45686_47742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (6))){
var inst_45577 = (state_45654[(13)]);
var inst_45586 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45577) : f.call(null,inst_45577));
var inst_45587 = cljs.core.seq(inst_45586);
var inst_45588 = inst_45587;
var inst_45589 = null;
var inst_45590 = (0);
var inst_45591 = (0);
var state_45654__$1 = (function (){var statearr_45688 = state_45654;
(statearr_45688[(8)] = inst_45590);

(statearr_45688[(10)] = inst_45591);

(statearr_45688[(11)] = inst_45589);

(statearr_45688[(12)] = inst_45588);

return statearr_45688;
})();
var statearr_45690_47748 = state_45654__$1;
(statearr_45690_47748[(2)] = null);

(statearr_45690_47748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (17))){
var inst_45620 = (state_45654[(7)]);
var inst_45624 = cljs.core.chunk_first(inst_45620);
var inst_45625 = cljs.core.chunk_rest(inst_45620);
var inst_45626 = cljs.core.count(inst_45624);
var inst_45588 = inst_45625;
var inst_45589 = inst_45624;
var inst_45590 = inst_45626;
var inst_45591 = (0);
var state_45654__$1 = (function (){var statearr_45691 = state_45654;
(statearr_45691[(8)] = inst_45590);

(statearr_45691[(10)] = inst_45591);

(statearr_45691[(11)] = inst_45589);

(statearr_45691[(12)] = inst_45588);

return statearr_45691;
})();
var statearr_45692_47757 = state_45654__$1;
(statearr_45692_47757[(2)] = null);

(statearr_45692_47757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (3))){
var inst_45652 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45654__$1,inst_45652);
} else {
if((state_val_45655 === (12))){
var inst_45640 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
var statearr_45693_47768 = state_45654__$1;
(statearr_45693_47768[(2)] = inst_45640);

(statearr_45693_47768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (2))){
var state_45654__$1 = state_45654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45654__$1,(4),in$);
} else {
if((state_val_45655 === (23))){
var inst_45648 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
var statearr_45696_47773 = state_45654__$1;
(statearr_45696_47773[(2)] = inst_45648);

(statearr_45696_47773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (19))){
var inst_45635 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
var statearr_45697_47777 = state_45654__$1;
(statearr_45697_47777[(2)] = inst_45635);

(statearr_45697_47777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (11))){
var inst_45620 = (state_45654[(7)]);
var inst_45588 = (state_45654[(12)]);
var inst_45620__$1 = cljs.core.seq(inst_45588);
var state_45654__$1 = (function (){var statearr_45701 = state_45654;
(statearr_45701[(7)] = inst_45620__$1);

return statearr_45701;
})();
if(inst_45620__$1){
var statearr_45702_47789 = state_45654__$1;
(statearr_45702_47789[(1)] = (14));

} else {
var statearr_45703_47790 = state_45654__$1;
(statearr_45703_47790[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (9))){
var inst_45642 = (state_45654[(2)]);
var inst_45643 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45654__$1 = (function (){var statearr_45706 = state_45654;
(statearr_45706[(15)] = inst_45642);

return statearr_45706;
})();
if(cljs.core.truth_(inst_45643)){
var statearr_45707_47793 = state_45654__$1;
(statearr_45707_47793[(1)] = (21));

} else {
var statearr_45708_47794 = state_45654__$1;
(statearr_45708_47794[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (5))){
var inst_45580 = cljs.core.async.close_BANG_(out);
var state_45654__$1 = state_45654;
var statearr_45709_47798 = state_45654__$1;
(statearr_45709_47798[(2)] = inst_45580);

(statearr_45709_47798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (14))){
var inst_45620 = (state_45654[(7)]);
var inst_45622 = cljs.core.chunked_seq_QMARK_(inst_45620);
var state_45654__$1 = state_45654;
if(inst_45622){
var statearr_45711_47806 = state_45654__$1;
(statearr_45711_47806[(1)] = (17));

} else {
var statearr_45712_47807 = state_45654__$1;
(statearr_45712_47807[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (16))){
var inst_45638 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
var statearr_45719_47808 = state_45654__$1;
(statearr_45719_47808[(2)] = inst_45638);

(statearr_45719_47808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (10))){
var inst_45591 = (state_45654[(10)]);
var inst_45589 = (state_45654[(11)]);
var inst_45598 = cljs.core._nth(inst_45589,inst_45591);
var state_45654__$1 = state_45654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45654__$1,(13),out,inst_45598);
} else {
if((state_val_45655 === (18))){
var inst_45620 = (state_45654[(7)]);
var inst_45629 = cljs.core.first(inst_45620);
var state_45654__$1 = state_45654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45654__$1,(20),out,inst_45629);
} else {
if((state_val_45655 === (8))){
var inst_45590 = (state_45654[(8)]);
var inst_45591 = (state_45654[(10)]);
var inst_45593 = (inst_45591 < inst_45590);
var inst_45594 = inst_45593;
var state_45654__$1 = state_45654;
if(cljs.core.truth_(inst_45594)){
var statearr_45725_47812 = state_45654__$1;
(statearr_45725_47812[(1)] = (10));

} else {
var statearr_45726_47813 = state_45654__$1;
(statearr_45726_47813[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42400__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42400__auto____0 = (function (){
var statearr_45727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45727[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42400__auto__);

(statearr_45727[(1)] = (1));

return statearr_45727;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42400__auto____1 = (function (state_45654){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_45654);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e45729){var ex__42403__auto__ = e45729;
var statearr_45730_47814 = state_45654;
(statearr_45730_47814[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_45654[(4)]))){
var statearr_45731_47815 = state_45654;
(statearr_45731_47815[(1)] = cljs.core.first((state_45654[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47817 = state_45654;
state_45654 = G__47817;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42400__auto__ = function(state_45654){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42400__auto____1.call(this,state_45654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42400__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42400__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_45733 = f__42555__auto__();
(statearr_45733[(6)] = c__42554__auto__);

return statearr_45733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));

return c__42554__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45742 = arguments.length;
switch (G__45742) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45749 = arguments.length;
switch (G__45749) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45771 = arguments.length;
switch (G__45771) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42554__auto___47842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_45798){
var state_val_45799 = (state_45798[(1)]);
if((state_val_45799 === (7))){
var inst_45793 = (state_45798[(2)]);
var state_45798__$1 = state_45798;
var statearr_45805_47843 = state_45798__$1;
(statearr_45805_47843[(2)] = inst_45793);

(statearr_45805_47843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (1))){
var inst_45774 = null;
var state_45798__$1 = (function (){var statearr_45806 = state_45798;
(statearr_45806[(7)] = inst_45774);

return statearr_45806;
})();
var statearr_45807_47845 = state_45798__$1;
(statearr_45807_47845[(2)] = null);

(statearr_45807_47845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (4))){
var inst_45778 = (state_45798[(8)]);
var inst_45778__$1 = (state_45798[(2)]);
var inst_45779 = (inst_45778__$1 == null);
var inst_45780 = cljs.core.not(inst_45779);
var state_45798__$1 = (function (){var statearr_45808 = state_45798;
(statearr_45808[(8)] = inst_45778__$1);

return statearr_45808;
})();
if(inst_45780){
var statearr_45809_47846 = state_45798__$1;
(statearr_45809_47846[(1)] = (5));

} else {
var statearr_45810_47847 = state_45798__$1;
(statearr_45810_47847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (6))){
var state_45798__$1 = state_45798;
var statearr_45811_47848 = state_45798__$1;
(statearr_45811_47848[(2)] = null);

(statearr_45811_47848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (3))){
var inst_45795 = (state_45798[(2)]);
var inst_45796 = cljs.core.async.close_BANG_(out);
var state_45798__$1 = (function (){var statearr_45813 = state_45798;
(statearr_45813[(9)] = inst_45795);

return statearr_45813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45798__$1,inst_45796);
} else {
if((state_val_45799 === (2))){
var state_45798__$1 = state_45798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45798__$1,(4),ch);
} else {
if((state_val_45799 === (11))){
var inst_45778 = (state_45798[(8)]);
var inst_45787 = (state_45798[(2)]);
var inst_45774 = inst_45778;
var state_45798__$1 = (function (){var statearr_45814 = state_45798;
(statearr_45814[(7)] = inst_45774);

(statearr_45814[(10)] = inst_45787);

return statearr_45814;
})();
var statearr_45815_47939 = state_45798__$1;
(statearr_45815_47939[(2)] = null);

(statearr_45815_47939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (9))){
var inst_45778 = (state_45798[(8)]);
var state_45798__$1 = state_45798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45798__$1,(11),out,inst_45778);
} else {
if((state_val_45799 === (5))){
var inst_45774 = (state_45798[(7)]);
var inst_45778 = (state_45798[(8)]);
var inst_45782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45778,inst_45774);
var state_45798__$1 = state_45798;
if(inst_45782){
var statearr_45823_47944 = state_45798__$1;
(statearr_45823_47944[(1)] = (8));

} else {
var statearr_45824_47945 = state_45798__$1;
(statearr_45824_47945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (10))){
var inst_45790 = (state_45798[(2)]);
var state_45798__$1 = state_45798;
var statearr_45825_47951 = state_45798__$1;
(statearr_45825_47951[(2)] = inst_45790);

(statearr_45825_47951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (8))){
var inst_45774 = (state_45798[(7)]);
var tmp45821 = inst_45774;
var inst_45774__$1 = tmp45821;
var state_45798__$1 = (function (){var statearr_45826 = state_45798;
(statearr_45826[(7)] = inst_45774__$1);

return statearr_45826;
})();
var statearr_45827_47964 = state_45798__$1;
(statearr_45827_47964[(2)] = null);

(statearr_45827_47964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_45838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45838[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_45838[(1)] = (1));

return statearr_45838;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_45798){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_45798);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e45840){var ex__42403__auto__ = e45840;
var statearr_45841_47978 = state_45798;
(statearr_45841_47978[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_45798[(4)]))){
var statearr_45842_47979 = state_45798;
(statearr_45842_47979[(1)] = cljs.core.first((state_45798[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47982 = state_45798;
state_45798 = G__47982;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_45798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_45798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_45846 = f__42555__auto__();
(statearr_45846[(6)] = c__42554__auto___47842);

return statearr_45846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45853 = arguments.length;
switch (G__45853) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42554__auto___47986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_45897){
var state_val_45898 = (state_45897[(1)]);
if((state_val_45898 === (7))){
var inst_45893 = (state_45897[(2)]);
var state_45897__$1 = state_45897;
var statearr_45906_47987 = state_45897__$1;
(statearr_45906_47987[(2)] = inst_45893);

(statearr_45906_47987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (1))){
var inst_45855 = (new Array(n));
var inst_45856 = inst_45855;
var inst_45857 = (0);
var state_45897__$1 = (function (){var statearr_45911 = state_45897;
(statearr_45911[(7)] = inst_45856);

(statearr_45911[(8)] = inst_45857);

return statearr_45911;
})();
var statearr_45912_47988 = state_45897__$1;
(statearr_45912_47988[(2)] = null);

(statearr_45912_47988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (4))){
var inst_45861 = (state_45897[(9)]);
var inst_45861__$1 = (state_45897[(2)]);
var inst_45863 = (inst_45861__$1 == null);
var inst_45864 = cljs.core.not(inst_45863);
var state_45897__$1 = (function (){var statearr_45917 = state_45897;
(statearr_45917[(9)] = inst_45861__$1);

return statearr_45917;
})();
if(inst_45864){
var statearr_45920_47990 = state_45897__$1;
(statearr_45920_47990[(1)] = (5));

} else {
var statearr_45922_47991 = state_45897__$1;
(statearr_45922_47991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (15))){
var inst_45887 = (state_45897[(2)]);
var state_45897__$1 = state_45897;
var statearr_45926_48003 = state_45897__$1;
(statearr_45926_48003[(2)] = inst_45887);

(statearr_45926_48003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (13))){
var state_45897__$1 = state_45897;
var statearr_45927_48004 = state_45897__$1;
(statearr_45927_48004[(2)] = null);

(statearr_45927_48004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (6))){
var inst_45857 = (state_45897[(8)]);
var inst_45881 = (inst_45857 > (0));
var state_45897__$1 = state_45897;
if(cljs.core.truth_(inst_45881)){
var statearr_45934_48005 = state_45897__$1;
(statearr_45934_48005[(1)] = (12));

} else {
var statearr_45935_48006 = state_45897__$1;
(statearr_45935_48006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (3))){
var inst_45895 = (state_45897[(2)]);
var state_45897__$1 = state_45897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45897__$1,inst_45895);
} else {
if((state_val_45898 === (12))){
var inst_45856 = (state_45897[(7)]);
var inst_45885 = cljs.core.vec(inst_45856);
var state_45897__$1 = state_45897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45897__$1,(15),out,inst_45885);
} else {
if((state_val_45898 === (2))){
var state_45897__$1 = state_45897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45897__$1,(4),ch);
} else {
if((state_val_45898 === (11))){
var inst_45875 = (state_45897[(2)]);
var inst_45876 = (new Array(n));
var inst_45856 = inst_45876;
var inst_45857 = (0);
var state_45897__$1 = (function (){var statearr_45939 = state_45897;
(statearr_45939[(7)] = inst_45856);

(statearr_45939[(8)] = inst_45857);

(statearr_45939[(10)] = inst_45875);

return statearr_45939;
})();
var statearr_45942_48018 = state_45897__$1;
(statearr_45942_48018[(2)] = null);

(statearr_45942_48018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (9))){
var inst_45856 = (state_45897[(7)]);
var inst_45873 = cljs.core.vec(inst_45856);
var state_45897__$1 = state_45897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45897__$1,(11),out,inst_45873);
} else {
if((state_val_45898 === (5))){
var inst_45861 = (state_45897[(9)]);
var inst_45856 = (state_45897[(7)]);
var inst_45857 = (state_45897[(8)]);
var inst_45868 = (state_45897[(11)]);
var inst_45867 = (inst_45856[inst_45857] = inst_45861);
var inst_45868__$1 = (inst_45857 + (1));
var inst_45869 = (inst_45868__$1 < n);
var state_45897__$1 = (function (){var statearr_45948 = state_45897;
(statearr_45948[(11)] = inst_45868__$1);

(statearr_45948[(12)] = inst_45867);

return statearr_45948;
})();
if(cljs.core.truth_(inst_45869)){
var statearr_45949_48027 = state_45897__$1;
(statearr_45949_48027[(1)] = (8));

} else {
var statearr_45950_48028 = state_45897__$1;
(statearr_45950_48028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (14))){
var inst_45890 = (state_45897[(2)]);
var inst_45891 = cljs.core.async.close_BANG_(out);
var state_45897__$1 = (function (){var statearr_45972 = state_45897;
(statearr_45972[(13)] = inst_45890);

return statearr_45972;
})();
var statearr_45973_48035 = state_45897__$1;
(statearr_45973_48035[(2)] = inst_45891);

(statearr_45973_48035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (10))){
var inst_45879 = (state_45897[(2)]);
var state_45897__$1 = state_45897;
var statearr_45975_48041 = state_45897__$1;
(statearr_45975_48041[(2)] = inst_45879);

(statearr_45975_48041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45898 === (8))){
var inst_45856 = (state_45897[(7)]);
var inst_45868 = (state_45897[(11)]);
var tmp45971 = inst_45856;
var inst_45856__$1 = tmp45971;
var inst_45857 = inst_45868;
var state_45897__$1 = (function (){var statearr_45979 = state_45897;
(statearr_45979[(7)] = inst_45856__$1);

(statearr_45979[(8)] = inst_45857);

return statearr_45979;
})();
var statearr_45980_48090 = state_45897__$1;
(statearr_45980_48090[(2)] = null);

(statearr_45980_48090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_45982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45982[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_45982[(1)] = (1));

return statearr_45982;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_45897){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_45897);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e45985){var ex__42403__auto__ = e45985;
var statearr_45987_48110 = state_45897;
(statearr_45987_48110[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_45897[(4)]))){
var statearr_45988_48115 = state_45897;
(statearr_45988_48115[(1)] = cljs.core.first((state_45897[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48123 = state_45897;
state_45897 = G__48123;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_45897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_45897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_45991 = f__42555__auto__();
(statearr_45991[(6)] = c__42554__auto___47986);

return statearr_45991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46000 = arguments.length;
switch (G__46000) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42554__auto___48146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_46054){
var state_val_46055 = (state_46054[(1)]);
if((state_val_46055 === (7))){
var inst_46050 = (state_46054[(2)]);
var state_46054__$1 = state_46054;
var statearr_46074_48149 = state_46054__$1;
(statearr_46074_48149[(2)] = inst_46050);

(statearr_46074_48149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (1))){
var inst_46006 = [];
var inst_46007 = inst_46006;
var inst_46008 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46054__$1 = (function (){var statearr_46084 = state_46054;
(statearr_46084[(7)] = inst_46007);

(statearr_46084[(8)] = inst_46008);

return statearr_46084;
})();
var statearr_46091_48153 = state_46054__$1;
(statearr_46091_48153[(2)] = null);

(statearr_46091_48153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (4))){
var inst_46011 = (state_46054[(9)]);
var inst_46011__$1 = (state_46054[(2)]);
var inst_46012 = (inst_46011__$1 == null);
var inst_46013 = cljs.core.not(inst_46012);
var state_46054__$1 = (function (){var statearr_46093 = state_46054;
(statearr_46093[(9)] = inst_46011__$1);

return statearr_46093;
})();
if(inst_46013){
var statearr_46094_48161 = state_46054__$1;
(statearr_46094_48161[(1)] = (5));

} else {
var statearr_46099_48162 = state_46054__$1;
(statearr_46099_48162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (15))){
var inst_46044 = (state_46054[(2)]);
var state_46054__$1 = state_46054;
var statearr_46100_48177 = state_46054__$1;
(statearr_46100_48177[(2)] = inst_46044);

(statearr_46100_48177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (13))){
var state_46054__$1 = state_46054;
var statearr_46101_48179 = state_46054__$1;
(statearr_46101_48179[(2)] = null);

(statearr_46101_48179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (6))){
var inst_46007 = (state_46054[(7)]);
var inst_46039 = inst_46007.length;
var inst_46040 = (inst_46039 > (0));
var state_46054__$1 = state_46054;
if(cljs.core.truth_(inst_46040)){
var statearr_46106_48196 = state_46054__$1;
(statearr_46106_48196[(1)] = (12));

} else {
var statearr_46111_48197 = state_46054__$1;
(statearr_46111_48197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (3))){
var inst_46052 = (state_46054[(2)]);
var state_46054__$1 = state_46054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46054__$1,inst_46052);
} else {
if((state_val_46055 === (12))){
var inst_46007 = (state_46054[(7)]);
var inst_46042 = cljs.core.vec(inst_46007);
var state_46054__$1 = state_46054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46054__$1,(15),out,inst_46042);
} else {
if((state_val_46055 === (2))){
var state_46054__$1 = state_46054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46054__$1,(4),ch);
} else {
if((state_val_46055 === (11))){
var inst_46011 = (state_46054[(9)]);
var inst_46015 = (state_46054[(10)]);
var inst_46030 = (state_46054[(2)]);
var inst_46033 = [];
var inst_46034 = inst_46033.push(inst_46011);
var inst_46007 = inst_46033;
var inst_46008 = inst_46015;
var state_46054__$1 = (function (){var statearr_46122 = state_46054;
(statearr_46122[(11)] = inst_46030);

(statearr_46122[(7)] = inst_46007);

(statearr_46122[(8)] = inst_46008);

(statearr_46122[(12)] = inst_46034);

return statearr_46122;
})();
var statearr_46123_48206 = state_46054__$1;
(statearr_46123_48206[(2)] = null);

(statearr_46123_48206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (9))){
var inst_46007 = (state_46054[(7)]);
var inst_46028 = cljs.core.vec(inst_46007);
var state_46054__$1 = state_46054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46054__$1,(11),out,inst_46028);
} else {
if((state_val_46055 === (5))){
var inst_46011 = (state_46054[(9)]);
var inst_46015 = (state_46054[(10)]);
var inst_46008 = (state_46054[(8)]);
var inst_46015__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46011) : f.call(null,inst_46011));
var inst_46018 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46015__$1,inst_46008);
var inst_46019 = cljs.core.keyword_identical_QMARK_(inst_46008,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46020 = ((inst_46018) || (inst_46019));
var state_46054__$1 = (function (){var statearr_46127 = state_46054;
(statearr_46127[(10)] = inst_46015__$1);

return statearr_46127;
})();
if(cljs.core.truth_(inst_46020)){
var statearr_46132_48210 = state_46054__$1;
(statearr_46132_48210[(1)] = (8));

} else {
var statearr_46133_48213 = state_46054__$1;
(statearr_46133_48213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (14))){
var inst_46047 = (state_46054[(2)]);
var inst_46048 = cljs.core.async.close_BANG_(out);
var state_46054__$1 = (function (){var statearr_46135 = state_46054;
(statearr_46135[(13)] = inst_46047);

return statearr_46135;
})();
var statearr_46136_48218 = state_46054__$1;
(statearr_46136_48218[(2)] = inst_46048);

(statearr_46136_48218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (10))){
var inst_46037 = (state_46054[(2)]);
var state_46054__$1 = state_46054;
var statearr_46137_48222 = state_46054__$1;
(statearr_46137_48222[(2)] = inst_46037);

(statearr_46137_48222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46055 === (8))){
var inst_46007 = (state_46054[(7)]);
var inst_46011 = (state_46054[(9)]);
var inst_46015 = (state_46054[(10)]);
var inst_46023 = inst_46007.push(inst_46011);
var tmp46134 = inst_46007;
var inst_46007__$1 = tmp46134;
var inst_46008 = inst_46015;
var state_46054__$1 = (function (){var statearr_46138 = state_46054;
(statearr_46138[(14)] = inst_46023);

(statearr_46138[(7)] = inst_46007__$1);

(statearr_46138[(8)] = inst_46008);

return statearr_46138;
})();
var statearr_46140_48237 = state_46054__$1;
(statearr_46140_48237[(2)] = null);

(statearr_46140_48237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__42400__auto__ = null;
var cljs$core$async$state_machine__42400__auto____0 = (function (){
var statearr_46143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46143[(0)] = cljs$core$async$state_machine__42400__auto__);

(statearr_46143[(1)] = (1));

return statearr_46143;
});
var cljs$core$async$state_machine__42400__auto____1 = (function (state_46054){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_46054);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e46144){var ex__42403__auto__ = e46144;
var statearr_46145_48262 = state_46054;
(statearr_46145_48262[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_46054[(4)]))){
var statearr_46146_48263 = state_46054;
(statearr_46146_48263[(1)] = cljs.core.first((state_46054[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48267 = state_46054;
state_46054 = G__48267;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
cljs$core$async$state_machine__42400__auto__ = function(state_46054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42400__auto____1.call(this,state_46054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42400__auto____0;
cljs$core$async$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42400__auto____1;
return cljs$core$async$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_46149 = f__42555__auto__();
(statearr_46149[(6)] = c__42554__auto___48146);

return statearr_46149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
