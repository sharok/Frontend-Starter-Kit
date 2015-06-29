//var src               = 'app';
//var build             = 'build';
//var development       = 'build/development';
//var production        = 'build/production';
var srcAssets         = 'app';
var developmentAssets = 'build/development';
var productionAssets  = 'build/production';

module.exports = {
    browserify: {
        // Enable source maps
        debug: true,
        // Additional file extensions to make optional
        extensions: ['.coffee', '.hbs'],
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries:    './' + srcAssets + '/js/main.js',
            dest:       developmentAssets + '/js',
            outputName: 'main.js'
        }]
    },
    browsersync: {
        development: {
            server: {
                baseDir: [developmentAssets]
            },
            port: 9999,
            files: [
                developmentAssets + '/css/*.css',
                developmentAssets + '/js/*.js',
                developmentAssets + '/images/**',
                developmentAssets + '/fonts/*'
            ]
        },
        production: {
            server: {
                baseDir: [productionAssets]
            },
            port: 9998
        }
    },
    delete: {
        src: [developmentAssets]
    },
    sass: {
        src:  srcAssets + '/scss/**/*.{sass,scss}',
        dest: developmentAssets + '/css',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemap: true,
            sourcemapPath: '../../_assets/scss'
        }
    },
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: true
    },
    watch: {
        html: srcAssets + '/html/**/*',
        sass:    srcAssets + '/scss/**/*.{sass,scss}',
        scripts: srcAssets + '/js/**/*.js',
        images:  srcAssets + '/img/**/*',
        sprites: srcAssets + '/img/**/*.png',
        svg:     'vectors/*.svg'
    },
    images: {
        src:  srcAssets + '/img/**/*',
        dest: developmentAssets + '/img'
    },
    html: {
        src: srcAssets + '/html/**/*',
        dest: developmentAssets
    },
    fonts: {
        srcFonts: './node_modules/mdi/fonts/**/*',
        srcCss: './node_modules/mdi/css/materialdesignicons.min.css',
        destFonts: developmentAssets + '/fonts',
        destCss: developmentAssets + '/css'
    },
    jshint: {
        src: srcAssets + '/js/**/*.js'
    },
    optimize: {
        css: {
            src:  developmentAssets + '/css/*.css',
            dest: productionAssets + '/css/',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            src:  developmentAssets + '/js/**/*.js',
            dest: productionAssets + '/js/',
            options: {}
        },
        images: {
            src:  developmentAssets + '/img/**/*.{jpg,jpeg,png,gif}',
            dest: productionAssets + '/img/',
            options: {
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            }
        }
    }
};