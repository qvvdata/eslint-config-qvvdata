module.exports = {
    globals: {
        MyGlobal: true
    },
    extends: 'eslint-config-airbnb-base',
    rules: {
        "arrow-parens": ["error", "as-needed"],
        "class-methods-use-this": [0],
        "comma-dangle": [0],
        "indent": ["error", 4, {'ignoreComments': true}],
        "max-len": ["error", 500],
        "no-console": [0],
        "no-plusplus": [0],
        "no-underscore-dangle": ["error", { "allowAfterThis": true, "allowAfterSuper": true }],
        "object-shorthand": [0],
        "prefer-destructuring": [0]
    }
};
