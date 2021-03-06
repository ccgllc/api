let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
			'resources/assets/js/app.js', 
			// 'resources/assets/js/register.js',
		], 
		'public/js').extract(['vue', 'vue-router', 'axios', 'chart.js'])
   .js('resources/assets/js/register.js', 'js')
   .js('resources/assets/js/login.js', 'js')
   .js('resources/assets/js/requestPasswordReset.js', 'js')
   .js('resources/assets/js/apply.js', 'js')
   .js('resources/assets/js/user.js', 'js')
   .js('resources/assets/js/manageRoles.js', 'js')
   .js('resources/assets/js/manageUserRoles.js', 'js')
   .js('resources/assets/js/profile/profile.js', 'js')
   .js('resources/assets/js/dispatch/dispatch.js', 'js/dispatch.js')
   .js('resources/assets/js/userDashboard/UserDashboard.js', 'js/UserDashboard.js')
   .js('resources/assets/js/claims/Claims.js', 'js/claims.js')
   .js('resources/assets/js/claims/Claim.js', 'js/claim.js')
   .sass('resources/assets/sass/app.scss', 'css');

// mix.js([
//       'resources/assets/js/register.js', 
//       'resources/assets/js/login.js', 
//       'resources/assets/js/requestPasswordReset.js',
//       'resources/assets/js/resetPassword.js'
//    ], 'public/js/auth.js')



   if (mix.inProduction()) {
      mix.version();
   } 
   else {
       mix.browserSync({
         proxy: 'hr.ccgops.test',
      }); 
   }