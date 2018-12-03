/**
 * Load async templates
 *
 * Version modified from
 * @see http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/#comment-35324
 *
 * User: mediabox
 * Date: 18/12/12
 * Time: 16:34
 */
var templateLoader =
{

// Hash of preloaded templates for the app
    templates:{},

// Recursively pre-load all the templates for the app.
// This implementation should be changed in a production environment. All the template files should be
// concatenated in a single file.
    loadTemplates:function (folder, names, callback) {

        var that = this;

        var loadTemplate = function (index) {
            var name = names[index];
            //console.log('Loading template: ' + name);
            $.get( folder + name + '.html', function (data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    if( callback )
                    {
                        callback();
                    }
                    if( that.donecallback )
                    {
                        that.donecallback();
                    }
                }
            });
        };

        loadTemplate(0);

        return this;
    },

// Get template by name from hash of preloaded templates
    get:function (name) {
        return this.templates[name];
    }
    ,done:function( callback ){ this.donecallback = callback }
};