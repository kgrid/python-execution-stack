(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("There are a few environment variables that can be set to control different aspects of the activator. They can be set as\nenvironment variables, or passed into the terminal command while running the activator.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("ul",[a("li",[e._m(5),e._v(" "),a("ul",[a("li",[e._v("See\nthe "),a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.4.3/reference/html/appendix-application-properties.html#spring.profiles.active",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring-Boot documentation"),a("OutboundLink")],1),e._v("\nfor more details.")])]),e._v(" "),e._m(6),e._v(" "),e._m(7)]),e._v(" "),e._m(8)]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),a("ul",[a("li",[e._v("Specify the path to a json file that contains a list of references to KOs that will be loaded on startup. Existing KOs\nin the shelf directory will be overwritten if they are contained in the manifest. This can be set to a file path, or a\nURL. Check out a properly formatted manifest in\nthe "),a("a",{attrs:{href:"https://github.com/kgrid-objects/example-collection/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest release of the Example Collection"),a("OutboundLink")],1),e._v(".\n"),e._m(17)])]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),a("ul",[a("li",[e._v("The Activator is built on Spring, and can use many\nof "),a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.4.3/reference/html/appendix-application-properties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring's application properties"),a("OutboundLink")],1),e._v("\nfor configuration.")])]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),a("ul",[e._m(28),e._v(" "),a("li",[e._v("While running the Activator a "),a("code",[e._v("manifest")]),e._v(" (json or yaml) can be POSTed to the "),a("code",[e._v("/kos")]),e._v(" endpoint to initiate loading of\none or more KOs from an external path (See "),a("a",{attrs:{href:"https://kgrid.org/kgrid-shelf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Loading KOs onto the Shelf"),a("OutboundLink")],1),e._v(" in the Kgrid\nShelf documentation)")])]),e._v(" "),e._m(29),e._v(" "),e._m(30)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"security-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-configuration"}},[this._v("#")]),this._v(" Security Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cors-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors-url"}},[this._v("#")]),this._v(" "),t("code",[this._v("cors.url")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("The Activator by default allows all origins access to the api.\n"),a("ul",[a("li",[e._v("Default value: none")]),e._v(" "),a("li",[e._v("Command line:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --cors.url=https://myservice.com")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Environment Variable:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CORS_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://myservice.com\n")])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"spring-profiles-active"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-profiles-active"}},[this._v("#")]),this._v(" "),t("code",[this._v("spring.profiles.active")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Sets the security profile, which requires a username and password to access certain endpoints. Setting to "),t("code",[this._v("dev")]),this._v(" will\nput the activator in dev mode, with no security.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note: if not in dev mode, the username and password must be set. See the entries for "),t("code",[this._v("spring.security.user.name")]),this._v("\nand "),t("code",[this._v("spring.security.user.password")]),this._v(".")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Default value: Secured")]),e._v(" "),a("li",[e._v("Command line:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --spring.profiles.active=dev")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Environment Variable:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SPRING_PROFILES_ACTIVE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("dev\n")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("p",[e._v("Endpoints secured:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GET /actuator/health")]),e._v(" (Secure endpoint shows only "),a("code",[e._v("UP")]),e._v(" or "),a("code",[e._v("DOWN")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("GET /actuator/info")])]),e._v(" "),a("li",[a("code",[e._v("GET /activate")])]),e._v(" "),a("li",[a("code",[e._v("POST /kos")])]),e._v(" "),a("li",[a("code",[e._v("POST /kos/manifest")])]),e._v(" "),a("li",[a("code",[e._v("POST /kos/manifest-list")])]),e._v(" "),a("li",[a("code",[e._v("PUT /kos/{naan}/{name}/{version}")])]),e._v(" "),a("li",[a("code",[e._v("DELETE /kos/{naan}/{name}/{version}")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"spring-security-user-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-security-user-name"}},[this._v("#")]),this._v(" "),t("code",[this._v("spring.security.user.name")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Specify the admin username. Security is enabled by default, so if this property is not set, the admin features will be\ninaccessible.\n"),a("ul",[a("li",[e._v("Default value: none")]),e._v(" "),a("li",[e._v("Command line:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --spring.security.user.name=AzureDiamond")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Environment Variable:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SPRING_SECURITY_USER_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("AzureDiamond\n")])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"spring-security-user-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-security-user-password"}},[this._v("#")]),this._v(" "),t("code",[this._v("spring.security.user.password")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Specify the admin password. Security is enabled by default, so if this property is not set, the admin features will be\ninaccessible.\n"),a("ul",[a("li",[e._v("Default value: none")]),e._v(" "),a("li",[e._v("Command line:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --spring.security.password=hunter2")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Environment Variable:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SPRING_SECURITY_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("hunter2\n")])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"startup-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#startup-configuration"}},[this._v("#")]),this._v(" Startup Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kgrid-shelf-cdostore-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-shelf-cdostore-url"}},[this._v("#")]),this._v(" "),t("code",[this._v("kgrid.shelf.cdostore.url")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Specify the path to a custom shelf directory, which can be preloaded with KOs. Can be an absolute or relative path.\n"),a("ul",[a("li",[e._v("Default value: "),a("code",[e._v("shelf")]),e._v(" (in current working directory)")]),e._v(" "),a("li",[e._v("Command line (absolute path):"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --kgrid.shelf.cdostore.url=filesystem:file:///data/myshelf")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("relative path:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --kgrid.shelf.cdostore.url=filesystem:file:///c:/Users/me/myshelf")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("environment variable:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KGRID_SHELF_CDOSTORE_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("filesystem:file:///data/myshelf\n")])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kgrid-shelf-manifest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-shelf-manifest"}},[this._v("#")]),this._v(" "),t("code",[this._v("kgrid.shelf.manifest")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Default Value: none")]),e._v(" "),a("li",[e._v("Command line (file path):"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --kgrid.shelf.manifest=filesystem:file:///c:/Users/me/myStuff/manifest.json")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Command line (URL):"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --kgrid.shelf.manifest=https://github.com/kgrid-objects/example-collection/releases/download/4.1.1/manifest.json")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Environment variable (URL):"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KGRID_SHELF_MANIFEST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("filesystem:file:///c:/Users/me/myStuff/manifest.json\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"server-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-port"}},[this._v("#")]),this._v(" "),t("code",[this._v("server.port")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Specify a particular port on which the activator should start\n"),a("ul",[a("li",[e._v("Default value: "),a("code",[e._v("8080")])]),e._v(" "),a("li",[e._v("Command line:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --server.port=9090")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Environment Variable:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SERVER_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9090")]),e._v("\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kgrid-activator-adapter-locations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-activator-adapter-locations"}},[this._v("#")]),this._v(" "),t("code",[this._v("kgrid.activator.adapter-locations")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Specify additional adapters to be loaded. Can be a comma-separated list of .jar file or directory urls or a single jar\nfile url or url of a directory containing jar files.\n"),a("ul",[a("li",[e._v("Default value: "),a("code",[e._v("file:adapters")])]),e._v(" "),a("li",[e._v("Command line:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --kgrid.activator.adapter-locations=file:adapters,file:more-adapters/my-adapter.jar,https://repo1.maven.org/maven2/org/kgrid/resource-adapter/0.1.3/resource-adapter-0.1.3.jar")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Environment Variable:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" KGRID_ACTIVATOR_ADAPTER-LOCATIONS"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("file:adapters,file:more-adapters/my-adapter.jar,https://repo1.maven.org/maven2/org/kgrid/resource-adapter/0.1.3/resource-adapter-0.1.3.jar\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"debug-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-configuration"}},[this._v("#")]),this._v(" Debug Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logging-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-level"}},[this._v("#")]),this._v(" "),t("code",[this._v("logging.level")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Specify the logging level for a particular package\n"),a("ul",[a("li",[e._v("The Highest level is "),a("code",[e._v("logging.level.root")]),e._v(" which will affect all classes")]),e._v(" "),a("li",[e._v("A particular package can be specified by adding the package location to the end like so:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("logging.level.org.kgrid.adapter.proxy\n")])])])]),e._v(" "),a("li",[e._v("Default value: "),a("code",[e._v("INFO")])]),e._v(" "),a("li",[e._v("Possible Values: "),a("code",[e._v("INFO, DEBUG, WARN, ERROR")])]),e._v(" "),a("li",[e._v("Command line:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar kgrid-activator-"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#.#.#.jar --logging.level.org.kgrid.classToLog=DEBUG")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Environment Variable:")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" logging.level.org.kgrid.classToLog"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("DEBUG\n")])])]),a("ul",[a("li",[e._v("Note: This also works with Spring classes, like RestTemplate, which will allow you to see more info about particular rest calls.\n"),a("ul",[a("li",[e._v("Example: "),a("code",[e._v("logging.level.org.springframework.web.client.RestTemplate=DEBUG")])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"spring-configuration-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-configuration-settings"}},[this._v("#")]),this._v(" Spring Configuration Settings")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"proposed-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposed-configuration"}},[this._v("#")]),this._v(" Proposed Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kgrid-activator-allowruntimeimport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-activator-allowruntimeimport"}},[this._v("#")]),this._v(" "),t("code",[this._v("kgrid.activator.allowRuntimeImport")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("While running the Activator packaged KO (zip file) can be uploaded to the "),t("code",[this._v("/kos")]),this._v(" endpoint to add a KO to the shelf")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kgrid-activator-autoactivateonstartup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-activator-autoactivateonstartup"}},[this._v("#")]),this._v(" "),t("code",[this._v("kgrid.activator.autoActivateOnStartup")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Toggle whether the activator tries to activate KOs on startup")]),this._v(" "),t("li",[this._v("Currently, the activator will try to activate everything in the shelf directory, as well as everything in the manifest\nset to "),t("code",[this._v("kgrid.shelf.manifest")]),this._v(".")])])}],!1,null,null,null);t.default=r.exports}}]);