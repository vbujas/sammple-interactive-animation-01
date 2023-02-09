var gulp = require('gulp');
  var uglify = require('gulp-uglify');
//var uglify = require('gulp-uglify-es').default;
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');
var git = require('gulp-git');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var coffee = require('gulp-coffee');
var expect = require('gulp-expect-file');
var replace = require('gulp-replace');
var gulpSequence = require('gulp-sequence');
 

/*################# BEGIN PATH CONFIGURATION #########################*/
     /*  TO BUILD PRODUCTION FILES  PLEASE DO
       1. gulp prepare
       2. gulp build
       3. gulp copy
      */
var cssfontspath =  'fonts path here'; 

// '/test/fonts/';
 
var cssimgpath =  '/app/images/'; 

//  '/test/images/';
var csssourcepath ='styles/';
var jssourcepath = 'scripts/';
/* ############ END PATH CONFIGURATION ####################*/


var jsFiles = [
'bower_components/jquery/dist/jquery.min.js',
'bower_components/angular/angular.js',
'bower_components/angular-mocks/angular-mocks.js',
'bower_components/angular-resource/angular-resource.js',
'bower_components/angular-cookies/angular-cookies.js',
'bower_components/angular-sanitize/angular-sanitize.js',
'bower_components/angular-route/angular-route.js',
'bower_components/angular-ui-router/release/angular-ui-router.min.js',
'bower_components/angular-sanitize/angular-sanitize.js',
'bower_components/angular-animate/angular-animate.min.js',
'bower_components/angular-touch/angular-touch.min.js',
'app/scripts/DrawSVGPlugin.min.js',
'app/scripts/MorphSVGPlugin.min.js',
'bower_components/gsap/src/minified/TweenMax.min.js',
'bower_components/gsap/src/minified/TimelineMax.min.js',
'app/scripts/SplitText.min.js',
'bower_components/PreloadJS/lib/preloadjs.min.js',
 
];


var expectedFiles = [ 
  'bower_components/jquery/dist/jquery.min.js',
'bower_components/angular/angular.js',
'bower_components/angular-mocks/angular-mocks.js',
'bower_components/angular-resource/angular-resource.js',
'bower_components/angular-cookies/angular-cookies.js',
'bower_components/angular-sanitize/angular-sanitize.js',
'bower_components/angular-route/angular-route.js',
'bower_components/angular-ui-router/release/angular-ui-router.min.js',
'bower_components/angular-sanitize/angular-sanitize.js',
'bower_components/angular-animate/angular-animate.min.js',
'bower_components/angular-touch/angular-touch.min.js',
'app/scripts/DrawSVGPlugin.min.js',
'app/scripts/MorphSVGPlugin.min.js',
'bower_components/gsap/src/minified/TweenMax.min.js',
'bower_components/gsap/src/minified/TimelineMax.min.js',
'app/scripts/SplitText.min.js',
'bower_components/PreloadJS/lib/preloadjs.min.js',
'app/styles/loader.css',  
'app/styles/replaced/main.css',
'app/styles/replaced/perin.css',
'app/styles/font-awesome.min.css'

];

var landscapecssFiles = [
'app/styles/loader.css',  
'app/styles/replaced/main.css',
'app/styles/replaced/perin.css',
'app/styles/font-awesome.min.css'
];

 

gulp.task('replace-images-css', function(){
  gulp.src(['app/styles/main.css'])
    .pipe(replace('{{cssimgpath}}', cssimgpath))
    .pipe(replace('{{cssfontspath}}', cssfontspath))
    .pipe(gulp.dest('app/styles/replaced'));
  gulp.src(['app/styles/perin.css'])
    .pipe(replace('{{cssimgpath}}', cssimgpath))
    .pipe(replace('{{cssfontspath}}', cssfontspath))
    .pipe(gulp.dest('app/styles/replaced'));  
  gulp.src(['app/index.html'])
    .pipe(replace('{{csssourcepath}}', csssourcepath))
    .pipe(replace('{{jssourcepath}}', jssourcepath))
    .pipe(gulp.dest('app/replaced'));   
});

gulp.task('checkpaths', function() {
  return gulp.src(expectedFiles)
    .pipe(expect(expectedFiles))

    
});


//gulp.task('prepare', gulpSequence(['replace-images-css' ]))
gulp.task('copy', gulpSequence([ 'copysources']))
gulp.task('build', gulpSequence([ 'checkpaths','build-js', 'build-css']))
gulp.task('prepare', gulpSequence(['replace-images-css']))


/* gulp.task('default', ['replace-images-css' ,'checkpaths','build', 'copy']); */
//gulp.task('build', ['build-js', 'build-css']);
gulp.task('build-js', buildJs.bind(this, false));
gulp.task('build-css', buildCss.bind(this, false));
gulp.task('copysources', function () {
    gulp.src('app/replaced/index.html')
        .pipe(gulp.dest('minified/app'));
    gulp.src('app/scripts/app.js')
        .pipe(gulp.dest('minified/app/scripts/'));  
    gulp.src('app/scripts/igw-palo-alto-secure-your-branch.js')
        .pipe(gulp.dest('minified/app/scripts/'));  
    gulp.src('app/scripts/controllers/content.js')
        .pipe(gulp.dest('minified/app/scripts/controllers/'));  
    gulp.src('app/scripts/controllers/main.js')
        .pipe(gulp.dest('minified/app/scripts/controllers/'));  
    gulp.src('app/styles/igw-palo-alto-secure-your-branch.css')
        .pipe(gulp.dest('minified/app/styles/'));   
    gulp.src('app/views/content.html')
        .pipe(gulp.dest('minified/app/views/'));
});

gulp.task('get-hash', function (done) {
  git.exec({args:'rev-parse --short HEAD'}, function (err, res) {
    revHash = res.substr(0,7);
    done();
  })
});

function buildJs() {
	var prod = true;
  var src = gulp.src(jsFiles)
    .pipe(plumber())
    
  if (prod) src = src
    .pipe(uglify())
    .pipe(concat('igw-palo-alto-secure-your-branch.js'))
   src.pipe(gulp.dest('app/scripts'));
}


function buildCss() {
  var prod = true;
  
  src = gulp.src(landscapecssFiles)
    .pipe(plumber())
    
  if (prod) src = src
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('igw-palo-alto-secure-your-branch.css'))
   src.pipe(gulp.dest('app/styles'));
}