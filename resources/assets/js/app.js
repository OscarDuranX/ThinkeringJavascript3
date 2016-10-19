
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));
//
const app = new Vue({
    el: '#app'
});
//
// var mymodul = require('./animal');
//
// var Animal = new mymodul.Animal();
// require('./dog');
// require('./cat');
//
// //
// //     And this is how your scenario plays out:
//
// var cat = new Cat();
// var dog = new Dog();
//
// cat.eat();
// dog.eat();
// cat.say();
// dog.say();

//CSS Selectors
$("#getuser").click(function () {

    $.ajax({
        // type: "GET",
        url: "http://localhost:800/apicutre/user/1",
        success: function (result) {
            // console.log("Ajax OK!");
            // console.log(result);
            $("#user").val(result);
        },
        error:function () {
            console.log("Ha petat petició ajax");
        }
    });

});

