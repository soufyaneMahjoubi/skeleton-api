module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-release-it');
    const disablelinting = grunt.option('disablelinting') || null;
    const tasksList = [];

    const pkg = grunt.file.readJSON('package.json');

    require('load-grunt-tasks')(grunt); // eslint-disable-line

    // Project configuration.
    grunt.initConfig({
        pkg,
        eslint: {
            target: ['src/**/*.js'],
            options: {
                configFile: '.eslintrc',
            },
        },
        jsonlint: {
            dist: {
                src: ['config.json/**/*.json'],
                options: {
                    formatter: 'prose',
                },
            },
        },
    });

    if (!disablelinting) {
        tasksList.push('eslint');
    }

    // Default tasks.
    grunt.registerTask('default', tasksList);
    grunt.registerTask('lint', ['eslint', 'jsonlint:dist']);
};
