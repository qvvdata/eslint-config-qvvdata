module.exports = {
    globals: {
        MyGlobal: true
    },
    extends: 'eslint-config-airbnb-base',
    rules: {
        "arrow-parens": ["error", "as-needed"],
        "indent": ["error", 4, {'ignoreComments': true}],
        "comma-dangle": [0],
        "max-len": ["error", 500],
        "object-shorthand": [0],
        "no-underscore-dangle": ["error", { "allowAfterThis": true, "allowAfterSuper": true }],
        "prefer-destructuring": [0],
        "no-plusplus": [0]
    }
};
