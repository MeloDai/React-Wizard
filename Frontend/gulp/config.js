var dest='./build',
src='./src';
module.exports= {
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest, src]
        }
        ,
        files: [ dest + '/**'],
        port: 1524
    }
    ,
    markup: {
        src: src + "/www/**", 
        dest: dest
    }
    ,
    moveapp: {
        src: src + "/app/**", 
        dest: dest + "/app"
    }
    ,
    script: {
        src: src + "/www/**", 
        dest: dest
    }
    ,
    csss: {
        src: src + "/www/**", 
        dest: dest
    }
    ,
    browserify: {
        // Enable source maps
        debug: true, // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [
            {
                entries: src + '/app/app.js',
                dest: dest,
                outputName: 'main.js'
            }
        ],
        extensions: ['.js'],
    }
}

;