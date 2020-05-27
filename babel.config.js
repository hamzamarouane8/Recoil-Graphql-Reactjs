module.exports = {
    presets :[
        [
            "@babel/preset-env",{modules:false}
        ],
        "@babel/preset-react"
    ],
     plugins :[
         "@babel/plugin-transform-runtime",
         "@babel/plugin-syntax-dynamic-import",
         "@babel/plugin-proposal-call-properties"
     ],
     env: {
         production : {
             only: ["src"],
             plugins : [
                 [
                     "transform-react-remove-prop-types",
                     {
                         removeImport :true,
                     }
                 ],
                 "@babel/plugin-transform-react-inline-elemnts",
                 "@babel/plugin-transform-react-constant-elements"
             ]
         }
     }
}