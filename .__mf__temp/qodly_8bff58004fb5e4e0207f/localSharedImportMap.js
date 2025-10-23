
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react/jsx-runtime": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__.js")
          return pkg
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "@ws-ui/webform-editor": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__prebuild__.js")
          return pkg
        }
      ,
        "@ws-ui/craftjs-core": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__prebuild__.js")
          return pkg
        }
      ,
        "@ws-ui/shared": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild___mf_0_ws_mf_2_ui_mf_1_shared__prebuild__.js")
          return pkg
        }
      ,
        "@ws-ui/craftjs-layers": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_layers__prebuild__.js")
          return pkg
        }
      ,
        "@ws-ui/craftjs-utils": async () => {
          let pkg = await import("__mf__virtual/qodly_8bff58004fb5e4e0207f__prebuild___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react/jsx-runtime": {
            name: "react/jsx-runtime",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["react/jsx-runtime"].loaded = true
              const {"react/jsx-runtime": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "react": {
            name: "react",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "@ws-ui/webform-editor": {
            name: "@ws-ui/webform-editor",
            version: "1.6.10",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["@ws-ui/webform-editor"].loaded = true
              const {"@ws-ui/webform-editor": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.6.10"
            }
          }
        ,
          "@ws-ui/craftjs-core": {
            name: "@ws-ui/craftjs-core",
            version: "0.2.26",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["@ws-ui/craftjs-core"].loaded = true
              const {"@ws-ui/craftjs-core": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.26"
            }
          }
        ,
          "@ws-ui/shared": {
            name: "@ws-ui/shared",
            version: "1.6.10",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["@ws-ui/shared"].loaded = true
              const {"@ws-ui/shared": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.6.10"
            }
          }
        ,
          "@ws-ui/craftjs-layers": {
            name: "@ws-ui/craftjs-layers",
            version: "0.2.4",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["@ws-ui/craftjs-layers"].loaded = true
              const {"@ws-ui/craftjs-layers": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.4"
            }
          }
        ,
          "@ws-ui/craftjs-utils": {
            name: "@ws-ui/craftjs-utils",
            version: "0.2.3",
            scope: ["default"],
            loaded: false,
            from: "qodly_8bff58004fb5e4e0207f",
            async get () {
              usedShared["@ws-ui/craftjs-utils"].loaded = true
              const {"@ws-ui/craftjs-utils": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.3"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      